import React from 'react';
import { Link } from 'wouter';
import { Series, Episode } from '../types';
import { getThumbnailUrl } from '../constants';
import { Play } from 'lucide-react';

interface SeriesCardProps {
  series: Series;
  latestEpisode?: Episode;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series, latestEpisode }) => {
  // Use latest episode thumbnail as series cover if no custom cover provided
  const coverImage = series.capaUrl || (latestEpisode ? getThumbnailUrl(latestEpisode.youtubeVideoId) : '');

  return (
    <Link href={`/serie/${series.id}`}>
      <div className="group relative aspect-video w-full md:w-[320px] cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-2xl shadow-black/50 flex-shrink-0">
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
            <h3 className="text-3xl font-display font-bold text-white leading-tight mb-2 drop-shadow-lg">
              {series.titulo}
            </h3>
            
            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
              <p className="text-sm text-gray-300 mb-4 line-clamp-3 font-sans">
                {series.descricao}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="bg-[#E50914] px-2 py-1 rounded">SÉRIE</span>
                {latestEpisode && <span>Novos Episódios</span>}
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
  );
};

export default SeriesCard;
