import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollRowProps {
  children: React.ReactNode;
  title: string;
}

const ScrollRow: React.FC<ScrollRowProps> = ({ children, title }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      
      if (direction === 'right') setIsMoved(true);
      if (direction === 'left' && scrollTo <= 0) setIsMoved(false);
    }
  };

  return (
    <section className="group relative">
      <h2 className="text-3xl font-display font-bold text-white mb-6 border-l-4 border-[#E50914] pl-4">
        {title}
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <div 
          className={`absolute top-0 bottom-0 left-0 z-40 w-12 bg-black/50 flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-black/70 ${!isMoved ? 'hidden' : ''}`}
          onClick={() => handleClick('left')}
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </div>

        {/* Scrollable Container */}
        <div 
          ref={rowRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
        >
          {children}
        </div>

        {/* Right Arrow */}
        <div 
          className="absolute top-0 bottom-0 right-0 z-40 w-12 bg-black/50 flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-black/70 opacity-0 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default ScrollRow;
