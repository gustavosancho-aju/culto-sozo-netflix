# Publicar o Culto Sozo no Windows

O pacote inclui o codigo adaptado, o catalogo com 17 series e 67 episodios, as configuracoes Vercel e os testes. A publicacao ainda nao foi realizada.

1. Extraia todo o ZIP para uma pasta no computador. Nao execute o assistente de dentro do ZIP.
2. Se necessario, instale Node.js 22 ou 24 pelo site oficial https://nodejs.org/.
3. Abra `PUBLICAR_NA_VERCEL.cmd` com dois cliques.
4. Conclua o login da Vercel na conta que tem o espaco `gustavo-sanchos-projects`.
5. Aguarde a instalacao da CLI, a vinculacao do projeto e o build remoto. Ao terminar, a Vercel exibira o endereco publicado.

O assistente usa a CLI oficial Vercel 59.26.0 e publica em producao o projeto `culto-sozo-netflix`. A compilacao acontece na Vercel. Ele nao configura banco, pagamentos ou login administrativo, nem envia alteracoes ao GitHub.

Caso prefira o terminal, na pasta extraida execute:

```powershell
npx --yes vercel@59.26.0 login
npx --yes vercel@59.26.0 link --yes --project culto-sozo-netflix --scope gustavo-sanchos-projects
npx --yes vercel@59.26.0 deploy --prod --yes --scope gustavo-sanchos-projects
```

Depois da publicacao, conferir: pagina inicial, abertura de uma serie, reproducao de um episodio e uma busca. A pagina de testemunhos e a administracao exibem aviso enquanto seus servicos nao estiverem recuperados.

## Estado desta entrega

A verificacao TypeScript, o build e sete testes passaram. A API compilada retornou os 67 episodios. O deploy e a navegacao no endereco publico ainda precisam de verificacao. O assistente `.cmd` foi revisado, mas nao executado neste ambiente Linux.

A publicacao automatica pelo ambiente de atendimento foi impedida por bloqueio de rede a `api.vercel.com`; o login do Google no navegador de nuvem retornou `502 Bad Gateway`. As autorizacoes do usuario foram recebidas, mas nao foi possivel concluir a autenticacao de publicacao.
