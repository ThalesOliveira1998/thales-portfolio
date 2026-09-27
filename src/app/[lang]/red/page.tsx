import Image from "next/image";
import Link from "next/link";
import Boot from "@/components/red/Boot";
import MatrixRain from "@/components/shared/MatrixRain";
import RevealObserver from "@/components/shared/RevealObserver";
import Typer from "@/components/red/Typer";
import ThemeToggle from "@/components/red/ThemeToggle";
import AgentFlow from "@/components/red/AgentFlow";
import Terminal from "@/components/red/Terminal";
import { conteudo, pessoa, type Lang, type Projeto } from "@/data";

function Cmd({ children, dir = "~" }: { children: React.ReactNode; dir?: string }) {
  return (
    <p className="cmd" aria-hidden="true">
      <span className="p">
        {pessoa.usuario}@portfolio:{dir}$
      </span>
      <span className="c">{children}</span>
    </p>
  );
}

type Comum = ReturnType<typeof conteudo>["ui"]["comum"];

function Tela({ p, grande, t }: { p: Projeto; grande?: boolean; t: Comum }) {
  return (
    <div className="shot">
      {p.imagem ? (
        <Image
          src={p.imagem}
          alt={p.nome}
          fill
          sizes={grande ? "(max-width: 860px) 100vw, 640px" : "(max-width: 700px) 100vw, 380px"}
        />
      ) : (
        <div className="ascii retro" aria-hidden="true">
          <div>
            {p.ascii ?? p.nome}
            <small>{p.site ? t.semPreview : t.privado}</small>
          </div>
        </div>
      )}
    </div>
  );
}

function Links({ p, t }: { p: Projeto; t: Comum }) {
  if (!p.site && !p.repo) return null;
  return (
    <div className="links">
      {p.site && (
        <a href={p.site} target="_blank" rel="noreferrer">
          ↗ {t.verNoAr}
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer">
          {"</>"} {t.codigo}
        </a>
      )}
    </div>
  );
}

function Tags({ itens }: { itens: string[] }) {
  return (
    <div className="tags">
      {itens.map((s) => (
        <span className="tag" key={s}>
          {s}
        </span>
      ))}
    </div>
  );
}

