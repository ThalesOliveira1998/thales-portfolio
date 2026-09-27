"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { conteudo, pessoa, type Lang } from "@/data";
import { aplicarTema } from "./ThemeToggle";

type Linha = { id: number; conteudo: ReactNode; tipo?: "in" | "err" };
type Resultado = { saida?: ReactNode; erro?: string; limpar?: boolean; ir?: string };

const PROMPT = `${pessoa.usuario}@portfolio:~$`;
const SECOES = ["historia", "projetos", "ia", "sites", "stack", "contato"];
// Aceita o nome da seção nos dois idiomas
const ALIAS_SECAO: Record<string, string> = { story: "historia", história: "historia", projects: "projetos", ai: "ia", contact: "contato" };

const SUGESTOES: Record<Lang, string[]> = {
  pt: ["help", "whoami", "projetos", "agentes", "stack", "contato", "sudo contratar", "matrix", "pilula"],
  en: ["help", "whoami", "projects", "agents", "stack", "contact", "sudo hire", "matrix", "pill"],
};

function link(href: string, texto?: string) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {texto ?? href}
    </a>
  );
}

function executar(cmd: string, lang: Lang): Resultado {
  const c = conteudo(lang);
  const t = c.ui.terminal;
  const [base = "", ...args] = cmd.trim().toLowerCase().split(/\s+/);
  switch (base) {
    case "":
      return {};
    case "help":
    case "ajuda":
      return { saida: t.ajuda.join("\n") };
    case "whoami":
      return { saida: `${pessoa.nome} · ${c.perfil.cargo}\n\n${c.perfil.resumo}\n\n${c.perfil.busca}` };
    case "historia":
    case "história":
    case "story":
      return { saida: c.historia.map((h) => `[${h.marca}] ${h.titulo}`).join("\n") + `\n\n${t.historiaDica}` };
    case "projetos":
    case "projects":
    case "ls":
      return {
        saida:
          "sistemas/\n" +
          c.sistemas.map((p) => `  ${p.id.padEnd(14)} ${p.nome}`).join("\n") +
          "\nsites/\n" +
          c.sites.map((p) => `  ${p.id.padEnd(14)} ${p.nome}`).join("\n") +
          `\n\n${t.abrirDica}`,
      };
    case "abrir":
    case "open": {
      const p = [...c.sistemas, ...c.sites].find((x) => x.id === args[0]);
      if (!p) return { erro: t.naoEncontrado(args[0] ?? "") };
      const url = p.site ?? p.repo;
      if (!url) return { saida: t.semLink(p.nome, p.resumo) };
      window.open(url, "_blank", "noopener");
      return {
        saida: (
          <>
            {t.abrindo} {link(url, p.nome)} {t.novaAba}
          </>
        ),
      };
    }
    case "agentes":
    case "agents":
    case "ia":
    case "ai":
      return {
        saida:
          `${c.ia.texto}\n\n` +
          c.ia.pilares.map((p) => `  ▸ ${p.titulo}: ${p.texto}`).join("\n") +
          `\n\n${c.ia.fluxo.join(" → ")}`,
      };
    case "stack":
      return { saida: c.stack.map((g) => `${g.grupo}/\n  ${g.itens.join(" · ")}`).join("\n") };
    case "contato":
    case "contact":
      return {
        saida: (
          <>
            e-mail    {link(`mailto:${pessoa.links.email}`, pessoa.links.email)}
            {"\n"}whatsapp  {link(pessoa.links.whatsapp, pessoa.links.whatsappLabel)}
            {"\n"}github    {link(pessoa.links.github)}
            {"\n"}linkedin  {link(pessoa.links.linkedin)}
          </>
        ),
      };
    case "tema":
    case "theme": {
      const atual = document.documentElement.dataset.theme === "amber" ? "amber" : "green";
      const a = args[0];
      const pedido = a === "amber" || a === "ambar" ? "amber" : a === "verde" || a === "green" ? "green" : null;
      const novo = pedido ?? (atual === "amber" ? "green" : "amber");
      aplicarTema(novo);
      return { saida: t.temaTrocado(novo === "amber") };
    }
    case "ir":
    case "cd": {
      const bruto = args[0] ?? "";
      const alvo = ALIAS_SECAO[bruto] ?? bruto;
      if (!SECOES.includes(alvo)) return { erro: `${t.secoes}: ${c.ui.red.nav.historia}, ${c.ui.red.nav.projetos}, ia, sites, stack, ${c.ui.red.nav.contato}` };
      document.getElementById(alvo)?.scrollIntoView({ behavior: "smooth" });
      return { saida: `cd ./${bruto}` };
    }
    case "sudo": {
      const resto = args.join(" ");
      if (!resto.startsWith("contratar") && !resto.startsWith("hire")) return { erro: t.sudoNegado };
      const msg = encodeURIComponent(t.whatsappMsg);
      return {
        saida: (
          <>
            {t.sudo[0]}
            {"\n"}
            {t.sudo[1]}
            {"\n"}→ {link(`${pessoa.links.whatsapp}?text=${msg}`, t.abrirWhats)} {t.ou}{" "}
            {link(`mailto:${pessoa.links.email}`, t.mandarEmail)}
          </>
        ),
      };
    }
    case "pilula":
    case "pílula":
    case "pill":
    case "bluepill":
      return { saida: "…", ir: `/${lang}/blue` };
    case "matrix":
      return { saida: t.matrix };
    case "rm":
      return { erro: t.rm };
    case "clear":
    case "cls":
      return { limpar: true };
    default:
      return { erro: t.comandoDesconhecido(base) };
  }
}

