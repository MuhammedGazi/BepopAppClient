import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SongModel } from '../models/songModel';

@Injectable({
  providedIn: 'root',
})
export class PlayerStateService {
  private currentSongSubject = new BehaviorSubject<SongModel | null>(null);
  currentSong$ = this.currentSongSubject.asObservable();

  private errorSubject = new BehaviorSubject<any>(null);
  error$ = this.errorSubject.asObservable();

  playNewSong(song: SongModel) {
    this.currentSongSubject.next(song);
    this.errorSubject.next(null);
  }

  pauseSong() {
    this.currentSongSubject.next(null);
  }

  showError(errorData: any) {
    this.errorSubject.next(errorData);
    this.currentSongSubject.next(null);
  }

  clearError() {
    this.errorSubject.next(null);
  }
}
