import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SeriesRow from '../components/SeriesRow';
import { dataService } from '../services/dataService';
import { DataState, Episode } from '../types';

interface HomeProps {
  searchQuery?: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const [data, setData] = useState<DataState>({ series: [], episodes: [] });
  const [featuredEpisode, setFeaturedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    const loadedData = dataService.getData();
    setData(loadedData);
    
    // Set featured episode (latest one or specific logic)
    setFeaturedEpisode(dataService.getLatestEpisode());
  }, []);

  if (!featuredEpisode) return <div className="h-screen bg-[#141414] flex items-center justify-center text-white">Carregando...</div>;

  // Filter logic
  const filteredEpisodes = searchQuery 
    ? data.episodes.filter(ep => ep.titulo.toLowerCase().includes(searchQuery.toLowerCase()))
    : data.episodes;

  if (searchQuery) {
    return (
      <div className="min-h-screen bg-[#141414] pt-24 px-4 md:px-12">
        <h2 className="text-2xl text-white mb-6">Resultados para "{searchQuery}"</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredEpisodes.map(ep => (
            <div key={ep.id} className="aspect-video bg-gray-800 rounded overflow-hidden cursor-pointer hover:scale-105 transition">
              <img src={`https://img.youtube.com/vi/${ep.youtubeVideoId}/mqdefault.jpg`} alt={ep.titulo} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] pb-20 overflow-x-hidden">
      <Hero episode={featuredEpisode} />
      
      <div className="-mt-32 relative z-20 space-y-8">
        {data.series.sort((a, b) => a.ordem - b.ordem).map(serie => {
          const seriesEpisodes = dataService.getEpisodesBySeries(serie.id);
          if (seriesEpisodes.length === 0) return null;
          
          return (
            <SeriesRow 
              key={serie.id} 
              title={serie.titulo} 
              episodes={seriesEpisodes}
              series={serie}
            />
          );
        })}
        
        {/* Additional Rows for "Trending" or "Watch Again" could go here */}
        <SeriesRow 
          title="Continuar Assistindo" 
          episodes={data.episodes.slice(0, 4)} // Mock data for now
        />
      </div>
    </div>
  );
};

export default Home;
