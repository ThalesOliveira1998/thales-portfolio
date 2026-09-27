# THALES.OS · Portfólio

Portfólio de Thales Oliveira em duas versões, escolhidas na entrada como na cena das pílulas de Matrix:

| Rota | O que é |
|---|---|
| `/pt`, `/en` | Tela de escolha: pílula vermelha ou azul |
| `/pt/red`, `/en/red` | **Pílula vermelha**: terminal retrô (CRT, chuva Matrix, boot de BIOS, terminal interativo) |
| `/pt/blue`, `/en/blue` | **Pílula azul**: versão comercial e limpa, com rolagem suave (Lenis) |

Quem abre `/` é mandado para `/pt` ou `/en` conforme o idioma do navegador (`src/proxy.ts`).

**Stack:** Next.js 16, React 19, TypeScript e Lenis. Sem biblioteca de UI; o CSS é puro.

## Rodar

```bash
npm install
npm run dev
```

## Editar conteúdo

| Quero mudar… | Onde |
|---|---|
| Links, contatos, nomes e stacks dos projetos, imagens | `src/data/comum.ts` |
| Textos em português (história, projetos, botões…) | `src/data/pt.ts` |
| Textos em inglês | `src/data/en.ts` |
| Prints dos projetos | `public/projetos/` |
| Estilo da tela das pílulas | `src/app/globals.css` |
| Estilo da versão vermelha (escopo `.tx`) | `src/styles/red.css` |
| Estilo da versão azul (escopo `.bp`) | `src/styles/blue.css` |
| Comandos do terminal interativo | `src/components/red/Terminal.tsx` |

`pt.ts` e `en.ts` seguem o mesmo tipo (`src/data/tipos.ts`), então o TypeScript avisa se faltar algum texto em um dos idiomas.

## Deploy

Importe o repositório na Vercel. Não precisa de configuração extra.
