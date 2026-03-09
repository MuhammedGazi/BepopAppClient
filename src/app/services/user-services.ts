import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserServices extends GenericServices<UserModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/";
  }
}
