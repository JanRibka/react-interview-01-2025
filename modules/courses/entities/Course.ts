export interface Localized {
  description: string;
  title: string;
}

export interface Playlist {
  id: string;
  localized: Localized;
}

export interface Medium {
  url: string;
}

export interface Thumbnails {
  medium: Medium;
}

export interface PlaylistVideo {
  id: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}

export default interface Course {
  playlist: Playlist;
  playlistVideos: PlaylistVideo[];
}
