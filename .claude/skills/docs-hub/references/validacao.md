# Validação

Rode tudo a partir da raiz do repo. Nenhuma entrega é reportada como pronta sem build verde.

## 1. Build

```bash
npm run build
```

`onBrokenLinks: 'throw'` está ativo — o build falha em link interno morto. Build verde prova que
todos os links relativos resolvem. **Não prova** que os admonitions renderizaram (ver item 2).

## 2. Admonitions renderizados — erro silencioso

Título sem colchetes não quebra o build, só vira texto literal na página.

```bash
# fontes: qualquer :::tipo com título fora de colchetes é erro
grep -rnE '^:::(note|tip|info|warning|danger|caution)[ \t]+[^[]' docs/

# build: tem que retornar zero
grep -rl '<p>:::' build/docs | wc -l
```

Correção:

```bash
python3 - <<'PY'
import re, pathlib
pat = re.compile(r'^(:::(?:note|tip|info|warning|danger|caution))[ \t]+(?!\[)(.+?)[ \t]*$', re.M)
for f in pathlib.Path("docs").rglob("*.mdx"):
    s = f.read_text(encoding="utf-8")
    new, n = pat.subn(lambda m: f"{m.group(1)}[{m.group(2)}]", s)
    if n:
        f.write_text(new, encoding="utf-8")
        print(n, f)
PY
```

## 3. Delimitadores balanceados

```bash
# contagem de ':::' por arquivo tem que ser par
grep -rc '^:::' docs/ --include='*.mdx' | awk -F: '$2 % 2 != 0 {print "ÍMPAR:", $0}'
```

## 4. Tamanho das páginas

```bash
wc -l docs/<hub>/**/*.mdx | sort -rn | head -20
```

Acima de 150 linhas → quebrar. Ver `padrao-estrutural.md`.

## 5. Frontmatter

```bash
# toda página precisa de title e description
for f in $(find docs/<hub> -name '*.mdx'); do
  head -6 "$f" | grep -q '^title:' || echo "SEM TITLE: $f"
  head -6 "$f" | grep -q '^description:' || echo "SEM DESCRIPTION: $f"
  head -6 "$f" | grep -q '^sidebar_position:' || echo "SEM POSITION: $f"
done

# sidebar_position duplicado dentro da mesma pasta
for d in $(find docs/<hub> -type d); do
  dup=$(grep -h '^sidebar_position:' $d/*.mdx 2>/dev/null | sort | uniq -d)
  [ -n "$dup" ] && echo "POSITION DUPLICADO em $d: $dup"
done
```

## 6. Links internos

```bash
# link interno sem extensão .mdx quebra o build — pegue antes
grep -rnE '\]\(\.{1,2}/[^)]*[^x)]\)' docs/ --include='*.mdx' | grep -v '\.mdx)'
```

## 7. Navegação

Página de método precisa fechar com heading de navegação. Página de referência não precisa, mas
não pode ser beco sem saída — tem que ter ao menos um link interno.

```bash
# nenhuma página pode ficar sem link interno para o resto do hub
for f in $(find docs/<hub> -name '*.mdx' ! -name 'visao-geral.mdx'); do
  grep -qE '\]\(\.{1,2}/' "$f" || echo "BECO SEM SAÍDA: $f"
done
```

Para as páginas de método (as que têm `## Passo a passo`), verifique também o fecho:

```bash
for f in $(grep -rl '^## Passo a passo' docs/<hub> --include='*.mdx'); do
  grep -qE '^## (Próximo passo|Relacionado|Variações)' "$f" || echo "SEM PRÓXIMO PASSO: $f"
done
```

## 8. Órfãos após refatoração

```bash
# caminhos antigos ainda referenciados em algum lugar
grep -rn '<nome-do-arquivo-removido>' docs/ src/ docusaurus.config.ts
```

## 9. Renderização final (amostragem)

Depois do build, confirme numa página com admonition:

```bash
grep -c 'theme-admonition' build/docs/<caminho>/index.html   # > 0
grep -c '<p>:::'          build/docs/<caminho>/index.html   # == 0
```

## Relatório

Ao terminar, informe: build (verde/vermelho), páginas criadas/editadas/removidas, contagem de
linhas das maiores páginas, e qualquer verificação que falhou. Se algo ficou de fora do escopo,
diga o quê e por quê.
