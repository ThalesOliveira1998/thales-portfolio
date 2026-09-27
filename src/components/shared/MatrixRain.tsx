"use client";

import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789{}<>/=;$#THALES";

// Chuva estilo Matrix no fundo do hero. Pausa fora da tela e respeita reduced-motion.
export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const size = 16;
    let cols: number[] = [];
    let raf = 0;
    let last = 0;
    let visivel = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Array.from({ length: Math.ceil(canvas.offsetWidth / size) }, () => Math.random() * -50);
    };

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (!visivel || t - last < 55) return;
      last = t;
      const cor = getComputedStyle(canvas).getPropertyValue("--fg").trim() || "#39ff7a";
      ctx.fillStyle = "rgba(0,0,0,0.09)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.font = `${size}px monospace`;
      cols.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = Math.random() > 0.975 ? "#eaffef" : cor;
        ctx.fillText(ch, i * size, y * size);
        cols[i] = y * size > canvas.offsetHeight && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    const io = new IntersectionObserver(([e]) => (visivel = e.isIntersecting));
    io.observe(canvas);
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
