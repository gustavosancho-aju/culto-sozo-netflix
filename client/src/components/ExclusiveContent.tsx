import React from 'react';
import { Lock, Play, Youtube } from 'lucide-react';
import { highlightVideo } from '../data/highlightVideo';
import { recordEngagement } from '../lib/engagementAnalytics';
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

      <a
        href={highlightVideo.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => recordEngagement('Vídeo em destaque acessado', { video: highlightVideo.id, origem: 'banner' })}
        aria-label="Assistir De Bem com a Vida no YouTube (abre em nova aba)"
        className="group mx-auto mt-8 block w-full max-w-4xl overflow-hidden rounded-lg border border-[#b79e68]/30 bg-[#1a1916] shadow-2xl transition hover:border-[#b79e68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4d2a6]"
      >
        <img src={highlightVideo.image} alt={highlightVideo.imageAlt} width={1170} height={640} loading="lazy" className="h-auto w-full" />
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <span className="text-lg font-bold text-white">De Bem com a Vida</span>
          <span className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#d8c18d] px-4 py-2 text-sm font-bold text-[#211c12] transition group-hover:bg-[#eddbb1]">
            <Play className="h-4 w-4 fill-current" aria-hidden="true" /> Assistir no YouTube
          </span>
        </div>
      </a>
    </div>
  );
};

export default ExclusiveContent;
