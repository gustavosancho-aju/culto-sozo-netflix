import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Bell, User } from 'lucide-react';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img 
              src="/images/logo.png" 
              alt="Culto Sozo" 
              className="h-8 md:h-10 object-contain cursor-pointer" 
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            <Link href="/" className={`hover:text-gray-400 transition ${location === '/' ? 'font-bold text-white' : ''}`}>Início</Link>
            <Link href="/series" className="hover:text-gray-400 transition">Séries</Link>
            <Link href="/filmes" className="hover:text-gray-400 transition">Filmes</Link>
            <Link href="/bombando" className="hover:text-gray-400 transition">Bombando</Link>
            <Link href="/minha-lista" className="hover:text-gray-400 transition">Minha Lista</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white">
          <div className={`flex items-center border transition-all duration-300 ${
            isSearchOpen ? 'border-white bg-black/80 px-2 py-1' : 'border-transparent'
          }`}>
            <Search 
              className="w-5 h-5 cursor-pointer" 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
            />
            <input 
              type="text"
              placeholder="Títulos, gente e gêneros"
              className={`bg-transparent border-none outline-none text-sm ml-2 text-white placeholder-gray-400 transition-all duration-300 ${
                isSearchOpen ? 'w-60 opacity-100' : 'w-0 opacity-0'
              }`}
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
          
          <span className="hidden md:block text-sm font-medium cursor-pointer">Infantil</span>
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition" />
          
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center overflow-hidden">
               <User className="w-5 h-5 text-white" />
            </div>
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white transition-transform group-hover:rotate-180"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
