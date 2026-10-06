import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Bell, User, Settings, Clock, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { useAuth } from '@/_core/hooks/useAuth';
import { startLogin } from '@/const';

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location] = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Dialog.Root>
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="px-4 md:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Culto Sozo — início">
            <img 
              src="/brand/lorena-melo.png"
              alt="Lorena Melo — Culto Sozo"
              width={2048}
              height={1284}
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            <Link href="/" className={`hover:text-gray-400 transition ${location === '/' ? 'font-bold text-white' : ''}`}>Início</Link>
            <Link href="/semanal" className={`hover:text-gray-400 transition ${location === '/semanal' ? 'font-bold text-white' : ''}`}>Semanal</Link>
            <a href="https://www.instagram.com/cnaracaju/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">CN Aracaju</a>
            <Link href="/testemunhos" className={`hover:text-gray-400 transition ${location === '/testemunhos' ? 'font-bold text-white' : ''}`}>Testemunhos</Link>
            <Dialog.Trigger asChild>
              <button type="button" className="hover:text-gray-400 transition">Horários de culto</button>
            </Dialog.Trigger>
          </div>
        </div>

        <div className="flex items-center gap-3 text-white md:gap-6">
          <Dialog.Trigger asChild>
            <button type="button" aria-label="Horários do culto" title="Horários do culto" className="md:hidden rounded p-1 transition hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500">
              <Clock className="h-5 w-5" />
            </button>
          </Dialog.Trigger>
          <Link href="/semanal" className={`md:hidden rounded border px-2.5 py-1.5 text-xs font-semibold transition ${location === '/semanal' ? 'border-[#E50914] bg-[#E50914]' : 'border-white/30 hover:border-white'}`}>
            Semanal
          </Link>
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
          

          <Bell className="hidden w-5 h-5 cursor-pointer transition hover:text-gray-300 sm:block" />
          
          {user?.role === 'admin' && (
            <Link href="/admin" title="Painel Admin">
              <Settings className="w-5 h-5 cursor-pointer hover:text-[#E50914] transition" />
            </Link>
          )}

          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => !user && startLogin()}
            title={user ? user.name || 'Perfil' : 'Fazer login'}
          >
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center overflow-hidden">
               <User className="w-5 h-5 text-white" />
            </div>
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white transition-transform group-hover:rotate-180"></div>
          </div>
        </div>
      </div>
    </nav>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 outline-none">
        <Dialog.Title className="sr-only">Horários do culto</Dialog.Title>
        <Dialog.Description className="sr-only">Culto Sozo aos domingos, às 8 horas e às 17 horas.</Dialog.Description>
        <img src="/brand/horarios-do-culto.webp" alt="Aprovados — Horários do culto: Domingo às 8 horas e Domingo às 17 horas" width={1123} height={1400} className="mx-auto max-h-[calc(100dvh-3rem)] w-auto max-w-full rounded-xl object-contain" />
        <Dialog.Close asChild>
          <button type="button" aria-label="Fechar horários do culto" className="absolute right-2 top-2 rounded-full bg-black/85 p-2 text-white shadow-lg transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
            <X className="h-5 w-5" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Navbar;
