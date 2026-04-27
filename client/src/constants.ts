import { Series, Episode } from './types';

// Configuration Variables
export const CHANNEL_URL = "https://www.youtube.com/@Lorenaamelo";
export const THUMBNAIL_TEMPLATE = "img.youtube.com/vi/{id}/maxresdefault.jpg";

// Initial Data
export const INITIAL_SERIES: Series[] = [
  {
    id: "rasgando-veu-coracao-2026",
    titulo: "Rasgando o Véu do Coração - Abril 2026",
    descricao: "Série sobre como lidar com a dureza do coração e buscar a cura interior.",
    destaque: false,
    ordem: 4,
    ano: 2026
  },
  {
    id: "raiz-invisivel-caos-2026",
    titulo: "A Raiz Invisível do Caos - Março 2026",
    descricao: "Série sobre a ordem que libera destino e a família como engrenagem da vida.",
    destaque: true,
    ordem: 3,
    ano: 2026
  },
  {
    id: "identidade-proposito-2026",
    titulo: "Identidade e Propósito - Fevereiro 2026",
    descricao: "Descobrindo quem somos e para o que fomos chamados.",
    destaque: false,
    ordem: 2,
    ano: 2026
  },
  {
    id: "orfaos-a-filho-2026",
    titulo: "De Órfãos a Filho - Janeiro 2026",
    descricao: "Uma jornada de cura interior, identidade e restauração da paternidade.",
    destaque: false,
    ordem: 1,
    ano: 2026
  },
  {
    id: "renove-se-2025",
    titulo: "Renove-se",
    descricao: "Série ministrada pela Pastora Lorena Melo abordando temas relacionados à renovação espiritual, cura interior e preparação para um novo ciclo.",
    destaque: false,
    ordem: 3,
    ano: 2025
  },
  {
    id: "sementes-2025",
    titulo: "Sementes que Geram Libertação Financeira",
    descricao: "Princípios bíblicos e práticos para uma vida financeira saudável e próspera.",
    destaque: false,
    ordem: 1,
    ano: 2025
  },
  {
    id: "identidade-proposito-2025",
    titulo: "Identidade e Propósito - Fevereiro 2025",
    descricao: "Descubra quem você é em Deus e qual o seu chamado.",
    destaque: false,
    ordem: 1,
    ano: 2025
  },
  {
    id: "odres-renovados-2025",
    titulo: "Odres Renovados - Janeiro 2025",
    descricao: "Série sobre a renovação do coração e a preparação para o novo de Deus.",
    destaque: false,
    ordem: 0,
    ano: 2025
  },
  {
    id: "marcas-nao-vistas-2025",
    titulo: "Marcas Não Vistas - Maio 2025",
    descricao: "Série sobre as marcas invisíveis e a cura interior.",
    destaque: false,
    ordem: 2,
    ano: 2025
  }
];

