import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { ArtistModel } from '../models/artistModel';

@Injectable({
  providedIn: 'root',
})
export class ArtistServices extends GenericServices<ArtistModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/api/artists/";
  }
}
