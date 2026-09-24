# Análise e reativação do Culto Sozo

Análise do repositório `gustavosancho-aju/culto-sozo-netflix`, base `96b8e4f` (18/08/2026).

## Catálogo recuperável

Exportação: 2026-08-18T01:00:47.026Z. São 17 séries e 67 episódios. Os IDs de vídeo são referências ao YouTube, não cópias dos vídeos.

| Série | Ano | Episódios |
|---|---:|---:|
| ALÉM DA FILIAÇÃO - Agosto 2026 | 2026 | 2 |
| Livres para Prosperar - Julho 2026 | 2026 | 4 |
| O Veneno da Alma - Junho 2026 | 2026 | 4 |
| Reconstruindo o Seu Interior - Maio 2026 | 2026 | 5 |
| Rasgando o Véu do Coração - Abril 2026 | 2026 | 4 |
| A Raiz Invisível do Caos - Março 2026 | 2026 | 5 |
| Identidade e Propósito - Fevereiro 2026 | 2026 | 4 |
| De Órfãos a Filho - Janeiro 2026 | 2026 | 4 |
| Odres Renovados - Abril 2025 | 2025 | 6 |
| Marcas Não Vistas - Maio 2025 | 2025 | 3 |
| Quando a Guerra é Invisível - Junho 2025 | 2025 | 4 |
| Transformados pelo Espírito - Julho 2025 | 2025 | 2 |
| Feridas que Marcam, Amor que Transforma - Agosto 2025 | 2025 | 4 |
| O Poder de Amar - Setembro 2025 | 2025 | 3 |
| O Estilo de Vida dos Felizes - Outubro 2025 | 2025 | 4 |
| Sementes que Geram Libertação Financeira - Novembro 2025 | 2025 | 5 |
| Renove-se - Dezembro 2025 | 2025 | 4 |

## Estrutura de dados

O schema define sete tabelas: `users`, `series`, `episodes`, `sync_history`, `sync_config`, `testimonials` e `testimonial_likes`. O catálogo JSON contém apenas séries, episódios e uma referência de configuração de sincronização. Usuários e depoimentos não foram recuperados.

## Alterações preparadas

- Aplicação Express exportada para uma função Vercel e mantida também no servidor local.
- Build separado para arquivos estáticos e API; rotas diretas de séries, episódios e administração configuradas.
- Leitura do catálogo exportado quando não há conexão de banco configurada.
- Avisos de indisponibilidade para testemunhos e administração sem os serviços necessários.
- Rejeição explícita de novos depoimentos sem banco e de chamadas de sincronização não autenticadas.
- Endpoint GET compatível com Vercel Cron, protegido por segredo; agendamento ainda não habilitado.
- Resultados da busca agora abrem os episódios; títulos da série usam o mesmo tratamento de títulos da página inicial.
- Controle de voltar no player visível também em dispositivos sem hover.
- Scripts de prévia Manus e analytics sem configuração removidos do HTML de produção.
- Idioma da página corrigido para português e selo Novo condicionado ao último vídeo sincronizado.

## Verificação realizada

- Compilação original: TypeScript e build aprovados.
- Versão adaptada: TypeScript, build e sete testes aprovados.
- As 17 séries e os 67 episódios têm referências internas consistentes e IDs únicos de vídeo.
- Aplicação compilada carregada pelo arquivo de entrada Vercel e conferida por HTTP no mesmo processo.
- HTML de início, série, episódio, testemunhos e administração respondeu 200; API compilada retornou os 67 episódios.
- Acesso visual ao servidor local pelo navegador de nuvem foi bloqueado pelo ambiente. A renderização no navegador e a reprodução efetiva dos vídeos ainda não foram validadas.

## O que permanece pendente

- Autenticação de publicação na Vercel e criação do projeto na conta conectada.
- Deploy remoto bem-sucedido, conferência de rotas, imagens e player no endereço publicado.
- Recuperação do MySQL/TiDB e de seus dados, ou escolha de um novo banco compatível.
- Configuração ou substituição do login Manus para o domínio novo.
- Habilitação da rotina de sincronização depois que a persistência funcionar.
- Sincronização da branch de trabalho com GitHub; até lá, as mudanças existem apenas neste checkout.

## Observações do código original

- O frontend consulta a API; publicar somente a pasta de arquivos estáticos não restabelece o catálogo.
- Há listas legadas de séries/episódios em `client/src/constants.ts` e `seed-content.mjs`, anteriores ao JSON exportado.
- A sincronização busca apenas o último vídeo do feed e o parser espera um padrão específico de título. Ela não garante recuperar todos os vídeos publicados durante a indisponibilidade.
- O histórico local registra acesso ao episódio com progresso zero; não implementa continuar do instante pausado.
- Curtidas usam hash de IP e User-Agent, sem autenticação individual. Há limites por campo, mas o envio de testemunhos não possui um rate limit dedicado no código.
- O agrupamento da página inicial está fixado em 2025 e 2026; a virada para 2027 exigirá ajuste.
- `package.json` declara MIT, mas não há arquivo LICENSE no checkout analisado.
- Nenhum domínio de produção anterior foi confirmado; o motivo histórico da queda permanece desconhecido.
