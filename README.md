# Culto Sozo

Plataforma de séries e mensagens da Pastora Lorena Melo, com interface inspirada em serviços de streaming e vídeos incorporados do YouTube. Canal de referência: https://www.youtube.com/@Lorenaamelo.

## Arquitetura

| Camada | Implementação |
|---|---|
| Interface | React 19, TypeScript, Vite 7, Tailwind CSS 4 |
| Navegação | Wouter |
| Componentes | Radix UI/shadcn, ícones Lucide |
| Consulta de dados | tRPC 11 e TanStack Query |
| API | Express 4 em Node.js |
| Persistência original | MySQL/TiDB, Drizzle ORM e três migrações SQL |
| Vídeos e capas | YouTube; os arquivos dos vídeos não ficam no repositório |
| Login original | OAuth da Manus e sessão JWT |
| Sincronização original | Feed RSS do YouTube, persistência em banco e agendador Manus |
| Hospedagem preparada | Arquivos estáticos e uma função de API na Vercel |

## Funcionalidades

- Página inicial com destaque e séries agrupadas em 2025 e 2026.
- Busca por título dos episódios, páginas de séries e player incorporado.
- Compartilhamento de links e atalhos para YouTube e Instagram.
- Registro local dos episódios acessados. O progresso salvo é zero; não há rastreamento real da posição do player.
- Depoimentos públicos, aprovação/rejeição administrativa e curtidas anônimas, quando o banco estiver conectado.
- Painel `/admin` com sincronização manual e histórico, quando banco e autenticação estiverem configurados.

Não há checkout, assinatura paga ou controle próprio de acesso aos vídeos. A área "Conteúdo Exclusivo" é um link para o YouTube. Utilitários de IA, mapas e armazenamento da base Manus existem no código, mas não são requisitos da navegação pública.

## Recuperação sem banco

O arquivo `data/catalogo-conteudo.json` registra 17 séries e 67 episódios exportados em **18/08/2026**. Na ausência de `DATABASE_URL`, a API pública usa esse catálogo para leitura. Isso não recupera depoimentos, usuários, curtidas, configurações de agendamento nem conteúdos publicados depois da exportação.

Quando `DATABASE_URL` está configurada, o banco passa a ser a fonte do catálogo. Um erro de banco não é ocultado pela versão salva. Depoimentos e administração exibem aviso de indisponibilidade enquanto as respectivas dependências não estiverem configuradas. Nenhum formulário confirma uma gravação que não ocorreu.

## Executar e validar

Use Node.js 22 ou 24 e o pnpm 10.4.1 indicado em `packageManager`.

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm run check
corepack pnpm test
corepack pnpm run build
corepack pnpm start
```

Para desenvolvimento: `corepack pnpm dev`.

## Publicar na Vercel

O `vercel.json` configura instalação, build, diretório `dist/public`, API e rotas diretas da aplicação. `api/index.js` exporta a aplicação compilada em `dist/api.mjs`, sem iniciar um servidor persistente.

Depois de autenticar a CLI na conta correta:

```bash
vercel link --project culto-sozo-netflix --scope gustavo-sanchos-projects
vercel deploy --prod --scope gustavo-sanchos-projects
```

O catálogo público pode ser publicado sem variáveis secretas. A publicação e o acesso externo ainda precisam ser confirmados na conta de destino; uma compilação local bem-sucedida não equivale a um deploy validado.

## Retomar todos os serviços

| Recurso | Configuração necessária |
|---|---|
| Dados dinâmicos e testemunhos | `DATABASE_URL` de um MySQL/TiDB acessível, com schema e migrações conferidos |
| Login administrativo original | `VITE_APP_ID`, `VITE_OAUTH_PORTAL_URL`, `OAUTH_SERVER_URL`, `JWT_SECRET` com pelo menos 32 caracteres e `OWNER_OPEN_ID` |
| Retorno do login | Cadastro do novo domínio e de `/api/oauth/callback` no provedor OAuth, quando exigido pelo provedor |
| Sincronização Vercel | Banco pronto, `CRON_SECRET` e configuração explícita de cron |
| Armazenamento Manus, se utilizado | `BUILT_IN_FORGE_API_URL` e `BUILT_IN_FORGE_API_KEY` |

O agendamento original pretendido é terça-feira às 06h de Brasília. Na Vercel, a entrada equivalente é `0 9 * * 2`, com caminho `/api/scheduled/youtube-sync`. O handler GET já valida o Bearer token `CRON_SECRET`. O cron não foi ativado enquanto o banco não foi recuperado. O POST original da Manus continua exigindo uma identidade de agendador válida.

Antes de qualquer restauração do banco, conferir backup, migrações e dados existentes. O script legado `seed-content.mjs` contém uma base anterior ao catálogo exportado e não deve ser executado indiscriminadamente. Não colocar credenciais no Git.

## Estado da análise

Base examinada: commit `96b8e4f`, de 18/08/2026. O código original passou na verificação TypeScript e no build. A causa histórica da queda não pode ser determinada apenas pelo repositório: os logs da hospedagem anterior e o banco não estavam disponíveis.

Veja `docs/ANALISE_E_REATIVACAO.md` para o inventário de conteúdo, mudanças e limites da validação.
