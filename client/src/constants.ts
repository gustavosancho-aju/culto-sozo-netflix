import { Series, Episode } from './types';

// Configuration Variables
export const CHANNEL_URL = "https://www.youtube.com/@Lorenaamelo";
export const THUMBNAIL_TEMPLATE = "img.youtube.com/vi/{id}/maxresdefault.jpg";

// Initial Data
export const INITIAL_SERIES: Series[] = [
  {
    id: "sozo-2026",
    titulo: "SOZO 2026",
    descricao: "Uma jornada de renovação espiritual e emocional para o novo ano.",
    destaque: true,
    ordem: 1
  },
  {
    id: "sozo-2025",
    titulo: "SOZO 2025",
    descricao: "Séries e mensagens que marcaram o ano de 2025.",
    destaque: false,
    ordem: 2
  }
];

export const INITIAL_EPISODES: Episode[] = [
  // SOZO 2026 (Renove-se)
  { id: "renove-1", serieId: "sozo-2026", ordem: 1, titulo: "CORTE AS CORDAS DO PASSADO | RENOVE - SE | 4º SEMANA", youtubeVideoId: "ZQRhghykgSo", duracao: "1h 03min", descricaoCurta: "Cortar amarras e seguir leve para a próxima estação." },
  { id: "renove-2", serieId: "sozo-2026", ordem: 2, titulo: "COMO DEUS CURA O QUE ME FERIU? | RENOVE-SE | 3º SEMANA", youtubeVideoId: "ruCpQobig1c", duracao: "46min 17s", descricaoCurta: "Cura, restauração e passos para recomeçar." },
  { id: "renove-3", serieId: "sozo-2026", ordem: 3, titulo: "O QUE NÃO PODE IR COM VOCÊ PARA 2026? | RENOVE-SE | 2º SEMANA", youtubeVideoId: "Z_oUA7BJPb4", duracao: "47min 50s", descricaoCurta: "Identifique pesos e escolhas para entrar em 2026 com clara." },
  { id: "renove-4", serieId: "sozo-2026", ordem: 4, titulo: "QUAIS PESOS VOCÊ CARREGOU EM 2025 ? | RENOVE-SE | 1º SEMANA", youtubeVideoId: "UI7bMHEboHA", duracao: "57min 05s", descricaoCurta: "Reflexão e fechamento de ciclos: o que ficou de 2025." },

  // SOZO 2025 (De Órfãos a Filho & Sementes)
  { id: "orfaos-1", serieId: "sozo-2025", ordem: 1, titulo: "POR QUE É TÃO DIFÍCIL CONFIAR? | SOZO | DE ORFÃOS A FILHO | 2º Semana", youtubeVideoId: "A-X4HA_ZnvY", duracao: "53min 38s", descricaoCurta: "Confiança e cura interior na caminhada de filhos." },
  { id: "orfaos-2", serieId: "sozo-2025", ordem: 2, titulo: "A RAZÃO INVÍSIVEL POR TRÁS DAS DORES QUE INSISTEM EM VOLTAR", youtubeVideoId: "iumK7-_2AV0", duracao: "52min 46s", descricaoCurta: "Raízes invisíveis por trás de dores recorrentes e restauração." },
  { id: "orfaos-3", serieId: "sozo-2025", ordem: 3, titulo: "QUANDO VIVER CANSA MAIS DO QUE DEVERIA | DE ORFÃOS A FILHOS | SOZO", youtubeVideoId: "rUVGg845H_Q", duracao: "54min 35s", descricaoCurta: "Aprendendo um novo jeito de viver quando a vida pesa demais." },
  { id: "sementes-1", serieId: "sozo-2025", ordem: 4, titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 5", youtubeVideoId: "Sci4ctD_aIU", duracao: "55min 59s", descricaoCurta: "Princípios e práticas para fortalecer sua vida financeira." },
  { id: "sementes-2", serieId: "sozo-2025", ordem: 5, titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 4", youtubeVideoId: "PFcNbZs0lCU", duracao: "1h 00min 28s", descricaoCurta: "Mentalidade, fé e responsabilidade." },
  { id: "sementes-3", serieId: "sozo-2025", ordem: 6, titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 3", youtubeVideoId: "SRZ87Km_-1c", duracao: "1h 10min 55s", descricaoCurta: "Passos práticos para sair de ciclos e construir constância." },
  { id: "sementes-4", serieId: "sozo-2025", ordem: 7, titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 2", youtubeVideoId: "ejzKhJfPK4E", duracao: "49min 18s", descricaoCurta: "Fundamentos para organizar e semear com sabedoria." },
  { id: "sementes-5", serieId: "sozo-2025", ordem: 8, titulo: "SEMENTES QUE GERAM LIBERTAÇÃO FINANCEIRA | SEMANA 1", youtubeVideoId: "Qs3QhSUCPjw", duracao: "54min 02s", descricaoCurta: "Introdução: visão, propósito e primeiros passos." }
];

// Helper to generate image URL
export const getThumbnailUrl = (videoId: string) => {
  return `https://${THUMBNAIL_TEMPLATE.replace('{id}', videoId)}`;
};
