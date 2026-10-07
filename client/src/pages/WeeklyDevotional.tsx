import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Heart, Play, Sparkles } from 'lucide-react';
import { brazilToday, datesForWeek, october2026Weeks, weekDays } from '../data/weeklyDevotionals';
import { trpc } from '@/lib/trpc';

const monthNames = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

function shortDate(isoDate: string): string {
  const [, month, day] = isoDate.split('-').map(Number);
  return `${day} ${monthNames[month - 1]}`;
}

function dateRange(startsOn: string): string {
  const [first, , , , , , last] = datesForWeek(startsOn);
  const firstMonth = first.slice(5, 7);
  const lastMonth = last.slice(5, 7);
  return firstMonth === lastMonth
    ? `${Number(first.slice(8))}–${shortDate(last)}`
    : `${shortDate(first)} – ${shortDate(last)}`;
}

const WeeklyDevotional: React.FC = () => {
  const today = brazilToday();
  const [weekIndex, setWeekIndex] = useState(() => {
    const current = october2026Weeks.findIndex(week => datesForWeek(week.startsOn).includes(today));
    return current < 0 ? 0 : current;
  });
  const [selectedDate, setSelectedDate] = useState(() => {
    const current = october2026Weeks.find(week => datesForWeek(week.startsOn).includes(today));
    return current ? today : october2026Weeks[0].startsOn;
  });

  const week = october2026Weeks[weekIndex];
  const dates = datesForWeek(week.startsOn);
  const devotional = week.devotionals[selectedDate];
  const selectedDay = weekDays[dates.indexOf(selectedDate)];
  const { data: episodes } = trpc.content.allEpisodes.useQuery(undefined, { staleTime: 5 * 60 * 1000 });
  const videoTitle = week.video
    ? episodes?.find(episode => episode.youtubeVideoId === week.video?.youtubeId)?.titulo?.trim() || week.video.title
    : '';

  function selectWeek(index: number) {
    const nextDates = datesForWeek(october2026Weeks[index].startsOn);
    setWeekIndex(index);
    setSelectedDate(nextDates.includes(today) ? today : nextDates[0]);
  }

  return (
    <main className="min-h-screen bg-[#141414] pb-16 pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500">
          <ArrowLeft className="h-4 w-4" /> Voltar ao início
        </Link>

        <header className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e] px-6 py-10 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#E50914]/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ff636b]">
              <Sparkles className="h-4 w-4" /> Culto Sozo · Outubro 2026
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">Devocional semanal</h1>
            <p className="mt-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              Quatro semanas para caminhar com a Palavra. Escolha uma semana e, depois, um dia de segunda a domingo para abrir o devocional.
            </p>
          </div>
        </header>

        <section className="mt-12" aria-labelledby="weeks-heading">
          <div className="mb-5 flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-[#E50914]" />
            <h2 id="weeks-heading" className="text-xl font-bold text-white md:text-2xl">As quatro semanas</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {october2026Weeks.map((item, index) => {
              const isSelected = weekIndex === index;
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => selectWeek(index)}
                  aria-pressed={isSelected}
                  className={`min-h-36 rounded-xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 md:p-5 ${isSelected ? 'border-[#E50914] bg-[#2a1719] shadow-[inset_0_0_0_1px_#E50914]' : 'border-white/10 bg-[#202020] hover:border-white/30 hover:bg-[#292929]'}`}
                >
                  <span className={`text-xs font-bold uppercase tracking-widest ${isSelected ? 'text-[#ff777d]' : 'text-zinc-400'}`}>
                    {item.theme ? item.theme : 'Em preparação'}
                  </span>
                  <span className="mt-3 block text-xl font-bold text-white md:text-2xl">Semana {item.number}</span>
                  <span className="mt-2 block text-sm text-zinc-300">{dateRange(item.startsOn)}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="days-heading">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#ff777d]">Semana {week.number} · {dateRange(week.startsOn)}</p>
              <h2 id="days-heading" className="mt-2 text-2xl font-bold text-white md:text-3xl">Escolha um dia</h2>
            </div>
            {week.theme && <span className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-zinc-300">Tema: {week.theme}</span>}
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7" aria-label={`Dias da semana ${week.number}`}>
            {dates.map((date, index) => {
              const isSelected = selectedDate === date;
              return (
                <button
                  key={date}
                  type="button"
                  onClick={() => setSelectedDate(date)}
                  aria-pressed={isSelected}
                  aria-current={today === date ? 'date' : undefined}
                  className={`min-h-24 rounded-xl border px-3 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${isSelected ? 'border-[#E50914] bg-[#E50914] text-white' : 'border-white/10 bg-[#222] text-zinc-200 hover:border-white/40 hover:bg-[#2c2c2c]'}`}
                >
                  <span className="block text-xs font-bold uppercase tracking-wide opacity-80">{weekDays[index]}</span>
                  <span className="mt-2 block text-lg font-bold">{shortDate(date)}</span>
                  {today === date && <span className="mt-1 block text-xs font-medium">Hoje</span>}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-7" aria-live="polite" aria-label={`Devocional de ${selectedDay}, ${shortDate(selectedDate)}`}>
          {devotional ? (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
              <article className="rounded-2xl border border-white/10 bg-[#202020] p-6 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff777d]">{selectedDay} · {shortDate(selectedDate)}{devotional.format !== 'document' && ` · Devocional ${dates.indexOf(selectedDate) + 1}/7`}</p>
                {devotional.format === 'document' && <p className="mt-5 text-sm font-bold uppercase tracking-wide text-zinc-300">{devotional.label}</p>}
                <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">{devotional.title}</h3>
                {devotional.format === 'document' ? (
                  <div className="mt-9 space-y-9">
                    {devotional.sections.map(section => (
                      <section key={section.title} aria-label={section.title}>
                        <h4 className="text-lg font-bold text-white">{section.title}</h4>
                        {section.kind === 'questions' ? (
                          <ol className="mt-4 list-decimal space-y-6 pl-6 text-base leading-8 text-zinc-300 marker:font-bold marker:text-[#ff777d]">
                            {section.paragraphs.map(paragraph => <li key={paragraph} className="pl-1">{paragraph}</li>)}
                          </ol>
                        ) : section.kind === 'verse' ? (
                          <blockquote className="mt-4 text-base italic leading-8 text-zinc-200">
                            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                          </blockquote>
                        ) : (
                          section.paragraphs.map((paragraph, index) => (
                            <p key={paragraph} className={`${section.kind === 'takeaway' && index > 0 ? 'mt-1' : 'mt-4'} text-base leading-8 ${section.kind === 'takeaway' ? 'font-medium text-white' : 'text-zinc-300'}`}>{paragraph}</p>
                          ))
                        )}
                      </section>
                    ))}
                  </div>
                ) : (
                  <>
                  <div className="mt-7 flex items-center gap-3 rounded-lg border border-white/10 bg-black/25 px-4 py-4">
                    <BookOpen className="h-6 w-6 shrink-0 text-[#ff666d]" />
                    <div><span className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">Leitura bíblica</span><strong className="text-white">{devotional.passage}</strong></div>
                  </div>

                  <div className="mt-9">
                    <h4 className="text-lg font-bold text-white">Para meditar</h4>
                    {devotional.reflection.map((paragraph, index) => <p key={index} className="mt-4 text-base leading-8 text-zinc-300">{paragraph}</p>)}
                  </div>

                  <div className="mt-9 grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                      <h4 className="flex items-center gap-2 font-bold text-white"><Sparkles className="h-4 w-4 text-[#ff666d]" /> Coloque em prática</h4>
                      <p className="mt-3 leading-relaxed text-zinc-300">{devotional.practice}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                      <h4 className="flex items-center gap-2 font-bold text-white"><Heart className="h-4 w-4 text-[#ff666d]" /> Oração</h4>
                      <p className="mt-3 leading-relaxed text-zinc-300">{devotional.prayer}</p>
                    </div>
                  </div>
                  </>
                )}
              </article>

              {week.video && (
                <aside className="self-start overflow-hidden rounded-2xl border border-white/10 bg-[#202020]">
                  <div className="aspect-video bg-black">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${week.video.youtubeId}`}
                      title={videoTitle}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#ff777d]">Mensagem da semana</p>
                    <h4 className="mt-2 text-xl font-bold text-white">{videoTitle}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">As reflexões desta semana foram inspiradas no tema da mensagem.</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${week.video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    >
                      <Play className="h-4 w-4 fill-current" /> Ver no YouTube <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </aside>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#202020] p-6 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff777d]">{selectedDay} · {shortDate(selectedDate)}</p>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">Devocional em preparação</h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">Este dia já está reservado. Assim que o tema da Semana {week.number} for definido, o devocional aparecerá aqui.</p>
              <div className="mt-7 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-4">
                {['Leitura bíblica', 'Para meditar', 'Coloque em prática', 'Oração'].map(label => (
                  <div key={label} className="rounded-lg border border-dashed border-white/20 px-4 py-4">{label}</div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default WeeklyDevotional;
