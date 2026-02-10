import React from 'react';
import { Lock, Youtube } from 'lucide-react';
import { getThumbnailUrl } from '../constants';

const ExclusiveContent: React.FC = () => {
  const videoId = "7g1mm0sqbHg";
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="px-4 md:px-12 py-12">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Conteúdo Exclusivo</h2>
      
      <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden group shadow-2xl border border-white/10">
        {/* Background Image */}
        <img 
          src={getThumbnailUrl(videoId)} 
          alt="Conteúdo Exclusivo YouTube" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-6 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/70">
          
          {/* Lock Icon & Text */}
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <div className="bg-[#E50914] p-4 rounded-full shadow-lg shadow-red-900/20">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <span className="text-white font-bold tracking-widest text-lg uppercase drop-shadow-md">
              Somente no YouTube
            </span>
          </div>

          {/* CTA Button */}
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded hover:bg-[#E50914] hover:text-white transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-xl"
          >
            <Youtube className="w-6 h-6" />
            Ir para canal do youtube
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ExclusiveContent;
