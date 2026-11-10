import React from 'react';
import { Link } from 'wouter';
import { Play } from 'lucide-react';

export default function NewMessageHero({ image, episodeId }: { image: string; episodeId: string }) {
  return (
    <section className="relative w-full bg-black" aria-label="Nova mensagem">
      <img src={image} alt="Os Segredos de uma Vida Próspera — Semana 2: O que você ainda não conseguiu entregar?" className="block w-full max-h-[75vh] object-contain" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-16 md:px-12 md:pb-8">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl">Novo</h1>
        <Link href={`/episodio/${episodeId}`} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded bg-white px-4 py-2 font-bold text-black transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <Play className="h-4 w-4 fill-black" aria-hidden="true" /> Assistir
        </Link>
      </div>
    </section>
  );
}
