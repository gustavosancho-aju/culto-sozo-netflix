import React, { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Episode } from '../types';

const EpisodePlayer: React.FC = () => {
  const [, params] = useRoute('/episodio/:id');
  const [, setLocation] = useLocation();
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    if (params?.id) {
      const ep = dataService.getEpisodeById(params.id);
      if (ep) {
        setEpisode(ep);
        // Save to history
        dataService.saveHistory({
          episodeId: ep.id,
          serieId: ep.serieId,
          lastWatchedAt: Date.now(),
          progress: 0
        });
      }
    }
  }, [params?.id]);

  if (!episode) return <div className="h-screen bg-black flex items-center justify-center text-white">Carregando...</div>;

  return (
    <div className="fixed inset-0 bg-black z-[60] flex flex-col">
      {/* Back Button Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 z-10 bg-gradient-to-b from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-white hover:text-gray-300 transition"
        >
          <ArrowLeft className="w-8 h-8" />
          <span className="text-xl font-bold">Voltar para Início</span>
        </button>
      </div>

      {/* YouTube Player */}
      <div className="flex-1 w-full h-full flex items-center justify-center bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${episode.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
          title={episode.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full max-w-[100vw] max-h-[100vh]"
        ></iframe>
      </div>
    </div>
  );
};

export default EpisodePlayer;
