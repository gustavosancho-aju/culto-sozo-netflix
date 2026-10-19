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
  {
    "number": 3,
    "startsOn": "2026-10-19",
    "seriesId": "aprovados-2026",
    "theme": "Aprovados",
    "devotionals": {
      "2026-10-19": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 3 — DIA 1",
        "title": "QUANDO VOCÊ NÃO CONSEGUE RECEBER O QUE DEUS COLOCA DIANTE DE VOCÊ",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Acaso não sou eu um benjamita, da menor das tribos de Israel, e não é o meu clã o menos importante de todos os clãs da tribo de Benjamim? Por que então estás me dizendo tudo isso?” 1 Samuel 9:21"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já recebeu um elogio e, em vez de simplesmente agradecer, sentiu necessidade de diminuir aquilo que fez?",
              "Alguém diz que você realizou um excelente trabalho, e sua resposta é: “Imagina, nem ficou tão bom assim.”",
              "Alguém reconhece uma qualidade sua, e você imediatamente aponta um defeito.",
              "Alguém demonstra confiança em sua capacidade, e você começa a explicar por que talvez não seja a pessoa mais indicada.",
              "Mas existe uma pergunta que raramente fazemos: Por que, às vezes, temos tanta dificuldade de receber algo bom a nosso respeito?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Quando Samuel começou a falar com Saul sobre o futuro que estava diante dele, Saul respondeu mencionando sua origem e a posição de sua família.",
              "Não sabemos exatamente o que ele sentiu naquele momento. Sua resposta pode ter sido uma expressão sincera de humildade ou surpresa.",
              "Mas essa passagem nos permite examinar uma dificuldade que muitas pessoas experimentam: receber algo que não combina com a maneira como aprenderam a se enxergar.",
              "Pense em uma pessoa que passou muitos anos tentando conquistar o reconhecimento do pai. Ela estudava, esforçava-se, procurava fazer tudo corretamente, mas quase nunca recebia uma palavra de aprovação. Quando alcançava alguma coisa, ouvia apenas o que ainda poderia ter feito melhor. Com o tempo, começou a acreditar que precisava realizar algo extraordinário para merecer reconhecimento. Anos depois, essa pessoa constrói uma carreira, desenvolve habilidades e começa a receber elogios sinceros.",
              "Mas existe um problema. Ela não consegue descansar em nenhuma conquista. Quando alguém reconhece seu trabalho, pensa que aquela pessoa ainda não percebeu suas limitações. Quando recebe uma nova responsabilidade, sente que precisa provar, mais uma vez, que merece estar ali. E, quando comete um erro, interpreta aquilo como confirmação de que nunca foi realmente capaz. Ela não está apenas tentando fazer bem o seu trabalho. Está tentando resolver, por meio do desempenho, uma questão antiga sobre seu próprio valor.",
              "E aqui existe algo que precisamos compreender.",
              "Às vezes, aquilo que chamamos de humildade pode esconder uma dificuldade de reconhecer o que existe de bom em nós.",
              "É claro que humildade envolve reconhecer nossas limitações.",
              "Mas também envolve reconhecer, sem orgulho e sem constrangimento, aquilo que Deus nos permitiu desenvolver.",
              "Humildade não é negar nossas capacidades. É reconhecer que elas não nos tornam superiores a ninguém.",
              "Uma pessoa pode ser humilde e reconhecer que sabe ensinar. Pode ser humilde e admitir que possui capacidade para liderar. Pode ser humilde e receber um elogio sem precisar imediatamente diminuir a si mesma.",
              "O problema começa quando confundimos desvalorização com humildade.",
              "E essa confusão pode produzir consequências importantes.",
              "Porque, quando alguém não consegue reconhecer seu próprio valor, pode começar a depender excessivamente de outras pessoas para confirmá-lo.",
              "Um elogio produz alívio.",
              "Uma crítica provoca insegurança.",
              "Um reconhecimento traz entusiasmo.",
              "A ausência de reconhecimento desperta dúvidas.",
              "A pessoa passa a viver emocionalmente dependente de avaliações que mudam o tempo inteiro.",
              "E talvez você reconheça algo semelhante em sua própria vida.",
              "Você consegue celebrar uma conquista ou imediatamente começa a pensar na próxima coisa que precisa realizar?",
              "Consegue receber uma demonstração de amor ou sente que precisa fazer alguma coisa para merecê-la?",
              "Consegue reconhecer suas capacidades ou acredita que isso seria arrogância?",
              "Existe uma diferença entre desejar crescer e viver permanentemente tentando provar que possui valor.",
              "O crescimento saudável nasce do reconhecimento de que ainda podemos amadurecer.",
              "A necessidade constante de provar nosso valor pode nascer da crença de que, enquanto não formos suficientemente bons, não mereceremos ser aceitos.",
              "E aqui está uma verdade importante: Você não precisa negar aquilo que Deus desenvolveu em sua vida para continuar sendo uma pessoa humilde.",
              "Talvez seu processo de cura envolva aprender a receber. Receber uma palavra de reconhecimento sem desqualificá-la. Receber uma oportunidade sem começar imediatamente a procurar motivos pelos quais não a merece. Receber uma correção sem concluir que todo o seu valor foi colocado em questão. E receber o amor de Deus sem transformá-lo em mais uma recompensa que precisa conquistar por desempenho.",
              "A história de Saul nos convida a observar como nos posicionamos diante daquilo que recebemos.",
              "Porque uma identidade que ainda depende excessivamente da aprovação pode encontrar dificuldade tanto para receber reconhecimento quanto para lidar com sua ausência.",
              "O problema não está em desejar ser reconhecido. Está em precisar desse reconhecimento para conseguir acreditar que possui valor.",
              "Talvez hoje Deus esteja mostrando que você não precisa continuar vivendo como alguém que precisa convencer o mundo inteiro de que merece ocupar um lugar.",
              "Você pode reconhecer suas limitações, continuar aprendendo e, ao mesmo tempo, receber com gratidão aquilo que lhe foi confiado."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Quando alguém reconhece uma qualidade minha, consigo receber esse reconhecimento ou sinto necessidade de diminuir aquilo que fiz?",
              "Existe alguma área da minha vida em que continuo tentando provar meu valor para alguém, mesmo que essa pessoa já não esteja presente?",
              "Quando cometo um erro, consigo reconhecer uma atitude que precisa ser corrigida ou começo a questionar todo o meu valor como pessoa?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, observe como você reage quando recebe algo positivo: um elogio, um agradecimento, uma demonstração de carinho ou uma oportunidade. Se perceber vontade de diminuir aquilo que recebeu, faça uma pausa.",
              "Em vez de responder automaticamente “Não foi nada”, experimente simplesmente dizer: “Muito obrigado. Fico feliz por isso.”",
              "Depois, reserve alguns minutos e escreva: “O que eu sinto quando alguém reconhece algo bom em mim?” “Por que receber esse reconhecimento pode ser desconfortável?”. “O que preciso aprender sobre meu valor para não depender constantemente da confirmação das pessoas?”",
              "O objetivo não é alimentar orgulho. É começar a reconhecer que você pode receber algo bom sem precisar desmerecer a si mesmo."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, mostra-me se tenho confundido humildade com desvalorização.",
              "Revela as experiências que me ensinaram a acreditar que preciso provar constantemente meu valor.",
              "Eu não quero viver dependendo da aprovação das pessoas para reconhecer quem sou.",
              "Ensina-me a receber com gratidão aquilo que o Senhor tem colocado em minha vida, sem orgulho, mas também sem rejeitar minhas capacidades.",
              "Cura a necessidade de desempenho que tem governado minhas escolhas e fortalece minha identidade em Ti.",
              "Que eu aprenda a reconhecer aquilo que ainda precisa amadurecer, sem desprezar aquilo que o Senhor já desenvolveu em mim.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "HUMILDADE NÃO É DIMINUIR QUEM EU SOU. É RECONHECER, SEM ORGULHO E SEM MEDO, AQUILO QUE DEUS ESTÁ CONSTRUINDO EM MIM."
            ]
          }
        ]
      },
      "2026-10-20": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 3 — DIA 2",
        "title": "QUANDO O MEDO SE DISFARÇA DE NECESSIDADE",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Ele esperou sete dias, o prazo estabelecido por Samuel; Samuel, porém, não chegou a Gilgal, e os soldados de Saul começaram a se dispersar.” (1 Samuel 13:8)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já tomou uma decisão dizendo que não tinha outra escolha, mas depois percebeu que, na verdade, tinha medo das consequências de agir de maneira diferente?",
              "Talvez tenha aceitado uma responsabilidade que sabia não ter condições de assumir, apenas para não decepcionar alguém. Ou tenha escondido uma verdade porque não queria enfrentar uma discussão. Em outras situações, pode ter tomado uma decisão precipitada simplesmente porque não conseguia suportar a sensação de estar perdendo o controle.",
              "Naquele momento, tudo parecia urgente, e agir daquela maneira parecia ser a única saída possível. Mas, quando a situação passou, talvez você tenha percebido que existiam outras alternativas que nem chegou a considerar.",
              "E aqui está uma pergunta importante: será que aquela situação realmente exigia uma decisão imediata ou era o seu medo das consequências que estava determinando o que você deveria fazer?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "Saul estava diante de uma situação difícil. Os filisteus representavam uma ameaça, seus soldados estavam amedrontados e muitos começavam a abandoná-lo. Samuel ainda não havia chegado e, diante daquela pressão, Saul decidiu oferecer o sacrifício sem esperar pelo profeta. Quando foi confrontado, apresentou suas razões: o exército estava diminuindo, o inimigo se aproximava e a situação parecia exigir uma resposta imediata.",
              "Mas existe algo importante nessa história. Saul não estava apenas tentando resolver um problema externo. Ele também estava tentando aliviar a pressão que aquela situação produzia dentro dele. E isso nos leva a uma reflexão sobre nossas próprias decisões, porque, às vezes, acreditamos que estamos agindo para resolver determinada situação, quando, na verdade, estamos tentando nos livrar rapidamente de um sentimento desconfortável.",
              "Imagine alguém que envia uma mensagem importante e não recebe resposta. Passam-se alguns minutos, depois algumas horas, e a pessoa começa a pensar que fez alguma coisa errada, que está sendo ignorada ou que o relacionamento está mudando. Então envia outra mensagem, depois mais uma, até que decide cobrar uma explicação. Quando finalmente recebe uma resposta, descobre que a outra pessoa estava apenas ocupada. O problema não era necessariamente a ausência de resposta, mas a dificuldade de permanecer diante de uma incerteza sem tentar controlá-la imediatamente.",
              "Perceba como esse mecanismo funciona. A pessoa sente medo de ser ignorada, esse medo produz desconforto e o desconforto cria uma sensação de urgência que parece exigir alguma atitude. Nesse momento, ela acredita que precisa agir imediatamente, quando talvez precise apenas aprender a lidar com a espera. O sentimento começa a ser tratado como se fosse uma ordem, e não como algo que precisa ser compreendido.",
              "Esse mesmo funcionamento pode aparecer em diferentes áreas da nossa vida. Uma mãe percebe que o filho está enfrentando uma dificuldade e imediatamente tenta resolver tudo por ele. Acredita que está apenas cuidando, mas talvez também esteja tentando aliviar a própria ansiedade de vê-lo enfrentar algo difícil. Um profissional recebe uma crítica e começa a apresentar inúmeras explicações. Acredita que está esclarecendo os fatos, mas talvez esteja tentando impedir que alguém forme uma opinião negativa sobre ele. Da mesma maneira, uma pessoa percebe que alguém está contrariado e imediatamente muda sua decisão. Acredita que está preservando a paz, mas talvez esteja tentando evitar o desconforto de não ser aprovada.",
              "Esses exemplos revelam algo que precisamos examinar com atenção: nem toda decisão tomada para produzir alívio é uma decisão tomada com sabedoria. Quando não aprendemos a lidar com determinados sentimentos, podemos começar a organizar nossas escolhas em torno da necessidade de não experimentá-los. Fazemos qualquer coisa para não sentir rejeição, cedemos para não enfrentar conflitos, tentamos controlar situações para não experimentar insegurança e respondemos precipitadamente porque temos dificuldade de suportar a espera.",
              "E, sem perceber, passamos a chamar de necessidade aquilo que muitas vezes é apenas uma tentativa de escapar do desconforto emocional. Isso não significa que toda urgência seja falsa ou que devemos permanecer passivos diante dos problemas. Existem situações que realmente exigem decisões imediatas. Entretanto, a maturidade envolve aprender a distinguir a urgência real de uma situação da urgência que sentimos dentro de nós.",
              "Nem tudo o que provoca ansiedade precisa ser resolvido naquele instante. Nem toda discordância precisa ser encerrada imediatamente, assim como nem toda incerteza exige uma resposta. E, principalmente, nem toda possibilidade de desagradar alguém significa que precisamos abandonar nossas convicções. Às vezes, a decisão mais madura não é fazer alguma coisa rapidamente, mas conseguir permanecer firme enquanto o desconforto ainda está presente.",
              "Saul não precisava ignorar a ameaça dos filisteus, mas precisava permanecer fiel à orientação que havia recebido, mesmo diante da pressão. Da mesma maneira, você não precisa negar seus sentimentos nem fingir que determinadas situações não o afetam. Precisa, porém, aprender a reconhecê-los sem permitir que determinem automaticamente suas escolhas. Afinal, sentir medo, ansiedade ou insegurança não significa que esses sentimentos precisam assumir o governo da sua vida.",
              "Talvez hoje exista alguma situação que você esteja tentando resolver a qualquer custo. Antes de tomar sua próxima decisão, experimente perguntar: “Eu realmente preciso agir agora ou estou tentando fazer desaparecer um sentimento que ainda não aprendi a administrar?” Essa pergunta pode revelar motivações que você ainda não havia percebido e ajudá-lo a reconhecer se suas atitudes estão sendo conduzidas por seus princípios ou pela necessidade de encontrar alívio imediato.",
              "Porque, muitas vezes, o primeiro sinal de maturidade não é conseguir mudar imediatamente aquilo que está acontecendo ao nosso redor, mas deixar de ser governado pela urgência que essa situação desperta dentro de nós."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Quando me sinto inseguro, rejeitado ou contrariado, costumo tomar decisões precipitadas apenas para aliviar o desconforto?",
              "Existe alguma situação em que tenho dito “não tenho outra escolha”, quando, na verdade, tenho medo de enfrentar as consequências de uma decisão diferente?",
              "Qual sentimento tenho mais dificuldade de suportar sem tentar controlar imediatamente a situação: medo, ansiedade, rejeição, frustração ou incerteza?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, observe uma situação que desperte em você a necessidade de agir imediatamente.",
              "Antes de tomar uma decisão, faça uma pausa e responda:",
              "“O que realmente está acontecendo?”",
              "“O que estou sentindo diante disso?”",
              "“Minha decisão pretende resolver o problema ou apenas aliviar o que estou sentindo?”",
              "Se não houver uma urgência real, permita-se esperar um pouco antes de responder. Não se trata de adiar responsabilidades ou evitar conversas necessárias. Trata-se de aprender que você pode sentir desconforto sem precisar obedecer imediatamente a ele."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, mostra-me onde o medo tem se apresentado como necessidade e influenciado minhas decisões.",
              "Revela as situações em que tenho agido precipitadamente porque não consigo suportar a espera, a incerteza ou a possibilidade de desagradar alguém.",
              "Ensina-me a reconhecer meus sentimentos sem entregar a eles o governo da minha vida.",
              "Dá-me discernimento para identificar quando preciso agir e quando preciso permanecer firme.",
              "Que minhas decisões sejam conduzidas pela Tua verdade e pelos princípios que estou aprendendo a viver, e não apenas pela necessidade de aliviar aquilo que sinto.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "NEM TUDO O QUE ME CAUSA DESCONFORTO EXIGE UMA RESPOSTA IMEDIATA. ÀS VEZES, O QUE PRECISA MUDAR NÃO É A SITUAÇÃO, MAS A MANEIRA COMO EU REAJO A ELA."
            ]
          }
        ]
      },
      "2026-10-21": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 3 — DIA 3",
        "title": "QUANDO A CONQUISTA DO OUTRO DESPERTA ALGO EM VOCÊ",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Daí em diante Saul olhava com inveja para Davi.” (1 Samuel 18:9)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já percebeu que consegue admirar uma pessoa até o momento em que ela conquista algo que você também gostaria de ter?",
              "Talvez seja alguém próximo que recebeu uma promoção, construiu um relacionamento, conquistou reconhecimento ou alcançou uma oportunidade pela qual você esperava há muito tempo. Você sabe que deveria ficar feliz e até consegue parabenizá-la, mas, quando fica sozinho, começa a experimentar um desconforto que não sabe explicar.",
              "Talvez venha um pensamento como: “Por que aconteceu com ela e não comigo?” Ou, de maneira ainda mais silenciosa: “Será que eu não sou tão bom quanto pensava?”",
              "O mais interessante é que aquela pessoa não fez necessariamente nada contra você. Ela apenas conquistou alguma coisa. Entretanto, a conquista dela parece ter despertado uma dúvida sobre o seu próprio valor.",
              "E se aquilo que está incomodando você não for exatamente o que o outro conquistou, mas o significado que essa conquista passou a ter sobre quem você acredita ser?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "A história de Saul apresenta uma mudança importante na maneira como ele passou a enxergar Davi. Depois da vitória sobre Golias, o povo começou a celebrar os feitos dos dois homens, atribuindo a Davi um reconhecimento maior. Saul continuava sendo rei, sua posição não havia sido retirada e Davi não havia exigido seu trono. Entretanto, a Bíblia registra que, daquele momento em diante, Saul passou a olhar para Davi com inveja.",
              "Existe algo profundamente revelador nessa mudança. O reconhecimento recebido por Davi não alterou imediatamente a posição de Saul, mas alterou a maneira como Saul passou a interpretar a presença de Davi. Alguém que poderia ser reconhecido como um aliado começou a ser visto como uma ameaça. E essa história nos ajuda a compreender um funcionamento interior que nem sempre conseguimos perceber em nós mesmos.",
              "Imagine duas amigas que compartilham sonhos semelhantes. Durante muito tempo, elas conversam sobre seus projetos, incentivam uma à outra e celebram pequenas conquistas. Entretanto, uma delas consegue realizar primeiro aquilo que as duas desejavam. A outra a parabeniza sinceramente, mas, nos dias seguintes, começa a sentir certo desconforto. Passa a evitar conversas sobre aquela conquista, sente-se incomodada quando outras pessoas elogiam a amiga e começa a reparar em defeitos que antes não pareciam importantes.",
              "O que aconteceu? Talvez a amizade não tenha mudado. Talvez a conquista da amiga tenha despertado uma comparação que até então não havia sido percebida.",
              "E aqui existe uma questão importante: a comparação nem sempre começa com o desejo de possuir aquilo que o outro tem. Às vezes, começa com o medo de que aquilo que o outro conquistou revele alguma insuficiência em nós.",
              "Quando isso acontece, deixamos de olhar para a conquista como parte da história daquela pessoa e começamos a utilizá-la como medida da nossa própria vida. Se ela avançou, sentimos que estamos atrasados. Se ela foi reconhecida, começamos a questionar por que não fomos. Se ela recebeu uma oportunidade, interpretamos nossa espera como sinal de que somos menos capazes.",
              "Perceba como esse processo pode ser perigoso. A conquista do outro passa a funcionar como uma avaliação sobre nós, mesmo quando ninguém está nos avaliando. E, quanto mais permitimos que isso aconteça, mais difícil se torna celebrar sinceramente aquilo que as pessoas ao nosso redor estão vivendo.",
              "Mas precisamos aprofundar essa questão. Nem sempre a comparação revela apenas inveja. Às vezes, ela expõe uma frustração que ainda não reconhecemos.",
              "Uma mulher pode sentir desconforto ao ver outra pessoa vivendo um casamento saudável porque seu próprio relacionamento atravessa dificuldades. Alguém pode se incomodar com o crescimento profissional de um colega porque está frustrado com a estagnação da própria carreira. Uma pessoa pode ter dificuldade de celebrar a conquista de um amigo porque sente que seus esforços nunca são reconhecidos.",
              "Nessas situações, o sentimento não deve ser automaticamente condenado, mas precisa ser compreendido. Existe uma diferença entre reconhecer a tristeza por algo que ainda não vivemos e transformar a conquista de outra pessoa em motivo de ressentimento. O problema não é perceber que também desejamos alguma coisa. O problema começa quando nossa frustração nos impede de reconhecer o valor daquilo que o outro recebeu.",
              "E talvez exista algo ainda mais profundo.",
              "Quando uma pessoa constrói sua identidade sobre a necessidade de ser especial, admirada ou reconhecida, o crescimento de alguém próximo pode provocar uma sensação de ameaça. Não porque exista uma competição real, mas porque, interiormente, ela aprendeu a acreditar que só possui valor enquanto consegue se destacar. É como se o reconhecimento fosse um espaço limitado: se alguém recebe mais, necessariamente sobra menos para ela.",
              "Mas será que o valor de uma pessoa diminui porque outra também possui capacidades? Será que a conquista de alguém elimina tudo o que já construímos? Será que precisamos ocupar sempre o primeiro lugar para reconhecer que nossa vida possui significado?",
              "Uma identidade amadurecida não precisa diminuir o outro para continuar reconhecendo seu próprio valor.",
              "E existe outra consequência da comparação que merece nossa atenção: ela pode começar a modificar a maneira como interpretamos as intenções das pessoas. Aquele colega que antes parecia dedicado passa a ser visto como alguém que deseja aparecer. A amiga que compartilha uma conquista começa a ser interpretada como exibida. A pessoa que recebe reconhecimento passa a ser considerada arrogante, mesmo sem ter mudado seu comportamento.",
              "É claro que existem situações reais de arrogância, injustiça e competição. Mas precisamos aprender a distinguir os fatos daquilo que nossa insegurança acrescenta à interpretação. Porque quando a comparação não é reconhecida, podemos começar a atribuir ao outro intenções que nasceram dentro da nossa própria insegurança.",
              "Foi justamente essa mudança de percepção que marcou a relação de Saul com Davi. O jovem que havia contribuído para uma grande vitória de Israel começou a ser visto pelo rei como alguém perigoso.",
              "Talvez hoje você precise examinar se existe alguma pessoa que passou a incomodá-lo depois de receber reconhecimento, conquistar algo importante ou desenvolver capacidades que você também gostaria de possuir.",
              "Antes de concluir que essa pessoa mudou, pergunte a si mesmo: “O que a conquista dela despertou em mim que eu ainda não consegui reconhecer?” Talvez você descubra uma frustração que precisa ser acolhida, uma insegurança que precisa ser tratada ou uma expectativa que precisa ser reorganizada.",
              "Reconhecer isso não diminui você. Pelo contrário, abre espaço para que aquilo que estava escondido deixe de governar suas atitudes.",
              "A maturidade não consiste em nunca experimentar comparação, mas em reconhecer quando ela aparece e não permitir que transforme pessoas em adversárias apenas porque elas estão vivendo algo que também desejamos."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma pessoa cuja conquista ou reconhecimento desperta em mim um desconforto que tenho dificuldade de admitir? O que exatamente me incomoda?",
              "Quando alguém alcança algo que eu também desejo, consigo separar a alegria pela conquista dessa pessoa da frustração que sinto em relação à minha própria vida?",
              "Já comecei a interpretar negativamente as atitudes de alguém depois que essa pessoa cresceu, recebeu reconhecimento ou passou a ocupar um lugar que eu gostaria de ocupar?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, pense em uma pessoa cuja conquista tenha despertado algum tipo de comparação em você. Não procure justificar nem condenar imediatamente aquilo que sentiu. Apenas reconheça o sentimento com sinceridade.",
              "Depois, escreva:",
              "“Quando essa pessoa conquistou __________, eu senti __________.”",
              "“A interpretação que fiz sobre mim foi __________.”",
              "“Mas a conquista dessa pessoa não significa necessariamente que __________.”",
              "Por exemplo: “Quando minha colega foi promovida, senti frustração. Interpretei que não sou suficientemente competente. Mas a promoção dela não significa necessariamente que eu não tenha capacidade ou que meu trabalho não possua valor.”",
              "Em seguida, pergunte-se se existe alguma atitude que você precisa corrigir em relação a essa pessoa. Talvez seja deixar de fazer comentários negativos, abandonar uma comparação constante ou voltar a reconhecer sinceramente suas qualidades.",
              "Você pode reconhecer aquilo que ainda deseja conquistar sem transformar em inimigo quem já chegou aonde você gostaria de estar."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, revela aquilo que acontece dentro de mim quando outras pessoas recebem reconhecimento, conquistam oportunidades ou vivem experiências que eu também desejo.",
              "Mostra-me se existem inseguranças, frustrações ou sentimentos de inferioridade influenciando a maneira como enxergo as pessoas ao meu redor.",
              "Eu não quero transformar a conquista de alguém em uma sentença sobre meu próprio valor. Também não quero permitir que a comparação produza inveja, ressentimento ou desconfiança em meus relacionamentos.",
              "Ensina-me a reconhecer com sinceridade aquilo que ainda desejo viver, sem deixar de celebrar o bem que acontece na vida de outras pessoas.",
              "Cura em mim a necessidade de competir para me sentir importante e fortalece uma identidade que não dependa de ser maior, melhor ou mais reconhecida do que alguém.",
              "Que eu aprenda a valorizar minha própria caminhada sem desprezar a caminhada do outro.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "A CONQUISTA DO OUTRO NÃO É UMA MEDIDA DO MEU VALOR. EU POSSO CELEBRAR O CRESCIMENTO DE ALGUÉM SEM TRANSFORMAR MINHA PRÓPRIA HISTÓRIA EM UMA DERROTA."
            ]
          }
        ]
      },
      "2026-10-22": {
        "format": "document",
        "label": "APROVADOS — DEVOCIONAL | SEMANA 3 — DIA 4",
        "title": "QUANDO VOCÊ COMEÇA A REAGIR AO QUE IMAGINA",
        "sections": [
          {
            "title": "TEXTO-CHAVE",
            "kind": "verse",
            "paragraphs": [
              "“Daí em diante Saul olhava com inveja para Davi.” (1 Samuel 18:9)"
            ]
          },
          {
            "title": "PARA COMEÇAR",
            "kind": "text",
            "paragraphs": [
              "Você já ficou magoado com alguém por uma situação que, depois, descobriu não ter acontecido exatamente como imaginava?",
              "Talvez uma pessoa tenha passado por você sem cumprimentá-lo, e você concluiu que ela estava chateada. Ou alguém respondeu a uma mensagem de maneira mais breve, e você interpretou aquilo como frieza. Em outras situações, pode ter percebido duas pessoas conversando e imaginado que estavam falando a seu respeito.",
              "O interessante é que, mesmo sem ter certeza do que estava acontecendo, você começou a sentir algo verdadeiro: tristeza, raiva, insegurança ou rejeição. E, dependendo da intensidade desses sentimentos, talvez tenha mudado a maneira de tratar aquela pessoa.",
              "Mas será que você estava reagindo ao que realmente aconteceu ou ao significado que você atribuiu àquela situação?"
            ]
          },
          {
            "title": "DEVOCIONAL",
            "kind": "text",
            "paragraphs": [
              "A história de Saul apresenta uma transformação preocupante na maneira como ele passou a enxergar Davi. Depois de ouvir o reconhecimento que o povo atribuía ao jovem, Saul começou a considerá-lo uma ameaça ao seu reino. A partir daquele momento, sua relação com Davi foi marcada por desconfiança, hostilidade e, posteriormente, tentativas de tirar-lhe a vida.",
              "O que torna essa história especialmente importante para nosso crescimento é perceber que a maneira como Saul interpretava Davi passou a influenciar diretamente a maneira como o tratava. Aquilo que começou como uma percepção de ameaça não permaneceu apenas em seus pensamentos. Com o tempo, começou a aparecer em suas atitudes e decisões.",
              "E aqui existe algo que precisamos compreender sobre o funcionamento da nossa vida interior: nem sempre reagimos apenas aos acontecimentos. Muitas vezes, reagimos à interpretação que fazemos deles.",
              "Imagine uma mulher que chega em casa e percebe que seu marido está mais silencioso do que de costume. Ele teve um dia difícil no trabalho, mas ainda não comentou sobre isso. Ela, entretanto, começa a pensar que ele está insatisfeito com alguma coisa no relacionamento. Lembra-se de uma conversa que tiveram dias antes e conclui que talvez ele ainda esteja chateado.",
              "Pouco tempo depois, ela também começa a ficar em silêncio. Quando o marido pergunta se está tudo bem, responde de maneira fria. Ele não entende o que aconteceu, e uma tensão começa a se formar entre os dois. Observe que, até aquele momento, o silêncio do marido era um fato. Mas a conclusão de que ele estava insatisfeito com o relacionamento era uma interpretação. E foi essa interpretação, não necessariamente o comportamento real do marido, que começou a determinar a reação dela.",
              "Isso acontece com mais frequência do que imaginamos, especialmente quando determinadas situações encontram inseguranças que ainda não reconhecemos.",
              "Uma pessoa que teme ser rejeitada pode interpretar uma ausência de resposta como desinteresse. Alguém que possui dificuldade de confiar pode enxergar segundas intenções em atitudes comuns. Uma pessoa que se sente constantemente desvalorizada pode interpretar uma sugestão como crítica ou uma discordância como tentativa de diminuí-la.",
              "É importante perceber que os sentimentos despertados nessas situações são reais. A tristeza é verdadeira, a raiva é verdadeira e o medo também pode ser verdadeiro. Mas o fato de um sentimento ser verdadeiro não significa que a interpretação que o produziu esteja necessariamente correta.",
              "Essa distinção é fundamental para nosso amadurecimento.",
              "Às vezes, dizemos: “Eu senti que ela estava me desprezando.” E, porque sentimos aquilo com muita intensidade, começamos a tratar essa percepção como uma certeza. Mas sentir-se desprezado não é a mesma coisa que ter sido desprezado. Sentir-se ameaçado não significa necessariamente que alguém esteja tentando nos prejudicar. E sentir que estamos sendo rejeitados não prova, por si só, que essa seja a intenção da outra pessoa.",
              "Isso não significa ignorar comportamentos realmente desrespeitosos, negar situações de manipulação ou deixar de reconhecer sinais concretos de deslealdade. Significa desenvolver maturidade para distinguir aquilo que observamos daquilo que concluímos a partir do que observamos.",
              "E existe algo ainda mais profundo nesse processo.",
              "Quando uma interpretação não é examinada, podemos começar a procurar evidências que confirmem aquilo que já acreditamos.",
              "Se concluímos que alguém não gosta de nós, passamos a observar principalmente suas atitudes negativas. Se acreditamos que determinada pessoa deseja nos prejudicar, começamos a interpretar suas decisões a partir dessa suspeita. Se pensamos que estamos sendo desvalorizados, até comportamentos neutros podem parecer confirmações dessa ideia.",
              "A partir desse momento, deixamos de observar a pessoa como ela realmente se apresenta e começamos a enxergá-la através da conclusão que já construímos sobre ela.",
              "E isso pode comprometer profundamente nossos relacionamentos.",
              "Uma amizade pode esfriar por causa de uma intenção que nunca existiu. Um casamento pode acumular conflitos porque os dois passaram a reagir às próprias suposições. Uma equipe pode desenvolver desconfiança porque determinadas atitudes começaram a ser interpretadas como disputas de poder.",
              "Na história de Saul, essa dinâmica assumiu proporções graves. Sua desconfiança em relação a Davi cresceu a ponto de comprometer também sua relação com pessoas que tentavam ajudá-lo a enxergar a situação de outra maneira. Jônatas, seu próprio filho, chegou a defender Davi diante dele, lembrando que o jovem não havia cometido nenhum mal contra o rei. Mas Saul continuou permitindo que sua percepção de ameaça influenciasse suas atitudes.",
              "Isso nos ensina que uma interpretação não examinada pode se tornar tão dominante que começamos a rejeitar até informações que poderiam nos ajudar a enxergar a realidade com mais clareza.",
              "Talvez hoje exista alguém em sua vida cuja atitude você esteja interpretando de maneira negativa. Antes de concluir que essa pessoa deseja prejudicá-lo, rejeitá-lo ou diminuí-lo, experimente fazer uma pergunta:",
              "“O que eu realmente sei sobre essa situação e o que estou apenas supondo?”",
              "Essa pergunta não elimina a necessidade de conversar, estabelecer limites ou enfrentar problemas reais. Pelo contrário, ajuda-nos a fazer tudo isso a partir de uma compreensão mais clara da realidade. Porque uma pessoa madura não é aquela que nunca sente insegurança ou desconfiança. É aquela que aprende a não transformar automaticamente esses sentimentos em acusações, julgamentos ou atitudes contra os outros.",
              "Nem tudo o que pensamos sobre alguém corresponde ao que essa pessoa realmente é. E nem tudo o que sentimos diante de uma situação revela, com precisão, o que está acontecendo. Às vezes, o primeiro passo para restaurar um relacionamento não é exigir que o outro mude. É reconhecer que talvez precisemos examinar a maneira como estamos interpretando suas atitudes."
            ]
          },
          {
            "title": "PERGUNTE AO SEU CORAÇÃO",
            "kind": "questions",
            "paragraphs": [
              "Existe alguma pessoa que comecei a tratar de maneira diferente por causa de uma intenção que atribuí a ela, mas que nunca foi realmente esclarecida?",
              "Quando me sinto rejeitado, ameaçado ou desvalorizado, costumo buscar compreender o que aconteceu ou rapidamente transformo minhas interpretações em certezas?",
              "Tenho permitido que experiências anteriores influenciem a maneira como interpreto pessoas que não tiveram participação naquilo que vivi?"
            ]
          },
          {
            "title": "PRÁTICA DO DIA",
            "kind": "text",
            "paragraphs": [
              "Hoje, escolha uma situação recente em que você tenha se sentido magoado, rejeitado, ameaçado ou desvalorizado por alguém.",
              "Em uma folha, divida sua reflexão em três partes:",
              "1. O QUE REALMENTE ACONTECEU?",
              "Descreva apenas os fatos que você observou, sem acrescentar intenções que não foram confirmadas.",
              "2. O QUE EU INTERPRETEI?",
              "Escreva o significado que atribuiu àquela situação. Por exemplo: “Ela não respondeu à minha mensagem porque não se importa comigo.”",
              "3. O QUE EU AINDA PRECISO ESCLARECER?",
              "Pergunte se existem outras explicações possíveis e se uma conversa respeitosa poderia ajudá-lo a compreender melhor o que aconteceu.",
              "Se perceber que reagiu de maneira injusta, considere corrigir sua atitude. Se identificar um problema real, procure enfrentá-lo com clareza e limites saudáveis.",
              "O objetivo não é desconfiar dos próprios sentimentos, mas aprender a não transformar toda interpretação em verdade absoluta."
            ]
          },
          {
            "title": "ORAÇÃO",
            "kind": "text",
            "paragraphs": [
              "Senhor, mostra-me se existem interpretações equivocadas influenciando a maneira como tenho tratado as pessoas.",
              "Revela as inseguranças, os medos e as experiências que podem estar interferindo na minha percepção da realidade.",
              "Eu não quero permitir que minhas suspeitas se transformem em acusações nem que minhas feridas determinem as intenções que atribuo aos outros.",
              "Ensina-me a distinguir fatos de interpretações, a ouvir antes de concluir e a reconhecer quando preciso rever meus próprios pensamentos.",
              "Dá-me discernimento para identificar situações que realmente exigem posicionamento, mas também humildade para admitir quando posso estar enxergando algo de maneira equivocada.",
              "Que minhas atitudes sejam conduzidas pela verdade, e não apenas pelo significado que meus medos atribuem às situações.",
              "Em nome de Jesus, amém."
            ]
          },
          {
            "title": "FRASE PARA LEVAR COM VOCÊ",
            "kind": "takeaway",
            "paragraphs": [
              "NEM TUDO O QUE SINTO SOBRE UMA SITUAÇÃO CORRESPONDE AO QUE REALMENTE ACONTECEU. ANTES DE REAGIR, PRECISO APRENDER A DISTINGUIR OS FATOS DAS INTERPRETAÇÕES QUE CONSTRUÍ."
            ]
          }
        ]
      }
    }
  },
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
