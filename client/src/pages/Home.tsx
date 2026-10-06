import React, { useMemo } from 'react';
import { Link } from 'wouter';
import Hero from '../components/Hero';
import SeriesCard from '../components/SeriesCard';
import ScrollRow from '../components/ScrollRow';
import ExclusiveContent from '../components/ExclusiveContent';
import { trpc } from '@/lib/trpc';
import { parseEpisodeTitle } from '../constants';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HomeProps {
  searchQuery?: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  // Buscar séries e episódios do banco via tRPC
  const { data: allSeries, isLoading: loadingSeries } = trpc.content.series.useQuery(undefined, {
    staleTime: 2 * 60 * 1000,
  });
  const { data: allEpisodes, isLoading: loadingEpisodes } = trpc.content.allEpisodes.useQuery(undefined, {
    staleTime: 2 * 60 * 1000,
  });
  const { data: latestVideoData } = trpc.latestVideoId.useQuery(undefined, {
    staleTime: 5 * 60 * 1000,
  });
  const lastSyncedVideoId = latestVideoData?.lastVideoId ?? null;

  // Mapear episódios por série
  const episodesBySeriesId = useMemo(() => {
    const map: Record<string, Array<NonNullable<typeof allEpisodes>[number]>> = {};
    if (!allEpisodes) return map;
    for (const ep of allEpisodes) {
      if (!map[ep.serieId]) map[ep.serieId] = [];
      map[ep.serieId]!.push(ep);
    }
    return map;
  }, [allEpisodes]);

  // Episódio de destaque: último episódio da série em destaque
  const featuredEpisode = useMemo(() => {
    if (!allSeries || !allEpisodes) return null;
    const featuredSeries = allSeries.find(s => s.destaque) || allSeries[0];
    if (!featuredSeries) return null;
    const eps = (episodesBySeriesId[featuredSeries.id] || []).sort((a, b) => b.ordem - a.ordem);
    return eps[0] || allEpisodes[0] || null; // destaque = ep mais recente (b-a)
  }, [allSeries, allEpisodes, episodesBySeriesId]);

  if (loadingSeries || loadingEpisodes) {
    return (
      <div className="h-screen bg-[#141414] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-400">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!featuredEpisode || !allSeries || !allEpisodes) {
    return (
      <div className="h-screen bg-[#141414] flex items-center justify-center text-white">
        <span className="text-gray-400">Nenhum conteúdo disponível</span>
      </div>
    );
  }

  // Filtro de busca
  if (searchQuery) {
    const filteredEpisodes = allEpisodes.filter(ep =>
      ep.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <div className="min-h-screen bg-[#141414] pt-24 px-4 md:px-12">
        <h2 className="text-2xl text-white mb-6">Resultados para "{searchQuery}"</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredEpisodes.map(ep => (
            <Link key={ep.id} href={`/episodio/${ep.id}`} className="block bg-gray-800 rounded overflow-hidden hover:scale-105 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500">
              <img src={`https://img.youtube.com/vi/${ep.youtubeVideoId}/mqdefault.jpg`} alt="" className="w-full aspect-video object-cover" />
              <span className="block p-3 text-sm">{parseEpisodeTitle(ep.titulo)}</span>
            </Link>
          ))}
        </div>
        {filteredEpisodes.length === 0 && <p className="text-gray-400">Nenhum episódio encontrado para esta busca.</p>}
      </div>
    );
  }

  // Agrupar séries por ano
  const series2026 = allSeries.filter(s => s.ano === 2026).sort((a, b) => b.ordem - a.ordem);
  const series2025 = allSeries.filter(s => s.ano === 2025).sort((a, b) => b.ordem - a.ordem);

  return (
    <div className="min-h-screen bg-[#141414] pb-20 pt-16 overflow-x-hidden md:pt-[72px]">
      <div className="px-4 py-2 md:px-12">
        <Link href="/semanal" className="group flex items-center justify-between gap-3 rounded border border-white/10 bg-[#202020] px-4 py-3 transition hover:border-[#E50914]/60 hover:bg-[#252525] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
          <div className="flex min-w-0 items-center gap-3">
            <BookOpen className="h-5 w-5 shrink-0 text-[#E50914]" />
            <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <h2 className="text-sm font-bold text-white md:text-base">Devocional semanal</h2>
              <p className="text-xs text-gray-400">Semana 1 · Aprovado · 5 a 11 out</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-white transition group-hover:text-[#E50914]">
            <span className="hidden sm:inline">Abrir devocional</span>
            <span className="sm:hidden">Abrir</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
      <Hero episode={featuredEpisode} isNew={featuredEpisode.youtubeVideoId === lastSyncedVideoId} />

      <div className="relative z-20 px-4 md:px-12 space-y-16 mt-8">
        {/* Section 2026 */}
        {series2026.length > 0 && (
          <ScrollRow title="SOZO 2026">
            {series2026.map((serie, index) => {
              const eps = (episodesBySeriesId[serie.id] || []).sort((a, b) => b.ordem - a.ordem);
              const latestEp = eps[0]; // capa do card = ep mais recente
              const isLatestSeries = index === 0;
              const hasNewVideo = !!(lastSyncedVideoId && latestEp?.youtubeVideoId === lastSyncedVideoId);
              return (
                <SeriesCard
                  key={serie.id}
                  series={serie}
                  latestEpisode={latestEp}
                  isLatestSeries={isLatestSeries}
                  hasNewVideo={hasNewVideo}
                />
              );
            })}
          </ScrollRow>
        )}

        {/* Section 2025 */}
        {series2025.length > 0 && (
          <ScrollRow title="SOZO 2025">
            {series2025.map(serie => {
              const eps = (episodesBySeriesId[serie.id] || []).sort((a, b) => b.ordem - a.ordem);
              const latestEp = eps[0]; // capa do card = ep mais recente
              return <SeriesCard key={serie.id} series={serie} latestEpisode={latestEp} />;
            })}
          </ScrollRow>
        )}

        {/* Exclusive Content Section */}
        <ExclusiveContent />
      </div>
    </div>
  );
};

export default Home;
