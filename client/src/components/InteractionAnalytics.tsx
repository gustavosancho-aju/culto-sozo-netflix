import { useEffect } from 'react';
import { recordEngagement } from '../lib/engagementAnalytics';

export default function InteractionAnalytics() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (window.location.pathname.startsWith('/admin')) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a');
      const button = event.target.closest('button');
      if (link) {
        const url = new URL(link.href, window.location.origin);
        let action = 'Navegação';
        let destination = url.pathname;
        if (url.origin === window.location.origin) {
          if (url.pathname.startsWith('/admin')) return;
          if (url.hash.startsWith('#devotional-')) { action = 'Índice do devocional'; destination = url.hash; }
          else if (url.pathname.startsWith('/episodio/')) action = 'Assistir mensagem';
          else if (url.pathname.startsWith('/serie/')) action = 'Abrir série';
          else if (url.pathname === '/semanal') action = 'Abrir devocionais';
        } else if (['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com'].includes(url.hostname)) {
          action = url.pathname === '/watch' ? 'Ver no YouTube' : 'Abrir canal';
          destination = url.pathname === '/watch' ? url.searchParams.get('v') || 'vídeo' : 'Lorenaamelo';
        } else if (url.hostname.endsWith('instagram.com')) { action = 'Abrir Instagram'; }
        else return;
        recordEngagement('Clique no site', { acao: action, destino: destination });
      } else if (button) {
        const label = button.getAttribute('aria-label') || button.textContent?.trim() || '';
        if (/Compartilhar/i.test(label)) recordEngagement('Clique no site', { acao: 'Compartilhar', destino: window.location.pathname });
        if (/Horários de culto/i.test(label)) recordEngagement('Clique no site', { acao: 'Horários de culto', destino: window.location.pathname });
      }
    };
    document.addEventListener('click', click, true);
    return () => document.removeEventListener('click', click, true);
  }, []);
  return null;
}
