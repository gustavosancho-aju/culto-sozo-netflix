import React from 'react';

export default function UpcomingHero({ image }: { image: string }) {
  return (
    <section className="relative w-full bg-black" aria-label="Próxima mensagem">
      <img src={image} alt="Os Segredos de uma Vida Próspera — Semana 2: O que você ainda não conseguiu entregar?" className="block w-full max-h-[75vh] object-contain" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-16 md:px-12 md:pb-8">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-5xl">Em breve</h1>
      </div>
    </section>
  );
}
