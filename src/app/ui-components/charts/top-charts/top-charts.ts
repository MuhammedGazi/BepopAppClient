import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SongServices } from '../../../services/song-services';
import { SongModel } from '../../../models/songModel';
import feather from 'feather-icons';

@Component({
  selector: 'app-top-charts',
  standalone: false,
  templateUrl: './top-charts.html',
  styleUrl: './top-charts.css',
})
export class TopCharts implements OnInit {
private songService = inject(SongServices);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();

  allSongs: SongModel[] = [];
  songDto: SongModel[] = [];

  uniqueCountries: string[] = [];
  uniqueCategories: string[] = [];

  selectedCountry: string = 'Tüm Ülkeler';
  selectedCategory: string = 'Tüm Türler';

  ngOnInit(): void {
    this.subscription.add(
      this.songService.getAll().subscribe({
        next: (response) => {
          this.allSongs = response;
          this.songDto = [...this.allSongs];

          this.uniqueCountries = [...new Set(
            this.allSongs
              .map(song => song.artist?.country)
              .filter(country => country != null && country !== '')
          )] as string[];

          this.uniqueCategories = [...new Set(
            this.allSongs
              .map(song => song.category?.name)
              .filter(category => category != null && category !== '')
          )] as string[];

          this.cdr.detectChanges();

          setTimeout(() => {
            feather.replace();
          }, 0);
        },
        error: (err) => console.error(err),
      })
    );
  }

  setCountryFilter(country: string | null, event: Event) {
    event.preventDefault();
    this.selectedCountry = country ? country : 'Tüm Ülkeler';
    this.applyFilters();
  }

  setCategoryFilter(category: string | null, event: Event) {
    event.preventDefault();
    this.selectedCategory = category ? category : 'Tüm Türler';
    this.applyFilters();
  }

  applyFilters() {
    this.songDto = this.allSongs.filter(song => {
      const matchCountry = this.selectedCountry === 'Tüm Ülkeler' || song.artist?.country === this.selectedCountry;
      const matchCategory = this.selectedCategory === 'Tüm Türler' || song.category?.name === this.selectedCategory;

      return matchCountry && matchCategory;
    });

    this.cdr.detectChanges();

    setTimeout(() => {
      feather.replace();
    }, 0);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
