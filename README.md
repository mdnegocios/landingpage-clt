# Landing Page Consignado CLT - MD Consultoria & Negocios

Landing page institucional para captacao de clientes interessados em credito consignado para trabalhadores CLT.

O projeto foi construido como uma aplicacao React estatica, com foco em performance, responsividade e direcionamento rapido para contato via WhatsApp ou telefone.

## Visao geral

- Hero com chamada principal para simulacao de credito.
- Secao de beneficios do consignado CLT.
- Passo a passo de contratacao.
- Depoimentos e prova social.
- CTA final com WhatsApp e telefone.
- Botao flutuante de WhatsApp.
- Layout responsivo para desktop e mobile.
- Deploy estatico pronto para Netlify.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React
- Vitest
- Playwright
- Netlify

## Estrutura principal

```txt
src/
  assets/                 Imagens e assets usados na landing page
  components/
    lp/                   Componentes especificos da landing page
    ui/                   Componentes base do shadcn/ui
  hooks/                  Hooks compartilhados
  lib/                    Utilitarios
  pages/                  Paginas da aplicacao
  App.tsx                 Entrada visual da aplicacao
  main.tsx                Bootstrap React

public/                   Arquivos publicos, favicon e robots.txt
netlify.toml              Configuracao de build e redirect da Netlify
```

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Suba o servidor local:

```bash
npm run dev
```

Por padrao, o Vite usa a porta configurada em `vite.config.ts`.

## Scripts disponiveis

```bash
npm run dev        # servidor local de desenvolvimento
npm run build      # build de producao em dist/
npm run preview    # preview local do build
npm run lint       # analise com ESLint
npm run test       # testes com Vitest
```

## Build e deploy

O deploy esta preparado para Netlify:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

O redirect abaixo garante que rotas diretas sejam respondidas pelo app estatico:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Conteudo e contatos

Os principais textos, telefone e WhatsApp estao centralizados na pagina:

```txt
src/pages/ConsignadoCLT.tsx
```

Componentes importantes:

- `src/components/lp/LPHero.tsx`
- `src/components/lp/LPBenefits.tsx`
- `src/components/lp/LPSteps.tsx`
- `src/components/lp/LPTestimonials.tsx`
- `src/components/lp/LPCTA.tsx`
- `src/components/lp/WhatsAppFloat.tsx`
- `src/components/lp/LPFooter.tsx`

## Seguranca

Scan realizado no codigo antes desta documentacao:

- Nao ha arquivos `.env` no projeto.
- Nao foram encontrados tokens, chaves privadas, senhas ou API keys no codigo fonte.
- A landing page nao possui backend proprio.
- A aplicacao nao grava cookies, `localStorage` ou `sessionStorage`.
- Os links externos abertos em nova aba usam `rel="noopener noreferrer"`.
- As mensagens enviadas ao WhatsApp usam `encodeURIComponent`.

Resultado pratico: nao foi identificado vazamento de segredo ou dado sensivel no codigo.

Observacao sobre dependencias: o comando `npm audit --omit=dev` aponta advisories em pacotes como `react-router-dom`, `recharts/lodash`, `tailwindcss/postcss` e dependencias transitivas. Isso e um risco de dependencia a acompanhar, mas nao representa chave, token, senha ou dado privado exposto no repositorio.

## Recomendacoes antes de publicar

- Revisar o telefone e o numero de WhatsApp em `src/pages/ConsignadoCLT.tsx`.
- Trocar a imagem Open Graph do `index.html` por uma URL oficial do dominio final, caso a landing tenha compartilhamento em redes sociais.
- Rodar `npm run build` antes de cada deploy.
- Manter `node_modules/`, `dist/`, caches e logs fora do Git, conforme `.gitignore`.
