import { Series, Episode } from './types';

// Configuration Variables
export const CHANNEL_URL = "https://www.youtube.com/@Lorenaamelo";
export const THUMBNAIL_TEMPLATE = "img.youtube.com/vi/{id}/maxresdefault.jpg";

// Initial Data
export const INITIAL_SERIES: Series[] = [
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
    id: "estilo-vida-felizes-2025",
    titulo: "O Estilo de Vida dos Felizes",
    descricao: "Uma série sobre os princípios do Reino para uma vida plena e feliz.",
    destaque: false,
    ordem: 2,
    ano: 2025
  }
];

export const INITIAL_EPISODES: Episode[] = [
  // A RAIZ INVISÍVEL DO CAOS - MARÇO 2026
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
