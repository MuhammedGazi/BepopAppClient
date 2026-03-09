import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { PackageModel } from '../models/packageModel';

@Injectable({
  providedIn: 'root',
})
export class PackageServices extends GenericServices<PackageModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/api/packages/";
  }
}
