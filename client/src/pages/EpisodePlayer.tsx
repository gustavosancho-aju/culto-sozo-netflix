import React, { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { dataService } from '../services/dataService';
import { trpc } from '@/lib/trpc';
import { parseEpisodeTitle } from '../constants';

const EpisodePlayer: React.FC = () => {
  const [, params] = useRoute('/episodio/:id');
  const [, setLocation] = useLocation();
  const episodeId = params?.id || '';

  const { data: episode, isLoading } = trpc.content.episodeById.useQuery(
    { id: episodeId },
    { enabled: !!episodeId, staleTime: 5 * 60 * 1000 }
  );

  // Salvar no histórico local quando o episódio carregar
  useEffect(() => {
    if (episode) {
      dataService.saveHistory({
        episodeId: episode.id,
        serieId: episode.serieId,
        lastWatchedAt: Date.now(),
        progress: 0,
      });
    }
  }, [episode?.id]);

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!episode) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Episódio não encontrado</p>
          <button onClick={() => setLocation('/')} className="text-red-500 hover:text-red-400">
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

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
          title={parseEpisodeTitle(episode.titulo)}
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
