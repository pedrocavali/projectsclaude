---
description: Leva um pedido para a sala de Pessoas, que monta a equipe certa e entrega o resultado auditado.
argument-hint: <pedido, ex.: "aviso de recesso de fim de ano">
---

Pedido para a sala: $ARGUMENTS

Siga o fluxo de "Como a sala trabalha um pedido" do CLAUDE.md:
1. Diga em uma linha quais agentes vão participar e em que ordem.
2. Chame os agentes (em paralelo quando forem independentes), passando o contexto completo.
3. Passe tudo pelo `auditor`; se reprovar, devolva a quem fez (no máximo 2 voltas).
4. Feche com o `arquivista`.
5. Responda com o resultado, quem participou e as pendências.
