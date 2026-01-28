export interface Episode {
  id: string;
  serieId: string;
  titulo: string;
  descricaoCurta: string;
  youtubeVideoId: string;
  duracao: string;
  ordem: number;
}

export interface Series {
  id: string;
  titulo: string;
  descricao: string;
  destaque: boolean;
  ordem: number;
}

export interface UserRating {
  itemId: string; // Series or Episode ID
  rating: number; // 1-5
}

export interface WatchHistory {
  episodeId: string;
  serieId: string;
  lastWatchedAt: number;
  progress: number; // simplified as just timestamp, not actual seconds tracking for iframe limitation
}

export interface DataState {
  series: Series[];
  episodes: Episode[];
}
