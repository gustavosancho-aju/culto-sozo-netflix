import React from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Play, Clock, Calendar } from 'lucide-react';
import { getThumbnailUrl } from '../constants';
import ShareButton from '../components/ShareButton';
import { trpc } from '@/lib/trpc';

const SeriesDetails: React.FC = () => {
  const [, params] = useRoute('/serie/:id');
  const seriesId = params?.id || '';

  const { data: seriesWithEpisodes, isLoading } = trpc.content.seriesById.useQuery(
    { id: seriesId },
    { enabled: !!seriesId, staleTime: 2 * 60 * 1000 }
  );

  if (isLoading) {
    return (
      <div className="h-screen bg-[#141414] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-400">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!seriesWithEpisodes) {
    return (
      <div className="h-screen bg-[#141414] flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Série não encontrada</p>
          <Link href="/"><button className="text-red-500 hover:text-red-400">Voltar ao início</button></Link>
        </div>
      </div>
    );
  }

  const series = seriesWithEpisodes;
  // Episódios do mais recente para o mais antigo
  const episodes = [...(seriesWithEpisodes.episodes || [])].sort((a, b) => b.ordem - a.ordem);
  const latestEpisode = episodes[0];
  const coverImage = (latestEpisode ? getThumbnailUrl(latestEpisode.youtubeVideoId) : '');

  return (
    <div className="min-h-screen bg-[#141414] text-white pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={coverImage}
            alt={series.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-4xl">
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition">
              <ArrowLeft className="w-5 h-5" /> Voltar
            </button>
          </Link>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 drop-shadow-lg">{series.titulo}</h1>
          <p className="text-xl text-gray-200 mb-8 font-sans max-w-2xl drop-shadow-md">{series.descricao}</p>

          <div className="flex items-center gap-4">
            <span className="bg-[#E50914] px-3 py-1 rounded font-bold text-sm">SÉRIE</span>
            <span className="text-gray-300">{series.ano}</span>
            <span className="text-gray-300">{episodes.length} Episódios</span>
            <div className="ml-auto">
              <ShareButton
                title={series.titulo}
                url={typeof window !== 'undefined' ? `${window.location.origin}/serie/${series.id}` : ''}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Episodes List */}
      <div className="px-6 md:px-12 mt-8">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">Episódios</h2>

        <div className="space-y-4">
          {episodes.map((episode, index) => (
            <Link key={episode.id} href={`/episodio/${episode.id}`}>
              <div className="group flex flex-col md:flex-row gap-4 p-4 rounded-lg hover:bg-[#2F2F2F] transition cursor-pointer border border-transparent hover:border-gray-700">
                {/* Thumbnail */}
                <div className="relative w-full md:w-64 aspect-video rounded overflow-hidden flex-shrink-0">
                  <img
                    src={getThumbnailUrl(episode.youtubeVideoId)}
                    alt={episode.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                    <Play className="w-10 h-10 fill-white text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E50914] transition line-clamp-1">
                      {index + 1}. {episode.titulo.includes('|') ? episode.titulo.split('|')[1].trim() : episode.titulo}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {episode.duracao || '1h'}
                      </span>
                      <div onClick={(e) => e.stopPropagation()}>
                        <ShareButton
                          title={episode.titulo}
                          url={typeof window !== 'undefined' ? `${window.location.origin}/episodio/${episode.id}` : ''}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                    {episode.descricaoCurta}
                  </p>

                  <div className="mt-auto pt-2 border-t border-gray-700/50 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Semana {episode.ordem}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
