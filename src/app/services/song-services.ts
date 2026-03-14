import { SongModel } from './../models/songModel';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongServices extends GenericServices<SongModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl = 'https://localhost:7175/api/songs/';
  }
  getLast5Songs(): Observable<SongModel[]> {
    return this.http.get<SongModel[]>(`${this.apiUrl}last5songs`);
  }
  getSongsByArtistId(artistId: number): Observable<SongModel[]> {
    return this.http.get<SongModel[]>(`${this.apiUrl}songByArtist/${artistId}`);
  }

  getLast5SongsByArtist(artistId: number): Observable<SongModel[]> {
    return this.http.get<SongModel[]>(`${this.apiUrl}last5SongByArtist/${artistId}`);
  }
}
