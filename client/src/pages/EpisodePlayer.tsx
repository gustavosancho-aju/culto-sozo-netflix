import React, { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { dataService } from '../services/dataService';
import { trpc } from '@/lib/trpc';
import { parseEpisodeTitle } from '../constants';
import GatedVideo from '../components/GatedVideo';

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
      <div className="absolute top-0 left-0 p-4 z-10 rounded-br-lg bg-black/70">
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
        <GatedVideo key={episode.youtubeVideoId} videoId={episode.youtubeVideoId} title={parseEpisodeTitle(episode.titulo)} autoRequest fullScreen />
      </div>
    </div>
  );
};

export default EpisodePlayer;
