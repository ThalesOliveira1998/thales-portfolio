"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MatrixRain from "@/components/shared/MatrixRain";
import { conteudo, type Lang } from "@/data";

type Escolha = "red" | "blue";

// Cena de entrada: digita as falas, mostra as duas pílulas e leva para a versão escolhida.
export default function PillScene({ lang }: { lang: Lang }) {
  const { pilula } = conteudo(lang).ui;
  const router = useRouter();
  const texto = pilula.linhas.join("\n");
  const [n, setN] = useState(0);
  const [escolha, setEscolha] = useState<Escolha | null>(null);
  const cena = useRef<HTMLDivElement>(null);
  const botoes = useRef<(HTMLButtonElement | null)[]>([]);
  const pronto = n >= texto.length;

  useEffect(() => {
    router.prefetch(`/${lang}/red`);
    router.prefetch(`/${lang}/blue`);
  }, [router, lang]);

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i = reduz ? texto.length : i + 1;
      setN(i);
      if (i < texto.length) t = setTimeout(tick, texto[i - 1] === "\n" ? 420 : 38);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, [texto]);

  useEffect(() => {
    if (pronto) botoes.current[0]?.focus({ preventScroll: true });
  }, [pronto]);

  const escolher = (qual: Escolha, e?: React.MouseEvent) => {
    if (escolha) return;
    if (e && cena.current) {
      cena.current.style.setProperty("--x", `${e.clientX}px`);
      cena.current.style.setProperty("--y", `${e.clientY}px`);
    }
    // A versão vermelha abre com a tela de boot; a classe precisa estar no <html> antes de ela montar.
    if (qual === "red") document.documentElement.classList.add("booting");
    setEscolha(qual);
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => router.push(`/${lang}/${qual}`), reduz ? 0 : qual === "red" ? 700 : 780);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const atual = botoes.current.findIndex((b) => b === document.activeElement);
    botoes.current[atual === 0 ? 1 : 0]?.focus();
  };

  const outro: Lang = lang === "pt" ? "en" : "pt";

  return (
    <main
      ref={cena}
      className={`pills${pronto ? " ready" : ""}${escolha ? ` go-${escolha}` : ""}`}
      onKeyDown={onKey}
    >
      <MatrixRain />
      <nav className="pills-lang" aria-label="Idioma / Language">
        <Link href="/pt" aria-current={lang === "pt"} hrefLang="pt-BR">
          PT
        </Link>
        <Link href="/en" aria-current={lang === "en"} hrefLang="en">
          EN
        </Link>
      </nav>

      <div className="pills-inner">
        <p className="pills-lines" aria-hidden="true">
          {texto.slice(0, n)}
        </p>
        <p className="sr-only">{texto}</p>
        <h1 className="pills-q">{pilula.pergunta}</h1>
        <div className="pills-choices" role="group" aria-label={pilula.pergunta}>
          {(["red", "blue"] as const).map((qual, i) => {
            const p = qual === "red" ? pilula.vermelha : pilula.azul;
            return (
              <button
                key={qual}
                ref={(el) => {
                  botoes.current[i] = el;
                }}
                type="button"
                className={`pill ${qual}`}
                onClick={(e) => escolher(qual, e)}
                tabIndex={pronto ? 0 : -1}
              >
                <span className="capsule" aria-hidden="true" />
                <span className="pill-name">{p.nome}</span>
                <span className="pill-title">{p.titulo}</span>
                <span className="pill-text">{p.texto}</span>
              </button>
            );
          })}
        </div>
        <p className="pills-hint">
          <span aria-hidden="true">{pilula.dica} · </span>
          <Link href={`/${outro}`} style={{ color: "inherit" }}>
            {conteudo(lang).ui.comum.trocarIdioma}
          </Link>
        </p>
      </div>
      <div className="pills-fx" aria-hidden="true" />
    </main>
  );
}
