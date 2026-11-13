---
title: "Relire une PR GitHub dans un ordre logique, pas alphabétique"
description: "GitHub trie les fichiers d'une PR par ordre alphabétique. Un skill qui ordonne le diff en blocs logiques, une extension Chrome qui réordonne la review : 15 min."
pubDate: 2026-10-21
tags: ["code-review", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7518738966284771329/
sources:
  - title: "Reviewing proposed changes in a pull request"
    author: "GitHub"
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - title: "Extend Claude with skills"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/skills
  - title: "Chrome Extensions: Get started"
    author: "Google"
    url: https://developer.chrome.com/docs/extensions/get-started
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "GitLab"
    author: "GitLab"
    url: https://about.gitlab.com/
draft: false
---

Comment améliorer **drastiquement** votre expérience de review de PR sur [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ?

En moins de 15 min ?

Super simple !

## Le problème : l'ordre alphabétique

Personnellement, un truc que j'ai toujours détesté dans la review de PR... c'est que les fichiers sont triés par ordre alphabétique.

On passe une énorme partie de notre énergie mentale à lire des morceaux sans queue ni tête, pour (tenter de) comprendre petit à petit la logique générale.

Un enfer.

Ou alors, on demande directement à l'auteur de nous faire un tour du propriétaire.

Plus sympa et l'occasion de rigoler, mais pas toujours le plus efficace.

Cette pénibilité, je pense que chaque développeur l'a connue des centaines (milliers ?) d'heures dans sa vie.

Eh bien demain, promis, c'est fini !

## Deux choses à vibecoder

Demandez à votre IA de vous vibecoder 2 choses (oui, j'ai dit le gros mot...) :

1. Un [skill](https://code.claude.com/docs/en/skills) qui prend une PR, lit le `git diff`, et en sort la liste des fichiers dans un ordre de lecture **logique**, groupés par blocs avec une description pour chacun. Exemple :
   - d'abord les types, dans ces 4 fichiers
   - puis les règles de domaine, dans ces 3 fichiers
   - puis l'orchestration de tout ça, dans **ce** fichier central où tout prend vie
   - et enfin, 3 changements qui n'ont rien à voir, juste des améliorations au passage (en général on évite... mais on le fait tous à un moment ou un autre)

   Le skill poste ensuite cette liste à la fin de la description de la PR.

2. Une [extension Chrome](https://developer.chrome.com/docs/extensions/get-started) qui, quand vous ouvrez l'onglet « Files changed » d'une PR contenant cette liste... réordonne les fichiers dans l'ordre logique de lecture **et** insère la description de chaque bloc. Le tout à partir de la description de la PR.

TADAM !

Vous faites désormais votre review dans un ordre qui a du sens, groupée et décrite... le tout à votre endroit habituel, là où vous marquez comme lu et commentez.

Promis, ça prend 15 min à vibecoder, et ça **change** la vie (pour nous autres mortels qui lisons encore quelques PR de temps en temps).

## Le concept avant l'outil

Et l'idée peut sûrement se décliner pour n'importe quel agent (je l'ai fait pour [Claude Code](https://claude.com/product/claude-code)), pour [GitLab](https://about.gitlab.com/), pour un autre navigateur, avec votre ordre de lecture préféré... voire en extension IDE maison pour ceux qui relisent là-dedans.

L'important, c'est juste le concept et la stratégie. Ces petits outils maison font d'ailleurs [partie de ce que j'apporte à une équipe de dev](/fr/work-with-me/).

Essayez, et vous m'en direz des nouvelles :)

PS : quand GitHub change son interface, il y aura sûrement de la micro-maintenance... mais bon, c'est rapide à fixer et anecdotique face au temps et à l'énergie que ça permet de gagner.
