import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { CategoryModel } from '../models/categoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryServices extends GenericServices<CategoryModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/api/categories/";
  }
}
