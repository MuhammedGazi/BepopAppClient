import { SongModel } from "./songModel";
import { UserModel } from "./userModel";

export class UserSongHistoryModel{
  id:number;
  appUserId: string;
  user?: UserModel;
  songId: number;
  song?: SongModel;
}
