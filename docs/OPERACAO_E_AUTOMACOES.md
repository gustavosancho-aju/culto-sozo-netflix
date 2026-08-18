# Operação e automações — Culto Sozo

Este documento registra o funcionamento operacional da plataforma **Culto Sozo Netflix**, a origem do conteúdo exibido e os limites entre o que é versionado no repositório e o que permanece configurado nos serviços gerenciados.

## Conteúdo e catálogo

O catálogo em produção é armazenado no banco de dados e disponibilizado ao frontend por meio das rotas tRPC. Como referência versionada, o arquivo [`data/catalogo-conteudo.json`](../data/catalogo-conteudo.json) contém uma fotografia do catálogo de séries, episódios e identificadores de vídeos do YouTube no momento deste commit. As capas dos episódios são formadas a partir do identificador do vídeo pela URL `https://img.youtube.com/vi/{videoId}/maxresdefault.jpg`.

| Elemento | Origem operacional | Registro no repositório |
|---|---|---|
| Séries e episódios | Banco de dados MySQL/TiDB | `data/catalogo-conteudo.json` e schema em `drizzle/schema.ts` |
| Vídeos | Canal [@Lorenaamelo](https://www.youtube.com/@Lorenaamelo) | `youtubeVideoId` e links geráveis pelo catálogo |
| Informações exibidas | API tRPC | `server/db.ts` e `server/routers.ts` |
| Títulos normalizados | Serviço de sincronização | `server/youtubeSync.ts` |

## Sincronização automática com YouTube

A automação consulta o feed RSS público do canal e identifica o vídeo mais recente. Quando encontra conteúdo ainda não cadastrado, ela associa o vídeo a uma série existente ou cria uma nova série com o mês e ano de publicação. O processo mantém o episódio recém-sincronizado como destaque e registra o resultado no histórico de sincronizações.

> O formato prioritário de título é `Nº SEMANA | TÍTULO DO VÍDEO | NOME DA SÉRIE`. O sistema salva no catálogo apenas o **título do vídeo**, sem o número da semana nem o nome da série.

| Configuração | Definição |
|---|---|
| Canal monitorado | `https://www.youtube.com/@Lorenaamelo` |
| Endpoint agendado | `POST /api/scheduled/youtube-sync` |
| Frequência prevista | Toda terça-feira, às 06:00, horário de Brasília |
| Proteção do endpoint | Execução limitada a chamadas autenticadas do agendador |
| Execução manual | Painel administrativo em `/admin`, ação “Sincronizar Agora” |
| Registro operacional | Tabelas `sync_config` e `sync_history` |

O endpoint do agendador é definido em `server/_core/index.ts`; a lógica de captura, parsing, criação de série e persistência está em `server/youtubeSync.ts`. A infraestrutura de Heartbeat está em `server/_core/heartbeat.ts`. A configuração ativa do cron e seu identificador são dados gerenciados pelo serviço e permanecem no banco, não em código.

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

