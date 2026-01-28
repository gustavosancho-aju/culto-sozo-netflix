import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SeriesCard from '../components/SeriesCard';
import { dataService } from '../services/dataService';
import { DataState, Episode, Series } from '../types';
import { Play, Info } from 'lucide-react';
import { Link } from 'wouter';

interface HomeProps {
  searchQuery?: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const [data, setData] = useState<DataState>({ series: [], episodes: [] });
  const [featuredEpisode, setFeaturedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    const loadedData = dataService.getData();
    setData(loadedData);
    
    // Set featured episode (specifically the one requested: WAmwF7abBdg)
    const specificFeaturedEp = loadedData.episodes.find(ep => ep.youtubeVideoId === "WAmwF7abBdg");
    
    if (specificFeaturedEp) {
      setFeaturedEpisode(specificFeaturedEp);
    } else {
      // Fallback to latest logic if specific video not found
      const latestSeries = loadedData.series.find(s => s.destaque) || loadedData.series[0];
      const latestEp = dataService.getEpisodesBySeries(latestSeries.id).sort((a, b) => b.ordem - a.ordem)[0];
      setFeaturedEpisode(latestEp || loadedData.episodes[0]);
    }
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

  // Group series by year
  const series2026 = data.series.filter(s => s.ano === 2026).sort((a, b) => a.ordem - b.ordem);
  const series2025 = data.series.filter(s => s.ano === 2025).sort((a, b) => a.ordem - b.ordem);

  return (
    <div className="min-h-screen bg-[#141414] pb-20 overflow-x-hidden">
      <Hero episode={featuredEpisode} />
      
      {/* Action Buttons - Centered in the spacing area */}
      <div className="flex justify-center items-center gap-4 py-8 relative z-30">
        <Link href={`/episodio/${featuredEpisode.id}`}>
          <button className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded hover:bg-white/90 transition font-bold text-lg">
            <Play className="w-6 h-6 fill-black" />
            Assistir
          </button>
        </Link>
        
        <a 
          href="https://www.instagram.com/lorenaamelo/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[rgba(109,109,110,0.7)] text-white px-8 py-3 rounded hover:bg-[rgba(109,109,110,0.4)] transition font-bold text-lg backdrop-blur-sm"
        >
          <Info className="w-6 h-6" />
          Mais Informações
        </a>
      </div>

      <div className="relative z-20 px-4 md:px-12 space-y-16 mt-4">
        {/* Section 2026 */}
        {series2026.length > 0 && (
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-6 border-l-4 border-[#E50914] pl-4">
              SOZO 2026
            </h2>
            <div className="flex flex-wrap gap-6">
              {series2026.map(serie => {
                const latestEp = dataService.getEpisodesBySeries(serie.id).sort((a, b) => b.ordem - a.ordem)[0];
                return <SeriesCard key={serie.id} series={serie} latestEpisode={latestEp} />;
              })}
            </div>
          </section>
        )}

        {/* Section 2025 */}
        {series2025.length > 0 && (
          <section>
            <h2 className="text-3xl font-display font-bold text-white mb-6 border-l-4 border-[#E50914] pl-4">
              SOZO 2025
            </h2>
            <div className="flex flex-wrap gap-6">
              {series2025.map(serie => {
                const latestEp = dataService.getEpisodesBySeries(serie.id).sort((a, b) => b.ordem - a.ordem)[0];
                return <SeriesCard key={serie.id} series={serie} latestEpisode={latestEp} />;
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
