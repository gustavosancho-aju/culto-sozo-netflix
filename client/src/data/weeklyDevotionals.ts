export interface StandardDevotional {
  format?: 'standard';
  title: string;
  passage: string;
  reflection: [string, string];
  practice: string;
  prayer: string;
}

export interface DocumentDevotional {
  format: 'document';
  label: string;
  title: string;
  sections: {
    title: string;
    kind: 'verse' | 'text' | 'questions' | 'takeaway';
    paragraphs: string[];
  }[];
}

export type Devotional = StandardDevotional | DocumentDevotional;

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
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 1",
        "title": "CHAMADO NÃO É ATESTADO DE MATURIDADE",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Procure apresentar-se a Deus aprovado, como obreiro que não tem do que se envergonhar e que maneja corretamente a palavra da verdade.” (2 Timóteo 2:15)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já pensou que, porque Deus chamou você para alguma coisa, isso significava que você já estava pronto para vivê-la?",
              "Existe uma diferença entre receber um chamado e estar preparado para sustentar aquilo para o qual fomos chamados. Essa é uma das primeiras verdades trabalhadas na mensagem: o chamado pode ser verdadeiro e, ainda assim, existirem áreas dentro de nós que precisam amadurecer."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando Deus coloca algo em nosso coração, normalmente ficamos empolgados com aquilo que Ele poderá fazer através de nós.",
              "Queremos viver a promessa. Queremos avançar. Queremos ver aquilo acontecer.",
              "Mas existe uma parte dessa caminhada que nem sempre nos empolga da mesma maneira: o processo de nos tornarmos capazes de sustentar aquilo que desejamos viver.",
              "Davi foi escolhido por Deus quando ainda estava cuidando de ovelhas. A escolha era verdadeira. A unção era verdadeira. Mas ele não saiu daquele campo diretamente para o trono. Existiam coisas que ainda seriam construídas dentro dele durante o caminho.",
              "Talvez seja aqui que muitas vezes nos confundimos.",
              "Pensamos que o processo significa que algo deu errado, quando, na verdade, o processo pode ser justamente uma evidência de que Deus está nos preparando para aquilo que Ele já decidiu fazer.",
              "Você pode ter um chamado para liderar e ainda precisar aprender a lidar com oposição. Pode desejar influenciar pessoas e ainda precisar aprender a receber correção. Pode carregar uma promessa e ainda precisar amadurecer emocionalmente para não destruir, com suas próprias reações, aquilo que tanto pediu para viver.",
              "Por isso, talvez a pergunta de hoje não seja apenas: “Deus, quando aquilo que o Senhor me prometeu vai acontecer?”",
              "Talvez exista uma pergunta ainda mais importante: “Deus, quem eu preciso me tornar para sustentar aquilo que o Senhor deseja colocar em minhas mãos?”",
              "O chamado aponta para aquilo que Deus deseja fazer através de você. O processo trabalha aquilo que Deus precisa fazer em você. E os dois fazem parte da mesma história."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma área da minha vida em que estou mais preocupado em avançar do que em amadurecer?",
              "Quando Deus usa pessoas, esperas, correções ou frustrações para me tratar, eu reconheço o processo ou interpreto tudo como um impedimento?",
              "O que minhas reações atuais revelam sobre algo em mim que talvez ainda não esteja preparado para sustentar aquilo que desejo viver?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, escolha uma área em que você deseja muito avançar, família, profissão, ministério relacionamentos, finanças ou algum projeto pessoal.",
              "Em vez de perguntar apenas: “O que falta acontecer para eu chegar lá?”",
              "Pergunte: “O que ainda precisa ser desenvolvido em mim para que eu esteja preparado quando chegar lá?”",
              "Não tente responder rapidamente. Dê espaço para o Espírito Santo mostrar algo que talvez você ainda não tenha percebido."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, eu reconheço que ser chamado não significa que já estou pronto. Não quero apenas chegar aos lugares que o Senhor preparou para mim; quero me tornar alguém capaz de sustentá-los.",
              "Mostra-me o que ainda precisa amadurecer em mim. Confronta minhas motivações, minhas reações e aquilo que ainda precisa ser transformado. Dá-me humildade para não fugir dos processos que o Senhor está usando para me formar.",
              "Antes de fazer a Tua obra, eu reconheço que sou a Tua obra.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "O chamado revela para onde Deus quer levar você.",
              "O processo revela quem você precisa se tornar para chegar lá."
            ]
          }
        ]
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
