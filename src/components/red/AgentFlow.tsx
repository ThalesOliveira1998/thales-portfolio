"use client";

import { useEffect, useRef, useState } from "react";
import { conteudo, type Lang } from "@/data";

const ICONES = ["?", "Σ", "¶", "✓", "▶"];

// Simula agentes especialistas passando a tarefa um para o outro.
export default function AgentFlow({ lang }: { lang: Lang }) {
  const { fluxo: agentes, falas: FALAS, status } = conteudo(lang).ia;
  const [ativo, setAtivo] = useState(0);
  const [rodando, setRodando] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setRodando(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!rodando || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setAtivo((a) => (a + 1) % agentes.length), 1900);
    return () => clearInterval(t);
  }, [rodando, agentes.length]);

  return (
    <div className="win" ref={ref}>
      <div className="win-bar">
        <i /> <i /> <i />
        <span>orquestrador.py · {agentes.length} agents</span>
      </div>
      <div className="agents">
        <ol className="agent-flow">
          {agentes.map((nome, i) => (
            <li key={nome}>
              {i > 0 && <div className={`pipe${i === ativo ? " flowing" : ""}`} aria-hidden="true" />}
              <div className={`agent${i === ativo ? " active" : ""}`}>
                <span className="node retro" aria-hidden="true">
                  {ICONES[i % ICONES.length]}
                </span>
                <span>agente.{nome}</span>
                <span className="status">{i === ativo ? status.trabalhando : i < ativo ? status.feito : status.aguardando}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="agent-log">
          <span className="accent">[log]</span> {FALAS[ativo % FALAS.length]}
        </p>
      </div>
    </div>
  );
}
