import { QrCode } from 'lucide-react';

type Props = { compact?: boolean };
export default function SupportCard({ compact = false }: Props) {
  return (
    <section aria-label="Apoie o Culto Sozo" className={`overflow-hidden rounded-2xl border border-[#b79e68]/40 bg-gradient-to-br from-[#2b261d] via-[#1d1b17] to-[#111110] text-white shadow-xl ${compact ? 'p-4 sm:p-6' : 'p-5 sm:p-8'}`}>
      <div className="flex flex-wrap items-center gap-5 sm:gap-8">
        <img src="/brand/lorena-melo.png" alt="Lorena Melo" width={2048} height={1284} className="h-auto w-24 shrink-0 sm:w-32" />
        <div className="min-w-0 flex-1 basis-48">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8c18d]">Culto Sozo</p>
          <h2 className={`mt-2 font-bold leading-tight text-[#f5e8ca] ${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}`}>Apoie este ministério</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">Sua contribuição ajuda a levar esta mensagem a mais pessoas.</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-[#b79e68]/25 pt-5 sm:gap-6">
        <div className="flex w-20 flex-col items-center gap-1 sm:w-24">
          <div className="relative grid h-20 w-20 place-items-center rounded-lg bg-[#eee8d8] text-[#26221b] sm:h-24 sm:w-24" aria-label="QR ilustrativo, não disponível para pagamentos">
            <QrCode className="h-14 w-14 opacity-70 sm:h-16 sm:w-16" aria-hidden="true" />
            <span className="absolute bottom-1 rounded bg-[#282016] px-1 text-[9px] font-bold tracking-wider text-white">EXEMPLO</span>
          </div>
          <span className="text-center text-[10px] text-zinc-400">QR ilustrativo</span>
        </div>
        <div className="min-w-0 text-sm leading-relaxed text-zinc-200">
          <div className="grid gap-3 sm:grid-cols-2">
            <div><p className="font-bold text-[#e4d2a6]">Conta 1</p><p>Banco, agência e conta: a informar</p></div>
            <div><p className="font-bold text-[#e4d2a6]">Conta 2</p><p>Banco, agência e conta: a informar</p></div>
          </div>
          <p className="mt-3"><span className="font-bold text-[#e4d2a6]">Chave Pix:</span> a informar</p>
        </div>
      </div>
      <p className="mt-4 rounded-md border border-[#d8c18d]/30 bg-black/25 px-3 py-2 text-xs leading-relaxed text-[#f0dfba]">Dados ilustrativos. As informações para contribuição ainda serão disponibilizadas.</p>
    </section>
  );
}
