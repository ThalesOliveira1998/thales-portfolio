import type { Textos } from "./tipos";

export const en: Textos = {
  perfil: {
    cargo: "Full-Stack Developer · AI & Automation",
    resumo:
      "I build web systems end to end, from the database to the checkout screen, plus AI agents that automate repetitive work. I think like someone who has run operations and knows what software needs to deliver.",
    busca:
      "I'm returning to tech full-time: I want to join teams building cutting-edge products and work on projects that matter.",
    disponivel: "Open to new projects and teams",
  },

  numeros: [
    { valor: "40+", legenda: "repositories on GitHub" },
    { valor: "10", legenda: "projects live today" },
    { valor: "3 years", legenda: "in R&D at a franchisor" },
    { valor: "analyst → manager", legenda: "department head" },
    { valor: "multi-agent", legenda: "orchestrated specialist AI" },
  ],

  historia: [
    {
      marca: "1998.04",
      titulo: "boot",
      texto: "Born in April 1998. The system shipped without a manual, so I learned to read the docs on my own.",
    },
    {
      marca: "ch.01",
      titulo: "Business Administration at UFPB",
      texto:
        "I started Business Administration at UFPB (Federal University of Paraíba). I didn't finish, but I left understanding cash flow, processes and people, things many developers only learn years into the job.",
      tags: ["management", "finance", "processes"],
    },
    {
      marca: "ch.02",
      titulo: "Systems Analysis & Development",
      texto:
        "I switched to a Systems Analysis & Development degree and didn't finish that either: I learned more by building than by sitting in class. The diploma stayed behind; the habit of building came with me.",
      tags: ["logic", "databases", "OOP"],
    },
    {
      marca: "ch.03",
      titulo: "Self-taught, no AI",
      texto:
        "Web and mobile development courses on Udemy and a stack of solo projects built by hand: a C# API with .NET and MySQL, Spring Boot, MongoDB, a to-do app in React Native, a finance app in TypeScript. No AI writing for me. Read the docs, break it, fix it.",
      tags: ["C#", ".NET", "Java", "React Native", "TypeScript"],
    },
    {
      marca: "ch.04",
      titulo: "R&D at a franchisor · 3 years",
      texto:
        "While applying for tech roles, an opportunity came up in the Research & Development area of a franchise company. I joined as an analyst and left as a department manager. I built the franchisee relations department from scratch, shipped several projects from zero and used Power BI heavily to turn network data into decisions.",
      tags: ["leadership", "Power BI", "data", "product"],
    },
    {
      marca: "ch.05",
      titulo: "Freelancing on the side",
      texto:
        "Meanwhile I kept one foot in tech with freelance work: landing pages, systems and e-commerce for real clients, with real deadlines and clients pinging me on WhatsApp.",
      tags: ["landing pages", "e-commerce", "clients"],
    },
    {
      marca: "ch.06",
      titulo: "One foot in code, one in business",
      texto:
        "I ran offline businesses and did something developers rarely do: I used my own systems in daily operations. ERP, POS, delivery, finance. I automated repetitive tasks with n8n and code, and built specialist AI agents that talk to each other to get work done in stages. I also ran paid ads on Google and Meta, so I know where software meets the customer and the cash register.",
      tags: ["ERP", "POS", "SaaS", "AI agents", "n8n"],
    },
    {
      marca: "2026",
      titulo: "git checkout tech",
      texto:
        "Now I'm going all-in on technology again. I want to work on cutting-edge projects with teams building products that matter. I bring production code, business sense and experience leading people.",
    },
  ],

  projetos: {
    controlaai: {
      tipo: "Multi-tenant SaaS · food service management",
      resumo:
        "Complete management system for bars, restaurants and shops, with a master panel to create and run multiple clients (tenants) on the same platform.",
      destaques: [
        "Checkout, sales, tabs, tables and kitchen display (KDS)",
        "Delivery and a public digital menu per store",
        "Finance, supplier quotes, reports and Excel export",
        "Master admin with tenants, logs and marketing",
      ],
    },
    zequinha: {
      tipo: "Convenience-store ERP + delivery app",
      resumo:
        "An ecosystem that runs a convenience and tobacco store: admin ERP, company website and a delivery app with its own backend.",
      destaques: [
        "AI reading of supplier invoices (Gemini)",
        "Fiscal receipt issuing via API and inventory sync with iFood",
        "Full finance module: payables, receivables, store credit, cards",
        "B2B sales to other shops, tabs, tables and delivery by neighborhood",
      ],
    },
    myway: {
      tipo: "Tourism super-app · multilingual",
      resumo:
        "Platform for visitors to Pipa, Brazil: lodging, tours, events, venues, volunteer opportunities and chat, with a dedicated dashboard for each type of partner.",
      destaques: [
        "5 partner portals: lodging, tours, venues, services and opportunities",
        "Bookings, calendar, feed, reviews and real-time messaging",
        "Internationalization with next-intl on every public route",
        "Admin with itineraries, places, reports and logs",
      ],
    },
    icgym: {
      tipo: "Platform for personal trainers",
      resumo: "Client and workout management for personal trainers, with a trainer dashboard, a client portal and a mobile app.",
      destaques: [
        "Client records with progress history",
        "Workout builder and calendar",
        "Trainer finances",
        "Three front ends: trainer web, client web and mobile app",
      ],
    },
    iande: {
      tipo: "Immersive travel website",
      resumo: "Editorial site with a CMS for an Amazon immersion tour operator, with scroll animations.",
      destaques: ["Keystatic CMS so the client edits on their own", "Smooth scrolling and GSAP animations"],
    },
    amazonas: {
      tipo: "Travel site in 6 languages",
      resumo: "Static multilingual site for the European market, built for SEO and AI search engines (GEO).",
      destaques: ["6 languages with hreflang", "Static Astro on Cloudflare, strict TypeScript"],
    },
    shavora: {
      tipo: "Landing page for a music duo",
      resumo: "Website for the duo Shavorã: EP release, tour dates, audience stories and a blog.",
      destaques: ["Tour dates with sign-up interest", "Blog, stories and language switcher"],
    },
    aki: {
      tipo: "Restaurant landing page",
      resumo: "Japanese temakeria in Pipa. Pre-rendered page with a loader and scroll animations.",
      destaques: ["Mobile Lighthouse score above 95", "HTML pre-rendered before JavaScript"],
    },
    uxi: {
      tipo: "Bilingual landing page",
      resumo: "Amazonian cuisine and art in Pipa. Plain HTML, CSS and JS with no build step, and configurable ad pixels.",
      destaques: ["Portuguese and English", "Zero dependencies"],
    },
    andre: {
      tipo: "Personal trainer landing page",
      resumo: "Page for a friend who is a personal trainer, with a before/after slider and a 1.4 MB deploy.",
      destaques: ["Before/after comparison slider", "WebP images and JSON-LD structured data"],
    },
    "zequinha-site": {
      tipo: "Company website + blog",
      resumo: "Storefront for the convenience and tobacco store, with an MDX blog and contact form.",
      destaques: ["MDX blog", "Email delivery with Nodemailer"],
    },
    palantir: {
      tipo: "Corporate landing page",
      resumo: "Premium landing page for a technology lab, with animated components.",
      destaques: ["Next.js 16 and Tailwind v4", "Aceternity UI components"],
    },
  },

  ia: {
    titulo: "AI agents & automation",
    texto:
      "Beyond plugging LLMs into products, I design multi-agent systems: each agent specializes in one thing (research, analysis, writing, review, execution) and they pass context to each other, each doing its part until the job is done. I also automate repetitive operational work with n8n and code, the kind of thing that used to cost someone hours of copy and paste.",
    pilares: [
      { titulo: "Specialist agents", texto: "Each agent has its own role, tools and limits, instead of one giant prompt trying to do everything." },
      { titulo: "Agent orchestration", texto: "Flows where one agent delegates to another, reviews the result and hands it back, with clear stages and handoffs." },
      { titulo: "Automation with n8n", texto: "Manual routines become automated workflows: document reading, data entry, checks, notifications and reports." },
      { titulo: "AI inside the product", texto: "LLMs solving real problems in production, like AI reading of supplier invoices in the Zequinha ERP." },
    ],
    fluxo: ["researcher", "analyst", "writer", "reviewer", "executor"],
    falas: [
      "researcher → gathered sources on the problem and handed off to the analyst",
      "analyst → cross-checked the data, found the patterns and sent them to the writer",
      "writer → draft ready, requesting review",
      "reviewer → sent 2 fixes back to the writer… approved on the second pass",
      "executor → task done and logged. Nobody had to copy and paste.",
    ],
    status: { trabalhando: "working", feito: "done", aguardando: "waiting" },
  },

  lab: {
    hichat: "chat app with a Python backend and Next.js front end",
    autobots: "teams of specialist AI agents that split tasks among themselves",
    ikli: "AI assistants with specific roles",
    fintask: "finance apps from the Formação Dev mentorship",
    tasklist: "to-do app with an auth backend and Postgres",
    thetour: "city-by-city tourism catalog",
    mongo: "REST API",
    spring: "first steps in Java",
  },

  stack: [
    { grupo: "front", itens: ["React", "Next.js", "TypeScript", "Astro", "Tailwind", "Mantine", "GSAP", "Framer Motion", "Lenis"] },
    { grupo: "back", itens: ["Node.js", "Firebase / Firestore", "API Routes", "C# / .NET", "Python", "MySQL", "Postgres", "MongoDB"] },
    { grupo: "mobile", itens: ["React Native", "Android Studio"] },
    { grupo: "ai & automation", itens: ["Specialist agents", "Multi-agent systems", "n8n", "crewAI", "Claude API", "Gemini API", "Claude Code"] },
    { grupo: "infra", itens: ["AWS", "Vercel", "Cloudflare", "Git / GitHub"] },
    { grupo: "data & business", itens: ["Power BI", "Google Ads", "Meta Ads", "SEO / GEO", "Team leadership"] },
  ],

  ui: {
    meta: {
      titulo: "Thales Oliveira · Full-Stack Developer",
      descricao:
        "Portfolio of Thales Oliveira: full-stack developer with business sense, AI and automation. Systems, SaaS and websites in Next.js, React, Astro and Firebase.",
    },
    comum: {
      verNoAr: "live site",
      codigo: "code",
      semPreview: "preview unavailable",
      privado: "private system · demo on request",
      trocarIdioma: "Português",
      outraPilula: "take the other pill",
      pular: "Skip to content",
    },
    pilula: {
      linhas: ["Wake up, visitor…", "There are two ways to get to know my work.", "You can come back after choosing. I'm not that strict."],
      pergunta: "Which pill do you take?",
      vermelha: {
        nome: "red pill",
        titulo: "Enter the terminal",
        texto: "The portfolio from the inside: code, story, agents running and a terminal to explore.",
      },
      azul: {
        nome: "blue pill",
        titulo: "Executive version",
        texto: "The same projects in a clean, straightforward read. Made for people with 3 minutes.",
      },
      dica: "use ← → and Enter",
    },
    red: {
      nav: { historia: "story", projetos: "projects", ia: "ai-agents", sites: "sites", stack: "stack", contato: "contact" },
      heroBotoes: ["./see-projects", "./ai-agents", "./contact"],
      historiaTitulo: "One foot in code, one in business.",
      historiaLead:
        "I didn't take the straight path. Two degrees started, self-taught programming, led a department and ran my own businesses. Every detour became a tool.",
      sistemasTitulo: "Systems that run real operations.",
      sistemasLead: "No tutorial to-do lists. These are products with business rules, real users and real money flowing through them.",
      sitesTitulo: "Websites and landing pages.",
      sitesLead: "Performance, SEO and just the right amount of motion. From a 1.4 MB plain-HTML page to Astro in six languages with a CMS.",
      labTitulo: "Lab.",
      labLead: "Experiments and first projects, built by hand before AI was part of my workflow. This is where you can see the learning curve.",
      stackTitulo: "Stack.",
      terminalTitulo: "Explore through the terminal.",
      terminalLead: ["Type", "and browse the portfolio like the old days. There's even a secret command for recruiters."],
      contatoTitulo: ["Let's build", "something that matters?"],
      rodape: "handmade with Next.js",
      boot: [
        "THALES-BIOS v1.998  (C) April 1998",
        "CPU: Restless brain @ 24/7  .......... OK",
        "Memory: Business Admin/UFPB  ......... OK",
        "Memory: Systems degree + Udemy + all-nighters  OK",
        "Mounting /experience/franchisor ...... OK",
        "Loading modules: react next firebase aws n8n",
        "Starting specialist AI agents  ....... OK",
        "",
        "> portfolio.exe",
      ],
      tema: {
        verde: "phosphor",
        ambar: "amber",
        mudarPara: (o) => `Switch to ${o === "amber" ? "amber" : "green"} monitor`,
      },
    },
    terminal: {
      boasVindas: "Welcome to THALES.OS. Type 'help' or tap a command below.",
      ajuda: [
        "available commands:",
        "  whoami        who Thales is",
        "  story         the journey on one screen",
        "  projects      list of systems and sites",
        "  open <id>     open a project (e.g. open controlaai)",
        "  agents        AI, automation and multi-agent systems",
        "  stack         technologies",
        "  contact       how to reach me",
        "  theme         toggle green phosphor / amber",
        "  cd <section>  story | projects | ai | sites | stack | contact",
        "  pill          take the blue pill",
        "  clear         clear the screen",
      ],
      historiaDica: "→ 'cd story' to read it in full",
      abrirDica: "→ 'open <id>' to see the project",
      naoEncontrado: (id) => `project '${id}' not found. Use 'projects' to see the list.`,
      semLink: (nome, resumo) => `${nome}: no public link. ${resumo}`,
      abrindo: "opening",
      novaAba: "in a new tab…",
      temaTrocado: (a) => `monitor switched to ${a ? "amber" : "green phosphor"}.`,
      secoes: "sections",
      sudoNegado: "permission denied. Try 'sudo hire'.",
      sudo: ["[sudo] password for recruiter: ********", "access granted. Starting conversation…"],
      whatsappMsg: "Hi Thales, I saw your portfolio and would like to talk about an opportunity.",
      abrirWhats: "open WhatsApp",
      mandarEmail: "send an email",
      ou: "or",
      matrix: "Wake up, recruiter…\nThe Matrix has you…\nFollow the white rabbit: type 'contact'.",
      rm: "nice try. This portfolio is read-only.",
      comandoDesconhecido: (c) => `command not found: ${c}. Type 'help'.`,
      rotulo: "Type a command",
    },
    blue: {
      nav: { sobre: "About", projetos: "Work", ia: "AI & Automation", stack: "Stack", contato: "Contact" },
      disponivel: "Available for new projects",
      heroTitulo: ["Software that runs", "real", "operations."],
      heroBotoes: ["See projects", "Get in touch"],
      sobreRotulo: "Journey",
      sobreTitulo: "One foot in code, one in business.",
      sobreTexto:
        "Two degrees started, self-taught programming, led an R&D department and ran my own businesses. Today I put those pieces together to build software that solves real problems.",
      projetosRotulo: "Selected work",
      projetosTitulo: "Systems with business rules, real users and real money flowing through them.",
      projetosTexto: "From a multi-tenant SaaS to an AI-powered ERP, every project was born from an operation that had to work.",
      iaRotulo: "AI & Automation",
      sitesRotulo: "Websites & landing pages",
      sitesTitulo: "Websites that load fast and sell.",
      labRotulo: "Where it all started",
      labTitulo: "Lab",
      stackRotulo: "Toolbox",
      stackTitulo: "Stack",
      contatoRotulo: "Contact",
      contatoTitulo: "Let's build something that matters?",
      contatoBotao: "Message me on WhatsApp",
      rodape: "All rights reserved.",
    },
  },
};
