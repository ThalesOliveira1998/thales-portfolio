// Ponto único de leitura do conteúdo. Textos por idioma ficam em pt.ts e en.ts; o resto em comum.ts.
import { en } from "./en";
import { pt } from "./pt";
import { labBase, pessoa, sistemasBase, sitesBase } from "./comum";
import type { ItemLab, Lang, Projeto } from "./tipos";

export { pessoa } from "./comum";
export * from "./tipos";

const textos = { pt, en };

export function conteudo(lang: Lang) {
  const t = textos[lang];
  const juntar = (b: (typeof sistemasBase)[number]): Projeto => ({ ...b, ...t.projetos[b.id] });
  return {
    ...t,
    lang,
    pessoa,
    sistemas: sistemasBase.map(juntar),
    sites: sitesBase.map(juntar),
    laboratorio: labBase.map((l): ItemLab => ({ ...l, nota: t.lab[l.id] })),
  };
}

export type Conteudo = ReturnType<typeof conteudo>;
