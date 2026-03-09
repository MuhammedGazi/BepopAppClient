import { Injectable } from '@angular/core';
import { GenericServices } from './generic-services';
import { UserSongHistoryModel } from '../models/userSongHistoryModel';

@Injectable({
  providedIn: 'root',
})
export class UserSongHistoryServices extends GenericServices<UserSongHistoryModel> {
  protected override apiUrl: string;
  constructor() {
    super();
    this.apiUrl="https://localhost:7175/api/songs/";
  } //şimdilik ihtiyaç yok çünkü arka planda otomatik çalışacak
}
