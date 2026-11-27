# Cadernos da sala Comunicados

Cada agente tem um **caderno** aqui: `.claude/conhecimento/<nome-do-agente>.md`.
O caderno é a memória do agente entre uma conversa e outra. O agente lê o caderno antes de trabalhar,
e a sala anota nele o que aprendeu a cada pedido. Assim cada agente fica mais sábio no próprio assunto.

- `casa.md`: o que **todos** precisam saber (marca, tom, padrões dos geradores, regras da pessoa).
- `<agente>.md`: o conhecimento de cada seção.

## Modelo de caderno

```markdown
# Caderno: <nome do agente>
> Atualizado em AAAA-MM-DD. Fonte de verdade é o código; se o caderno divergir do código, o código vale e o caderno é corrigido.

## Mapa da seção
Telas, rotas, server actions, funções de lib, tabelas (com colunas importantes) e como se ligam.

## Regras de negócio
O que o sistema faz e por quê. Cite o procedimento oficial (RH-PROC-xx) quando houver,
e marque **DIVERGÊNCIA** quando o código e o procedimento discordarem.

## Decisões da pessoa
- AAAA-MM-DD: decisão, em uma linha (de qual pedido veio).

## Armadilhas e lições
- O que já deu errado ou o auditor já apontou, e como evitar.

## Pendências conhecidas
- Coisas encontradas e ainda não resolvidas.

## Como fazer
Receitas curtas das tarefas mais comuns da seção (ex.: "adicionar uma pergunta ao ciclo").

## Perguntas que sei responder
Exemplos de pedidos e onde está a resposta (tabela, tela, função).
```

## Regras dos cadernos
- **Nunca** dados pessoais: nada de nomes reais de colaboradores, CPF, salário, saúde, e-mails pessoais.
  E-mails funcionais de permissão (listas de acesso) também ficam fora: diga "lista em `lib/sessao.ts`".
- Curto e útil: frases objetivas, caminhos de arquivo exatos, sem copiar código grande.
- Datado: decisões e lições sempre com data.
- Quando algo mudar, **corrija** a linha antiga em vez de só acrescentar uma nova.
