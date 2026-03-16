import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AlbumServices } from '../../services/album-services';
import { ActivatedRoute } from '@angular/router';
import { SongModel } from '../../models/songModel';
import { AlbumModel } from '../../models/albumModel';

@Component({
  selector: 'app-album-detail',
  standalone: false,
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumServices);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();

  albumId!: number;
  artistId!: number;

  album: AlbumModel = new AlbumModel();
  songDto: SongModel[] = [];
  last4AlbumDto: AlbumModel[] = [];
  uniqueCategories: string[] = [];

  ngOnInit(): void {
    const idparam = this.route.snapshot.paramMap.get('id');
    this.albumId = Number(idparam);

    if (!this.albumId) return;

    this.subscription.add(
      this.albumService.getById(this.albumId).subscribe({
        next: (response) => {
          this.album = response;
          this.artistId = response.artistId;
          this.songDto = response.songs;
          
          const allCategories = this.songDto
            .map((song) => song.category?.name)
            .filter((name): name is string => !!name);
          this.uniqueCategories = [...new Set(allCategories)];

          this.cdr.detectChanges();
          this.getOtherAlbums(this.artistId);
        },
        error: (err) => console.error(err),
      }),
    );
  }
  private getOtherAlbums(artistId: number): void {
    this.subscription.add(
      this.albumService.getLast4AlbumsByArtistId(artistId).subscribe({
        next: (response) => {
          this.last4AlbumDto = response;
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
