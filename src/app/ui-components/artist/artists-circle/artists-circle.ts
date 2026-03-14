import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ArtistServices } from '../../../services/artist-services';
import { ArtistModel } from '../../../models/artistModel';

@Component({
  selector: 'app-artists-circle',
  standalone: false,
  templateUrl: './artists-circle.html',
  styleUrl: './artists-circle.css',
})
export class ArtistsCircle implements OnInit, OnDestroy {
  private artistService = inject(ArtistServices);
  private subscription = new Subscription();
  private cdr=inject(ChangeDetectorRef);
  allArtistDto: ArtistModel[] = [];
  artistDto: ArtistModel[] = [];
  uniqueCountries: string[] = [];
  selectedCountry: string = 'Tüm Ülkeler';
  ngOnInit(): void {
    this.subscription = this.artistService.getAll().subscribe({
      next: (response) => {
        this.allArtistDto = response;
        this.artistDto = [...this.allArtistDto];
        this.uniqueCountries = [
          ...new Set(
            this.allArtistDto
              .map((artist) => artist.country)
              .filter((country) => country != null && country !== ''),
          ),
        ] as string[];
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }

  setCountryFilter(country: string | null, event: Event) {
    event.preventDefault();
    this.selectedCountry = country ? country : 'Tüm Ülkeler';
    this.applyFilters();
  }

  applyFilters() {
    this.artistDto = this.allArtistDto.filter((artist) => {
      const matchCountry =
        this.selectedCountry === 'Tüm Ülkeler' || artist?.country === this.selectedCountry;
      return matchCountry;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
