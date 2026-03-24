import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PlayerStateService } from '../../services/player-state.service';
import { Subscription } from 'rxjs';
import { SongModel } from '../../models/songModel';

@Component({
  selector: 'app-global-player',
  standalone: false,
  templateUrl: './global-player.html',
  styleUrl: './global-player.css',
})
export class GlobalPlayer implements OnInit, OnDestroy {
  private playerState = inject(PlayerStateService);
  private cdr = inject(ChangeDetectorRef);
  private sub: Subscription = new Subscription();

  currentSong: SongModel | null = null;
  errorData: any = null;
  isPlaying = false;

  ngOnInit(): void {
    this.sub.add(
      this.playerState.currentSong$.subscribe(song => {
        this.currentSong = song;
        this.isPlaying = false;
        this.cdr.detectChanges();
      })
    );

    this.sub.add(
      this.playerState.error$.subscribe(err => {
        this.errorData = err;
        this.cdr.detectChanges();
      })
    );
  }

  onAudioPlaying() {
    this.isPlaying = true;
    this.cdr.detectChanges();
  }

  onAudioPaused() {
    this.isPlaying = false;
    this.cdr.detectChanges(); 
  }

  closeError(): void {
    this.playerState.clearError();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
