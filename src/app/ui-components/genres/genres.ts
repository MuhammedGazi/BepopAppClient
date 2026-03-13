import { ArtistModel } from './../../models/artistModel';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SongServices } from '../../services/song-services';
import { CategoryServices } from '../../services/category-services';
import { SongModel } from '../../models/songModel';
import { CategoryModel } from '../../models/categoryModel';

@Component({
  selector: 'app-genres',
  standalone: false,
  templateUrl: './genres.html',
  styleUrl: './genres.css',
})
export class Genres implements OnInit, OnDestroy {
  private songService = inject(SongServices);
  private categoryService = inject(CategoryServices);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();

  songDto: SongModel[] = [];
  categoryDto: CategoryModel[] = [];
  countriesDto: string[] = [];

  filteredSongs: SongModel[] = [];
  selectedCountry: string = 'All';
  selectedCategoryId: number | null = null;

  ngOnInit(): void {
    this.subscription.add(
      this.songService.getAll().subscribe({
        next: (response) => {
          this.songDto = response;
          this.filteredSongs = [...this.songDto];

          const allCountries = response
            .filter((song) => song.artist && song.artist.country)
            .map((song) => song.artist.country);

          this.countriesDto = [...new Set(allCountries)];
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      }),
    );

    this.subscription.add(
      this.categoryService.getAll().subscribe({
        next: (response) => {
          this.categoryDto = response;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      }),
    );
  }

  filterByCountry(country: string): void {
    this.selectedCountry = country;
    this.applyFilters();
  }

  filterByCategory(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
    this.applyFilters();
  }

private applyFilters(): void {
    console.log("--- FİLTRELEME BAŞLADI ---");
    console.log("1. Aranan Ülke:", this.selectedCountry);
    console.log("2. Aranan Kategori ID:", this.selectedCategoryId);

    this.filteredSongs = this.songDto.filter(song => {
      const matchCountry = this.selectedCountry === 'All' ||
                           (song.artist?.country && song.artist.country.trim() === this.selectedCountry.trim());
                           
      const currentSongCategoryId = song.categoryId || song.category?.id;
      const matchCategory = this.selectedCategoryId === null ||
                            currentSongCategoryId === this.selectedCategoryId;

      return matchCountry && matchCategory;
    });

    console.log("3. Eşleşen Şarkı Sayısı:", this.filteredSongs.length);
    console.log("-------------------------");

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
