"use client";

import { useEffect, useState } from "react";
import { conteudo, type Lang } from "@/data";

// Tela de boot estilo BIOS. Roda uma vez por sessão e some com clique ou tecla.
// Um script no layout marca <html class="booting"> antes da pintura; sem essa classe o CSS esconde a tela.
export default function Boot({ lang }: { lang: Lang }) {
  const LINHAS = conteudo(lang).ui.red.boot;
  const dica = lang === "pt" ? "clique ou aperte qualquer tecla para pular" : "click or press any key to skip";
  const [rodando, setRodando] = useState(false);
  const [saindo, setSaindo] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!document.documentElement.classList.contains("booting")) return;
    const raf = requestAnimationFrame(() => setRodando(true));
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("booting");
    };
  }, []);

  useEffect(() => {
    if (!rodando || saindo) return;
    const t =
      n < LINHAS.length ? setTimeout(() => setN(n + 1), n === 0 ? 200 : 160) : setTimeout(() => setSaindo(true), 550);
    return () => clearTimeout(t);
  }, [rodando, saindo, n, LINHAS.length]);

  useEffect(() => {
    if (!rodando) return;
    const pular = () => setSaindo(true);
    window.addEventListener("keydown", pular);
    return () => window.removeEventListener("keydown", pular);
  }, [rodando]);

  useEffect(() => {
    if (!saindo) return;
    try {
      sessionStorage.setItem("boot", "1");
    } catch {}
    const t = setTimeout(() => document.documentElement.classList.remove("booting"), 460);
    return () => clearTimeout(t);
  }, [saindo]);

  return (
    <div className={`boot${saindo ? " out" : ""}`} onClick={() => setSaindo(true)} aria-hidden="true">
      <pre>
        {LINHAS.slice(0, n).join("\n")}
        <span className="caret" />
      </pre>
      <span className="hint">{dica}</span>
    </div>
  );
}
