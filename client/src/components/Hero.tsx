import React from 'react';
import { Play, Info } from 'lucide-react';
import { Episode } from '../types';
import { getThumbnailUrl } from '../constants';
import { Link } from 'wouter';

interface HeroProps {
  episode: Episode;
}

const Hero: React.FC<HeroProps> = ({ episode }) => {
  return (
    <div className="relative h-[85vh] w-full">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <img 
          src={getThumbnailUrl(episode.youtubeVideoId)} 
          alt={episode.titulo}
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        {/* Enhanced Vignette Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 md:px-12 pt-20">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <div className="flex items-center gap-2 text-[#E50914] font-bold tracking-widest uppercase text-sm">
            <span className="bg-[#E50914] text-white px-2 py-0.5 text-xs rounded-sm">Novo</span>
            <span>Destaque da Semana</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] drop-shadow-lg">
            {episode.titulo.split('|')[0]}
          </h1>
          
          <p className="text-lg text-gray-200 line-clamp-3 drop-shadow-md max-w-xl font-sans">
            {episode.descricaoCurta}
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <Link href={`/episodio/${episode.id}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
