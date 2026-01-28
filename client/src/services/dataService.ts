import { INITIAL_EPISODES, INITIAL_SERIES } from '../constants';
import { DataState, Episode, Series, WatchHistory } from '../types';

const STORAGE_KEY = 'culto_sozo_data';
const HISTORY_KEY = 'culto_sozo_history';

export const dataService = {
  getData: (): DataState => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      series: INITIAL_SERIES,
      episodes: INITIAL_EPISODES
    };
  },

  getHistory: (): WatchHistory[] => {
    const stored = localStorage.getItem(HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  saveHistory: (historyItem: WatchHistory) => {
    const history = dataService.getHistory();
    const existingIndex = history.findIndex(h => h.episodeId === historyItem.episodeId);
    
    if (existingIndex >= 0) {
      history[existingIndex] = historyItem;
    } else {
      history.push(historyItem);
    }
    
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  },

  getLastWatched: (): WatchHistory | null => {
    const history = dataService.getHistory();
    if (history.length === 0) return null;
    
    return history.sort((a, b) => b.lastWatchedAt - a.lastWatchedAt)[0];
  },

  getEpisodeById: (id: string): Episode | undefined => {
    return INITIAL_EPISODES.find(ep => ep.id === id);
  },

  getSeriesById: (id: string): Series | undefined => {
    return INITIAL_SERIES.find(s => s.id === id);
  },

  getEpisodesBySeries: (seriesId: string): Episode[] => {
    return INITIAL_EPISODES.filter(ep => ep.serieId === seriesId).sort((a, b) => a.ordem - b.ordem);
  },
  
  getLatestEpisode: (): Episode => {
    // Assuming the first episode in the list is the latest one based on the provided data structure
    // Ideally we would have a date field, but we'll use the order/structure for now
    return INITIAL_EPISODES[0];
  }
};
