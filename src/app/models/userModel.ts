import { PackageModel } from "./packageModel";
import { UserSongHistoryModel } from "./userSongHistoryModel";

export class UserModel{
  id:string;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
  packageId?: number | null;
  package?: PackageModel;
  songHistories?: UserSongHistoryModel[] | null;
}
