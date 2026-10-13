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
  seriesId?: string;
  video?: { title: string; youtubeId: string };
  devotionals: Record<string, Devotional>;
}

// Each entry stays attached to its calendar date, so the same devotional is
// available every time someone opens that day during the week.
export const october2026Weeks: DevotionalWeek[] = [
  {
    number: 1,
    startsOn: '2026-10-05',
    seriesId: 'aprovados-2026',
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
  {
    "number": 2,
    "startsOn": "2026-10-12",
    "seriesId": "aprovados-2026",
    "video": { "title": "2º SEMANA | O QUE APARECE EM VOCE QUANDO A VIDA APERTA? | APROVADOS", "youtubeId": "zeTB8rOzuOs" },
    "theme": "Aprovados",
    "devotionals": {
      "2026-10-12": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 1",
        "title": "DEUS CONTINUA PRESENTE NA PROVA",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“O Senhor estava com José, de modo que este prosperou e passou a morar na casa do seu senhor egípcio.” (Gênesis 39:2)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já interpretou uma situação difícil como um sinal de que Deus não estava cuidando de você?",
              "Às vezes, oramos, buscamos fazer o que é certo e esperamos que as coisas aconteçam de determinada maneira. Mas, quando tudo começa a sair do nosso controle, surgem perguntas:",
              "“Será que Deus está comigo?”",
              "“Se Ele está cuidando de mim, por que estou passando por isso?”",
              "Talvez o problema esteja na maneira como aprendemos a reconhecer a presença de Deus."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "José era um jovem que havia recebido sonhos de Deus sobre seu futuro. Mas, antes de viver aquilo que havia sonhado, foi traído pelos próprios irmãos, vendido como escravo e levado para uma terra estrangeira.",
              "Imagine o contraste. José tinha sonhos sobre o futuro, mas estava vivendo uma realidade que parecia completamente contrária a eles. E é justamente nesse cenário que a Bíblia faz uma declaração surpreendente: “O Senhor estava com José.”",
              "Deus estava com José quando ele não estava onde gostaria de estar. Estava com ele quando sua família estava distante. Estava com ele quando sua liberdade havia sido tirada. Perceba: a presença de Deus não impediu que José atravessasse circunstâncias difíceis.E isso confronta uma ideia que, muitas vezes, carregamos sem perceber: a de que, quando Deus está conosco, tudo precisa acontecer conforme esperamos.",
              "Mas existe algo ainda mais profundo nessa história. Deus não estava apenas acompanhando José durante aquele processo. Ele também estava formando José para aquilo que ainda viria. O jovem que havia recebido sonhos precisava amadurecer para assumir responsabilidades que ainda não conhecia.",
              "E, ao longo daquela trajetória, José enfrentaria situações que exigiriam fidelidade, domínio próprio, perseverança, sabedoria e capacidade de lidar com pessoas. Aquilo que José viveria no futuro exigiria muito mais do que a capacidade de interpretar sonhos. Exigiria um caráter capaz de sustentar a responsabilidade que receberia.",
              "É importante compreender que nem toda dificuldade é enviada por Deus. José sofreu consequências de escolhas injustas feitas por outras pessoas. Mas a maldade dos irmãos não impediu que Deus continuasse trabalhando em sua história.",
              "E aqui está uma verdade que precisamos guardar: Deus pode usar até aquilo que não escolhemos viver para desenvolver em nós aquilo que ainda precisamos amadurecer.",
              "Pense na purificação do ouro. Quando o ouro passa pelo fogo, aquilo que estava misturado a ele pode se tornar visível e ser separado. O objetivo do refinamento não é destruir o ouro, mas remover aquilo que compromete sua pureza. De maneira semelhante, algumas experiências podem revelar fragilidades, motivações e comportamentos que ainda precisam ser tratados em nós.",
              "Talvez uma espera esteja ensinando você a perseverar. Talvez uma frustração esteja revelando sua necessidade de controlar tudo. Talvez uma situação difícil esteja mostrando que sua confiança em Deus ainda depende muito das circunstâncias. A prova não precisa ser apenas algo que você suporta. Ela também pode se tornar um lugar onde você amadurece.",
              "Por isso, não avalie a presença de Deus apenas pelo cenário que está diante dos seus olhos. José ainda não estava no palácio. Mas Deus continuava com ele. E o processo que José atravessava fazia parte da história de formação daquele que, mais tarde, assumiria grandes responsabilidades. Talvez Deus ainda não tenha mudado a situação que você está vivendo. Mas isso não significa que Ele não esteja trabalhando em você enquanto ela permanece."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Tenho medido o cuidado e a presença de Deus pelos resultados que consigo enxergar na minha vida?",
              "Quando enfrento situações difíceis, minha primeira reação é questionar o cuidado de Deus ou buscar compreender o que posso aprender e amadurecer?",
              "Existe alguma área do meu caráter que Deus pode estar me convidando a fortalecer durante a fase que estou vivendo?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, identifique uma situação da sua vida que ainda não aconteceu como você esperava.",
              "Escreva duas frases:",
              "“O que eu gostaria que Deus mudasse nessa situação é...”",
              "“O que talvez precise ser fortalecido em mim enquanto essa situação não muda é...”",
              "Depois, apresente essas respostas a Deus. Não significa que você precisa gostar do que está vivendo ou deixar de desejar uma mudança. Significa apenas reconhecer que sua vida não precisa ficar paralisada enquanto você espera que as circunstâncias mudem."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, perdoa-me pelas vezes em que interpretei o Teu cuidado apenas pelas circunstâncias que estava vivendo. Ajuda-me a reconhecer Tua presença mesmo quando as coisas não acontecem como eu gostaria. Mostra-me aquilo que ainda precisa ser fortalecido em meu caráter e não permita que eu desperdice as oportunidades de amadurecimento durante os processos da vida. Eu não quero apenas chegar ao lugar que o Senhor tem para mim. Quero me tornar alguém preparado para viver aquilo que o Senhor me confiar.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "A PROVA NÃO SIGNIFICA QUE DEUS ME ABANDONOU.",
              "ENQUANTO EU ATRAVESSO O PROCESSO, ELE PODE ESTAR FORMANDO EM MIM O CARÁTER NECESSÁRIO PARA O QUE AINDA VIRÁ."
            ]
          }
        ]
      },
      "2026-10-13": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 2",
        "title": "O QUE ESTÁ GOVERNANDO SUAS ESCOLHAS?",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Como poderia eu, então, cometer algo tão perverso e pecar contra Deus?” (Gênesis 39:9)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já percebeu como é mais fácil defender um princípio do que permanecer fiel a ele quando surge uma oportunidade de fazer diferente?",
              "É fácil dizer que valorizamos a honestidade quando não temos nada a ganhar mentindo. É fácil falar sobre fidelidade quando ninguém está despertando nosso interesse. É fácil afirmar que temos domínio próprio quando nada está contrariando nossas vontades. Mas o que acontece quando fazer o certo começa a nos custar alguma coisa?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando José foi colocado diante da proposta da mulher de Potifar, ele precisou tomar uma decisão. Mas existe algo muito interessante na resposta dele.",
              "José não começou perguntando quais seriam as consequências se alguém descobrisse. Ele também não tentou descobrir até onde poderia ir sem ultrapassar determinado limite. Sua resposta revelou que havia algo mais importante do que a oportunidade que estava diante dele: os valores que governavam sua vida.",
              "E aqui encontramos uma questão que merece nossa atenção.",
              "Muitas pessoas possuem princípios que admiram, mas que ainda não aprenderam a transformar em critérios para suas decisões. Valorizam a verdade, mas mentem quando precisam proteger a própria imagem. Defendem o perdão, mas alimentam ressentimento quando são feridas. Acreditam na fidelidade, mas começam a negociar pequenos limites quando recebem uma atenção que lhes agrada.",
              "O problema não é necessariamente desconhecer o princípio. É permitir que outras coisas se tornem mais importantes do que ele no momento da escolha.",
              "Pense em alguém que valoriza a honestidade, mas recebe um dinheiro a mais por engano. Ninguém percebeu. Ninguém cobrará explicações. Naquele instante, a decisão não depende apenas do que essa pessoa sabe sobre honestidade.",
              "Depende de algo mais profundo: O que tem mais autoridade sobre ela: seu compromisso com a verdade ou a vantagem que poderá obter? É por isso que nossas escolhas revelam muito sobre aquilo que realmente governa nosso coração.",
              "E existe outro detalhe importante. Nem sempre negociamos nossos princípios por desejar alguma coisa errada. Às vezes fazemos isso porque queremos desesperadamente alguma coisa boa. Queremos ser aceitos e, por isso, concordamos com o que sabemos estar errado. Queremos preservar um relacionamento e começamos a tolerar comportamentos que ferem nossos valores. Queremos evitar um conflito e escolhemos esconder a verdade. Quando o medo de perder alguma coisa se torna maior do que nosso compromisso com aquilo que é certo, começamos a negociar quem somos.",
              "José poderia ter encontrado justificativas para sua decisão. Estava longe da família. Havia sido injustiçado. Vivia em uma realidade que não havia escolhido. Mas ele não permitiu que aquilo que havia sofrido se transformasse em autorização para fazer o que sabia ser errado.",
              "Isso nos ensina que domínio próprio não é apenas resistir a um desejo; é preservar nossos valores quando nossas emoções apresentam motivos para abandoná-los.",
              "E talvez hoje você precise observar suas próprias escolhas com mais atenção. Não apenas aquelas decisões grandes, que parecem determinar o rumo da vida. Mas as pequenas concessões que fazemos quando estamos cansados, carentes, frustrados ou com medo.",
              "Porque aquilo que negociamos repetidamente pode acabar se tornando um novo padrão de comportamento. E aquilo que sustentamos, mesmo quando é difícil, participa da formação do nosso caráter.",
              "A maturidade começa a aparecer quando nossos valores deixam de ser apenas aquilo que defendemos e passam a ser aquilo que determina nossas escolhas."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe algum princípio que defendo com facilidade, mas tenho dificuldade de praticar quando ele contraria meus desejos?",
              "O que mais costuma me levar a negociar aquilo que sei ser certo: medo de perder, necessidade de aprovação, desejo de agradar ou busca por alguma vantagem?",
              "Minhas decisões recentes demonstram os valores que afirmo possuir?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, escolha um princípio que você considera indispensável para sua vida: honestidade, fidelidade, respeito, domínio próprio ou outro.",
              "Agora pergunte: “Em qual situação esse princípio tem sido mais difícil de praticar?”",
              "Identifique uma atitude concreta que você precisa mudar para que suas escolhas estejam alinhadas àquilo em que acredita.",
              "Não espere uma grande prova para começar.",
              "A fidelidade aos nossos valores também é construída nas pequenas decisões de cada dia."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, eu não quero apenas conhecer os Teus princípios. Quero permitir que eles governem minhas escolhas.",
              "Mostra-me onde tenho negociado aquilo que sei ser certo por medo, desejo, insegurança ou necessidade de aprovação.",
              "Fortalece meu caráter para que minhas decisões não dependam apenas das circunstâncias favoráveis.",
              "Que meus valores sejam mais fortes do que as justificativas que minhas emoções tentam apresentar.",
              "Ensina-me a permanecer fiel também quando fazer o certo exigir renúncia.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "MEUS PRINCÍPIOS NÃO SÃO REVELADOS APENAS PELO QUE DEFENDO, MAS PELO QUE ESCOLHO QUANDO SEGUI-LOS ME CUSTA ALGUMA COISA."
            ]
          }
        ]
      },
      "2026-10-14": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 3",
        "title": "NEM TODA FUGA É FRAQUEZA",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Ela o agarrou pelo manto e voltou a convidá-lo: ‘Vamos, deite-se comigo!’ Mas ele deixou o manto na mão dela e fugiu da casa.”",
              "Gênesis 39:12 (NVI)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já permaneceu em uma situação que sabia que não lhe fazia bem, apenas porque acreditava que conseguiria administrá-la?",
              "Às vezes, percebemos que determinada conversa está ultrapassando limites, que um ambiente está despertando comportamentos antigos ou que uma relação está nos levando a agir de maneira contrária aos nossos valores.",
              "Mas, em vez de interromper, pensamos:",
              "“Eu sei até onde posso ir.”",
              "Será mesmo?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Existe um detalhe interessante na atitude de José diante da mulher de Potifar.",
              "Ele não tentou demonstrar que era forte o suficiente para permanecer naquela situação sem ceder.",
              "José reconheceu que havia momentos em que a decisão mais sábia era simplesmente sair.",
              "E talvez isso confronte uma ideia que muitas pessoas carregam: a de que maturidade significa conseguir enfrentar qualquer situação sem precisar se afastar.",
              "Mas nem sempre é assim.",
              "Imagine uma pessoa que está tentando abandonar o hábito de falar mal dos outros.",
              "Ela reconhece que esse comportamento prejudica seus relacionamentos e decide mudar.",
              "Entretanto, continua participando diariamente de conversas em que as pessoas são criticadas, expostas e ridicularizadas.",
              "No começo, tenta apenas ouvir. Depois faz um comentário. Em seguida, já está participando como antes.",
              "E termina dizendo: “Eu não sei por que faço isso novamente.”",
              "Talvez porque esteja tentando mudar um comportamento sem modificar as condições que continuam alimentando esse comportamento.",
              "Esse é um ponto importante.",
              "Muitas vezes queremos vencer determinados padrões apenas pela força de vontade, mas continuamos nos expondo às mesmas situações que os fortalecem.",
              "Queremos controlar a irritação, mas insistimos em discutir quando estamos emocionalmente alterados.",
              "Queremos abandonar a comparação, mas continuamos acompanhando conteúdos que despertam constantemente a sensação de inferioridade.",
              "Queremos desenvolver uma vida financeira equilibrada, mas mantemos hábitos que estimulam compras impulsivas.",
              "Não basta desejar uma mudança se continuamos preservando tudo aquilo que favorece o comportamento que queremos abandonar.",
              "É aqui que precisamos compreender a importância dos limites.",
              "Limites não existem apenas para impedir que outras pessoas ultrapassem determinados espaços da nossa vida.",
              "Eles também nos ajudam a reconhecer até onde podemos ir sem comprometer aquilo que estamos construindo dentro de nós.",
              "José não esperou cometer o erro para estabelecer um limite.",
              "Ele percebeu o perigo e tomou uma decisão antes.",
              "E essa é uma dimensão importante do domínio próprio: não precisar chegar ao ponto de perder o controle para reconhecer que uma situação exige uma atitude.",
              "Talvez você esteja insistindo em permanecer em determinados ambientes porque sair parece fraqueza.",
              "Ou continue sustentando conversas que já deveriam ter sido encerradas porque tem dificuldade de desagradar.",
              "Talvez ainda se exponha a situações que despertam antigos comportamentos porque acredita que, desta vez, conseguirá agir de maneira diferente.",
              "Mas existe uma pergunta que precisa ser feita:",
              "“Por que continuo me aproximando daquilo que depois preciso lutar tanto para vencer?”",
              "Isso não significa fugir de toda situação desconfortável. Existem conversas difíceis que precisamos enfrentar, responsabilidades que não podemos abandonar e conflitos que exigem maturidade para serem resolvidos.",
              "A questão é aprender a distinguir o desconforto que precisamos enfrentar da exposição que precisamos interromper.",
              "José não fugiu de sua responsabilidade.",
              "Ele fugiu de uma situação que ameaçava seus princípios.",
              "E talvez a decisão mais madura que você precise tomar hoje não seja provar que consegue permanecer.",
              "Talvez seja reconhecer que não precisa continuar ali."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma situação à qual continuo me expondo, mesmo percebendo que ela desperta comportamentos que desejo abandonar?",
              "Tenho dificuldade de estabelecer limites porque temo desagradar, perder oportunidades ou ser interpretado de maneira negativa?",
              "Em qual área estou tentando vencer um padrão sem modificar os hábitos que continuam fortalecendo esse padrão?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, identifique uma situação que costuma enfraquecer seu domínio próprio.",
              "Pode ser uma conversa, um hábito, um ambiente ou até um horário em que você percebe maior vulnerabilidade.",
              "Agora estabeleça um limite concreto.",
              "Talvez seja encerrar uma conversa antes que ela se transforme em discussão, deixar de participar de determinados comentários ou modificar um hábito que tem alimentado comportamentos que você deseja abandonar.",
              "Pergunte a si mesmo:",
              "“Que limite posso estabelecer hoje para proteger aquilo que Deus está construindo em mim?”"
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, dá-me discernimento para reconhecer aquilo que fortalece minha vida e aquilo que enfraquece meus princípios.",
              "Mostra-me onde tenho confundido maturidade com a necessidade de provar que consigo suportar qualquer situação.",
              "Ensina-me a estabelecer limites sem culpa e a reconhecer quando preciso permanecer e quando preciso sair.",
              "Que eu não espere perder o controle para tomar decisões que poderiam proteger meu coração.",
              "Fortalece em mim o domínio próprio e a sabedoria para escolher aquilo que contribui para minha transformação.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "DOMÍNIO PRÓPRIO NÃO É APENAS RESISTIR AO QUE ME ENFRAQUECE.",
              "É TAMBÉM TER SABEDORIA PARA NÃO CONTINUAR ME EXPONDO ÀQUILO QUE PRECISO VENCER."
            ]
          }
        ]
      },
      "2026-10-15": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 4",
        "title": "NÃO ENTREGUE AO OUTRO O GOVERNO DE QUEM VOCÊ É",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Não se deixem vencer pelo mal, mas vençam o mal com o bem.” (Romanos 12:21)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já percebeu que algumas pessoas conseguem despertar em você comportamentos que normalmente não gostaria de ter?",
              "Alguém fala com grosseria, e você responde da mesma maneira.",
              "Alguém demonstra indiferença, e você decide também ignorá-lo.",
              "Alguém o fere, e você começa a pensar em como fazer aquela pessoa sentir o que você sentiu.",
              "E, quando percebe, está agindo de uma maneira que antes condenava.",
              "Em que momento o comportamento do outro começou a decidir o seu?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "José foi acusado injustamente pela mulher de Potifar e acabou na prisão.",
              "Ele havia escolhido fazer o que era certo, mas recebeu uma consequência que não merecia.",
              "Pense no que uma experiência como essa poderia produzir dentro de alguém.",
              "José poderia ter concluído que não valia a pena ser honesto, que ninguém merecia sua confiança ou que, dali em diante, cuidaria apenas dos próprios interesses.",
              "A injustiça que sofreu era real.",
              "Mas aquilo que fizeram com ele não precisava determinar aquilo que sairia dele.",
              "E aqui existe uma questão importante para nossa vida.",
              "Às vezes, sem perceber, começamos a construir nosso comportamento como uma reação ao comportamento de outras pessoas.",
              "“Se ele não me procura, também não vou procurar.”",
              "“Se ela não reconhece o que faço, não farei mais nada.”",
              "“Se me tratam com frieza, vou mostrar que também sei ser frio.”",
              "Essas atitudes podem parecer apenas uma forma de proteção.",
              "Mas precisamos perguntar:",
              "“Estou escolhendo agir assim porque isso corresponde aos meus valores ou porque quero devolver aquilo que recebi?”",
              "Existe uma diferença entre estabelecer um limite saudável e transformar o limite em uma forma de punição.",
              "Uma pessoa pode decidir se afastar de uma relação porque reconheceu comportamentos prejudiciais. Isso pode ser necessário.",
              "Mas também pode se afastar apenas para provocar culpa, despertar medo ou fazer o outro sofrer.",
              "Externamente, as atitudes parecem iguais.",
              "A diferença está na motivação que governa a decisão.",
              "É por isso que o princípio de agir no espírito oposto precisa ser compreendido com profundidade.",
              "Ele não significa fingir que nada aconteceu.",
              "Não significa aceitar desrespeito, permanecer em ambientes abusivos ou abrir mão de limites.",
              "Significa que o erro de alguém não precisa se transformar em autorização para que eu também abandone meus valores.",
              "Se alguém mente sobre você, isso não exige que você minta para se defender.",
              "Se alguém o trata com desrespeito, você pode se posicionar firmemente sem precisar humilhar.",
              "Se alguém o decepciona, você pode rever a confiança depositada naquela pessoa sem transformar sua decepção em amargura contra todos.",
              "Mas existe algo ainda mais profundo.",
              "Quando começamos a viver apenas reagindo àquilo que nos fizeram, podemos continuar emocionalmente ligados a situações que já terminaram.",
              "A pessoa que nos feriu talvez nem esteja mais presente.",
              "Entretanto, continuamos tomando decisões tentando provar alguma coisa a ela.",
              "Queremos demonstrar que somos melhores.",
              "Que não precisamos de ninguém.",
              "Que nunca mais seremos enganados.",
              "E, sem perceber, nossa vida continua organizada em torno daquilo que aconteceu.",
              "Isso é muito diferente de viver em liberdade.",
              "Porque liberdade não é apenas conseguir se afastar de quem nos feriu.",
              "É também deixar de permitir que aquela experiência determine quem precisamos ser daqui para a frente.",
              "Romanos 12:21 nos apresenta um princípio desafiador: não sermos vencidos pelo mal, mas vencermos o mal com o bem.",
              "Isso não significa que toda relação será restaurada ou que toda injustiça será reparada imediatamente.",
              "Significa que podemos escolher não reproduzir aquilo que nos feriu.",
              "José não tinha poder para mudar a mentira que haviam contado sobre ele.",
              "Mas ainda podia decidir como viveria naquele novo ambiente.",
              "E talvez essa seja uma das expressões mais profundas de maturidade:",
              "Continuar sendo fiel aos próprios valores, mesmo quando outras pessoas não foram fiéis aos delas."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguém cujo comportamento ainda determina a maneira como eu ajo, mesmo quando sei que minha reação não corresponde aos meus valores?",
              "Tenho estabelecido limites para me proteger ou, em algumas situações, utilizo esses limites para punir, controlar ou provocar culpa?",
              "Existe alguma experiência de injustiça ou rejeição que ainda influencia a maneira como trato pessoas que não tiveram participação no que aconteceu?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, observe uma situação em que você sinta vontade de devolver a alguém aquilo que recebeu.",
              "Antes de agir, pergunte: “Se essa pessoa não tivesse me tratado dessa maneira, eu escolheria ter essa mesma atitude?”",
              "Depois faça uma segunda pergunta: “Como posso responder de maneira coerente com meus valores, sem negar o que aconteceu e sem abandonar meus limites?”",
              "Escolha uma atitude concreta.",
              "Pode ser conversar com respeito, interromper uma discussão, estabelecer um limite com clareza ou simplesmente deixar de alimentar uma resposta motivada pelo desejo de ferir.",
              "Hoje, não permita que a atitude de outra pessoa decida quem você será."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, mostra-me onde tenho permitido que as atitudes de outras pessoas governem minhas respostas.",
              "Revela se ainda existem ofensas, injustiças ou decepções influenciando a maneira como me comporto.",
              "Eu não quero negar aquilo que me feriu, mas também não quero continuar vivendo em função disso.",
              "Ensina-me a estabelecer limites com sabedoria, responder com maturidade e permanecer fiel aos valores que o Senhor está formando em mim.",
              "Que a dor que recebi não determine aquilo que entregarei às pessoas ao meu redor.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "O QUE FIZERAM COMIGO PODE TER ME FERIDO, MAS NÃO PRECISA DECIDIR QUEM EU VOU ME TORNAR."
            ]
          }
        ]
      },
      "2026-10-16": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 5",
        "title": "QUANDO A DOR COMEÇA A ESCREVER NOSSA HISTÓRIA",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“O Senhor, porém, estava com José e lhe mostrou bondade, concedendo-lhe a simpatia do carcereiro.” (Gênesis 39:21)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Será que algumas das suas atitudes de hoje ainda são respostas a coisas que aconteceram há muito tempo?",
              "Talvez você tenha aprendido a desconfiar porque alguém traiu sua confiança.",
              "Talvez tenha dificuldade de receber uma correção porque, no passado, foi constantemente humilhado.",
              "Ou talvez tenha se tornado uma pessoa que precisa controlar tudo porque, em algum momento, experimentou a insegurança de não saber o que aconteceria.",
              "O tempo passou. As pessoas mudaram. Os ambientes são outros.",
              "Mas será que algumas experiências continuam decidindo como você vive?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "José conheceu a dor de ser rejeitado por pessoas que deveriam protegê-lo.",
              "Seus próprios irmãos o venderam como escravo. Mais tarde, quando escolheu agir corretamente na casa de Potifar, foi acusado injustamente e enviado à prisão.",
              "José não tinha motivos para considerar justas aquelas experiências.",
              "Entretanto, há algo que chama atenção em sua trajetória: mesmo depois de tantas injustiças, ele continuou assumindo responsabilidades e demonstrando fidelidade nos lugares onde estava.",
              "A Bíblia não nos conta todos os sentimentos que José experimentou durante esses acontecimentos. Mas suas atitudes posteriores mostram que as injustiças sofridas não determinaram todas as suas escolhas futuras.",
              "E aqui existe uma reflexão importante para nós.",
              "Nem sempre percebemos quando uma experiência dolorosa deixa de ser apenas parte da nossa história e começa a se transformar em uma regra para nossa vida.",
              "Uma criança que cresceu sendo constantemente criticada pode chegar à idade adulta acreditando que qualquer correção significa que ela não é boa o suficiente.",
              "Alguém que sofreu uma traição pode começar a interpretar qualquer mudança de comportamento como sinal de que será enganado novamente.",
              "Uma pessoa que foi abandonada pode desenvolver o hábito de se afastar primeiro, antes que alguém tenha a oportunidade de deixá-la.",
              "Perceba o que acontece.",
              "Aquilo que foi vivido em uma situação específica começa a ser aplicado a situações completamente diferentes.",
              "A pessoa não está mais diante de quem a feriu, mas continua reagindo como se o perigo estivesse presente.",
              "E talvez ela nem perceba isso.",
              "Acredita que está apenas sendo cuidadosa, quando pode estar vivendo permanentemente na defensiva.",
              "Acredita que é independente, quando talvez tenha aprendido que precisar de alguém é perigoso.",
              "Acredita que está protegendo seu coração, quando pode estar impedindo que relacionamentos saudáveis se desenvolvam.",
              "Nem toda atitude que chamamos de proteção está realmente nos protegendo. Algumas apenas mantêm nossas feridas no controle.",
              "Isso não significa que devemos ignorar o que aconteceu ou voltar a confiar indiscriminadamente em quem nos machucou.",
              "A cura não exige negar a realidade.",
              "Mas precisamos aprender a distinguir o que a experiência nos ensinou daquilo que a dor nos fez acreditar.",
              "Uma traição pode nos ensinar a desenvolver discernimento. Mas não precisa nos convencer de que ninguém é confiável.",
              "Uma rejeição pode nos ensinar a reconhecer relacionamentos que não são saudáveis. Mas não precisa nos convencer de que não somos dignos de amor.",
              "Uma injustiça pode nos ensinar a estabelecer limites. Mas não precisa nos transformar em pessoas amargas.",
              "A experiência pode produzir aprendizado sem precisar se transformar em identidade.",
              "Talvez hoje você esteja tentando mudar um comportamento que se repete há anos. Mas, antes de perguntar apenas como parar de agir daquela maneira, experimente perguntar: “O que aconteceu comigo que me fez acreditar que precisava agir assim para estar seguro?”",
              "Essa pergunta pode abrir espaço para reconhecer uma raiz que até então permanecia escondida.",
              "E aquilo que conseguimos reconhecer diante de Deus pode começar a ser tratado.",
              "José não teve poder para mudar aquilo que seus irmãos fizeram.",
              "Mas sua história nos mostra que o passado não precisava determinar todo o seu futuro.",
              "Você não pode reescrever aquilo que aconteceu, mas pode permitir que Deus transforme a maneira como essa experiência continua influenciando sua vida."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma reação minha que parece exagerada diante da situação atual, mas que pode estar relacionada a experiências anteriores?",
              "Que conclusão sobre mim, sobre as pessoas ou sobre os relacionamentos eu passei a acreditar depois de uma experiência dolorosa?",
              "Essa conclusão ainda me ajuda a viver com sabedoria ou tem limitado minha capacidade de confiar, amar e me relacionar?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, escolha uma reação que costuma se repetir em sua vida.",
              "Pode ser desconfiar rapidamente, afastar-se quando se sente rejeitado, precisar controlar tudo ou reagir defensivamente quando recebe uma correção.",
              "Complete estas frases:",
              "“Quando acontece __________, minha reação costuma ser __________.”",
              "“Talvez eu tenha aprendido a reagir assim quando __________.”",
              "“Mas hoje eu posso começar a responder de uma maneira diferente: __________.”",
              "Não force lembranças nem tente encontrar uma explicação para tudo.",
              "Apenas permita que Deus lhe mostre se existe alguma experiência antiga influenciando suas escolhas atuais."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, mostra-me se existem experiências do meu passado que ainda estão governando minhas atitudes.",
              "Revela as conclusões que construí a partir da dor e que talvez não correspondam à verdade sobre quem sou e sobre as pessoas ao meu redor.",
              "Eu não quero negar o que aconteceu, mas também não quero continuar vivendo como se aquilo ainda estivesse acontecendo.",
              "Ensina-me a transformar experiências dolorosas em aprendizado, sem permitir que elas definam minha identidade.",
              "Que minha história seja um lugar de testemunho da Tua restauração, e não uma prisão que determine quem estou me tornando.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "O QUE ACONTECEU COMIGO FAZ PARTE DA MINHA HISTÓRIA, MAS NÃO PRECISA CONTINUAR ESCREVENDO MINHAS ESCOLHAS."
            ]
          }
        ]
      },
      "2026-10-17": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 6",
        "title": "CONTINUAR TAMBÉM É UMA FORMA DE VENCER",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“O chefe dos copeiros, porém, não se lembrou de José; ao contrário, esqueceu-se dele.” Gênesis 40:23 (NVI)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já começou alguma mudança com muita disposição, mas perdeu o entusiasmo quando percebeu que os resultados demorariam mais do que esperava?",
              "Talvez tenha decidido cuidar melhor da sua vida espiritual, reorganizar suas finanças, mudar a maneira de se relacionar ou abandonar um comportamento antigo.",
              "No começo, parecia possível.",
              "Mas os dias passaram, as dificuldades continuaram e você começou a se perguntar:",
              "“Será que todo esse esforço está adiantando?”",
              "Existe uma dimensão da maturidade que não aparece no entusiasmo de começar.",
              "Ela aparece na capacidade de continuar."
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando José interpretou o sonho do copeiro de Faraó, surgiu uma possibilidade de finalmente sair da prisão.",
              "Ele pediu que o copeiro se lembrasse dele quando recuperasse sua posição.",
              "Mas o homem foi restaurado ao cargo e se esqueceu de José.",
              "Depois disso, passaram-se dois anos até que Faraó tivesse os sonhos que levariam José a ser chamado.",
              "Imagine o que significa continuar vivendo quando uma possibilidade de mudança parece ter desaparecido.",
              "A Bíblia não descreve tudo o que José pensou durante aquele período.",
              "Mas sabemos que ele continuou na prisão, e que sua trajetória não terminou naquele esquecimento.",
              "Essa parte da história nos apresenta uma verdade que precisamos compreender:",
              "Nem toda prova exige uma decisão difícil em um momento específico. Algumas exigem que sustentemos a mesma decisão durante muito tempo.",
              "E talvez essa seja uma das maiores dificuldades da nossa geração.",
              "Estamos acostumados a desejar resultados rápidos.",
              "Queremos resolver em poucos dias aquilo que levou anos para ser construído.",
              "Queremos mudar um comportamento, mas nos frustramos quando descobrimos que ele continua aparecendo.",
              "Queremos restaurar um relacionamento, mas nos desanimamos quando percebemos que reconstruir a confiança exige tempo.",
              "Queremos amadurecer espiritualmente, mas esperamos que uma experiência intensa produza automaticamente uma transformação permanente.",
              "Só que existe uma diferença entre experimentar uma mudança e consolidar uma mudança.",
              "Uma pessoa pode decidir, durante um culto, que não permitirá mais que a raiva governe suas respostas.",
              "Essa decisão é importante.",
              "Mas o amadurecimento aparecerá quando ela estiver novamente diante de uma provocação.",
              "Quando estiver cansada.",
              "Quando for contrariada.",
              "Quando precisar escolher pela décima vez não responder da maneira antiga.",
              "A decisão inicia um novo caminho. A perseverança ajuda a transformar esse caminho em um novo modo de viver.",
              "Pense em alguém que decidiu reconstruir a confiança dentro de um relacionamento.",
              "Pedir perdão pode acontecer em uma conversa.",
              "Mas demonstrar, ao longo do tempo, que determinados comportamentos realmente mudaram exigirá constância.",
              "Da mesma forma, alguém pode reconhecer que precisa aprender a lidar com suas finanças.",
              "Mas a transformação não estará apenas na decisão de organizar o orçamento.",
              "Estará nas pequenas escolhas feitas quando surgir novamente a vontade de gastar impulsivamente.",
              "Perceba: Não é porque você precisou escolher novamente que a primeira decisão foi inútil.",
              "Às vezes, é justamente a repetição consciente de novas escolhas que fortalece aquilo que está sendo construído.",
              "Isso não significa que perseverar seja insistir em ambientes abusivos, suportar injustiças sem buscar ajuda ou permanecer em situações que colocam sua segurança em risco.",
              "Perseverança, aqui, significa não abandonar seus valores e seu crescimento porque os resultados ainda não apareceram.",
              "José desejava sair da prisão.",
              "Mas, enquanto isso não acontecia, continuou exercendo as responsabilidades que lhe foram confiadas.",
              "E talvez essa seja uma pergunta importante para você hoje: “O que estou deixando de viver porque ainda estou esperando alguma coisa mudar?”",
              "Talvez você não consiga determinar quando uma situação será resolvida.",
              "Mas pode continuar desenvolvendo sua vida espiritual, cuidando de suas responsabilidades e praticando as mudanças que já reconheceu serem necessárias.",
              "Você não precisa esperar que tudo ao seu redor mude para continuar crescendo por dentro."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma mudança importante que comecei, mas estou pensando em abandonar porque os resultados ainda não apareceram?",
              "Tenho confundido a demora dos resultados com a ausência de progresso?",
              "Que pequena decisão preciso continuar sustentando, mesmo quando não sinto vontade ou entusiasmo?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, identifique uma decisão importante que você tomou recentemente, mas que tem sido difícil sustentar.",
              "Não tente resolver tudo de uma vez.",
              "Escolha uma atitude pequena e concreta que represente continuidade.",
              "Pode ser retomar um hábito espiritual, cumprir um compromisso, manter um limite saudável ou praticar uma resposta diferente diante de uma situação recorrente.",
              "Depois, escreva: “Mesmo que os resultados ainda não apareçam, hoje eu escolho continuar __________.”",
              "Lembre-se: perseverar não significa nunca precisar recomeçar.",
              "Significa não transformar uma dificuldade em motivo para abandonar aquilo que precisa ser construído."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, ensina-me a permanecer fiel durante os processos que exigem tempo.",
              "Perdoa-me pelas vezes em que abandonei mudanças importantes porque não vi resultados tão rapidamente quanto esperava.",
              "Dá-me perseverança para sustentar as decisões que estão contribuindo para meu amadurecimento.",
              "Ajuda-me a reconhecer os pequenos avanços e a não desprezar aquilo que está sendo construído dia após dia.",
              "Que eu não dependa apenas do entusiasmo de começar, mas desenvolva o caráter necessário para continuar.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "NEM TODA VITÓRIA ACONTECE QUANDO UMA SITUAÇÃO MUDA.",
              "ÀS VEZES, A VITÓRIA ESTÁ EM CONTINUAR SENDO FIEL ENQUANTO ELA AINDA NÃO MUDOU."
            ]
          }
        ]
      },
      "2026-10-18": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 2 — DIA 7",
        "title": "QUEM ESTOU ME TORNANDO DURANTE A PROVA?",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Isso não depende de mim, mas Deus dará ao faraó uma resposta favorável.” (Gênesis 41:16)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "E se aquilo que você tanto deseja conquistar chegasse hoje? Você estaria preparado para lidar com o que viria junto?",
              "Às vezes, desejamos uma posição sem pensar nas responsabilidades que ela exige.",
              "Queremos reconhecimento sem considerar como reagiremos às críticas.",
              "Desejamos prosperidade sem avaliar como administramos aquilo que já possuímos.",
              "Pedimos novas oportunidades, mas raramente perguntamos:",
              "“Quem eu preciso me tornar para viver bem aquilo que estou pedindo?”"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Depois de tantos acontecimentos difíceis, José finalmente foi chamado para comparecer diante de Faraó.",
              "Era uma oportunidade extraordinária.",
              "O homem que havia sido vendido como escravo e passado anos na prisão agora estava diante da maior autoridade do Egito.",
              "Faraó havia ouvido falar de sua capacidade de interpretar sonhos.",
              "José poderia ter aproveitado aquele momento para destacar sua habilidade, impressionar o governante ou demonstrar que era alguém especial.",
              "Mas sua resposta foi surpreendente: “Isso não depende de mim, mas Deus dará ao faraó uma resposta favorável.”",
              "Existe algo importante nessa atitude.",
              "José possuía uma capacidade que poderia abrir portas para ele.",
              "Mas não precisava transformar aquela capacidade em motivo para exaltar a si mesmo.",
              "Ele reconhecia a origem daquilo que havia recebido.",
              "E isso nos leva a uma reflexão sobre o propósito dos processos de formação.",
              "Não basta desenvolver capacidade para conquistar alguma coisa. Também precisamos desenvolver maturidade para não sermos governados por aquilo que conquistamos.",
              "Pense em uma pessoa que sempre desejou ocupar uma posição de liderança.",
              "Enquanto não consegue, acredita que sua maior dificuldade é a falta de oportunidade.",
              "Mas, quando finalmente assume a posição, descobre que liderar envolve receber críticas, tomar decisões difíceis, lidar com conflitos e reconhecer os próprios erros.",
              "Se sua identidade estiver construída apenas sobre a necessidade de ser admirada, aquela posição poderá se tornar um lugar de profunda insegurança.",
              "Ela começará a interpretar qualquer discordância como ameaça.",
              "Qualquer correção como desrespeito.",
              "Qualquer erro como uma exposição intolerável.",
              "A oportunidade não criou necessariamente essas fragilidades. Ela apenas colocou sobre a pessoa responsabilidades que tornaram essas fragilidades mais visíveis.",
              "O mesmo pode acontecer em outras áreas.",
              "Alguém deseja prosperar financeiramente, mas ainda não aprendeu a lidar com impulsos de consumo.",
              "Deseja construir um relacionamento saudável, mas continua permitindo que o medo da rejeição governe suas atitudes.",
              "Deseja ser reconhecido profissionalmente, mas ainda depende tanto da aprovação das pessoas que não consegue lidar com uma crítica.",
              "Isso não significa que precisamos alcançar uma maturidade perfeita antes de receber qualquer oportunidade.",
              "Significa que aquilo que desejamos viver também precisa ser acompanhado pelo desenvolvimento do caráter necessário para administrá-lo.",
              "A história de José nos ajuda a enxergar essa relação.",
              "O jovem que havia recebido sonhos precisou atravessar situações nas quais foram exigidas fidelidade, responsabilidade, domínio próprio e perseverança.",
              "Essas experiências não justificam as injustiças que ele sofreu.",
              "Mas mostram como Deus pôde agir em sua história, mesmo em meio àquilo que outras pessoas fizeram de errado.",
              "E aqui está uma distinção importante: Deus não precisava da maldade dos irmãos para ser capaz de cumprir Seus propósitos. Mas a maldade dos irmãos também não conseguiu impedir que Ele continuasse trabalhando na vida de José.",
              "Talvez você esteja tão concentrado em alcançar uma determinada conquista que ainda não percebeu o quanto precisa crescer para administrá-la.",
              "Talvez sua oração seja para que Deus abra uma oportunidade.",
              "Mas você também precise pedir sabedoria para lidar com ela.",
              "Talvez esteja pedindo crescimento.",
              "Mas precise desenvolver responsabilidade para sustentar esse crescimento.",
              "Talvez esteja esperando uma mudança externa.",
              "Mas exista uma transformação interior que não deveria continuar sendo adiada.",
              "Ao longo desta semana, refletimos sobre a presença de Deus nas provas, o governo das emoções, a importância dos limites, nossas respostas diante das injustiças, as feridas que podem influenciar nossas escolhas e a perseverança durante a espera.",
              "Agora todas essas reflexões nos conduzem a uma pergunta: “O que está sendo formado em mim enquanto caminho em direção àquilo que desejo viver?”",
              "Porque a maior evidência de que uma experiência contribuiu para nosso amadurecimento não é apenas conseguir contar que sobrevivemos a ela.",
              "É perceber que nossas respostas, escolhas e atitudes começaram a mudar.",
              "O objetivo não é apenas chegar ao palácio. É não permitir que o palácio governe o coração quando finalmente chegarmos lá."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma conquista que desejo muito, mas para a qual ainda preciso desenvolver maturidade, responsabilidade ou domínio próprio?",
              "Se eu recebesse hoje aquilo que estou pedindo, quais fragilidades interiores poderiam dificultar minha capacidade de administrar essa conquista?",
              "Ao olhar para os processos que já atravessei, consigo reconhecer mudanças reais na maneira como penso, escolho e respondo às situações?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, escolha algo que você deseja conquistar ou viver no futuro.",
              "Pode estar relacionado à família, ao trabalho, ao ministério, às finanças ou aos relacionamentos.",
              "Agora complete:",
              "“Eu desejo que Deus me confie __________.”",
              "“Para administrar isso com maturidade, preciso continuar desenvolvendo __________.”",
              "“Uma atitude que posso começar a praticar hoje é __________.”",
              "Depois, apresente essas respostas a Deus.",
              "Não transforme esse exercício em uma cobrança para se tornar perfeito.",
              "Use-o como uma oportunidade de alinhar seus desejos com seu processo de crescimento.",
              "Não espere chegar ao destino para começar a desenvolver o caráter que precisará ter quando chegar lá."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, obrigado porque Tua presença não depende das circunstâncias que estou vivendo.",
              "Ao olhar para os processos da minha vida, ajuda-me a reconhecer aquilo que ainda precisa ser fortalecido em mim.",
              "Eu não quero desejar apenas novas oportunidades, conquistas e responsabilidades sem permitir que meu caráter também amadureça.",
              "Trabalha minhas motivações, minhas escolhas e a maneira como respondo às situações difíceis.",
              "Prepara-me não apenas para receber aquilo que o Senhor deseja me confiar, mas também para administrar tudo isso com sabedoria, humildade e fidelidade.",
              "Que cada processo contribua para que o caráter de Cristo seja formado em mim.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "A MAIOR CONQUISTA NÃO É APENAS CHEGAR ONDE EU DESEJO.",
              "É ME TORNAR ALGUÉM CAPAZ DE VIVER ESSE NOVO TEMPO SEM PERDER OS PRINCÍPIOS QUE DEUS FORMOU EM MIM."
            ]
          }
        ]
      }
    }
  },
  { number: 3, startsOn: '2026-10-19', seriesId: 'aprovados-2026', devotionals: {} },
  { number: 4, startsOn: '2026-10-26', seriesId: 'aprovados-2026', devotionals: {} },
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
