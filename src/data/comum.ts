// O que não muda entre idiomas: links, nomes, stacks, imagens.
import type { Projeto } from "./tipos";

type Base = Omit<Projeto, "tipo" | "resumo" | "destaques">;

export const pessoa = {
  nome: "Thales Oliveira",
  usuario: "thales",
  links: {
    github: "https://github.com/ThalesOliveira1998",
    // TODO: colocar a URL do seu perfil do LinkedIn
    linkedin: "https://www.linkedin.com/in/",
    linkedinLabel: "Thales Oliveira",
    whatsapp: "https://wa.me/5583998306540",
    whatsappLabel: "+55 83 99830-6540",
    email: "thalesoliveira97@hotmail.com",
  },
};

export const sistemasBase: Base[] = [
  {
    id: "controlaai",
    nome: "ControlaAí",
    stack: ["Next.js", "TypeScript", "Mantine", "Firebase", "dnd-kit", "ExcelJS"],
    imagem: "/projetos/controlaai.png",
    site: "https://controle-ai-five.vercel.app",
    repo: "https://github.com/ThalesOliveira1998/controleAI",
  },
  {
    id: "zequinha",
    nome: "Zequinha · ERP + Delivery",
    stack: ["Next.js", "Mantine", "Firebase", "Claude API", "Gemini", "jsPDF", "React Native"],
    imagem: "/projetos/adm-zequinha.png",
    site: "https://adm-zequinha.vercel.app",
    repo: "https://github.com/ThalesOliveira1998/adm-zequinha",
  },
  {
    id: "myway",
    nome: "MyWay Pipa",
    stack: ["Next.js", "next-intl", "Firebase", "Firebase Admin", "Radix UI", "Framer Motion"],
    ascii: "PIPA",
    repo: "https://github.com/ThalesOliveira1998/myWAY",
  },
  {
    id: "icgym",
    nome: "icGYM",
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase Admin", "React Hook Form"],
    imagem: "/projetos/icgym.png",
    site: "https://ic-gym.vercel.app",
    repo: "https://github.com/ThalesOliveira1998/icGYM",
  },
];

export const sitesBase: Base[] = [
  {
    id: "iande",
    nome: "Iandé · Amazon Immersions",
    stack: ["Astro", "Keystatic", "GSAP", "Lenis", "MDX"],
    imagem: "/projetos/iande.png",
    site: "https://iande-site.vercel.app",
  },
  { id: "amazonas", nome: "Amazonas Reisen", stack: ["Astro 5", "Tailwind v4", "Keystatic", "Cloudflare"], ascii: "i18n ×6" },
  {
    id: "shavora",
    nome: "Shavorã",
    stack: ["Next.js", "TypeScript", "Tailwind", "i18n"],
    imagem: "/projetos/shavora.png",
    site: "https://shavora-z6dl.vercel.app",
    repo: "https://github.com/ThalesOliveira1998/shavora",
  },
  { id: "aki", nome: "AKI Temakeria", stack: ["Vite", "React", "GSAP", "Framer Motion", "Lenis"], ascii: "手巻" },
  {
    id: "uxi",
    nome: "UXI Restaurante",
    stack: ["HTML", "CSS", "JavaScript"],
    imagem: "/projetos/uxi.png",
    site: "https://uxi-restaurante.vercel.app",
  },
  {
    id: "andre",
    nome: "André Felipe · Personal",
    stack: ["HTML", "CSS", "JavaScript"],
    imagem: "/projetos/andre.png",
    site: "https://andrefelipepersonal.vercel.app",
  },
  {
    id: "zequinha-site",
    nome: "Zequinha Bebidas",
    stack: ["Next.js", "MDX", "Framer Motion"],
    imagem: "/projetos/zequinha-bebidas.png",
    site: "https://zequinha-bebidas.vercel.app",
  },
  { id: "palantir", nome: "Palantir Labs", stack: ["Next.js", "Tailwind v4", "Framer Motion", "Zod"], ascii: "LABS" },
];

export const labBase: { id: string; nome: string; ano: string; stack: string }[] = [
  { id: "hichat", nome: "HiChat", ano: "2025", stack: "Python · Next.js" },
  { id: "autobots", nome: "Autobots / crewAI", ano: "2025", stack: "Python · crewAI" },
  { id: "ikli", nome: "Assistentes Ikli", ano: "2025", stack: "Next.js · LLMs" },
  { id: "fintask", nome: "finTASK / CashBook", ano: "2024", stack: "TypeScript" },
  { id: "tasklist", nome: "TaskList", ano: "2024", stack: "JavaScript · Node · Postgres" },
  { id: "thetour", nome: "TheTour", ano: "2022", stack: "C# · .NET · MySQL" },
  { id: "mongo", nome: "WebApi MongoDB", ano: "2022", stack: "C# · MongoDB" },
  { id: "spring", nome: "SpringBoot Exercise", ano: "2022", stack: "Java · Spring" },
];
