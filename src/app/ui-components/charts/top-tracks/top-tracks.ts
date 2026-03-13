import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SongServices } from '../../../services/song-services';
import { SongModel } from '../../../models/songModel';

@Component({
  selector: 'app-top-tracks',
  standalone: false,
  templateUrl: './top-tracks.html',
  styleUrl: './top-tracks.css',
})
export class TopTracks implements OnInit,OnDestroy {
  private songService = inject(SongServices);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();
  songDto: SongModel[] = [];
  ngOnInit(): void {
    this.subscription = this.songService.getLast5Songs().subscribe({
      next: (response) => {
        this.songDto = response;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