export default async function Red({ params }: PageProps<"/[lang]/red">) {
  const lang = (await params).lang as Lang;
  const c = conteudo(lang);
  const r = c.ui.red;
  const t = c.ui.comum;
  const outro: Lang = lang === "pt" ? "en" : "pt";

  return (
    <div className="tx">
      <a className="skip" href="#conteudo">
        {t.pular}
      </a>
      <Boot lang={lang} />
      <RevealObserver />

      <header className="statusbar">
        <div className="wrap">
          <a className="who glow" href="#topo">
            {pessoa.usuario}@portfolio<span className="path">:~/THALES.OS</span>
          </a>
          <nav aria-label="Seções">
            {(Object.keys(r.nav) as (keyof typeof r.nav)[]).map((k) => (
              <a key={k} href={`#${k}`}>
                [{r.nav[k]}]
              </a>
            ))}
          </nav>
          <div className="bar-actions">
            <Link className="lang-btn" href={`/${outro}/red`} hrefLang={outro} aria-label={t.trocarIdioma}>
              [{outro.toUpperCase()}]
            </Link>
            <ThemeToggle lang={lang} />
          </div>
        </div>
      </header>

      <main id="conteudo">
        {/* ---------------- HERO ---------------- */}
        <section className="hero" id="topo">
          <MatrixRain />
          <div className="wrap">
            <p className="cmd">
              <span className="p">{pessoa.usuario}@portfolio:~$</span>
              <span className="c">
                <Typer text="whoami" delay={400} speed={110} />
              </span>
            </p>
            <h1 className="hero-name retro glow">
              <span className="glitch" data-text="THALES">
                THALES
              </span>
              <span className="glitch" data-text="OLIVEIRA">
                OLIVEIRA
              </span>
            </h1>
            <p className="hero-role retro">&gt; {c.perfil.cargo}</p>
            <p className="hero-lead">{c.perfil.resumo}</p>
            <div className="btns">
              <a className="btn solid" href="#projetos">
                {r.heroBotoes[0]}
              </a>
              <a className="btn" href="#ia">
                {r.heroBotoes[1]}
              </a>
              <a className="btn" href="#contato">
                {r.heroBotoes[2]}
              </a>
            </div>
            <div className="stats">
              {c.numeros.map((n) => (
                <div className="stat" key={n.legenda}>
                  <b className="retro">{n.valor}</b>
                  <small>{n.legenda}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- HISTÓRIA ---------------- */}
        <section id="historia">
          <div className="wrap">
            <Cmd>cat {lang === "pt" ? "historia" : "story"}.log</Cmd>
            <h2 className="section-title retro glow">{r.historiaTitulo}</h2>
            <p className="section-lead">{r.historiaLead}</p>
            <ol className="log">
              {c.historia.map((h) => (
                <li key={h.marca} className="entry win reveal">
                  <span className="marca retro">[{h.marca}]</span>
                  <div>
                    <h3 className="retro glow">{h.titulo}</h3>
                    <p>{h.texto}</p>
                    {h.tags && <Tags itens={h.tags} />}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- SISTEMAS ---------------- */}
        <section id="projetos">
          <div className="wrap">
            <Cmd dir="~/projects">ls -la ./systems</Cmd>
            <h2 className="section-title retro glow">{r.sistemasTitulo}</h2>
            <p className="section-lead">{r.sistemasLead}</p>
            <div className="systems">
              {c.sistemas.map((p) => (
                <article className="system win reveal" key={p.id}>
                  <Tela p={p} grande t={t} />
                  <div className="system-body">
                    <span className="kind">{p.tipo}</span>
                    <h3 className="retro glow">{p.nome}</h3>
                    <p>{p.resumo}</p>
                    <ul className="plus">
                      {p.destaques.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <Tags itens={p.stack} />
                    <Links p={p} t={t} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- IA ---------------- */}
        <section id="ia">
          <div className="wrap">
            <Cmd dir="~/ai">./agents --orchestrate</Cmd>
            <h2 className="section-title retro glow">{c.ia.titulo}.</h2>
            <p className="section-lead">{c.ia.texto}</p>
            <div className="ai-grid">
              <div className="pillars reveal">
                {c.ia.pilares.map((p) => (
                  <div className="pillar" key={p.titulo}>
                    <h3 className="retro">{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </div>
                ))}
              </div>
              <div className="reveal">
                <AgentFlow lang={lang} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SITES ---------------- */}
        <section id="sites">
          <div className="wrap">
            <Cmd dir="~/projects">ls ./sites</Cmd>
            <h2 className="section-title retro glow">{r.sitesTitulo}</h2>
            <p className="section-lead">{r.sitesLead}</p>
            <div className="sites">
              {c.sites.map((p) => (
                <article className="site win reveal" key={p.id}>
                  <div className="win-bar">
                    <i /> <i /> <i />
                    <span>{p.site ? p.site.replace("https://", "") : `${p.id}.local`}</span>
                  </div>
                  <Tela p={p} t={t} />
                  <div className="site-body">
                    <span className="kind">{p.tipo}</span>
                    <h3 className="retro glow">{p.nome}</h3>
                    <p>{p.resumo}</p>
                    <ul className="plus">
                      {p.destaques.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <Tags itens={p.stack} />
                    <Links p={p} t={t} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- LAB ---------------- */}
        <section id="lab">
          <div className="wrap">
            <Cmd>git log --oneline --all ./lab</Cmd>
            <h2 className="section-title retro glow">{r.labTitulo}</h2>
            <p className="section-lead">{r.labLead}</p>
            <div className="win reveal">
              <div className="win-bar">
                <i /> <i /> <i />
                <span>github.com/ThalesOliveira1998</span>
              </div>
              <ol className="gitlog">
                {c.laboratorio.map((l, i) => (
                  <li key={l.nome}>
                    <span className="hash">{(0xa1f3 + i * 0x3b7).toString(16)}</span>
                    <span className="nm">{l.nome}</span>
                    <span>{l.nota}</span>
                    <span className="st">
                      {l.stack} · {l.ano}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------------- STACK ---------------- */}
        <section id="stack">
          <div className="wrap">
            <Cmd>tree ./stack</Cmd>
            <h2 className="section-title retro glow">{r.stackTitulo}</h2>
            <div className="tree">
              {c.stack.map((g) => (
                <div className="tree-group win reveal" key={g.grupo}>
                  <h3 className="retro">{g.grupo}/</h3>
                  <ul>
                    {g.itens.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- TERMINAL ---------------- */}
        <section id="terminal">
          <div className="wrap">
            <Cmd>./interactive</Cmd>
            <h2 className="section-title retro glow">{r.terminalTitulo}</h2>
            <p className="section-lead">
              {r.terminalLead[0]} <span className="accent">help</span> {r.terminalLead[1]}
            </p>
            <Terminal lang={lang} />
          </div>
        </section>

        {/* ---------------- CONTATO ---------------- */}
        <section id="contato" className="contact">
          <div className="wrap">
            <Cmd>./contact.sh</Cmd>
            <h2 className="contact-title retro glow">
              {r.contatoTitulo[0]}
              <br />
              {r.contatoTitulo[1]}
            </h2>
            <p className="section-lead">{c.perfil.busca}</p>
            <ul className="contact-list">
              {[
                { k: "e-mail", href: `mailto:${pessoa.links.email}`, v: pessoa.links.email },
                { k: "whatsapp", href: pessoa.links.whatsapp, v: pessoa.links.whatsappLabel },
                { k: "linkedin", href: pessoa.links.linkedin, v: pessoa.links.linkedinLabel },
                { k: "github", href: pessoa.links.github, v: "/ThalesOliveira1998" },
              ].map((l) => (
                <li key={l.k}>
                  <a href={l.href} target={l.k === "e-mail" ? undefined : "_blank"} rel="noreferrer">
                    <span className="k">{l.k}</span>
                    <span className="v">{l.v}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link className="btn blue-pill" href={`/${lang}/blue`}>
              <span className="mini-pill" aria-hidden="true" /> {t.outraPilula}
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {pessoa.nome} · {r.rodape}
          </span>
          <span>
            process exited with code 0<span className="caret" aria-hidden="true" />
          </span>
        </div>
      </footer>
    </div>
  );
}
