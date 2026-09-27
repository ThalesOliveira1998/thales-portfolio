import type { Textos } from "./tipos";

export const pt: Textos = {
  perfil: {
    cargo: "Desenvolvedor Full-Stack · IA & Automação",
    resumo:
      "Construo sistemas web de ponta a ponta, do banco de dados à tela do caixa, e agentes de IA que automatizam o trabalho repetitivo. Tenho cabeça de quem já gerenciou operação e sabe o que o software precisa entregar.",
    busca:
      "Agora quero voltar de vez para o mundo tech: entrar em times que constroem coisas de ponta e participar de projetos que importam.",
    disponivel: "Disponível para novos projetos e times",
  },

  numeros: [
    { valor: "40+", legenda: "repositórios no GitHub" },
    { valor: "10", legenda: "projetos no ar hoje" },
    { valor: "3 anos", legenda: "em P&D numa franqueadora" },
    { valor: "analista → gerente", legenda: "de departamento" },
    { valor: "multi-agente", legenda: "IA especialista orquestrada" },
  ],

  historia: [
    {
      marca: "1998.04",
      titulo: "boot",
      texto: "Nasci em abril de 1998. O sistema iniciou sem manual, então fui aprendendo a ler a documentação por conta própria.",
    },
    {
      marca: "cap.01",
      titulo: "Administração na UFPB",
      texto:
        "Comecei em Administração na UFPB. Não terminei o curso, mas saí de lá entendendo de fluxo de caixa, processo e gente. Muito dev só aprende isso anos depois, já trabalhando.",
      tags: ["gestão", "finanças", "processos"],
    },
    {
      marca: "cap.02",
      titulo: "Análise e Desenvolvimento de Sistemas",
      texto:
        "Migrei para ADS e também não terminei, porque descobri que eu aprendia mais construindo do que assistindo aula. O diploma ficou pelo caminho; o hábito de construir veio comigo.",
      tags: ["lógica", "banco de dados", "POO"],
    },
    {
      marca: "cap.03",
      titulo: "Autodidata, sem IA",
      texto:
        "Cursos de desenvolvimento web e mobile na Udemy e uma pilha de projetos individuais feitos na mão: API em C# com .NET e MySQL, Spring Boot, MongoDB, app de tarefas em React Native, app financeiro em TypeScript. Nada de IA escrevendo por mim. Era ler a documentação, quebrar e consertar.",
      tags: ["C#", ".NET", "Java", "React Native", "TypeScript"],
    },
    {
      marca: "cap.04",
      titulo: "P&D numa franqueadora · 3 anos",
      texto:
        "Enquanto aplicava para vagas de tecnologia, surgiu uma oportunidade na área de Pesquisa & Desenvolvimento de uma franqueadora. Entrei como analista e saí como gerente de departamento. Estruturei do zero o setor de relacionamento com franqueados, tirei vários projetos do papel e usei muito Power BI para transformar dados da rede em decisão.",
      tags: ["liderança", "Power BI", "dados", "produto"],
    },
    {
      marca: "cap.05",
      titulo: "Freelas em paralelo",
      texto:
        "Ao mesmo tempo, mantive o pé na tecnologia com freelas: landing pages, sistemas e e-commerce para clientes reais, com prazo real e cliente cobrando no WhatsApp.",
      tags: ["landing pages", "e-commerce", "clientes"],
    },
    {
      marca: "cap.06",
      titulo: "Um pé no código, outro no negócio",
      texto:
        "Empreendi em negócios offline e fiz o que dev raramente faz: usei meus próprios sistemas na operação. ERP, PDV, delivery, controle financeiro. Automatizei tarefas repetitivas com n8n e código, e criei agentes de IA especialistas que conversam entre si para resolver o trabalho em etapas. Rodei tráfego pago no Google e na Meta, então sei onde o software encontra o cliente e o caixa.",
      tags: ["ERP", "PDV", "SaaS", "agentes de IA", "n8n"],
    },
    {
      marca: "2026",
      titulo: "git checkout tech",
      texto:
        "Agora volto de vez para a tecnologia. Quero participar de projetos de ponta e de times que constroem produto relevante. Levo comigo código em produção, visão de negócio e a experiência de quem já liderou gente.",
    },
  ],

  projetos: {
    controlaai: {
      tipo: "SaaS multi-tenant · gestão para food service",
      resumo:
        "Sistema de gestão completo para bares, restaurantes e lojas, com painel master para criar e administrar vários clientes (tenants) na mesma base.",
      destaques: [
        "Caixa, vendas, comandas, mesas e KDS de cozinha",
        "Delivery e cardápio digital público por loja",
        "Financeiro, cotações, relatórios e exportação em Excel",
        "Painel master-adm com tenants, logs e marketing",
      ],
    },
    zequinha: {
      tipo: "ERP de conveniência + app de delivery",
      resumo:
        "Ecossistema que roda a operação de uma conveniência e tabacaria: ERP administrativo, site institucional e app de delivery com backend próprio.",
      destaques: [
        "Leitura de nota fiscal de compra com IA (Gemini)",
        "Emissão de cupom fiscal via API e sincronização de estoque com o iFood",
        "Financeiro completo: contas a pagar e receber, a prazo, cartões",
        "Vendas B2B para comércios, comandas, mesas e delivery por bairro",
      ],
    },
    myway: {
      tipo: "Super-app de turismo · multilíngue",
      resumo:
        "Plataforma para quem visita Pipa (RN): hospedagem, passeios, eventos, estabelecimentos, vagas de voluntariado e chat, com um painel para cada tipo de parceiro.",
      destaques: [
        "5 portais de parceiro: hospedagem, passeios, estabelecimentos, serviços e oportunidades",
        "Reservas, calendário, feed, avaliações e mensagens em tempo real",
        "Internacionalização com next-intl em todas as rotas públicas",
        "Admin com roteiros, locais, relatórios e logs",
      ],
    },
    icgym: {
      tipo: "Plataforma para personal trainers",
      resumo:
        "Gestão de alunos e treinos para personal trainers, com painel do treinador, portal do aluno e versão mobile.",
      destaques: [
        "Cadastro de alunos com histórico de evolução",
        "Montagem de treinos e calendário",
        "Financeiro do personal",
        "Três frentes: web do treinador, web do aluno e app mobile",
      ],
    },
    iande: {
      tipo: "Site de turismo de imersão",
      resumo: "Site editorial com CMS para uma operadora de imersões na Amazônia, com animações de scroll.",
      destaques: ["CMS Keystatic para o cliente editar sozinho", "Scroll suave e animações com GSAP"],
    },
    amazonas: {
      tipo: "Site de viagens em 6 idiomas",
      resumo: "Site estático multilíngue para o mercado europeu, pensado para SEO e para buscadores com IA (GEO).",
      destaques: ["6 idiomas com hreflang", "Astro estático na Cloudflare, TypeScript strict"],
    },
    shavora: {
      tipo: "Landing page de dupla musical",
      resumo: "Página da dupla Shavorã: lançamento do EP, agenda de shows, relatos do público e blog.",
      destaques: ["Agenda com manifestação de interesse", "Blog, relatos e seletor de idioma"],
    },
    aki: {
      tipo: "Landing page de restaurante",
      resumo: "Temakeria japonesa na Pipa. Página pré-renderizada com loader e animações de scroll.",
      destaques: ["Lighthouse mobile acima de 95", "Pré-render do HTML antes do JavaScript"],
    },
    uxi: {
      tipo: "Landing page bilíngue",
      resumo: "Culinária e arte amazônica em Pipa. HTML, CSS e JS puros, sem build, com pixels de anúncio configuráveis.",
      destaques: ["Português e inglês", "Zero dependências"],
    },
    andre: {
      tipo: "Landing page de personal trainer",
      resumo: "Página de um amigo personal trainer, com comparador de antes e depois e deploy de 1,4 MB.",
      destaques: ["Comparador antes/depois", "Imagens em WebP e dados estruturados JSON-LD"],
    },
    "zequinha-site": {
      tipo: "Site institucional + blog",
      resumo: "Vitrine da conveniência e tabacaria, com blog em MDX e formulário de contato.",
      destaques: ["Blog em MDX", "Envio de e-mail com Nodemailer"],
    },
    palantir: {
      tipo: "Landing page institucional",
      resumo: "Landing page premium para um laboratório de tecnologia, com componentes animados.",
      destaques: ["Next.js 16 e Tailwind v4", "Componentes Aceternity UI"],
    },
  },

  ia: {
    titulo: "Agentes de IA & automação",
    texto:
      "Além de integrar LLMs em produto, eu desenho sistemas multi-agente: cada agente é especialista em uma coisa (pesquisar, analisar, redigir, revisar, executar) e eles trocam contexto entre si, cada um fazendo sua parte até a tarefa terminar. Também automatizo o trabalho repetitivo da operação com n8n e código, aquilo que antes custava horas de alguém copiando e colando.",
    pilares: [
      { titulo: "Agentes especialistas", texto: "Cada agente com papel, ferramentas e limites próprios, em vez de um prompt gigante tentando fazer tudo." },
      { titulo: "Orquestração entre agentes", texto: "Fluxos em que um agente delega para o outro, revisa o resultado e devolve, com etapas e handoffs claros." },
      { titulo: "Automação com n8n", texto: "Rotinas que rodavam na mão viram workflows automáticos: leitura de documentos, cadastro, conferência, notificações e relatórios." },
      { titulo: "IA dentro do produto", texto: "LLM resolvendo problema real em produção, como a leitura de nota fiscal de compra com IA no ERP da Zequinha." },
    ],
    fluxo: ["pesquisador", "analista", "redator", "revisor", "executor"],
    falas: [
      "pesquisador → coletou as fontes sobre o problema e repassou ao analista",
      "analista → cruzou os dados, achou os padrões e enviou para o redator",
      "redator → rascunho pronto, pedindo revisão",
      "revisor → devolveu 2 ajustes ao redator… aprovado na segunda volta",
      "executor → tarefa concluída e registrada. Ninguém precisou copiar e colar.",
    ],
    status: { trabalhando: "trabalhando", feito: "feito", aguardando: "aguardando" },
  },

  lab: {
    hichat: "chat com backend em Python e front em Next.js",
    autobots: "equipes de agentes de IA especialistas que dividem tarefas entre si",
    ikli: "assistentes de IA com papéis específicos",
    fintask: "apps financeiros da mentoria Formação Dev",
    tasklist: "app de tarefas com backend de autenticação e Postgres",
    thetour: "catálogo turístico por cidade",
    mongo: "API REST",
    spring: "primeiros passos em Java",
  },

  stack: [
    { grupo: "front", itens: ["React", "Next.js", "TypeScript", "Astro", "Tailwind", "Mantine", "GSAP", "Framer Motion", "Lenis"] },
    { grupo: "back", itens: ["Node.js", "Firebase / Firestore", "API Routes", "C# / .NET", "Python", "MySQL", "Postgres", "MongoDB"] },
    { grupo: "mobile", itens: ["React Native", "Android Studio"] },
    { grupo: "ia & automação", itens: ["Agentes especialistas", "Sistemas multi-agente", "n8n", "crewAI", "Claude API", "Gemini API", "Claude Code"] },
    { grupo: "infra", itens: ["AWS", "Vercel", "Cloudflare", "Git / GitHub"] },
    { grupo: "dados & negócio", itens: ["Power BI", "Google Ads", "Meta Ads", "SEO / GEO", "Gestão de times"] },
  ],

  ui: {
    meta: {
      titulo: "Thales Oliveira · Desenvolvedor Full-Stack",
      descricao:
        "Portfólio de Thales Oliveira: desenvolvedor full-stack com visão de negócio, IA e automação. Sistemas, SaaS e sites em Next.js, React, Astro e Firebase.",
    },
    comum: {
      verNoAr: "ver no ar",
      codigo: "código",
      semPreview: "preview indisponível",
      privado: "sistema privado · demo sob pedido",
      trocarIdioma: "English",
      outraPilula: "tomar a outra pílula",
      pular: "Pular para o conteúdo",
    },
    pilula: {
      linhas: ["Acorde, visitante…", "Existem duas formas de conhecer o meu trabalho.", "Depois que escolher, dá para voltar. Eu não sou tão radical."],
      pergunta: "Qual pílula você escolhe?",
      vermelha: {
        nome: "pílula vermelha",
        titulo: "Entrar no terminal",
        texto: "O portfólio por dentro: código, história, agentes rodando e um terminal para explorar.",
      },
      azul: {
        nome: "pílula azul",
        titulo: "Versão executiva",
        texto: "Os mesmos projetos, numa leitura limpa e direta. Ideal para quem tem 3 minutos.",
      },
      dica: "use ← → e Enter",
    },
    red: {
      nav: { historia: "historia", projetos: "projetos", ia: "agentes-ia", sites: "sites", stack: "stack", contato: "contato" },
      heroBotoes: ["./ver-projetos", "./agentes-ia", "./contato"],
      historiaTitulo: "Um pé no código, outro no negócio.",
      historiaLead:
        "Não segui o caminho reto. Passei por duas faculdades, aprendi a programar sozinho, liderei um departamento e empreendi. Cada desvio virou ferramenta.",
      sistemasTitulo: "Sistemas que rodam operação de verdade.",
      sistemasLead:
        "Nada de to-do list de tutorial. São produtos com regra de negócio, usuário real e dinheiro passando por eles.",
      sitesTitulo: "Sites e landing pages.",
      sitesLead: "Performance, SEO e animação na medida. Do HTML puro de 1,4 MB ao Astro em seis idiomas com CMS.",
      labTitulo: "Laboratório.",
      labLead:
        "Experimentos e os primeiros projetos, feitos na mão antes da IA existir no meu fluxo. É aqui que dá para ver a curva de aprendizado.",
      stackTitulo: "Stack.",
      terminalTitulo: "Explore pelo terminal.",
      terminalLead: ["Digite", "e navegue pelo portfólio como nos velhos tempos. Tem até comando secreto para recrutador."],
      contatoTitulo: ["Bora construir", "algo relevante?"],
      rodape: "feito à mão com Next.js",
      boot: [
        "THALES-BIOS v1.998  (C) Abril 1998",
        "CPU: Cérebro inquieto @ 24/7  ........ OK",
        "Memória: Administração/UFPB  ......... OK",
        "Memória: ADS + Udemy + noites viradas  OK",
        "Montando /experiencia/franqueadora ... OK",
        "Carregando módulos: react next firebase aws n8n",
        "Iniciando agentes de IA especialistas  OK",
        "",
        "> portfolio.exe",
      ],
      tema: {
        verde: "fósforo",
        ambar: "âmbar",
        mudarPara: (o) => `Mudar para monitor ${o === "amber" ? "âmbar" : "verde"}`,
      },
    },
    terminal: {
      boasVindas: "Bem-vindo ao THALES.OS. Digite 'help' ou toque em um comando abaixo.",
      ajuda: [
        "comandos disponíveis:",
        "  whoami        quem é o Thales",
        "  historia      a trajetória em uma tela",
        "  projetos      lista de sistemas e sites",
        "  abrir <id>    abre um projeto (ex: abrir controlaai)",
        "  agentes       IA, automação e sistemas multi-agente",
        "  stack         tecnologias",
        "  contato       como falar comigo",
        "  tema          alterna fósforo verde / âmbar",
        "  ir <seção>    historia | projetos | ia | sites | stack | contato",
        "  pilula        tomar a pílula azul",
        "  clear         limpa a tela",
      ],
      historiaDica: "→ 'ir historia' para ler completa",
      abrirDica: "→ 'abrir <id>' para ver o projeto",
      naoEncontrado: (id) => `projeto '${id}' não encontrado. Use 'projetos' para ver a lista.`,
      semLink: (nome, resumo) => `${nome}: sem link público. ${resumo}`,
      abrindo: "abrindo",
      novaAba: "em nova aba…",
      temaTrocado: (a) => `monitor trocado para ${a ? "âmbar" : "fósforo verde"}.`,
      secoes: "seções",
      sudoNegado: "permissão negada. Tente 'sudo contratar'.",
      sudo: ["[sudo] senha para recrutador: ********", "acesso concedido. Iniciando conversa…"],
      whatsappMsg: "Olá Thales, vi seu portfólio e quero conversar sobre uma oportunidade.",
      abrirWhats: "abrir WhatsApp",
      mandarEmail: "mandar e-mail",
      ou: "ou",
      matrix: "Acorda, recrutador…\nA Matrix te pegou…\nSiga o coelho branco: digite 'contato'.",
      rm: "boa tentativa. Este portfólio é somente leitura.",
      comandoDesconhecido: (c) => `comando não encontrado: ${c}. Digite 'help'.`,
      rotulo: "Digite um comando",
    },
    blue: {
      nav: { sobre: "Sobre", projetos: "Projetos", ia: "IA & Automação", stack: "Stack", contato: "Contato" },
      disponivel: "Disponível para novos projetos",
      heroTitulo: ["Software que roda", "operação", "de verdade."],
      heroBotoes: ["Ver projetos", "Falar comigo"],
      sobreRotulo: "Trajetória",
      sobreTitulo: "Um pé no código, outro no negócio.",
      sobreTexto:
        "Passei por duas faculdades, aprendi a programar sozinho, liderei um departamento de P&D e empreendi. Hoje junto essas peças para construir software que resolve problema de verdade.",
      projetosRotulo: "Projetos selecionados",
      projetosTitulo: "Sistemas com regra de negócio, usuário real e dinheiro passando por eles.",
      projetosTexto: "Do SaaS multi-tenant ao ERP com IA, cada projeto nasceu de uma operação que precisava funcionar.",
      iaRotulo: "IA & Automação",
      sitesRotulo: "Sites e landing pages",
      sitesTitulo: "Sites que carregam rápido e vendem.",
      labRotulo: "Onde tudo começou",
      labTitulo: "Laboratório",
      stackRotulo: "Ferramentas",
      stackTitulo: "Stack",
      contatoRotulo: "Contato",
      contatoTitulo: "Vamos construir algo relevante?",
      contatoBotao: "Mandar mensagem no WhatsApp",
      rodape: "Todos os direitos reservados.",
    },
  },
};
