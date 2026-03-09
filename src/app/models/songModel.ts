import { AlbumModel } from "./albumModel";
import { ArtistModel } from "./artistModel";
import { CategoryModel } from "./categoryModel";
import { UserSongHistoryModel } from "./userSongHistoryModel";

export class SongModel{
  id:number;
  title: string;
  audioUrl: string;
  contentLevel: number;
  albumId?: number | null;
  album?: AlbumModel;
  categoryId?: number | null;
  category?: CategoryModel;
  artistId: number;
  artist: ArtistModel;
  histories: UserSongHistoryModel[];
}