export default function Terminal({ lang }: { lang: Lang }) {
  const t = conteudo(lang).ui.terminal;
  const router = useRouter();
  const [linhas, setLinhas] = useState<Linha[]>([{ id: 0, conteudo: t.boasVindas }]);
  const [valor, setValor] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [pos, setPos] = useState(-1);
  const out = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const seq = useRef(1);
  const comandos = [...SUGESTOES[lang], ...(lang === "pt" ? ["historia", "abrir", "tema", "ir"] : ["story", "open", "theme", "cd"]), "clear"];

  useEffect(() => {
    out.current?.scrollTo({ top: out.current.scrollHeight });
  }, [linhas]);

  const rodar = (cmd: string) => {
    const res = executar(cmd, lang);
    if (res.limpar) {
      setLinhas([]);
    } else {
      const novas: Linha[] = [{ id: seq.current++, conteudo: `${PROMPT} ${cmd}`, tipo: "in" }];
      if (res.erro) novas.push({ id: seq.current++, conteudo: res.erro, tipo: "err" });
      if (res.saida) novas.push({ id: seq.current++, conteudo: res.saida });
      setLinhas((l) => [...l, ...novas]);
    }
    if (res.ir) setTimeout(() => router.push(res.ir!), 400);
    if (cmd.trim()) setHist((h) => [cmd, ...h].slice(0, 50));
    setPos(-1);
    setValor("");
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" && hist.length) {
      e.preventDefault();
      const p = Math.min(pos + 1, hist.length - 1);
      setPos(p);
      setValor(hist[p]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const p = pos - 1;
      setPos(p);
      setValor(p >= 0 ? hist[p] : "");
    } else if (e.key === "Tab" && valor) {
      const achado = comandos.find((s) => s.startsWith(valor.toLowerCase()));
      if (achado) {
        e.preventDefault();
        setValor(achado);
      }
    }
  };

  return (
    <div className="win term" onClick={() => input.current?.focus({ preventScroll: true })}>
      <div className="win-bar">
        <i /> <i /> <i />
        <span>{PROMPT} · bash · 80×24</span>
      </div>
      <div className="term-out" ref={out} role="log" aria-live="polite">
        {linhas.map((l) => (
          <div key={l.id} className={l.tipo}>
            {l.conteudo}
          </div>
        ))}
      </div>
      <form
        className="term-form"
        onSubmit={(e) => {
          e.preventDefault();
          rodar(valor);
        }}
      >
        <label htmlFor="term-input">{PROMPT}</label>
        <input
          id="term-input"
          ref={input}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onKeyDown={onKey}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="send"
          aria-label={t.rotulo}
        />
      </form>
      <div className="chips">
        {SUGESTOES[lang].map((s) => (
          <button key={s} type="button" onClick={() => rodar(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
