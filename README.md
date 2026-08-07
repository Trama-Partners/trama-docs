# Trama Docs

Documentação interna da **Trama Partners** — processos, tutoriais e comparativos usados pelo time.
Construída com [Docusaurus](https://docusaurus.io/).

## Requisitos

- Node.js >= 20

## Rodando localmente

```bash
npm install
npm run start
```

Sobe o servidor de desenvolvimento em `http://localhost:3000` com recarga automática.

## Build de produção

```bash
npm run build   # gera os arquivos estáticos em build/
npm run serve   # serve o build localmente para conferência
```

## Estrutura

```
docs/
  intro.mdx                  # visão geral / porta de entrada
  processos/
    _category_.json          # rótulo e ordem da categoria
    tiktok/                  # operação de lives e ferramentas
    consultoria/             # metodologias entregues a clientes
src/
  css/custom.css             # paleta e estilos globais
  components/DocAreas/       # cards de área da home
  pages/index.tsx            # home
static/img/                  # logo, favicon e social card
```

## Adicionando documentação

1. Crie o `.mdx` dentro da pasta da área correspondente em `docs/`.
2. No frontmatter, defina `title`, `description` e `sidebar_position`.
3. Para uma área nova, crie a pasta com um `_category_.json` (`label`, `position` e `link`).

A barra lateral é gerada automaticamente a partir da estrutura de pastas — não é preciso
editar `sidebars.ts`.

## Áreas na home

Os cards da página inicial ficam em `src/components/DocAreas/index.tsx`, na constante
`AreaList`. Ao criar uma área nova em `docs/`, adicione o card correspondente lá.
