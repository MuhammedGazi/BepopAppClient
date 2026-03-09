import { SongModel } from './../models/songModel';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GenericServices } from './generic-services';

@Injectable({
  providedIn: 'root',
})
export class SongServices extends GenericServices<SongModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl = "https://localhost:7175/api/songs/";
  }
}
