export interface Episode {
  id: string;
  serieId: string;
  titulo: string;
  descricaoCurta: string | null;
  youtubeVideoId: string;
  duracao: string | null;
  ordem: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Series {
  id: string;
  titulo: string;
  descricao: string | null;
  destaque: boolean;
  ordem: number;
  ano: number; // 2025 or 2026
  capaUrl?: string; // Optional custom cover, otherwise use first episode thumbnail
  createdAt?: Date;
  updatedAt?: Date;
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
