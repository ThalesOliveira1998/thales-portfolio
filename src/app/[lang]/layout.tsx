import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, VT323 } from "next/font/google";
import { LANGS, conteudo, isLang } from "@/data";
import "../globals.css";
import "@/styles/red.css";
import "@/styles/blue.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const retro = VT323({ subsets: ["latin"], weight: "400", variable: "--font-retro", display: "swap" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

// Roda antes da pintura: aplica o tema âmbar salvo e, na versão vermelha, liga a tela de boot
// na primeira visita da sessão (a escolha da pílula já liga sozinha).
const SCRIPT_INICIAL = `(function(){var d=document.documentElement;try{if(localStorage.getItem("tema")==="amber")d.dataset.theme="amber"}catch(e){}try{if(/\/red\/?$/.test(location.pathname)&&sessionStorage.getItem("boot")!=="1"&&!matchMedia("(prefers-reduced-motion: reduce)").matches)d.classList.add("booting")}catch(e){}})()`;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { ui } = conteudo(lang);
  return {
    title: ui.meta.titulo,
    description: ui.meta.descricao,
    alternates: { languages: { "pt-BR": "/pt", en: "/en" } },
    openGraph: {
      title: ui.meta.titulo,
      description: ui.meta.descricao,
      type: "website",
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#030a05",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${mono.variable} ${retro.variable} ${sans.variable} ${serif.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: SCRIPT_INICIAL,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
