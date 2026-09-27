"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

// Rolagem suave com Lenis + parallax leve em elementos com data-speed.
// Também marca a nav como "scrolled" para mostrar a borda inferior.
export default function SmoothScroll() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".bp-nav");
    const alvos = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const atualizar = (y: number) => {
      nav?.classList.toggle("scrolled", y > 8);
      if (reduz) return;
      const meio = window.innerHeight / 2;
      for (const el of alvos) {
        const r = el.parentElement!.getBoundingClientRect();
        const deslocamento = (r.top + r.height / 2 - meio) * Number(el.dataset.speed);
        el.style.transform = `translate3d(0, ${deslocamento.toFixed(1)}px, 0)`;
      }
    };

    if (reduz) {
      const onScroll = () => atualizar(window.scrollY);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }

    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -72 }, lerp: 0.09 });
    lenis.on("scroll", (l: Lenis) => atualizar(l.scroll));
    atualizar(window.scrollY);
    return () => lenis.destroy();
  }, []);

  return null;
}
