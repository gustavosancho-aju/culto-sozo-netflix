export interface Devotional {
  title: string;
  passage: string;
  reflection: [string, string];
  practice: string;
  prayer: string;
}

export interface DevotionalWeek {
  number: number;
  startsOn: string;
  theme?: string;
  video?: { title: string; youtubeId: string };
  devotionals: Record<string, Devotional>;
}

// Each entry stays attached to its calendar date, so the same devotional is
// available every time someone opens that day during the week.
export const october2026Weeks: DevotionalWeek[] = [
  {
    number: 1,
    startsOn: '2026-10-05',
    theme: 'Aprovado',
    video: { title: 'SEMANA 1 | APROVADO', youtubeId: '80aB2_VlgNk' },
    devotionals: {
      '2026-10-05': {
        title: 'Comece pelo coração',
        passage: 'Salmo 139:23–24',
        reflection: [
          'Antes de pensar no que você precisa fazer, reserve um momento para perceber o que Deus está formando em você. A oração do salmista é um convite sincero para que o Senhor examine pensamentos, desejos e caminhos.',
          'Ser aprovado não é aparentar que está tudo resolvido. É permitir que Deus nos mostre, com amor, aquilo que precisa ser transformado. O primeiro passo desta semana é abrir o coração sem medo.',
        ],
        practice: 'Separe cinco minutos em silêncio. Anote uma área da sua vida que você deseja entregar a Deus nesta semana.',
        prayer: 'Senhor, examina o meu coração. Mostra-me o que precisa mudar e ajuda-me a acolher a tua direção. Amém.',
      },
      '2026-10-06': {
        title: 'Uma mente em renovação',
        passage: 'Romanos 12:2',
        reflection: [
          'A transformação começa também na maneira como pensamos. Nem toda voz que define nosso valor fala a verdade sobre nós; por isso, precisamos voltar à Palavra e aprender a reconhecer a vontade de Deus.',
          'Ao longo do dia, observe os pensamentos que têm guiado suas escolhas. A aprovação que mais importa não depende de comparação ou desempenho, mas de uma vida que se deixa renovar pelo Senhor.',
        ],
        practice: 'Identifique um pensamento que gera ansiedade. Escreva ao lado uma verdade bíblica que ajude você a responder a ele.',
        prayer: 'Deus, renova a minha mente. Que a tua verdade conduza minhas decisões hoje. Amém.',
      },
      '2026-10-07': {
        title: 'Permaneça antes de produzir',
        passage: 'João 15:4–5',
        reflection: [
          'Jesus nos chama a permanecer nele. O fruto não aparece porque o ramo se esforça sozinho, mas porque está unido à videira. A vida com Deus nasce dessa relação diária, inclusive nos dias comuns.',
          'Você não precisa provar seu valor pela quantidade de coisas que consegue realizar. Faça espaço para estar com Cristo antes de correr para as tarefas; dele vem a força para servir e crescer.',
        ],
        practice: 'Antes da primeira tarefa importante do dia, leia João 15:4–5 e faça uma pausa de oração.',
        prayer: 'Jesus, ensina-me a permanecer em ti. Que meu trabalho de hoje nasça da tua presença. Amém.',
      },
      '2026-10-08': {
        title: 'Crescer no processo',
        passage: 'Tiago 1:2–4',
        reflection: [
          'Há processos que preferiríamos evitar. Tiago nos lembra que a perseverança pode amadurecer a fé mesmo em meio às provações. Isso não torna a dor pequena, mas nos lembra de que Deus continua presente nela.',
          'Talvez você ainda esteja esperando uma resposta. Hoje, em vez de medir a própria vida apenas pelo resultado, reconheça o cuidado de Deus nos passos que já conseguiu dar.',
        ],
        practice: 'Escreva uma dificuldade atual e uma pequena atitude de perseverança que você pode tomar hoje.',
        prayer: 'Pai, sustenta-me no processo. Dá-me sabedoria e firmeza para seguir contigo, um dia de cada vez. Amém.',
      },
      '2026-10-09': {
        title: 'Amado antes de agir',
        passage: 'Mateus 3:16–17',
        reflection: [
          'No batismo de Jesus, a declaração do Pai vem antes do início do seu ministério público. Essa cena nos convida a lembrar que a identidade precede a atividade: nossa relação com Deus não é uma recompensa por produtividade.',
          'Quando você sentir a pressão de conquistar aprovação, volte sua atenção para Cristo. Nele, somos chamados a viver como filhos amados, com confiança para obedecer e liberdade para descansar.',
        ],
        practice: 'Faça uma pausa e escreva: “Meu valor não depende do meu desempenho”. Releia essa frase quando a cobrança aparecer.',
        prayer: 'Pai, firma minha identidade em ti. Liberta-me da necessidade de provar meu valor a todo momento. Amém.',
      },
      '2026-10-10': {
        title: 'A obra continua',
        passage: 'Filipenses 1:6',
        reflection: [
          'O crescimento espiritual não se encerra em uma semana. Paulo expressa confiança em Deus, que começa uma boa obra e permanece fiel para conduzi-la adiante. Isso nos dá esperança quando ainda vemos áreas inacabadas.',
          'Olhe para esta semana com gratidão, sem exigir perfeição de si mesmo. Deus segue trabalhando em você; o próximo passo de fidelidade pode ser simples e possível hoje.',
        ],
        practice: 'Registre uma mudança, mesmo pequena, que você percebeu nesta semana. Agradeça a Deus por ela.',
        prayer: 'Senhor, obrigado porque não abandonas a obra das tuas mãos. Continua a moldar meu coração. Amém.',
      },
      '2026-10-11': {
        title: 'Disponível para servir',
        passage: 'Efésios 2:10',
        reflection: [
          'Somos obra de Deus, chamados a uma vida que se expressa em boas obras. O serviço não precisa ser uma tentativa de ganhar aceitação; ele pode ser uma resposta alegre ao que Deus já faz em nós.',
          'Ao encerrar a semana, lembre-se de alguém ao seu redor. O cuidado de Deus que alcançou seu coração também pode chegar a outra pessoa por meio de um gesto concreto de amor.',
        ],
        practice: 'Escolha uma pessoa e demonstre cuidado hoje: uma mensagem, uma visita, uma escuta atenta ou ajuda prática.',
        prayer: 'Deus, obrigado pelo que estás formando em mim. Usa minha vida para cuidar de alguém nesta semana. Amém.',
      },
    },
  },
  { number: 2, startsOn: '2026-10-12', devotionals: {} },
  { number: 3, startsOn: '2026-10-19', devotionals: {} },
  { number: 4, startsOn: '2026-10-26', devotionals: {} },
];

export const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'] as const;

export function datesForWeek(startsOn: string): string[] {
  const [year, month, day] = startsOn.split('-').map(Number);
  return Array.from({ length: 7 }, (_, offset) =>
    new Date(Date.UTC(year, month - 1, day + offset)).toISOString().slice(0, 10),
  );
}

export function brazilToday(): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const part = (type: string) => parts.find(item => item.type === type)?.value ?? '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}
