# Padrão de conteúdo

## Tipos de página

Cada página é de **um** tipo. Misturar tipos é sinal de que precisa quebrar.

### 1. Visão geral do hub (`visao-geral.mdx`)

Sempre a primeira página. Contém, nesta ordem:

1. Parágrafo curto dizendo o que o hub cobre e como está organizado.
2. **Tabela de trilha** — `# | Área | Você sai sabendo`, com link para a primeira página de cada área.
3. **`:::tip[Atalho por objetivo]`** — bullets "quero X → vá para Y". É o que salva quem não vai
   ler linear.
4. **Avisos globais** — conflitos, limitações e riscos que valem para o hub inteiro
   (`:::danger` / `:::warning`).
5. **Conteúdo relacionado fora da área**, se houver.

### 2. Página de método / execução

O tipo mais comum. Estrutura:

```
# Título
<parágrafo curto: o que o método entrega e em que ordem>

## Ferramentas          ← tabela: Ferramenta | Papel | Custo/Observação
## Passo a passo        ← lista numerada, um comando por item
## Regras que importam  ← o que separa execução boa de ruim
## Pontos de atenção    ← armadilhas, limitações, avisos
## Checklist            ← - [ ] itens acionáveis, na ordem de execução
## Próximo passo        ← link
```

Nem toda página precisa das seis seções. `Passo a passo` e `Próximo passo` são obrigatórias.

### 3. Página comparativa

- Uma tabela **por eixo funcional** (proteção, preço, automação…), nunca uma tabela gigante única.
- Colunas = opções; linhas = funcionalidades. Use `✅` / `❌` com texto curto explicando.
- Fecha com **"Qual escolher"** — um parágrafo por opção, dizendo para quem serve.
- Fecha com nota de **data da coleta** dos dados (`:::note[Data da coleta]`).

### 4. Página de regra / política / referência

- Regras em tabela ou lista com `❌` / `✅`.
- Consequências (níveis, penalidades) em tabela própria.
- "Onde verificar" e "como recorrer/corrigir" como seções separadas.
- Aviso de que a fonte externa muda sem avisar, com link para a fonte oficial.

### 5. Página de catálogo

Tabelas de itens com link. Fecha com uma tabela **"Como escolher"** mapeando necessidade → item.

## Tom e escrita

- **Direto e operacional.** O leitor quer executar, não ser convencido.
- **Segunda pessoa ou infinitivo**, consistente dentro da página.
- **Negrito para o termo-chave** da frase, não para frases inteiras.
- Tabela vence lista quando há mais de um atributo por item. Lista vence tabela quando é
  sequência ou enumeração simples.
- Nomes de ferramenta, comandos, URLs e caminhos em `código`.
- Sem "é importante notar que", "vale ressaltar", "de forma geral".

## Admonitions

**Sintaxe obrigatória — título entre colchetes:**

```
:::warning[Título do aviso]
Corpo.
:::
```

Sem os colchetes o Docusaurus v3 não reconhece a diretiva e o bloco inteiro sai como texto
literal na página, **sem quebrar o build**. É um erro silencioso — sempre valide.

| Tipo | Uso |
|---|---|
| `:::tip` | Atalho, caminho mais rápido |
| `:::note` | Contexto lateral, data de coleta, ressalva de escopo |
| `:::warning` | Armadilha operacional, informação incompleta, dado não comprovado |
| `:::danger` | Risco real: violação de política, banimento, perda de dinheiro, questão legal |

Máximo ~2 por página. Admonition demais vira ruído e o leitor para de ver.

## Sinalizar incerteza

Nunca preencha lacuna com suposição. Marque com o padrão correspondente:

| Situação na fonte | Como escrever |
|---|---|
| Nome/valor não informado | `⚠️ **Nome não informado** na fonte` na própria tabela ou linha |
| Número declarado sem prova | `:::warning[Sem comprovação]` no topo da seção de métricas |
| Fonte se contradiz ou hesita | "*informação incerta*" na linha + item em "Pontos de atenção" |
| Material é promocional | Uma linha em "Pontos de atenção" dizendo de quem é a ferramenta promovida |
| Data de coleta importa | `:::note[Data da coleta]` no fim |
| Hub tem áreas previstas e ainda vazias | `:::note[Área em construção]` na visão geral, dizendo o que entra depois |

## Sinalizar conflito

Quando um método documentado **contraria** uma regra documentada em outra página do hub, isso
vira `:::danger` explícito em **ambos os lados**, com link cruzado. Formato:

1. o que o método faz;
2. qual regra isso viola, com link;
3. por que as mitigações usadas não resolvem;
4. de quem é a decisão de assumir o risco.

Nunca resolva o conflito escolhendo um lado em silêncio, e nunca omita o método por ele ser
arriscado — documente o método e o risco.

## Deduplicação

- **Um fato, uma página.** Antes de escrever, procure o fato no resto do hub (`grep`).
- Quando duas páginas precisam do mesmo fato: a **dona** é a página cujo assunto ele é; as outras
  ganham uma linha curta + link.
- Fluxo repetido em vários métodos (ex.: "gerar imagem no ChatGPT e animar no Flow") vira **página
  própria de insumo**, referenciada por todos os métodos.
- Checklist pode repetir passos da própria página — não pode repetir passos de outra.

## Ao ingerir fonte nova numa página existente

- Preserve a estrutura de seções da página; encaixe o conteúdo novo na seção certa.
- Enriquecer > acumular: se a fonte nova traz versão melhor de um fato já escrito, **substitua**
  e não deixe as duas versões.
- Fonte nova que contradiz o que está escrito: mantenha as duas e sinalize a divergência.
