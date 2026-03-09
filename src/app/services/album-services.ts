import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { AlbumModel } from '../models/albumModel';

@Injectable({
  providedIn: 'root',
})
export class AlbumServices extends GenericServices<AlbumModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/api/albums/"
  }
}
