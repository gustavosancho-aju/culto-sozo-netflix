import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Play, X } from 'lucide-react';
import SupportCard from './SupportCard';

type RequestSupport = (onContinue: () => void) => void;
const Context = createContext<RequestSupport | null>(null);

export function useSupportGate(): RequestSupport {
  const gate = useContext(Context);
  if (!gate) throw new Error('SupportGateProvider ausente');
  return gate;
}

export function SupportGateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const continuation = useRef<(() => void) | null>(null);
  const request = useCallback<RequestSupport>((onContinue) => {
    continuation.current = onContinue;
    setOpen(true);
  }, []);
  const finish = useCallback(() => {
    const next = continuation.current;
    continuation.current = null;
    setOpen(false);
    next?.();
  }, []);
  return <Context.Provider value={request}>
    {children}
    <Dialog.Root open={open} onOpenChange={next => { if (!next) finish(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[130] bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[140] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[620px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-[#111110] p-2 text-white shadow-2xl outline-none">
          <Dialog.Title className="sr-only">Apoie o Culto Sozo</Dialog.Title>
          <Dialog.Description className="sr-only">Informações ilustrativas de apoio. Feche para continuar ao vídeo.</Dialog.Description>
          <Dialog.Close asChild><button type="button" aria-label="Fechar e continuar ao vídeo" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/80 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X className="h-5 w-5" /></button></Dialog.Close>
          <SupportCard compact />
          <button type="button" onClick={finish} className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#d8c18d] px-5 py-2.5 text-sm font-bold text-[#211c12] hover:bg-[#eddbb1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><Play className="h-4 w-4 fill-current" aria-hidden="true" /> Continuar para o vídeo</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </Context.Provider>;
}

export function useExternalVideoGate() {
  const request = useSupportGate();
  return useCallback((url: string) => request(() => { window.open(url, '_blank', 'noopener,noreferrer'); }), [request]);
}
