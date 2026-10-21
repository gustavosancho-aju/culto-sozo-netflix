# Operação e automações — Culto Sozo

Este documento registra o funcionamento operacional da plataforma **Culto Sozo Netflix**, a origem do conteúdo exibido e os limites entre o que é versionado no repositório e o que permanece configurado nos serviços gerenciados.

## Conteúdo e catálogo

O catálogo é disponibilizado pelas rotas tRPC. Com `DATABASE_URL`, a fonte principal é PostgreSQL; sem essa variável, a API lê o catálogo histórico de `data/catalogo-conteudo.json`. Cadastros editoriais confirmados em `data/catalogo-atualizacoes.json` complementam as leituras bem-sucedidas das duas fontes. Um registro sincronizado no banco prevalece pelo identificador do vídeo, evitando duplicatas e preservando seu link. Erros de banco continuam sendo reportados, sem substituição silenciosa pelo catálogo histórico. As capas são formadas pelo identificador do vídeo em `https://img.youtube.com/vi/{videoId}/maxresdefault.jpg`.

| Elemento | Origem operacional | Registro no repositório |
|---|---|---|
| Séries e episódios | PostgreSQL ou catálogo histórico, com cadastros editoriais complementares | `data/catalogo-conteudo.json`, `data/catalogo-atualizacoes.json` e schema em `drizzle/schema.ts` |
| Vídeos | Canal [@Lorenaamelo](https://www.youtube.com/@Lorenaamelo) | `youtubeVideoId` e links geráveis pelo catálogo |
| Informações exibidas | API tRPC | `server/db.ts` e `server/routers.ts` |
| Títulos normalizados | Serviço de sincronização | `server/youtubeSync.ts` |

## Sincronização automática com YouTube

A automação consulta os vídeos recentes disponíveis no feed RSS público do canal, em ordem cronológica. Quando encontra um episódio ainda não cadastrado, associa-o a uma série existente ou cria uma nova série com o mês e ano de publicação. Vídeos avulsos sem série reconhecível no título são ignorados. O episódio recém-sincronizado fica em destaque e o resultado é registrado no histórico. O feed é uma janela dos vídeos recentes, não um mecanismo para recuperar todo o histórico do canal.

> O formato prioritário de título é `Nº SEMANA | TÍTULO DO VÍDEO | NOME DA SÉRIE`. O sistema preserva o título completo recebido do YouTube; a interface extrai o título para exibição. Títulos de vídeos existentes também são atualizados.

| Configuração | Definição |
|---|---|
| Canal monitorado | `https://www.youtube.com/@Lorenaamelo` |
| Endpoint agendado Vercel | `GET /api/scheduled/youtube-sync` |
| Frequência configurada | Diária, às 06:00 de Brasília (`0 9 * * *`, UTC), sujeita à janela de execução do plano Vercel |
| Proteção do endpoint | Bearer token correspondente a `CRON_SECRET`, configurado no projeto Vercel |
| Execução manual | Painel administrativo em `/admin`, ação “Sincronizar Agora” |
| Registro operacional | Tabelas `sync_config` e `sync_history` |

O endpoint é definido em `server/app.ts`; a lógica de captura e persistência está em `server/youtubeSync.ts`. O cron Vercel está em `vercel.json` e requer deploy de produção, agendamentos habilitados na Vercel, `CRON_SECRET` e `DATABASE_URL` válidos, com schema preparado. A execução agendada respeita `sync_config.enabled`; uma execução manual explícita continua possível quando o agendamento estiver pausado. O adaptador de Heartbeat da Manus permanece como código legado, sem registro automático de tarefas no fluxo Vercel.

`GET /api/trpc/sync.status` informa a configuração disponível, a última verificação bem-sucedida e o último resultado registrado. Os motivos `database_missing`, `cron_secret_missing`, `paused` e `database_unavailable` identificam impedimentos. `configured: true` indica pré-requisitos detectados, não comprova que o cron esteja habilitado nem que uma execução tenha ocorrido. Nenhuma credencial ou detalhe de erro de conexão é exposto.

Para validar a operação, consulte esse diagnóstico em produção e confirme a execução nos logs de Cron Jobs da Vercel. Uma publicação de código ou um cadastro editorial não conta como execução automática. Nunca envie tokens ou URLs de banco no chat ou no Git.

## Administração e participação pública

O painel `/admin` contém a execução manual da sincronização, o histórico de operações e a moderação de depoimentos. Visitantes podem enviar depoimentos associados a episódios, enquanto a publicação no feed depende da aprovação por administrador. As curtidas são controladas por um hash anônimo de visitante, derivado de IP e User-Agent, para reduzir votos repetidos no mesmo depoimento.

| Recurso | Rotas e arquivos principais |
|---|---|
| Catálogo público | `content.*` em `server/routers.ts` |
| Último vídeo / selo “NOVO” | `latestVideoId` em `server/routers.ts` |
| Depoimentos | `testimonials.*` em `server/routers.ts` |
| Moderação | `admin.*` em `server/routers.ts` |
| Sincronização | `sync.*` e `server/youtubeSync.ts` |
| Compartilhamento | `client/src/components/ShareButton.tsx` |

## Persistência, restauração e segurança

As alterações estruturais de banco são representadas por `drizzle/schema.ts` e pelas migrações em `drizzle/`. Os dados vivos — incluindo séries, episódios sincronizados, testemunhos, curtidas, usuários e histórico de sincronização — pertencem ao banco de dados gerenciado e não devem ser versionados como credenciais ou exportações completas contendo dados pessoais.

O catálogo JSON incluído neste commit existe como **referência de conteúdo**, não como mecanismo de restauração automática. Para restaurar operações, mantenha o schema e as migrações do repositório, depois importe o catálogo somente se for necessário e mediante revisão manual. Nunca versionar arquivos `.env`, URLs de conexão, tokens ou chaves.

## Rotina recomendada

Após cada nova publicação no canal, verifique o resultado em `/admin`. Se o vídeo seguir o padrão de título previsto, o catálogo deverá criar ou atualizar a série adequada e armazenar o título limpo. Caso o canal utilize um formato novo, revise a função `parseTitlePattern` em `server/youtubeSync.ts` antes da próxima sincronização.

