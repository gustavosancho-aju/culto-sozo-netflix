# Analytics de engajamento

Vercel Web Analytics registra as páginas e os eventos abaixo. Os eventos usam até duas propriedades, compatíveis com o plano atual. Dados anteriores à publicação não são recuperados.

| Evento | Propriedades | Significado |
| --- | --- | --- |
| Clique no site | acao, destino | Links para mensagens, séries, devocionais, YouTube e Instagram; compartilhar e horários de culto. |
| Semana selecionada | semana, inicio | Clique em uma semana. |
| Dia selecionado | semana, data | Clique no dia do devocional. |
| Devocional aberto | devocional, estado | Exibição inicial ou troca do conteúdo, publicado ou em preparação. |
| Tempo ativo de leitura | devocional, segundos | Segundos adicionais estimados, enviados a cada 30 segundos e nas pausas/saída/troca do conteúdo. Somar os segundos, sem somar visitantes entre eventos. |
| Avanço no devocional | devocional, percentual | Marcos de 25, 50, 75 e 100% da altura do artigo; cada marco é enviado uma vez por abertura. |
| Final do devocional alcançado | devocional, segundos | Visitante alcançou pelo menos 95% do artigo e acumulou pelo menos 30 segundos ativos na abertura. Indício de engajamento; não comprova compreensão ou leitura integral. |

## Consultar

Vercel → projeto culto-sozo-netflix → Analytics → Events. Selecionar o período e um evento para filtrar suas propriedades. Page Views e Visitors continuam disponíveis no painel principal. Eventos de teste também aparecem no painel.

## Limites da medição

Tempo estimado exige documento visível, janela com foco, artigo na tela e atividade nos últimos 90 segundos. Abas ocultas, janela sem foco e artigo fora da tela não contam. Intervalos suspensos pelo navegador são limitados para não inflar o tempo. Pausas e saídas enviam apenas segundos ainda não reportados. As mudanças de dia iniciam uma nova abertura.

Rolagem não comprova leitura. Reprodução, pausa e tempo assistido dentro do iframe do YouTube não são medidos nesta implementação. Cliques nos links externos são medidos. Bloqueadores, rede interrompida e encerramento abrupto do navegador podem impedir eventos. Não são coletados texto digitado, e-mail, nome ou conteúdo de formulários; URLs de cliques internos são registradas sem parâmetros de consulta. Cliques administrativos são excluídos.
