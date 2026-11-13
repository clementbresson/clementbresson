---
title: "Mon workflow agentique : worktrees, TDD, reviews et un master"
description: "5-6 sessions en parallèle, un worktree par tâche, un harness poussé, du TDD forcé, 8 agents de review et une session master : mon workflow agentique du moment."
pubDate: 2026-10-24
tags: ["ai-harnesses", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7519770396221624320/
sources:
  - title: "Orca — The agent development environment"
    author: "Stably"
    year: 2026
    url: https://www.onorca.dev/
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "ESLint"
    url: https://eslint.org/
  - title: "TypeScript"
    url: https://www.typescriptlang.org/
  - title: "What is the Max plan?"
    author: "Anthropic"
    url: https://support.claude.com/en/articles/11049741-what-is-the-max-plan
  - title: "Introducing Claude Opus 5.5"
    author: "Anthropic"
    year: 2026
    url: https://www.anthropic.com/claude-opus-5-5
  - title: "Continue local sessions from any device with Remote Control"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/remote-control
draft: false
---

On entend beaucoup de choses sur l'IA... mais souvent peu de concret. Alors je me lance, voici mon workflow agentique du moment.

## D'abord, le setup

- Des codebases en monorepo, avec la possibilité de lancer [une instance complète](/fr/blog/fresh-local-instance-and-observability-for-ai-agents/) (ex : API + DB + client user + client admin + app + containers pour tous les services externes souvent fakés en local) isolée **par** worktree.
- [Orca](https://www.onorca.dev/), avec en moyenne 5-6 sessions en parallèle.
- 1 [worktree](/fr/blog/slow-down-to-go-10x/) = 1 tâche complète de A à Z.
- Un [harness poussé](/fr/blog/ai-harness-guides-and-sensors/) (et je ne parle pas que de [Claude Code](https://claude.com/product/claude-code)) :
  - énormément de règles [ESLint](https://eslint.org/) custom ;
  - `tsc` ([TypeScript](https://www.typescriptlang.org/)) ;
  - des batteries de tests ;
  - une boucle obligatoire qui force tous les agents à **tout** faire [en TDD](/fr/blog/strict-tdd-with-ai-agents/). Red, Green, Refactor => attention, **pas** du test first. De vraies mini-itérations ;
  - le tout lancé au bon moment avec les hooks, pour avoir un bon compromis performance/cadrage.
- Un [système de review par 8 agents](/fr/blog/ai-review-loop-specialised-agents/), chacun spécialisé sur un sujet (sécurité, performance, respect des conventions, DDD... etc). **Chacun** est lancé 5x avec un contexte frais, pour rester non biaisé à chaque round, avec un système de cross-checks pour les faux positifs. Et en fin de review : un artifact ultra complet qui présente le travail fait, avec des schémas et une explication changement par changement, comme le ferait un collègue.

C'est ce genre de setup que [j'aide les équipes à monter sur leurs propres codebases](/fr/work-with-me/).

## Ensuite, ma journée

- Je cadre 4-5 sujets.
- Je lance un worktree avec sa session pour chacun.
- Je lance une session « master », dont le rôle est de vérifier toutes les ~1 min si une des autres est bloquée.
- Dès qu'un agent pense avoir fini => la review se lance via le master.
- Review finie : si des choses ont encore été trouvées aux derniers rounds => on relance.

Et le master me prévient quand quelque chose est 100 % fini : implémentation + round(s) de review + artifact.

Là, j'interviens pour la vérification finale... souvent parfaite à 95 %.

Et pendant que les ~5 agents tournent, je réfléchis et je cadre les sujets suivants, ou j'apprends des choses.

Le quotidien du métier n'a plus **rien** à voir avec celui d'il y a encore 9 mois...

Bons builds !

PS : je suis sur [Claude Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) à 200 $... et j'arrive quand même aux limites hebdo. Ce n'est pas un but en soi (le token maxing est une bêtise je pense), mais les cycles TDD + reviews sont gourmands. Je préfère un peu plus lent et du travail (trop) checké que devoir me farcir des bêtises à longueur de journée.

PPS : [Opus 5.5](https://www.anthropic.com/claude-opus-5-5) en effort High quasiment tout le temps.

PPPS : ah ! Et l'avantage du master, c'est qu'avec un petit [`/remote-control`](https://code.claude.com/docs/en/remote-control) je peux checker tout ça depuis le téléphone. Pratique notamment pour les phases parfois longues d'attente.
