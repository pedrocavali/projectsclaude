# O prédio de Pessoas

Cada **sala** é um repositório ou uma pasta. Cada sala tem um `CLAUDE.md` com as regras dela
e uma equipe de agentes em `.claude/agents/`. A sessão principal do Claude é sempre a
**coordenadora**: é ela quem distribui o trabalho e leva o resultado de um agente para o outro.

```
🏢 Prédio de Pessoas
├── 🚪 Sala Comunicados   pedrocavali/projectsclaude   comunicacao · desenvolvedor · auditor · arquivista
├── 🚪 Sala CRM           pedrocavali/crm-rh-camino    14 especialistas (um por seção) + auditor + arquivista
└── 🚪 (próximas)         Drive, pastas do C:          ex.: agente "documentos-drive"
```

## Ver o escritório

`predio/escritorio.html` mostra a planta do prédio com uma mesa por agente e simula pedidos passando de mesa em mesa.
Versão publicada: https://claude.ai/artifact/LEG4KnsPHBABz74EmURUAU

## Como os agentes "conversam"

Um agente não chama outro diretamente. A coordenadora faz a ponte:

```
Você: "procure no Drive os documentos do colaborador X e confira com a ficha dele no CRM"
  └─ coordenadora
       ├─ crm-colaboradores   → lê a ficha de X no CRM (quais documentos deveriam existir)
       ├─ documentos-drive    → procura os arquivos de X no Drive        (em paralelo)
       └─ junta as duas respostas → crm-documentos registra o que falta → auditor → arquivista
```

## Fase 1 (agora): salas no GitHub
Funciona em qualquer sessão aberta dentro de um dos repositórios.

## Fase 2: o prédio no seu computador
1. Instale o Claude Code no computador (app Claude Desktop, aba Code, ou a linha de comando).
2. Crie a pasta do prédio e clone as salas dentro dela:
   ```
   C:\Camino\
   ├── projectsclaude\
   ├── crm-rh-camino\
   └── (pastas de documentos ou atalho do Google Drive para computador)
   ```
3. Abra o Claude em `C:\Camino\`. Para pastas em outro lugar, use `/add-dir <caminho>`.
4. **Equipe do prédio** (vale em qualquer pasta): copie os agentes gerais para
   `C:\Users\<seu usuário>\.claude\agents\`. Os especialistas de cada sala continuam dentro do repositório.
5. Agentes que dependem do computador (ex.: `documentos-drive`, lendo o Google Drive para computador
   em `G:\`) são criados nesta fase.

## Regra de nomes
Agentes de uma sala específica levam o prefixo da sala (`crm-ninebox`, `crm-colaboradores`…), para que
nunca colidam quando todos estiverem juntos no prédio.
