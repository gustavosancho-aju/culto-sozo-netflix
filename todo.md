# Culto Sozo Netflix — TODO

## Concluído

- [x] Séries e episódios migrados do constants.ts para banco de dados MySQL (16 séries, 63+ episódios)
- [x] Backend tRPC com endpoints content.seriesWithEpisodes, content.allEpisodes, content.seriesList
- [x] Frontend migrado para consumir dados via tRPC (Home.tsx, SeriesDetails.tsx, EpisodePlayer.tsx, Testimonials.tsx)
- [x] Sistema de sincronização automática com YouTube (youtubeSync.ts) — toda terça-feira via Heartbeat cron
- [x] Painel Admin (/admin) com histórico de sincronizações e botão "Sincronizar Agora"
- [x] Sistema de Testemunhos com formulário, feed público, curtidas animadas, moderação no Admin
- [x] Botão de compartilhamento (WhatsApp, Facebook, Twitter, copiar link) com feedback visual
- [x] Selo "NOVO" animado no card da série com último vídeo sincronizado
- [x] Função parseEpisodeTitle() melhorada para suportar múltiplos formatos de título
- [x] youtubeSync.ts corrigido para salvar episodeTitle (título real) em vez de rawTitle no banco
- [x] Corrigir no banco os títulos de todos os 63 episódios que estavam no formato antigo (com pipe)
- [x] Corrigir títulos específicos de episódios com títulos genéricos (sementes, felizes, transformados, etc.)
- [x] Episódio livres-para-prosperar-2026-ep3 corrigido: "O MAIOR ERRO QUE AS PESSOAS COMETEM NA CRISE"
