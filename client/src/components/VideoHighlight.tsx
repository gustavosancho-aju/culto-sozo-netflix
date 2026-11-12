import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Play, X } from 'lucide-react';
import { recordEngagement } from '../lib/engagementAnalytics';

const videoUrl = 'https://youtu.be/uRkACTK7v4U?is=W9qoc80XvKNjip2g';
const seenKey = 'sozo-video-destaque-uRkACTK7v4U';

export default function VideoHighlight() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { if (sessionStorage.getItem(seenKey)) return; } catch { /* Disponível também sem armazenamento. */ }
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    try { sessionStorage.setItem(seenKey, '1'); } catch { /* O visitante ainda pode fechar o aviso. */ }
  }

  function watch() {
    recordEngagement('Vídeo em destaque acessado', { video: 'uRkACTK7v4U' });
    close();
  }

  return (
    <Dialog.Root open={open} onOpenChange={next => { if (!next) close(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[110] w-[calc(100%-2rem)] max-w-[720px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#b79e68]/40 bg-[#1a1916] text-white shadow-2xl outline-none">
          <Dialog.Title className="sr-only">Vídeo em destaque</Dialog.Title>
          <Dialog.Description className="sr-only">Assista ao vídeo em destaque no YouTube. O link abre em uma nova aba.</Dialog.Description>
          <Dialog.Close asChild>
            <button type="button" aria-label="Fechar destaque" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/80 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X className="h-5 w-5" /></button>
          </Dialog.Close>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" onClick={watch} aria-label="Assistir ao vídeo em destaque no YouTube (abre em nova aba)" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white">
            <img src="/brand/de-bem-com-a-vida.jpg" alt="De Bem com a Vida, com Juciara Peixoto" width={1170} height={640} className="h-auto w-full" />
          </a>
          <div className="flex flex-col items-start justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6bd81]">Vídeo em destaque</p><p className="mt-1 text-xl font-bold">De Bem com a Vida</p></div>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer" onClick={watch} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#d8c18d] px-5 py-2.5 text-sm font-bold text-[#211c12] hover:bg-[#eddbb1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Play className="h-4 w-4 fill-current" aria-hidden="true" /> Assistir no YouTube</a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
