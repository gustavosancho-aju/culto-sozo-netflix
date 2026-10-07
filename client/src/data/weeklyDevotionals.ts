export interface StandardDevotional {
  format?: 'standard';
  title: string;
  passage: string;
  reflection: [string, string];
  practice: string;
  prayer: string;
}

export interface DocumentDevotional {
  format: 'document';
  label: string;
  title: string;
  sections: {
    title: string;
    kind: 'verse' | 'text' | 'questions' | 'takeaway';
    paragraphs: string[];
  }[];
}

export type Devotional = StandardDevotional | DocumentDevotional;

export interface DevotionalWeek {
  number: number;
  startsOn: string;
  theme?: string;
  video?: { title: string; youtubeId: string };
  devotionals: Record<string, Devotional>;
}

// Each entry stays attached to its calendar date, so the same devotional is
// available every time someone opens that day during the week.
export const october2026Weeks: DevotionalWeek[] = [
  {
    number: 1,
    startsOn: '2026-10-05',
    theme: 'Aprovado',
    video: { title: 'SEMANA 1 | APROVADO', youtubeId: '80aB2_VlgNk' },
    devotionals: {
      "2026-10-05": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 1",
        "title": "CHAMADO NÃO É ATESTADO DE MATURIDADE",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Procure apresentar-se a Deus aprovado, como obreiro que não tem do que se envergonhar e que maneja corretamente a palavra da verdade.” (2 Timóteo 2:15)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já pensou que, porque Deus chamou você para alguma coisa, isso significava que você já estava pronto para vivê-la?",
              "Existe uma diferença entre receber um chamado e estar preparado para sustentar aquilo para o qual fomos chamados. Essa é uma das primeiras verdades trabalhadas na mensagem: o chamado pode ser verdadeiro e, ainda assim, existirem áreas dentro de nós que precisam amadurecer."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando Deus coloca algo em nosso coração, normalmente ficamos empolgados com aquilo que Ele poderá fazer através de nós.",
              "Queremos viver a promessa. Queremos avançar. Queremos ver aquilo acontecer.",
              "Mas existe uma parte dessa caminhada que nem sempre nos empolga da mesma maneira: o processo de nos tornarmos capazes de sustentar aquilo que desejamos viver.",
              "Davi foi escolhido por Deus quando ainda estava cuidando de ovelhas. A escolha era verdadeira. A unção era verdadeira. Mas ele não saiu daquele campo diretamente para o trono. Existiam coisas que ainda seriam construídas dentro dele durante o caminho.",
              "Talvez seja aqui que muitas vezes nos confundimos.",
              "Pensamos que o processo significa que algo deu errado, quando, na verdade, o processo pode ser justamente uma evidência de que Deus está nos preparando para aquilo que Ele já decidiu fazer.",
              "Você pode ter um chamado para liderar e ainda precisar aprender a lidar com oposição. Pode desejar influenciar pessoas e ainda precisar aprender a receber correção. Pode carregar uma promessa e ainda precisar amadurecer emocionalmente para não destruir, com suas próprias reações, aquilo que tanto pediu para viver.",
              "Por isso, talvez a pergunta de hoje não seja apenas: “Deus, quando aquilo que o Senhor me prometeu vai acontecer?”",
              "Talvez exista uma pergunta ainda mais importante: “Deus, quem eu preciso me tornar para sustentar aquilo que o Senhor deseja colocar em minhas mãos?”",
              "O chamado aponta para aquilo que Deus deseja fazer através de você. O processo trabalha aquilo que Deus precisa fazer em você. E os dois fazem parte da mesma história."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma área da minha vida em que estou mais preocupado em avançar do que em amadurecer?",
              "Quando Deus usa pessoas, esperas, correções ou frustrações para me tratar, eu reconheço o processo ou interpreto tudo como um impedimento?",
              "O que minhas reações atuais revelam sobre algo em mim que talvez ainda não esteja preparado para sustentar aquilo que desejo viver?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, escolha uma área em que você deseja muito avançar, família, profissão, ministério relacionamentos, finanças ou algum projeto pessoal.",
              "Em vez de perguntar apenas: “O que falta acontecer para eu chegar lá?”",
              "Pergunte: “O que ainda precisa ser desenvolvido em mim para que eu esteja preparado quando chegar lá?”",
              "Não tente responder rapidamente. Dê espaço para o Espírito Santo mostrar algo que talvez você ainda não tenha percebido."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, eu reconheço que ser chamado não significa que já estou pronto. Não quero apenas chegar aos lugares que o Senhor preparou para mim; quero me tornar alguém capaz de sustentá-los.",
              "Mostra-me o que ainda precisa amadurecer em mim. Confronta minhas motivações, minhas reações e aquilo que ainda precisa ser transformado. Dá-me humildade para não fugir dos processos que o Senhor está usando para me formar.",
              "Antes de fazer a Tua obra, eu reconheço que sou a Tua obra.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "O chamado revela para onde Deus quer levar você.",
              "O processo revela quem você precisa se tornar para chegar lá."
            ]
          }
        ]
      },
      "2026-10-06": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 2",
        "title": "DEUS OLHA PARA A RAIZ",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“O Senhor não vê como o homem: o homem vê a aparência, mas o Senhor vê o coração.” (1 Samuel 16:7)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já parou para pensar que é possível fazer a coisa certa, pela motivação errada?",
              "Nós normalmente avaliamos nossas atitudes pelo que fizemos: ajudei, servi, trabalhei, fui responsável, busquei excelência.",
              "Mas Deus não olha apenas para o que fazemos. Ele também olha para de onde aquilo está saindo."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando Samuel viu Eliabe, ficou impressionado. Diante dele estava alguém que, aos seus olhos, tinha aparência de rei. Mas Deus mostrou a Samuel que estava olhando para um lugar que ninguém conseguia enxergar: o coração.",
              "E coração, aqui, não significa apenas sentimentos. Fala desse lugar interior onde estão nossas intenções, desejos e motivações.",
              "É por isso que duas pessoas podem fazer exatamente a mesma coisa e, por dentro, estarem sendo movidas por razões completamente diferentes. Uma pessoa pode ajudar alguém porque ama. Outra pode ajudar porque precisa se sentir necessária. Uma pode buscar excelência porque deseja honrar a Deus e às pessoas. Outra pode fazer tudo perfeitamente porque tem medo de ser criticada ou rejeitada. Por fora, os comportamentos podem parecer iguais. A diferença está na raiz.",
              "E talvez seja justamente aí que Deus queira trabalhar em nós.",
              "Porque algumas das nossas atitudes que parecem virtudes podem, na verdade, estar sendo alimentadas por lugares feridos. Às vezes chamamos de responsabilidade aquilo que também carrega necessidade de controle. Chamamos de excelência aquilo que pode esconder medo de errar. Chamamos de disponibilidade aquilo que, algumas vezes, nasce da dificuldade de dizer “não” porque precisamos ser aceitos.",
              "Isso não significa que tudo o que fazemos possui uma motivação errada. Significa apenas que precisamos ter coragem de permitir que Deus examine não somente nossas ações, mas também nossas raízes.",
              "Porque Deus não deseja apenas produzir bons comportamentos em nós. Ele deseja transformar a fonte de onde esses comportamentos estão saindo.",
              "Hoje, talvez a pergunta não seja somente: “O que eu estou fazendo?”",
              "Mas: “Por que eu preciso fazer isso?”. Essa segunda pergunta pode revelar coisas que a primeira jamais revelaria."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma coisa que faço esperando, mesmo silenciosamente, reconhecimento, aprovação ou validação?",
              "O que acontece dentro de mim quando faço algo por alguém e não sou reconhecido, agradecido ou valorizado?",
              "Existe algum comportamento que considero uma qualidade, mas que Deus talvez esteja me convidando a olhar com mais profundidade para descobrir sua verdadeira raiz?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, observe uma reação sua.",
              "Pode ser quando alguém discordar de você, não reconhecer o que você fez, corrigir você, não responder como esperava ou simplesmente frustrar alguma expectativa sua.",
              "Em vez de olhar apenas para a outra pessoa ou para a situação, pergunte: “Por que isso mexeu tanto comigo?”",
              "E depois: “Espírito Santo, o que essa reação está revelando sobre mim?”",
              "Não tente se justificar. Apenas observe e permita que Deus mostre a raiz."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, eu não quero apenas parecer bem por fora. Quero permitir que o Senhor conheça e transforme aquilo que existe dentro de mim.",
              "Examina minhas motivações. Mostra-me aquilo que está por trás das minhas escolhas e das minhas reações. Se houver medo, necessidade de aprovação, controle, orgulho ou alguma ferida influenciando minhas atitudes, ajuda-me a reconhecer.",
              "Eu não quero apenas produzir bons frutos. Quero permitir que o Senhor trate minhas raízes.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "DEUS NÃO OLHA APENAS PARA O FRUTO QUE AS PESSOAS CONSEGUEM VER.",
              "ELE TAMBÉM OLHA PARA A RAIZ DE ONDE ESSE FRUTO ESTÁ NASCENDO."
            ]
          }
        ]
      },
      "2026-10-07": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 3",
        "title": "O QUE MINHAS REAÇÕES ESTÃO REVELANDO?",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida.” (Provérbios 4:23)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já teve uma reação muito maior do que a situação parecia justificar?",
              "Uma crítica pequena que estragou seu dia. Uma discordância que despertou uma raiva enorme. Uma correção que pareceu uma humilhação. Uma demora na resposta que fez você se sentir rejeitado.",
              "Talvez a questão não seja apenas o que aconteceu com você, mas o que aquilo tocou dentro de você."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Nem sempre nossas reações começam no momento em que alguma coisa acontece. Às vezes, uma situação presente apenas toca em algo que já estava dentro de nós.",
              "Por isso, nossas reações podem funcionar como uma espécie de janela. Elas tornam visível aquilo que, até aquele momento, estava escondido.",
              "Foi exatamente esse princípio trabalhado na mensagem: comportamento é a parte visível, mas pode existir uma raiz invisível por trás dele.",
              "Talvez você tenha dificuldade em receber uma correção. Imediatamente você se defende, explica, justifica ou se afasta. O problema pode ser orgulho? Sim. Mas também pode existir uma história em que, durante muito tempo, errar significava ser humilhado. Então, hoje, quando alguém corrige você, seu coração não escuta apenas: “Existe algo que precisa ser ajustado.” Ele pode interpretar: “Estão me diminuindo novamente.”",
              "Entender isso não significa justificar uma reação inadequada. Significa descobrir onde a transformação precisa chegar. Porque se apenas tentarmos controlar o comportamento, podemos até aprender a não responder, não discutir ou não demonstrar o que estamos sentindo, mas a raiz continuará lá.",
              "Deus deseja ir além. Ele quer nos ensinar a perceber nossas reações e perguntar: “O que isso está revelando sobre mim?”",
              "Talvez a irritação revele necessidade de controle.",
              "Talvez a comparação revele insegurança.",
              "Talvez a necessidade de explicar tudo revele medo de ser mal interpretado.",
              "Talvez o afastamento revele medo de rejeição.",
              "Por isso, quando alguma reação aparecer hoje, não desperdice esse momento apenas se condenando ou culpando outra pessoa.",
              "Use a reação como uma oportunidade de conhecer aquilo que ainda precisa ser tratado dentro de você."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Qual reação minha costuma se repetir quando sou contrariado, corrigido ou frustrado?",
              "O que normalmente existe por trás dela: medo, rejeição, necessidade de controle, orgulho, insegurança, desejo de aprovação?",
              "Quando alguém toca nessa área, eu costumo permitir que Deus me mostre algo ou imediatamente me justifico?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, quando perceber uma reação intensa, não responda imediatamente.",
              "Antes, faça três perguntas: O que aconteceu? O que eu senti? O que isso tocou dentro de mim?",
              "Depois, ore: “Espírito Santo, mostra-me a raiz dessa reação.”",
              "Talvez você descubra que o que aconteceu hoje apenas revelou algo que já estava pedindo tratamento há muito tempo."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, ajuda-me a não olhar apenas para aquilo que acontece ao meu redor, mas também para aquilo que acontece dentro de mim.",
              "Mostra-me o que minhas reações estão revelando. Dá-me coragem para reconhecer feridas, medos e motivações que ainda precisam ser tratados.",
              "Eu não quero apenas aprender a controlar minhas reações. Quero permitir que o Senhor transforme aquilo que está produzindo essas reações em mim.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "MINHAS REAÇÕES NÃO REVELAM APENAS O QUE ESTÁ ACONTECENDO AO MEU REDOR.",
              "ELAS PODEM REVELAR O QUE AINDA PRECISA SER TRATADO DENTRO DE MIM."
            ]
          }
        ]
      },
      "2026-10-08": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 4",
        "title": "QUEM SOU QUANDO NINGUÉM ESTÁ OLHANDO?",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“O homem vê a aparência, mas o Senhor vê o coração.” (1 Samuel 16:7)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Se ninguém soubesse o que você fez, você continuaria fazendo da mesma maneira?",
              "É relativamente fácil demonstrar determinadas atitudes quando sabemos que alguém está olhando. O desafio começa quando não existe reconhecimento, aplauso, agradecimento ou qualquer possibilidade de alguém descobrir.",
              "É no secreto que muitas motivações aparecem."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando Samuel chegou à casa de Jessé procurando o próximo rei de Israel, Davi nem sequer estava entre os filhos apresentados.",
              "Enquanto todos estavam diante do profeta, Davi estava no campo cuidando das ovelhas.",
              "Ninguém estava avaliando seu desempenho. Ninguém estava aplaudindo sua dedicação. Ninguém imaginava que aquele trabalho simples tinha qualquer relação com um futuro trono. Mas Deus estava vendo.",
              "Mais tarde, diante de Golias, Davi contou que havia enfrentado leões e ursos enquanto cuidava daquele rebanho. Isso significa que muito antes de sua coragem aparecer diante de um exército, ela já estava sendo construída em um campo onde praticamente ninguém podia vê-lo.",
              "E existe algo importante nisso para nós.",
              "Às vezes queremos novas oportunidades para demonstrar quem somos, enquanto Deus está observando quem somos com aquilo que já está em nossas mãos.",
              "Quem você é quando ninguém agradece?",
              "Como você trabalha quando seu líder não está por perto?",
              "Como você trata sua família depois de passar o dia inteiro tratando outras pessoas com educação?",
              "Como você serve quando outra pessoa recebe o reconhecimento?",
              "Como você se comporta quando ninguém descobriria se você fizesse diferente?",
              "Porque caráter não é apenas aquilo que conseguimos demonstrar diante das pessoas.",
              "Caráter é quem continuamos sendo quando desaparecem as razões para impressioná-las.",
              "Talvez algumas das maiores provas da nossa vida estejam acontecendo em lugares que consideramos pequenos demais para terem importância. Mas o campo de Davi nos ensina: o secreto também é lugar de formação.",
              "Antes de permitir que muitas pessoas enxergassem Davi, Deus viu quem Davi estava se tornando quando ninguém estava olhando."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Meu comportamento muda dependendo de quem está presente?",
              "Eu continuo fazendo com excelência aquilo que me foi confiado quando ninguém reconhece meu esforço?",
              "Existe alguma diferença entre a pessoa que apresento publicamente e quem sou dentro de casa, nos bastidores ou quando ninguém está olhando?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, faça intencionalmente algo certo que ninguém precisa saber que você fez. Pode ser servir alguém, organizar alguma coisa, cumprir uma responsabilidade, ajudar, corrigir algo que você fez errado ou simplesmente fazer com excelência aquilo que normalmente faria apenas quando alguém estivesse observando. E não conte para ninguém.",
              "Transforme esse gesto em uma conversa silenciosa com Deus: “Senhor, ninguém precisa ver. É suficiente que o Senhor veja.”"
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, eu não quero construir uma imagem diante das pessoas e negligenciar quem estou me tornando no secreto.",
              "Mostra-me se existe diferença entre aquilo que apresento publicamente e aquilo que vivo quando ninguém está olhando.",
              "Forma em mim um caráter que não dependa de reconhecimento, aplauso ou supervisão para permanecer fiel.",
              "Que aquilo que as pessoas veem em mim seja apenas o reflexo daquilo que o Senhor já encontrou no secreto.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "O SECRETO REVELA QUEM EU SOU QUANDO NÃO EXISTE NINGUÉM PARA IMPRESSIONAR."
            ]
          }
        ]
      },
      "2026-10-09": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 5",
        "title": "A PRESSÃO REVELA A ESTRUTURA",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Pois tu, ó Deus, nos submeteste à prova e nos refinaste como a prata.” (Salmo 66:10)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "O que aparece em você quando as coisas não acontecem do jeito que você esperava?",
              "É fácil acreditar que estamos bem quando tudo está funcionando. Mas basta chegar uma frustração, uma espera, uma correção ou uma oposição para surgirem reações que talvez nem soubéssemos que estavam dentro de nós.",
              "A pressão tem essa capacidade: ela torna visível aquilo que estava escondido na estrutura."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Pense em um prédio. Enquanto tudo está tranquilo, podemos olhar para ele e imaginar que sua estrutura é forte. Mas é quando chegam ventos, chuvas e movimentos que aquilo que estava escondido começa a ser testado.",
              "Com a nossa vida acontece algo parecido. Muitas vezes só descobrimos determinadas fragilidades quando somos pressionados.",
              "Você pode acreditar que não precisa de reconhecimento — até outra pessoa receber aquilo que você esperava.",
              "Pode acreditar que sabe receber correção — até alguém confrontar algo que você realmente não queria ouvir.",
              "Pode pensar que confia em Deus — até precisar esperar muito mais do que imaginava.",
              "Pode acreditar que perdoou — até encontrar novamente aquela pessoa.",
              "A pressão não criou necessariamente aquilo que apareceu. Ela apenas revelou o que já estava lá.",
              "É por isso que algumas experiências desconfortáveis podem se transformar em lugares importantes de crescimento. Na mensagem, vimos que Deus pode usar situações de pressão para nos ajudar a identificar estruturas interiores que ainda precisam ser fortalecidas.",
              "Talvez você esteja olhando para uma situação difícil e perguntando: “Por que estou passando por isso?”",
              "Mas hoje experimente fazer outra pergunta: “O que essa situação está revelando em mim?”",
              "Talvez a espera esteja revelando sua dificuldade de confiar quando você perde o controle.",
              "Talvez a correção esteja mostrando que sua identidade ainda depende muito da maneira como as pessoas enxergam você.",
              "Talvez a oposição esteja revelando que você só consegue permanecer quando todos concordam com você.",
              "Talvez a frustração esteja mostrando o quanto suas expectativas governam suas emoções.",
              "Isso não significa que toda pressão foi enviada por Deus. Significa que nenhuma pressão precisa ser desperdiçada.",
              "Deus pode usar até aquilo que nos incomoda para mostrar onde nossa estrutura ainda precisa ser fortalecida.",
              "Porque, antes de ampliar aquilo que está sobre nós, muitas vezes Ele trabalha aquilo que está dentro de nós."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Qual situação tem me pressionado mais nesta fase da minha vida?",
              "O que minhas reações diante dessa situação estão revelando sobre mim?",
              "Em vez de pedir apenas que essa pressão termine, o que talvez eu precise permitir que Deus fortaleça em mim enquanto ela ainda existe?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Pense na situação que mais tem pressionado você atualmente.",
              "Em vez de começar perguntando: “Senhor, quando isso vai mudar?”",
              "Hoje pergunte: “Senhor, o que isso está revelando em mim que eu ainda não havia percebido?”",
              "Anote aquilo que vier ao seu coração.",
              "Depois complete esta frase: “Essa pressão revelou que eu ainda preciso crescer em ____________________.”",
              "Não use a resposta para se condenar. Use-a para identificar onde Deus deseja fortalecer sua estrutura."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, eu reconheço que nem sempre gosto daquilo que aparece em mim quando sou pressionado.",
              "Mas não quero fugir do que minhas reações estão revelando.",
              "Usa este tempo para mostrar as áreas que ainda precisam ser fortalecidas. Ensina-me a lidar com a espera, a frustração, a correção e a oposição sem permitir que elas governem meu coração.",
              "Eu não quero apenas sair da pressão. Quero sair dela mais maduro do que entrei.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "A PRESSÃO NÃO APENAS MOSTRA O QUE ESTÁ ACONTECENDO AO MEU REDOR.",
              "ELA REVELA COMO ESTÃO AS ESTRUTURAS DENTRO DE MIM."
            ]
          }
        ]
      },
      "2026-10-10": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 6",
        "title": "NÃO NEGOCIE PRINCÍPIOS PARA CHEGAR MAIS RÁPIDO",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“O Senhor me livre de fazer tal coisa a meu senhor, de erguer a mão contra ele, pois é o ungido do Senhor.” (1 Samuel 24:6)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "O que você faria se aparecesse uma oportunidade de conseguir aquilo que deseja, mas, para isso, precisasse abrir mão de um princípio?",
              "Alguns atalhos parecem oportunidades. Principalmente quando nos levam exatamente para o lugar onde queremos chegar. Mas nem tudo aquilo que encurta o caminho foi colocado por Deus no caminho."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Davi já havia sido ungido para ser rei. O trono fazia parte do seu futuro. Mas entre a unção e o cumprimento da promessa havia um processo.",
              "Enquanto fugia de Saul, Davi teve diante de si uma oportunidade que poderia parecer perfeita: Saul entrou justamente na caverna onde ele estava escondido.",
              "Davi poderia matá-lo. Talvez até encontrasse argumentos para justificar sua atitude: “Deus prometeu o trono para mim. Saul está me perseguindo. Talvez esta seja a oportunidade que Deus colocou nas minhas mãos.”",
              "Mas Davi entendeu algo fundamental: Uma promessa de Deus nunca será autorização para quebrar princípios a fim de realizá-la. Ele decidiu não matar Saul.",
              "Davi poderia chegar ao trono mais rápido, mas se recusou a permitir que a pressa de chegar ao destino determinasse quem ele se tornaria durante o caminho.",
              "E talvez esse seja um dos grandes testes da aprovação. Porque algumas escolhas erradas não chegam com aparência de pecado evidente. Às vezes elas chegam disfarçadas de oportunidade, vantagem, solução ou atalho.",
              "É quando pensamos: “Todo mundo faz.” “É só desta vez.” “Ninguém vai saber.” “Depois eu conserto.” “Eu preciso fazer isso para conseguir chegar lá.”",
              "Mas Deus não está interessado apenas em onde você vai chegar. Ele também está interessado em quem você está se tornando enquanto chega.",
              "Na vida profissional, nos relacionamentos, no ministério, nas finanças e nas decisões mais simples do cotidiano, podem surgir oportunidades de conquistar alguma coisa sacrificando valores que antes dizíamos não negociar.",
              "É justamente aí que o caminho também se torna parte da aprovação. Porque não basta ter capacidade para conquistar alguma coisa. É necessário ter caráter para sustentá-la.",
              "Talvez demore mais fazendo da maneira certa.",
              "Talvez você veja pessoas avançando por caminhos que decidiu não percorrer.",
              "Talvez permanecer fiel custe uma oportunidade.",
              "Ainda assim, existem destinos aos quais não vale a pena chegar se, para alcançá-los, você precisar perder no caminho aquilo que Deus está tentando formar dentro de você."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma área em que a ansiedade para chegar está me fazendo considerar caminhos que antes eu não consideraria?",
              "Tenho chamado de “oportunidade” alguma coisa que exige que eu negocie valores, convicções ou princípios?",
              "Se Deus demorasse mais do que eu gostaria para cumprir aquilo que espero, eu conseguiria continuar fazendo o que é certo?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Pense em algo que você deseja muito alcançar.",
              "Agora faça uma pergunta diferente: “Existe alguma coisa que eu não estou disposto a me tornar para conseguir isso?”",
              "Defina diante de Deus pelo menos um princípio que você não negociará, mesmo que permanecer fiel faça o caminho parecer mais demorado.",
              "E declare: “Senhor, eu não quero apenas chegar. Quero chegar da maneira certa.”"
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, não permita que a ansiedade pelo destino me faça negociar princípios durante o caminho.",
              "Dá-me discernimento para reconhecer atalhos que parecem oportunidades, mas que me afastariam daquilo que o Senhor está formando em mim.",
              "Eu prefiro esperar fazendo o que é certo a chegar mais rápido me tornando alguém que não deveria ser.",
              "Que aquilo que eu desejo conquistar nunca seja mais importante do que o caráter que o Senhor deseja construir em mim.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "NÃO BASTA CHEGAR AO DESTINO.",
              "A MANEIRA COMO EU CHEGO TAMBÉM FAZ PARTE DA MINHA APROVAÇÃO."
            ]
          }
        ]
      },
      "2026-10-11": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | DIA 7",
        "title": "EU AINDA SOU OBRA",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Cria em mim um coração puro, ó Deus, e renova dentro de mim um espírito estável.” (Salmo 51:10)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Em que momento começamos a acreditar que já não precisamos mais ser tratados por Deus? Talvez depois de algumas conquistas. Depois de anos de caminhada. Depois de amadurecermos em áreas nas quais antes tínhamos dificuldades.",
              "Mas a história de Davi nos lembra de uma verdade importante: Ter amadurecido não significa ter terminado."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Davi já não era mais o jovem desconhecido cuidando de ovelhas. Ele havia enfrentado Golias, sobrevivido à perseguição de Saul, aprendido a esperar e, finalmente, chegado ao trono. Muita coisa já havia sido construída dentro dele. Davi inclusive havia demonstrado caráter quando teve a oportunidade de matar Saul e decidiu não fazer isso.",
              "Mas anos depois encontramos o mesmo Davi envolvido com Bate-Seba e, tentando esconder aquilo que havia feito, usando sua autoridade em uma trama que levou Urias à morte. O contraste é desconfortável. O homem que demonstrou maturidade ontem ainda precisava ser tratado hoje.",
              "E isso também fala sobre nós.",
              "Às vezes podemos olhar para tudo o que já vencemos e pensar que determinadas áreas já não precisam mais da nossa atenção. Mas nossas vitórias anteriores não eliminam nossa necessidade de continuar permitindo que Deus examine nosso coração.",
              "Você pode ter amadurecido muito e ainda precisar mudar.",
              "Pode conhecer a Palavra e ainda precisar ser confrontado.",
              "Pode ajudar outras pessoas e ainda precisar de ajuda.",
              "Pode ocupar posições de responsabilidade e ainda possuir pontos cegos.",
              "Crescer não significa deixar de precisar de transformação. Crescer também significa tornar-se cada vez mais disponível para ela.",
              "Davi chegou a um ponto em que não conseguia enxergar aquilo que estava acontecendo dentro dele. Foi necessário que Deus enviasse Natã para confrontá-lo. E quando finalmente reconheceu seu pecado, Davi não pediu apenas que Deus resolvesse as consequências.",
              "Ele pediu: “Cria em mim um coração puro.” Davi compreendeu que o problema não estava apenas no que ele havia feito. Existia algo nele que precisava novamente ser tratado.",
              "Talvez essa seja uma das maiores marcas de alguém aprovado: não uma pessoa que já não possui nada para mudar, mas alguém que continua permitindo que Deus revele, confronte e transforme aquilo que ainda precisa mudar.",
              "Enquanto estivermos caminhando com Deus, continuaremos sendo formados. Eu ainda sou obra.",
              "E reconhecer isso não diminui aquilo que Deus já fez em mim. Apenas mantém meu coração disponível para aquilo que Ele ainda deseja fazer."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma área da minha vida em que penso: “isso eu já resolvi”, mas minhas atitudes recentes mostram que talvez ainda precise de atenção?",
              "Como reajo quando alguém aponta algo em mim que eu não estava conseguindo enxergar?",
              "Estou mais preocupado em proteger a imagem que construí ou disposto a reconhecer aquilo que Deus ainda quer transformar?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Separe alguns minutos e fique em silêncio diante de Deus. Não apresente pedidos. Não fale sobre aquilo que você deseja que Ele faça ao seu redor.",
              "Faça apenas esta oração: “Espírito Santo, mostra-me algo em mim que eu ainda não estou conseguindo enxergar.”",
              "Se alguma área vier ao seu coração, não se justifique e não tente explicar.",
              "Apenas reconheça e pergunte: “O que o Senhor deseja transformar em mim?”"
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, obrigado por tudo aquilo que o Senhor já transformou em mim, mas eu reconheço que ainda sou Tua obra.",
              "Não permita que minhas conquistas, minha experiência ou aquilo que já amadureceu em mim produzam a sensação de que não preciso mais ser tratado.",
              "Dá-me humildade para ouvir quando for confrontado e coragem para reconhecer aquilo que ainda precisa mudar.",
              "Eu não quero apenas parecer aprovado. Quero continuar permitindo que o Senhor realize a Tua obra em mim.",
              "Cria em mim um coração puro e renova dentro de mim um espírito estável.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "SER APROVADO NÃO SIGNIFICA QUE DEUS TERMINOU SUA OBRA EM MIM.",
              "SIGNIFICA QUE CONTINUO DISPONÍVEL PARA SER TRANSFORMADO POR ELE."
            ]
          }
        ]
      }
    },
  },
  { number: 2, startsOn: '2026-10-12', devotionals: {} },
  { number: 3, startsOn: '2026-10-19', devotionals: {} },
  { number: 4, startsOn: '2026-10-26', devotionals: {} },
];

export const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'] as const;

export function datesForWeek(startsOn: string): string[] {
  const [year, month, day] = startsOn.split('-').map(Number);
  return Array.from({ length: 7 }, (_, offset) =>
    new Date(Date.UTC(year, month - 1, day + offset)).toISOString().slice(0, 10),
  );
}

export function brazilToday(): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const part = (type: string) => parts.find(item => item.type === type)?.value ?? '';
  return `${part('year')}-${part('month')}-${part('day')}`;
}
