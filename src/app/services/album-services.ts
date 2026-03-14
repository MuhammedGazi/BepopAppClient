import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { AlbumModel } from '../models/albumModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumServices extends GenericServices<AlbumModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/api/albums/"
  }
  getLast4AlbumsByArtistId(artistId:number): Observable<AlbumModel[]> {
    return this.http.get<AlbumModel[]>(`${this.apiUrl}last4albumByArtist/${artistId}`);
  }
  getAlbumsByArtistId(artistId: number): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(`${this.apiUrl}allAlbumByArtist/${artistId}`);
  }
}
