"use client";

import { useSyncExternalStore } from "react";
import { conteudo, type Lang } from "@/data";

export type Tema = "green" | "amber";

export function aplicarTema(tema: Tema) {
  if (tema === "amber") document.documentElement.dataset.theme = "amber";
  else delete document.documentElement.dataset.theme;
  try {
    localStorage.setItem("tema", tema);
  } catch {}
  window.dispatchEvent(new Event("tema"));
}

function assinar(cb: () => void) {
  window.addEventListener("tema", cb);
  return () => window.removeEventListener("tema", cb);
}

const lerTema = (): Tema => (document.documentElement.dataset.theme === "amber" ? "amber" : "green");

// Alterna entre fósforo verde e âmbar, os dois monitores clássicos.
// O tema salvo é aplicado antes da pintura por um script no layout.
export default function ThemeToggle({ lang }: { lang: Lang }) {
  const t = conteudo(lang).ui.red.tema;
  const tema = useSyncExternalStore(assinar, lerTema, () => "green" as Tema);
  const outro: Tema = tema === "green" ? "amber" : "green";
  return (
    <button
      className="theme-btn"
      onClick={() => aplicarTema(outro)}
      aria-label={t.mudarPara(outro)}
    >
      [{tema === "green" ? t.verde : t.ambar}]
    </button>
  );
}
