import React from 'react';
import { Link } from 'wouter';
import { Series, Episode } from '../types';
import { getThumbnailUrl } from '../constants';
import { Play } from 'lucide-react';
import ShareButton from './ShareButton';

interface SeriesCardProps {
  series: Series;
  latestEpisode?: Episode;
  isLatestSeries?: boolean;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series, latestEpisode, isLatestSeries }) => {
  // Use latest episode thumbnail as series cover if no custom cover provided
  const coverImage = series.capaUrl || (latestEpisode ? getThumbnailUrl(latestEpisode.youtubeVideoId) : '');

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="group relative aspect-video w-[300px] md:w-[320px] overflow-hidden rounded-md transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-2xl shadow-black/50 flex-shrink-0">
      <Link href={`/serie/${series.id}`}>
        <div className="w-full h-full cursor-pointer">
          {/* Background Image */}
          <img 
            src={coverImage} 
            alt={series.titulo}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  {/* Extrair o mês do título da série (ex: "Série - Março 2026" -> "Março") */}
                  {series.titulo.split(' - ')[1] && (
                    <span className="text-gray-300 uppercase tracking-wider">
                      {series.titulo.split(' - ')[1].split(' ')[0]}
                    </span>
                  )}
                  {/* Only show 'Novos Episódios' for the latest series */}
                  {isLatestSeries && <span className="text-green-500">• Novos Episódios</span>}
                </div>
              </div>
            </div>
          </div>
          
          {/* Play Icon Overlay on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/50">
              <Play className="w-8 h-8 fill-white text-white" />
            </div>
          </div>
        </div>
      </Link>

      {/* Share Button - Visible on Hover */}
      <div 
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        onClick={handleShareClick}
      >
        <ShareButton 
          title={series.titulo}
          url={typeof window !== 'undefined' ? `${window.location.origin}/serie/${series.id}` : ''}
        />
      </div>
    </div>
  );
};

export default SeriesCard;
