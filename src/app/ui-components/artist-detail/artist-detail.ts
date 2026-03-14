import { SongServices } from './../../services/song-services';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumServices } from '../../services/album-services';
import { SongModel } from '../../models/songModel';
import { AlbumModel } from '../../models/albumModel';
import { ArtistModel } from '../../models/artistModel';
import { ArtistServices } from '../../services/artist-services';

@Component({
  selector: 'app-artist-detail',
  standalone: false,
  templateUrl: './artist-detail.html',
  styleUrl: './artist-detail.css',
})
export class ArtistDetail implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  artistId: number;
  artist!: ArtistModel;
  private subscription = new Subscription();
  private songService = inject(SongServices);
  private albumService = inject(AlbumServices);
  private artistService = inject(ArtistServices);
  private cdr = inject(ChangeDetectorRef);
  last5SongDto: SongModel[] = [];
  last4AlbumDto: AlbumModel[] = [];
  songDto: SongModel[] = [];
  albumDto: AlbumModel[] = [];
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.artistId = Number(idParam);

    if (!this.artistId) return;

    this.subscription.add(
      this.artistService.getById(this.artistId).subscribe({
        next: (response) => {
          this.artist = response;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      })
    );

    this.subscription.add(
      this.songService.getSongsByArtistId(this.artistId).subscribe({
        next: (response) => {
          this.songDto = response;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      }),
    );

    this.subscription.add(
      this.albumService.getAlbumsByArtistId(this.artistId).subscribe({
        next: (response) => {
          this.albumDto = response;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      }),
    );

    this.subscription.add(
      this.albumService.getLast4AlbumsByArtistId(this.artistId).subscribe({
        next: (response) => {
          this.last4AlbumDto = response;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      }),
    );

    this.subscription.add(
      this.songService.getLast5SongsByArtist(this.artistId).subscribe({
        next: (response) => {
          this.last5SongDto = response;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      }),
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
