---
name: docs-hub
description: Organiza a documentação Docusaurus deste repo no padrão de hub sequencial — áreas numeradas, páginas curtas de assunto único, deduplicação e trilha de leitura. Use ao ingerir fontes novas (transcrições, PDFs, notas, pesquisas de IA) numa área existente, criar uma área nova do zero a partir de uma pasta de fontes, refatorar uma área cujas páginas incharam, ou auditar o padrão. Gatilhos - "adicionar conteúdo em docs", "organizar essa documentação", "ingerir essas fontes", "criar área nova de docs", "quebrar essa página", "auditar docs", "/docs-hub".
---

# docs-hub — organizar documentação no padrão de hub sequencial

Transforma material bruto (transcrições, PDFs, pesquisas de IA, notas soltas) em documentação
navegável no padrão estabelecido em `docs/processos/tiktok/`: **áreas numeradas em sequência
lógica, páginas curtas de assunto único, zero duplicidade, trilha de leitura explícita.**

O padrão é agnóstico de tema. Serve para TikTok Shop, consultoria, SEO, ou qualquer outra frente.

## Antes de qualquer coisa

Leia `references/padrao-estrutural.md` e `references/padrao-conteudo.md`. Eles são a
especificação — este arquivo é só o fluxo de trabalho. Não improvise estrutura de memória.

## Os quatro modos

Identifique o modo pelo pedido. Se ambíguo, pergunte antes de ler as fontes.

| Modo | Quando | Entrada |
|---|---|---|
| **A. Ingerir** | Fontes novas para uma área que já existe | Pasta de fontes + área alvo |
| **B. Criar área** | Assunto novo, sem docs ainda | Pasta de fontes + nome do assunto |
| **C. Refatorar** | Páginas existentes incharam ou estão desorganizadas | Pasta de docs alvo, sem fontes novas |
| **D. Auditar** | Só verificar conformidade com o padrão | Pasta de docs alvo |

---

## Modo A — Ingerir fontes em área existente

### A1. Inventário

1. Liste a pasta de fontes recursivamente. Aceite `.txt`, `.md`, `.mdx`, `.srt`, `.vtt`, `.json`,
   `.csv`, `.pdf`, `.docx`. Para PDF use `Read` com o parâmetro `pages`.
2. **Leia todas as fontes na íntegra.** Nunca resuma a partir de preview ou das primeiras linhas —
   é assim que fato importante se perde.
3. Leia também **todas as páginas existentes da área alvo**, não só as que parecem relacionadas.
   Sem isso não há como deduplicar.

### A2. Matriz de destino

Monte no scratchpad uma matriz `fato → página de destino → ação`:

| Ação | Significado |
|---|---|
| `NOVO` | Fato inédito → adicionar à página X |
| `DUPLICADO` | Já existe idêntico na página X → descartar |
| `COMPLEMENTA` | Já existe versão mais pobre na página X → enriquecer, não repetir |
| `CONFLITA` | Contradiz o que está na página X → sinalizar explicitamente, não escolher lado em silêncio |
| `NOVA PÁGINA` | Não cabe em nenhuma página existente → criar |

### A3. Proposta (obrigatória — pare aqui)

Apresente ao usuário, em texto curto:

- páginas que serão **editadas** e o que entra em cada uma;
- páginas que serão **criadas** e por quê;
- fatos **descartados por duplicidade** (liste — o usuário precisa poder discordar);
- **conflitos** encontrados entre fonte nova e doc existente;
- se alguma página vai passar do teto de linhas e precisará ser quebrada.

**Espere aprovação antes de escrever qualquer arquivo.**

### A4. Escrita

Aplique as edições seguindo `references/padrao-conteudo.md`. Se uma página passar do teto,
quebre-a no mesmo passo — não deixe página inchada para depois.

### A5. Validação

Rode o checklist completo de `references/validacao.md`. Não relate conclusão sem build verde.

---

## Modo B — Criar área nova do zero

Igual ao Modo A, com estas diferenças:

- **A2 vira desenho de árvore.** Agrupe os fatos por assunto, ordene os grupos na sequência de
  quem executa o processo (ver `references/padrao-estrutural.md`, seção "Sequência canônica") e
  transforme cada grupo em uma pasta-área.
- **A proposta inclui a árvore completa** de pastas e páginas, com uma linha por página dizendo o
  que ela entrega.
- Após aprovação, crie: `_category_.json` de cada área, `visao-geral.mdx` da raiz, e as páginas.
- Atualize `docs/intro.mdx` incluindo a área nova na lista de organização.

---

## Modo C — Refatorar área existente

Sem fontes novas. O objetivo é reorganizar o que já está escrito.

1. Leia **todas** as páginas da pasta alvo, na íntegra.
2. Levante: páginas acima do teto de linhas, fatos repetidos em mais de uma página, páginas que
   misturam assuntos, sequência ilógica, links faltando.
3. Proponha a árvore nova mapeando **de onde para onde** cada bloco de conteúdo vai.
4. **Regra dura: nenhum conteúdo se perde na refatoração.** Redistribuir e deduplicar, sim.
   Deletar informação, não — a menos que seja duplicata exata, e nesse caso diga qual página
   ficou com o original.
5. Após aprovação: crie os arquivos novos, remova os antigos, atualize links que apontavam para
   os caminhos velhos (`grep` pelos nomes antigos em todo `docs/`).
6. Valide.

---

## Modo D — Auditar

Read-only. Não edite nada. Rode as verificações de `references/validacao.md` e reporte uma tabela
`arquivo:linha → problema → correção sugerida`, ordenada por severidade:

1. quebra o build (link morto, frontmatter inválido);
2. quebra a renderização (admonition sem colchete, tabela malformada);
3. quebra o padrão (página longa demais, sem "Próximo passo", duplicidade entre páginas);
4. cosmético.

Pergunte se deve aplicar as correções antes de mexer.

---

## Regras que valem em todos os modos

1. **Fidelidade à fonte acima de tudo.** Não invente número, nome de ferramenta, link ou passo.
   Se a fonte não informa, escreva que não informa — ver `references/padrao-conteudo.md`,
   seção "Sinalizar incerteza".
2. **Não altere os arquivos de fonte.** Nem mova, nem renomeie, nem apague. Também não liste
   nomes de arquivo de origem dentro da documentação.
3. **Um fato mora em uma página só.** As outras linkam para ela.
4. **Conflito é conteúdo.** Quando fontes se contradizem, ou quando o método descrito viola uma
   regra documentada em outra página, isso vira um aviso explícito — não some.
5. **Português correto e completo**, com todos os acentos. Termos técnicos e nomes de ferramenta
   ficam na forma original.
6. **Build verde é critério de conclusão.** Sem isso, o trabalho não está pronto.

## Arquivos de referência

- `references/padrao-estrutural.md` — árvore, `_category_.json`, frontmatter, tamanho de página,
  sequência canônica das áreas.
- `references/padrao-conteudo.md` — anatomia de cada tipo de página, tom, tabelas, admonitions,
  checklists, como sinalizar incerteza e conflito.
- `references/validacao.md` — checklist de verificação e comandos.
- `templates/` — esqueletos prontos de `_category_.json`, visão geral e páginas.
