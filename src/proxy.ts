import { NextResponse, type NextRequest } from "next/server";

// Sem idioma na URL: manda para /pt ou /en conforme o navegador.
export function proxy(request: NextRequest) {
  const aceita = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const pt = aceita.indexOf("pt");
  const en = aceita.indexOf("en");
  const lang = en !== -1 && (pt === -1 || en < pt) ? "en" : "pt";
  request.nextUrl.pathname = `/${lang}${request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Só roda em caminhos sem idioma e que não são arquivos nem internos do Next.
  matcher: ["/((?!_next|pt|en|projetos|favicon.ico|.*\\..*).*)"],
};
