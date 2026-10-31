# Áudio das orações

O piloto cobre as orações da semana de 26/10/2026, com as vozes brasileiras Luana e Caio do Microsoft MAI Voice 2.1 Flash. A geração ocorre apenas por comando editorial, nunca por visitante ou durante o build. Configure `OPENROUTER_API_KEY` como segredo do ambiente e permita acesso a `openrouter.ai`. Não coloque a chave no código ou no chat.

Execute na raiz do projeto:

```bash
NODE_USE_ENV_PROXY=1 node --import tsx scripts/prayer-audio.ts generate
```

O comando consulta o modelo e o preço antes de gerar; a OpenRouter cobra conforme as tarifas vigentes. Confira os áudios antes de publicar. Os MP3 e o manifesto precisam ser incluídos no commit de publicação. Para gerar amostras curtas, substitua `generate` por `samples`.

O manifesto registra o texto, hash, modelo e voz de cada arquivo. Mudanças na oração tornam o áudio anterior indisponível até nova geração. Após editar texto ou trocar a voz, execute o comando novamente e confira a narração; os arquivos que continuam correspondentes são reaproveitados. Uma falha não substitui o áudio anterior por dados incompletos. Áudios antigos que ficaram sem referência podem ser removidos depois de verificar o manifesto.
