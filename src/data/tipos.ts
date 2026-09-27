export const LANGS = ["pt", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

export type Capitulo = { marca: string; titulo: string; texto: string; tags?: string[] };

export type TextoProjeto = { tipo: string; resumo: string; destaques: string[] };

export type Projeto = TextoProjeto & {
  id: string;
  nome: string;
  stack: string[];
  imagem?: string;
  site?: string;
  repo?: string;
  ascii?: string;
};

export type ItemLab = { nome: string; ano: string; stack: string; nota: string };

export type Textos = {
  perfil: { cargo: string; resumo: string; busca: string; disponivel: string };
  numeros: { valor: string; legenda: string }[];
  historia: Capitulo[];
  projetos: Record<string, TextoProjeto>;
  ia: {
    titulo: string;
    texto: string;
    pilares: { titulo: string; texto: string }[];
    fluxo: string[];
    falas: string[];
    status: { trabalhando: string; feito: string; aguardando: string };
  };
  lab: Record<string, string>;
  stack: { grupo: string; itens: string[] }[];
  ui: {
    meta: { titulo: string; descricao: string };
    comum: {
      verNoAr: string;
      codigo: string;
      semPreview: string;
      privado: string;
      trocarIdioma: string;
      outraPilula: string;
      pular: string;
    };
    pilula: {
      linhas: string[];
      pergunta: string;
      vermelha: { nome: string; titulo: string; texto: string };
      azul: { nome: string; titulo: string; texto: string };
      dica: string;
    };
    red: {
      nav: Record<"historia" | "projetos" | "ia" | "sites" | "stack" | "contato", string>;
      heroBotoes: [string, string, string];
      historiaTitulo: string;
      historiaLead: string;
      sistemasTitulo: string;
      sistemasLead: string;
      sitesTitulo: string;
      sitesLead: string;
      labTitulo: string;
      labLead: string;
      stackTitulo: string;
      terminalTitulo: string;
      terminalLead: [string, string];
      contatoTitulo: [string, string];
      rodape: string;
      boot: string[];
      tema: { verde: string; ambar: string; mudarPara: (outro: "green" | "amber") => string };
    };
    terminal: {
      boasVindas: string;
      ajuda: string[];
      historiaDica: string;
      abrirDica: string;
      naoEncontrado: (id: string) => string;
      semLink: (nome: string, resumo: string) => string;
      abrindo: string;
      novaAba: string;
      temaTrocado: (ambar: boolean) => string;
      secoes: string;
      sudoNegado: string;
      sudo: [string, string];
      whatsappMsg: string;
      abrirWhats: string;
      mandarEmail: string;
      ou: string;
      matrix: string;
      rm: string;
      comandoDesconhecido: (c: string) => string;
      rotulo: string;
    };
    blue: {
      nav: Record<"sobre" | "projetos" | "ia" | "stack" | "contato", string>;
      disponivel: string;
      heroTitulo: [string, string, string];
      heroBotoes: [string, string];
      sobreRotulo: string;
      sobreTitulo: string;
      sobreTexto: string;
      projetosRotulo: string;
      projetosTitulo: string;
      projetosTexto: string;
      iaRotulo: string;
      sitesRotulo: string;
      sitesTitulo: string;
      labRotulo: string;
      labTitulo: string;
      stackRotulo: string;
      stackTitulo: string;
      contatoRotulo: string;
      contatoTitulo: string;
      contatoBotao: string;
      rodape: string;
    };
  };
};
