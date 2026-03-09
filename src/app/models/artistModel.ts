import { AlbumModel } from "./albumModel";
import { SongModel } from "./songModel";

export class ArtistModel {
  id:number;
  name: string;
  country?: string | null;
  profileImageUrl?: string | null;
  albums: AlbumModel[];
  songs: SongModel[];
}
