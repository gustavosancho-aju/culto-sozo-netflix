import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, User, Settings, X, Menu } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { useAuth } from '@/_core/hooks/useAuth';
import { startLogin } from '@/const';

interface NavbarProps { onSearch?: (query: string) => void; }

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState(() => new URLSearchParams(window.location.search).get('busca') ?? '');
  const searchRef = useRef<HTMLInputElement>(null);
  const searchToggleRef = useRef<HTMLButtonElement>(null);
  const [location, navigate] = useLocation();
  const { user } = useAuth();
  useEffect(() => {
    const scroll = () => setIsScrolled(window.scrollY > 0);
    scroll(); window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => { setMenuOpen(false); setIsSearchOpen(false); }, [location]);
  useEffect(() => { if (isSearchOpen) searchRef.current?.focus(); }, [isSearchOpen]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false); setIsSearchOpen(false); searchToggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  function submitSearch(event: React.FormEvent) {
    event.preventDefault();
    onSearch?.(query.trim());
    navigate(query.trim() ? `/?busca=${encodeURIComponent(query.trim())}` : '/');
    setIsSearchOpen(false); setMenuOpen(false);
  }
  const menuLinkClass = 'flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b79e68]';
  return (
    <Dialog.Root>
      <nav aria-label="Navegação principal" className={`fixed top-0 z-50 w-full transition-colors ${isScrolled || menuOpen || isSearchOpen ? 'bg-[#141414] shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-12">
          <div className="flex min-w-0 items-center gap-6">
            <Link href="/" aria-label="Culto Sozo — início" className="shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b79e68]">
              <img src="/brand/lorena-melo.png" alt="Lorena Melo — Culto Sozo" width={2048} height={1284} className="h-10 w-auto object-contain md:h-12" />
            </Link>
            <div className="hidden items-center gap-4 text-sm font-medium text-gray-200 lg:flex">
              <Link href="/" className={menuLinkClass} aria-current={location === '/' ? 'page' : undefined}>Início</Link>
              <Link href="/semanal" className={menuLinkClass} aria-current={location === '/semanal' ? 'page' : undefined}>Devocionais</Link>
              <a href="https://www.instagram.com/cnaracaju/" target="_blank" rel="noopener noreferrer" className={menuLinkClass}>CN Aracaju</a>
              <Link href="/testemunhos" className={menuLinkClass} aria-current={location === '/testemunhos' ? 'page' : undefined}>Testemunhos</Link>
              <Dialog.Trigger asChild><button type="button" className={menuLinkClass}>Horários de culto</button></Dialog.Trigger>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-white sm:gap-3">
            <button ref={searchToggleRef} type="button" aria-label={isSearchOpen ? 'Fechar busca' : 'Abrir busca'} aria-expanded={isSearchOpen} aria-controls="site-search" onClick={() => { setIsSearchOpen(!isSearchOpen); setMenuOpen(false); }} className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b79e68]">
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>
            {user?.role === 'admin' && <Link href="/admin" aria-label="Painel administrativo" className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10"><Settings className="h-5 w-5" /></Link>}
            {!user ? <button type="button" onClick={() => startLogin()} aria-label="Fazer login" className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#b79e68]/30 text-[#e4d2a6] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b79e68]"><User className="h-5 w-5" /></button> : <span aria-label={user.name || 'Perfil'} className="flex h-11 w-11 items-center justify-center text-[#e4d2a6]"><User className="h-5 w-5" /></span>}
            <button type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => { setMenuOpen(!menuOpen); setIsSearchOpen(false); }} className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b79e68] lg:hidden">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isSearchOpen && <form id="site-search" onSubmit={submitSearch} role="search" className="flex gap-2 border-t border-white/10 px-4 pb-4 pt-3 md:px-12">
          <label htmlFor="site-search-input" className="sr-only">Buscar mensagens e devocionais</label>
          <input ref={searchRef} id="site-search-input" type="search" value={query} onChange={event => { setQuery(event.target.value); if (location === '/') onSearch?.(event.target.value); }} placeholder="Buscar mensagens e devocionais" className="min-h-11 min-w-0 flex-1 rounded-lg border border-white/20 bg-black/50 px-3 text-base text-white outline-none focus:border-[#b79e68]" />
          <button type="submit" className="min-h-11 rounded-lg bg-[#b79e68] px-4 text-sm font-bold text-[#211c12] hover:bg-[#e4d2a6]">Buscar</button>
        </form>}
        {menuOpen && <div id="mobile-navigation" className="grid border-t border-white/10 px-4 pb-4 pt-2 lg:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)} className={menuLinkClass}>Início</Link>
          <Link href="/semanal" onClick={() => setMenuOpen(false)} className={menuLinkClass}>Devocionais</Link>
          <Link href="/testemunhos" onClick={() => setMenuOpen(false)} className={menuLinkClass}>Testemunhos</Link>
          <Dialog.Trigger asChild><button type="button" onClick={() => setMenuOpen(false)} className={menuLinkClass}>Horários de culto</button></Dialog.Trigger>
          <a href="https://www.instagram.com/cnaracaju/" target="_blank" rel="noopener noreferrer" className={menuLinkClass}>CN Aracaju</a>
        </div>}
      </nav>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 -translate-y-1/2 outline-none">
          <Dialog.Title className="sr-only">Horários do culto</Dialog.Title>
          <Dialog.Description className="sr-only">Culto Sozo aos domingos, às 8 horas e às 17 horas.</Dialog.Description>
          <img src="/brand/horarios-do-culto.webp" alt="Aprovados — Horários do culto: Domingo às 8 horas e Domingo às 17 horas" width={1123} height={1400} className="mx-auto max-h-[calc(100dvh-3rem)] w-auto max-w-full rounded-xl object-contain" />
          <Dialog.Close asChild><button type="button" aria-label="Fechar horários do culto" className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/85 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X className="h-5 w-5" /></button></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default Navbar;
