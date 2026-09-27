"use client";

import { useEffect, useState } from "react";

// Digita o texto uma letra por vez, com cursor piscando no fim.
export default function Typer({ text, delay = 0, speed = 55 }: { text: string; delay?: number; speed?: number }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (reduz) return setN(text.length);
      i += 1;
      setN(i);
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span className="sr-only">
        {text}
      </span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
