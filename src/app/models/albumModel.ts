import { ArtistModel } from "./artistModel";
import { SongModel } from "./songModel";

export class AlbumModel{
  id:number;
  name: string;
  coverImageUrl?: string | null;
  contentLevel: number;
  artistId: number;
  artist: ArtistModel;
  songs: SongModel[];
}
