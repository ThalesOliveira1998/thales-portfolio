import Image from "next/image";
import Link from "next/link";
import SmoothScroll from "@/components/blue/SmoothScroll";
import RevealObserver from "@/components/shared/RevealObserver";
import { conteudo, pessoa, type Lang, type Projeto } from "@/data";

type Comum = ReturnType<typeof conteudo>["ui"]["comum"];

function Frame({ p, t, sizes, prioridade }: { p: Projeto; t: Comum; sizes: string; prioridade?: boolean }) {
  return (
    <div className="frame">
      <div className="frame-bar" aria-hidden="true">
        <i /> <i /> <i />
        <span>{p.site ? p.site.replace("https://", "") : p.nome}</span>
      </div>
      <div className="frame-img">
        {p.imagem ? (
          <Image src={p.imagem} alt={p.nome} fill sizes={sizes} priority={prioridade} />
        ) : (
          <div className="frame-ph">
            <div>
              <b>{p.nome}</b>
              <small>{p.site ? t.semPreview : t.privado}</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Chips({ itens }: { itens: string[] }) {
  return (
    <div className="bp-chips">
      {itens.map((s) => (
        <span className="bp-chip" key={s}>
          {s}
        </span>
      ))}
    </div>
  );
}

export default async function Blue({ params }: PageProps<"/[lang]/blue">) {
  const lang = (await params).lang as Lang;
  const c = conteudo(lang);
  const b = c.ui.blue;
  const t = c.ui.comum;
  const colagem = ["zequinha", "controlaai", "icgym"].map((id) => c.sistemas.find((p) => p.id === id)!);
  const whats = `${pessoa.links.whatsapp}?text=${encodeURIComponent(c.ui.terminal.whatsappMsg)}`;

  return (
    <div className="bp">
      <a className="skip" href="#conteudo">
        {t.pular}
      </a>
      <SmoothScroll />
      <RevealObserver />

      <header className="bp-nav">
        <div className="wrap">
          <a className="bp-logo" href="#topo">
            <span className="mark" aria-hidden="true">
              TO
            </span>
            {pessoa.nome}
          </a>
          <nav className="bp-links" aria-label={lang === "pt" ? "Seções" : "Sections"}>
            {(Object.keys(b.nav) as (keyof typeof b.nav)[]).map((k) => (
              <a key={k} href={`#${k}`}>
                {b.nav[k]}
              </a>
            ))}
          </nav>
          <div className="bp-actions">
            <div className="bp-lang">
              <Link href="/pt/blue" aria-current={lang === "pt"} hrefLang="pt-BR">
                PT
              </Link>
              <Link href="/en/blue" aria-current={lang === "en"} hrefLang="en">
                EN
              </Link>
            </div>
            <a className="bp-btn small" href="#contato">
              {b.heroBotoes[1]}
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo">
        {/* ---------------- HERO ---------------- */}
        <section className="bp-hero" id="topo">
          <div className="wrap">
            <p className="bp-status">
              <i aria-hidden="true" /> {b.disponivel}
            </p>
            <h1>
              <span className="line">
                <span>{b.heroTitulo[0]}</span>
              </span>
              <span className="line">
                <span>
                  <em>{b.heroTitulo[1]}</em> {b.heroTitulo[2]}
                </span>
              </span>
            </h1>
            <div className="bp-hero-row">
              <div>
                <p className="bp-role">
                  {pessoa.nome} · {c.perfil.cargo}
                </p>
                <p>{c.perfil.resumo}</p>
              </div>
              <div className="bp-hero-ctas">
                <a className="bp-btn" href="#projetos">
                  {b.heroBotoes[0]} <span className="arrow">→</span>
                </a>
                <a className="bp-btn ghost" href="#contato">
                  {b.heroBotoes[1]}
                </a>
              </div>
            </div>

            <div className="bp-collage" aria-hidden="true">
              {colagem.map((p, i) => (
                <div className="frame" key={p.id} data-speed={[0.06, -0.04, 0.1][i]}>
                  <div className="frame-bar">
                    <i /> <i /> <i />
                    <span>{p.site?.replace("https://", "")}</span>
                  </div>
                  <div className="frame-img">
                    <Image src={p.imagem!} alt="" fill sizes="(max-width: 900px) 60vw, 700px" priority={i === 1} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bp-stats">
              {c.numeros.map((n) => (
                <div className="bp-stat" key={n.legenda}>
                  <b>{n.valor}</b>
                  <span>{n.legenda}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SOBRE ---------------- */}
        <section id="sobre">
          <div className="wrap bp-about">
            <div className="bp-about-head">
              <p className="bp-eyebrow">{b.sobreRotulo}</p>
              <h2 className="bp-h2">{b.sobreTitulo}</h2>
              <p className="bp-lead">{b.sobreTexto}</p>
            </div>
            <ol className="bp-timeline">
              {c.historia.map((h) => (
                <li key={h.marca} className="reveal">
                  <span className="when">{h.marca}</span>
                  <div>
                    <h3>{h.titulo}</h3>
                    <p>{h.texto}</p>
                    {h.tags && <Chips itens={h.tags} />}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- PROJETOS ---------------- */}
        <section id="projetos">
          <div className="wrap">
            <p className="bp-eyebrow">{b.projetosRotulo}</p>
            <h2 className="bp-h2">{b.projetosTitulo}</h2>
            <p className="bp-lead">{b.projetosTexto}</p>

            <div className="bp-cases">
              {c.sistemas.map((p, i) => (
                <article className="bp-case reveal" key={p.id}>
                  <Frame p={p} t={t} sizes="(max-width: 860px) 100vw, 680px" />
                  <div>
                    <span className="bp-case-num">{String(i + 1).padStart(2, "0")}</span>
                    <br />
                    <span className="bp-case-kind">{p.tipo}</span>
                    <h3>{p.nome}</h3>
                    <p>{p.resumo}</p>
                    <ul className="bp-checks">
                      {p.destaques.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <Chips itens={p.stack} />
                    <div className="bp-case-links">
                      {p.site && (
                        <a className="bp-btn small" href={p.site} target="_blank" rel="noreferrer">
                          {t.verNoAr} <span className="arrow">↗</span>
                        </a>
                      )}
                      {p.repo && (
                        <a className="bp-btn small ghost" href={p.repo} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- IA ---------------- */}
        <section id="ia" className="bp-dark">
          <div className="wrap">
            <p className="bp-eyebrow">{b.iaRotulo}</p>
            <h2 className="bp-h2">{c.ia.titulo}.</h2>
            <p className="bp-lead">{c.ia.texto}</p>
            <ol className="bp-flow" aria-label={lang === "pt" ? "Fluxo de agentes" : "Agent flow"}>
              {c.ia.fluxo.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ol>
            <div className="bp-ai-grid">
              {c.ia.pilares.map((p, i) => (
                <div className="bp-ai-card reveal" key={p.titulo}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SITES ---------------- */}
        <section id="sites">
          <div className="wrap">
            <p className="bp-eyebrow">{b.sitesRotulo}</p>
            <h2 className="bp-h2">{b.sitesTitulo}</h2>
            <p className="bp-lead">{c.ui.red.sitesLead}</p>
            <div className="bp-sites">
              {c.sites.map((p) => (
                <article className="bp-site reveal" key={p.id}>
                  <Frame p={p} t={t} sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 380px" />
                  <div className="bp-site-body">
                    <small>{p.tipo}</small>
                    <h3>{p.nome}</h3>
                    <p>{p.resumo}</p>
                    {p.site && (
                      <a href={p.site} target="_blank" rel="noreferrer">
                        {t.verNoAr} ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- STACK ---------------- */}
        <section id="stack">
          <div className="wrap">
            <p className="bp-eyebrow">{b.stackRotulo}</p>
            <h2 className="bp-h2">{b.stackTitulo}</h2>
            <div className="bp-stack">
              {c.stack.map((g) => (
                <div className="bp-stack-row reveal" key={g.grupo}>
                  <h3>{g.grupo}</h3>
                  <Chips itens={g.itens} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- LAB ---------------- */}
        <section id="lab">
          <div className="wrap">
            <p className="bp-eyebrow">{b.labRotulo}</p>
            <h2 className="bp-h2">{b.labTitulo}</h2>
            <p className="bp-lead">{c.ui.red.labLead}</p>
            <ul className="bp-lab">
              {c.laboratorio.map((l) => (
                <li key={l.nome}>
                  <b>{l.nome}</b>
                  <span className="y">
                    {l.stack} · {l.ano}
                  </span>
                  <p>{l.nota}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- CONTATO ---------------- */}
        <section id="contato">
          <div className="wrap">
            <div className="bp-cta reveal">
              <p className="bp-eyebrow">{b.contatoRotulo}</p>
              <h2>{b.contatoTitulo}</h2>
              <p>{c.perfil.busca}</p>
              <div className="bp-cta-actions">
                <a className="bp-btn" href={whats} target="_blank" rel="noreferrer">
                  {b.contatoBotao} <span className="arrow">→</span>
                </a>
                <a className="bp-btn ghost" href={`mailto:${pessoa.links.email}`}>
                  {pessoa.links.email}
                </a>
                <a className="bp-btn ghost" href={pessoa.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="bp-btn ghost" href={pessoa.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bp-footer">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {pessoa.nome}. {b.rodape}
          </span>
          <Link className="bp-redpill" href={`/${lang}/red`}>
            <i aria-hidden="true" /> {t.outraPilula}
          </Link>
        </div>
      </footer>
    </div>
  );
}
