import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Episode, Series } from '../types';
import { getThumbnailUrl } from '../constants';
import { Link } from 'wouter';

interface SeriesRowProps {
  title: string;
  episodes: Episode[];
  series?: Series;
}

const SeriesRow: React.FC<SeriesRowProps> = ({ title, episodes }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 mb-8 md:mb-12 group/row relative z-10 pl-4 md:pl-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition cursor-pointer flex items-center gap-2">
        {title}
        <span className="text-xs text-[#54b9c5] opacity-0 group-hover/row:opacity-100 transition font-normal">Ver tudo &gt;</span>
      </h2>

      <div className="relative group">
        <ChevronLeft 
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`} 
          onClick={() => handleClick('left')}
        />

        <div 
          ref={rowRef}
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide md:space-x-4 pb-8 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {episodes.map((episode) => (
            <div 
              key={episode.id}
              className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105 hover:z-50 group/card"
            >
              <Link href={`/episodio/${episode.id}`}>
                <div className="relative w-full h-full rounded-sm overflow-hidden">
                  <img
                    src={getThumbnailUrl(episode.youtubeVideoId)}
                    alt={episode.titulo}
                    className="rounded-sm object-cover md:rounded w-full h-full"
                  />
                  
                  {/* Progress Bar (Mock) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                    <div className="h-full bg-[#E50914]" style={{ width: `${Math.random() * 100}%` }}></div>
                  </div>
                </div>
              </Link>

              {/* Hover Card Info - Simplified for now */}
              <div className="absolute top-full left-0 w-full bg-[#181818] p-3 rounded-b-md shadow-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 z-50 invisible group-hover/card:visible -mt-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 cursor-pointer">
                    <Play className="w-4 h-4 fill-black text-black" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-white cursor-pointer">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-white cursor-pointer">
                    <ThumbsUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-auto w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-white cursor-pointer">
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-1">
                  <span className="text-[#46d369]">98% relevante</span>
                  <span className="border border-gray-500 px-1 rounded text-[10px]">12+</span>
                  <span>{episode.duracao}</span>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-white">
                  <span className="line-clamp-1">{episode.titulo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ChevronRight 
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" 
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default SeriesRow;
