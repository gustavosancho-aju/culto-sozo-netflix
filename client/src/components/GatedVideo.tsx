import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useSupportGate } from './SupportGate';

type Props = { videoId: string; title: string; autoRequest?: boolean; fullScreen?: boolean };
export default function GatedVideo({ videoId, title, autoRequest = false, fullScreen = false }: Props) {
  const [started, setStarted] = useState(false);
  const requested = useRef(false);
  const request = useSupportGate();
  useEffect(() => {
    if (autoRequest && !requested.current) {
      requested.current = true;
      request(() => setStarted(true));
    }
  }, [autoRequest, request]);
  if (started) return <iframe
    src={`https://${fullScreen ? 'www.youtube.com' : 'www.youtube-nocookie.com'}/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="h-full w-full"
  />;
  return <button type="button" onClick={() => request(() => setStarted(true))} aria-label={`Assistir: ${title}`} className="group relative grid h-full w-full place-items-center overflow-hidden bg-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white">
    <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
    <span className="relative z-10 flex items-center gap-2 rounded-lg bg-black/80 px-5 py-3 text-sm font-bold shadow-lg group-hover:bg-[#b79e68] group-hover:text-black"><Play className="h-5 w-5 fill-current" aria-hidden="true" /> Assistir mensagem</span>
  </button>;
}
