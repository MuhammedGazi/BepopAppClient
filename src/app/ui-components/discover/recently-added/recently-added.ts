import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SongServices } from '../../../services/song-services';
import { SongModel } from '../../../models/songModel';
import * as feather from 'feather-icons';
import { PlayerStateService } from '../../../services/player-state.service';
@Component({
  selector: 'app-recently-added',
  standalone: false,
  templateUrl: './recently-added.html',
  styleUrl: './recently-added.css',
})
export class RecentlyAdded implements OnInit {
  private songService = inject(SongServices);
  private playerState = inject(PlayerStateService);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();
  last5Song: SongModel[] = [];
  playingSongId: number | null = null;
  ngOnInit(): void {
    this.subscription=this.songService.getLast5Songs().subscribe({
      next:response=>{
        this.last5Song=response;
        this.cdr.detectChanges();
        console.log(response);
        setTimeout(() => {
          feather.replace();
        }, 0);
      },
      error:err=>console.error(err)
    })

this.subscription.add(
      this.playerState.currentSong$.subscribe(song => {
        setTimeout(() => {
          this.playingSongId = song ? song.id : null;
          this.cdr.detectChanges();
        });
      })
    );
  }

playSong(song: SongModel): void {
    if (this.playingSongId === song.id) {
      this.playerState.pauseSong();
      console.log(song.title + " durduruldu.");
      return;
    }
    console.log(song.title + " için yetki kontrolü yapılıyor...");

    this.songService.playSong(song.id).subscribe({
      next: (response) => {
        if (response && response.title === 'Erişim Hatası') {
          console.warn("Erişim Reddedildi:", response.description);
          this.playerState.showError(response);
        } else {
          console.log(song.title + " çalınıyor... 🎵");
          this.playerState.playNewSong(song);
        }
      },
      error: (err) => {
        console.error("API Hatası / Tarayıcı İzni:", err);
      }
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