export const INITIAL_EPISODES: Episode[] = [
  // MARCAS NÃO VISTAS - MAIO 2025
  { 
    id: "marcas-nao-vistas-2025-1", 
    serieId: "marcas-nao-vistas-2025", 
    ordem: 1, 
    titulo: "MARCAS NÃO VISTAS | 1º SEMANA | 11 DE MAIO", 
    youtubeVideoId: "VoNphnBxFsw", 
    duracao: "1h", 
    descricaoCurta: "Semana 1: Marcas Não Vistas." 
  },
  { 
    id: "marcas-nao-vistas-2025-2", 
    serieId: "marcas-nao-vistas-2025", 
    ordem: 2, 
    titulo: "MARCAS NÃO VISTAS | 2º SEMANA | 18 DE MAIO", 
    youtubeVideoId: "BG3lBtcOxEM", 
    duracao: "1h", 
    descricaoCurta: "Semana 2: Marcas Não Vistas." 
  },
  { 
    id: "marcas-nao-vistas-2025-3", 
    serieId: "marcas-nao-vistas-2025", 
    ordem: 3, 
    titulo: "MARCAS NÃO VISTAS | 3º SEMANA | 25 DE MAIO", 
    youtubeVideoId: "O0SLmoyin48", 
    duracao: "1h", 
    descricaoCurta: "Semana 3: Marcas Não Vistas." 
  },

  // ODRES RENOVADOS - JANEIRO 2025
  { 
    id: "odres-renovados-2025-1", 
    serieId: "odres-renovados-2025", 
    ordem: 1, 
    titulo: "ODRES RENOVADOS | SEMANA 01 | SOZO", 
    youtubeVideoId: "NxSRxXVwQ7w", 
    duracao: "1h", 
    descricaoCurta: "Semana 1: Odres Renovados." 
  },
  { 
    id: "odres-renovados-2025-2", 
    serieId: "odres-renovados-2025", 
    ordem: 2, 
    titulo: "ODRES RENOVADOS | MOTIVAÇÃO CORROMPIDA | 2 SEMANA | SOZO", 
    youtubeVideoId: "VX8gj-mr_vQ", 
    duracao: "1h", 
    descricaoCurta: "Semana 2: Motivação Corrompida." 
  },
  { 
    id: "odres-renovados-2025-3", 
    serieId: "odres-renovados-2025", 
    ordem: 3, 
    titulo: "ODRES RENOVADOS | A VOZ DA JUSTIÇA | 3 SEMANA | SOZO", 
    youtubeVideoId: "_2VKg7C3jAc", 
    duracao: "1h", 
    descricaoCurta: "Semana 3: A Voz da Justiça." 
  },
  { 
    id: "odres-renovados-2025-4", 
    serieId: "odres-renovados-2025", 
    ordem: 4, 
    titulo: "ODRES RENOVADOS | A QUEDA QUE O CORAÇÃO NÃO VIU | SEMANA 4: 20 DE ABRIL", 
    youtubeVideoId: "I-KW7Ic2xmY", 
    duracao: "1h", 
    descricaoCurta: "Semana 4: A Queda que o Coração Não Viu." 
  },
  { 
    id: "odres-renovados-2025-5", 
    serieId: "odres-renovados-2025", 
    ordem: 5, 
    titulo: "ODRES RENOVADOS | A DOR DA REJEIÇÃO E O CONSOLO DO PAI | SEMANA 5: 27 DE ABRIL", 
    youtubeVideoId: "Eo3pvq7wp0o", 
    duracao: "1h", 
    descricaoCurta: "Semana 5: A Dor da Rejeição e o Consolo do Pai." 
  },
  { 
    id: "odres-renovados-2025-6", 
    serieId: "odres-renovados-2025", 
    ordem: 6, 
    titulo: "ODRES RENOVADOS | O CONVITE AO NOVO | 6º SEMANA", 
    youtubeVideoId: "3ners9WoYGg", 
    duracao: "1h", 
    descricaoCurta: "Semana 6: O Convite ao Novo." 
  },

  // RASGANDO O VÉU DO CORAÇÃO - ABRIL 2026
  { 
    id: "rasgando-veu-2026-4", 
    serieId: "rasgando-veu-coracao-2026", 
    ordem: 4, 
    titulo: "DO VÉU AO REINO : QUANDO O CORAÇÃO É TRANSFORMADO | RASGANDO O VÉU DO CORAÇÃO | 4º SEMANA", 
    youtubeVideoId: "KdzLMRWqESo", 
    duracao: "1h", 
    descricaoCurta: "Semana 4: Do véu ao reino: quando o coração é transformado." 
  },
  { 
    id: "rasgando-veu-2026-3", 
    serieId: "rasgando-veu-coracao-2026", 
    ordem: 3, 
    titulo: "QUANDO VOCÊ VIRA O PRÓPRIO PADRÃO | RASGANDO O VÉU DO CORAÇÂO | 3º SEMANA", 
    youtubeVideoId: "15AinWodPtQ", 
    duracao: "1h", 
    descricaoCurta: "Semana 3: Quando você vira o próprio padrão." 
  },
  { 
    id: "rasgando-veu-2026-2", 
    serieId: "rasgando-veu-coracao-2026", 
    ordem: 2, 
    titulo: "O PERIGO DE PARECER E NÃO SER | RASGANDO O VÉU DO CORAÇÂO | 2º SEMANA", 
    youtubeVideoId: "lAh6IqfVa3g", 
    duracao: "1h", 
    descricaoCurta: "Semana 2: O perigo de parecer e não ser." 
  },
  { 
    id: "rasgando-veu-2026-1", 
    serieId: "rasgando-veu-coracao-2026", 
    ordem: 1, 
    titulo: "QUANDO O CORAÇÃO SE TORNA DURO | RASGANDO O VÉU DO CORAÇÂO | 1º SEMANA", 
    youtubeVideoId: "QNFRK2R9ghk", 
    duracao: "1h", 
    descricaoCurta: "Semana 1: Quando o coração se torna duro." 
  },

  // A RAIZ INVISÍVEL DO CAOS - MARÇO 2026
  { 
    id: "raiz-caos-2026-5", 
    serieId: "raiz-invisivel-caos-2026", 
    ordem: 5, 
    titulo: "REPOSICIONANDO O CORAÇÃO | FAMÍLIA: ENGRENAGEM DA VIDA | SOZO 5º SEMANA", 
    youtubeVideoId: "_eL6NlX94eE", 
    duracao: "1h", 
    descricaoCurta: "Semana 5: Reposicionando o coração." 
  },
  { 
    id: "raiz-caos-2026-4", 
    serieId: "raiz-invisivel-caos-2026", 
    ordem: 4, 
    titulo: "O SILÊNCIO QUE DESTRÓI A CASA| FAMÍLIA: ENGRENAGEM DA VIDA | SOZO 4º SEMANA", 
    youtubeVideoId: "S-laZSQ2e9A", 
    duracao: "1h", 
    descricaoCurta: "Semana 4: O silêncio que destrói a casa." 
  },
  { 
    id: "raiz-caos-2026-3", 
    serieId: "raiz-invisivel-caos-2026", 
    ordem: 3, 
    titulo: "A RAIZ DE MUITAS FERIDAS EMOCIONAIS | FAMÍLIA: ENGRENAGEM DA VIDA | SOZO 3º SEMANA", 
    youtubeVideoId: "e2tAh9xKEUc", 
    duracao: "1h", 
    descricaoCurta: "Semana 3: A Raiz de Muitas Feridas Emocionais." 
  },
  { 
    id: "raiz-caos-2026-2", 
    serieId: "raiz-invisivel-caos-2026", 
    ordem: 2, 
    titulo: "POR QUE DEUS MANDOU HONRAR PAI E MÃE ? | FAMÍLIA: ENGRENAGEM DA VIDA | SOZO 2º SEMANA", 
    youtubeVideoId: "CNLR8rAgJSQ", 
    duracao: "1h", 
    descricaoCurta: "Semana 2: O Canal Invisível da Força." 
  },
  { 
    id: "raiz-caos-2026-1", 
    serieId: "raiz-invisivel-caos-2026", 
    ordem: 1, 
    titulo: "A RAIZ INVISÍVEL DO CAOS | FAMÍLIA: ENGRENAGEM DA VIDA | SOZO 1º SEMANA", 
    youtubeVideoId: "i5h-bUn60tM", 
    duracao: "57min", 
    descricaoCurta: "Semana 1: A ordem que libera destino." 
  },

  // IDENTIDADE E PROPÓSITO - FEVEREIRO 2026
  { 
    id: "identidade-2026-4", 
    serieId: "identidade-proposito-2026", 
    ordem: 4, 
    titulo: "IDENTIDADE E PROPÓSITO | SOZO | 4º SEMANA", 
    youtubeVideoId: "3zakyXohnv8", 
    duracao: "55min", 
    descricaoCurta: "Quarta semana da jornada sobre identidade e propósito." 
  },
  { 
    id: "identidade-2026-3", 
    serieId: "identidade-proposito-2026", 
    ordem: 3, 
    titulo: "IDENTIDADE E PROPÓSITO | SOZO | 3º SEMANA", 
    youtubeVideoId: "WTF58taNtJo", 
    duracao: "55min", 
    descricaoCurta: "Terceira semana da jornada sobre identidade e propósito." 
  },
  { 
    id: "identidade-2026-2", 
    serieId: "identidade-proposito-2026", 
    ordem: 2, 
    titulo: "IDENTIDADE E PROPÓSITO | SOZO | 2º SEMANA", 
    youtubeVideoId: "LdkPH0OEjOU", 
    duracao: "55min", 
    descricaoCurta: "Continuação da jornada sobre identidade e propósito." 
  },
  { 
    id: "identidade-2026-1", 
    serieId: "identidade-proposito-2026", 
    ordem: 1, 
    titulo: "IDENTIDADE E PROPÓSITO | SOZO | 1º SEMANA", 
    youtubeVideoId: "x6ZbZHPH98I", 
    duracao: "55min", 
    descricaoCurta: "Início da jornada sobre identidade e propósito." 
  },

  // DE ÓRFÃOS A FILHO - JANEIRO 2026 (Novos dados)
  { 
    id: "orfaos-2026-4", 
    serieId: "orfaos-a-filho-2026", 
    ordem: 4, 
    titulo: "QUANDO A CURA VIRA CHAMADO ! | DE ÓRFÃOS A FILHOS | SOZO | 4º SEMANA", 
    youtubeVideoId: "WAmwF7abBdg", 
    duracao: "58min", 
    descricaoCurta: "Quando a cura vira chamado." 
  },
  { 
    id: "orfaos-2026-3", 
    serieId: "orfaos-a-filho-2026", 
    ordem: 3, 
    titulo: "QUANDO VIVER CANSA MAIS DO QUE DEVERIA | DE ÓRFÃOS A FILHOS | SOZO | 3º SEMANA", 
    youtubeVideoId: "rUVGg845H_Q", 
    duracao: "54min 35s", 
    descricaoCurta: "Aprendendo um novo jeito de viver." 
  },
  { 
    id: "orfaos-2026-2", 
    serieId: "orfaos-a-filho-2026", 
    ordem: 2, 
    titulo: "POR QUE É TAO DIFICIL CONFIAR? | DE ÓRFÃOS A FILHOS | SOZO | 2º SEMANA", 
    youtubeVideoId: "A-X4HA_ZnvY", 
    duracao: "53min 38s", 
    descricaoCurta: "Confiança e cura interior na caminhada de filhos." 
  },
  { 
    id: "orfaos-2026-1", 
    serieId: "orfaos-a-filho-2026", 
    ordem: 1, 
    titulo: "A RAZÃO INVÍSIVEL POR TRÁS DAS DORES QUE INSISTEM EM VOLTAR | DE ÓRFÃOS A FILHOS | SOZO | 1º SEMANA", 
    youtubeVideoId: "iumK7-_2AV0", 
    duracao: "52min 46s", 
    descricaoCurta: "Raízes invisíveis por trás de dores recorrentes e restauração." 
  },

  // RENOVE-SE (2025)
  { id: "renove-1", serieId: "renove-se-2025", ordem: 4, titulo: "CORTE AS CORDAS DO PASSADO | RENOVE - SE | 4º SEMANA", youtubeVideoId: "ZQRhghykgSo", duracao: "1h 03min", descricaoCurta: "Cortar amarras e seguir leve para a próxima estação." },
  { id: "renove-2", serieId: "renove-se-2025", ordem: 3, titulo: "COMO DEUS CURA O QUE ME FERIU? | RENOVE-SE | 3º SEMANA", youtubeVideoId: "ruCpQobig1c", duracao: "46min 17s", descricaoCurta: "Cura, restauração e passos para recomeçar." },
  { id: "renove-3", serieId: "renove-se-2025", ordem: 2, titulo: "O QUE NÃO PODE IR COM VOCÊ PARA 2026? | RENOVE-SE | 2º SEMANA", youtubeVideoId: "Z_oUA7BJPb4", duracao: "47min 50s", descricaoCurta: "Ministração: Pra. Lorena Melo. Identifique pesos e escolhas para entrar em 2026 com clareza." },
  { id: "renove-4", serieId: "renove-se-2025", ordem: 1, titulo: "QUAIS PESOS VOCÊ CARREGOU EM 2025 ? | RENOVE-SE | 1º SEMANA", youtubeVideoId: "UI7bMHEboHA", duracao: "57min 05s", descricaoCurta: "Ministração: Pra. Lorena Melo. Reflexão e fechamento de ciclos: o que ficou de 2025." },

  // SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA (2025)
  { 
    id: "sementes-5", 
    serieId: "sementes-2025", 
    ordem: 5, 
    titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 5", 
    youtubeVideoId: "Sci4ctD_aIU", 
    duracao: "55min", 
    descricaoCurta: "Tema: A Semente da Generosidade - Baseada na história de Salomão e seus 1000 holocaustos (1 Reis 3:1-14)." 
  },
  { 
    id: "sementes-4", 
    serieId: "sementes-2025", 
    ordem: 4, 
    titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 4", 
    youtubeVideoId: "PFcNbZs0lCU", 
    duracao: "1h", 
    descricaoCurta: "Tema: O Monte da Provisão." 
  },
  { 
    id: "sementes-3", 
    serieId: "sementes-2025", 
    ordem: 3, 
    titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 3", 
    youtubeVideoId: "SRZ87Km_-1c", 
    duracao: "1h 10min", 
    descricaoCurta: "Tema: A Semente que gera multiplicação. Instagram: @cnaracaju" 
  },
  { 
    id: "sementes-2", 
    serieId: "sementes-2025", 
    ordem: 2, 
    titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 2", 
    youtubeVideoId: "ejzKhJfPK4E", 
    duracao: "49min", 
    descricaoCurta: "Tema: A Semente que abre o futuro." 
  },
  { 
    id: "sementes-1", 
    serieId: "sementes-2025", 
    ordem: 1, 
    titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 1", 
    youtubeVideoId: "Qs3QhSUCPjw", 
    duracao: "54min", 
    descricaoCurta: "Introdução à série sobre princípios de libertação financeira." 
  },

  // O ESTILO DE VIDA DOS FELIZES (2025)
  { 
    id: "felizes-4", 
    serieId: "estilo-vida-felizes-2025", 
    ordem: 4, 
    titulo: "SOZO: O ESTILO DE VIDA DOS FELIZES | SEMANA 4", 
    youtubeVideoId: "_Ak1EhamVR0", 
    duracao: "44min 18s", 
    descricaoCurta: "Estreou em 27 de outubro de 2025." 
  },
  { 
    id: "felizes-3", 
    serieId: "estilo-vida-felizes-2025", 
    ordem: 3, 
    titulo: "SOZO: O ESTILO DE VIDA DOS FELIZES | SEMANA 3", 
    youtubeVideoId: "jdTNB_r1iIQ", 
    duracao: "47min 24s", 
    descricaoCurta: "Ministrado em 20 de outubro de 2025." 
  },
  { 
    id: "felizes-2", 
    serieId: "estilo-vida-felizes-2025", 
    ordem: 2, 
    titulo: "SOZO: O ESTILO DE VIDA DOS FELIZES | SEMANA 2", 
    youtubeVideoId: "klyDYWjhQq0", 
    duracao: "48min 49s", 
    descricaoCurta: "Ministrado em 13 de outubro de 2025." 
  },
  { 
    id: "felizes-1", 
    serieId: "estilo-vida-felizes-2025", 
    ordem: 1, 
    titulo: "SOZO: O ESTILO DE VIDA DOS FELIZES | SEMANA 1", 
    youtubeVideoId: "2YgEJiYv6ZU", 
    duracao: "56min 04s", 
    descricaoCurta: "Ministrado em 6 de outubro de 2025." 
  }
];

// Helper to generate image URL
export const getThumbnailUrl = (videoId: string) => {
  return `https://${THUMBNAIL_TEMPLATE.replace('{id}', videoId)}`;
};
