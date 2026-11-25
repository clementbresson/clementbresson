---
title: "Vos reviews IA convergent-elles ? Un test de santé de la codebase"
description: "Lancez 3 à 5 passes de review IA neutres et comparez les rapports : si les retours ne diminuent pas, le problème est souvent la codebase, pas les agents."
pubDate: 2026-11-17
tags: ["code-review", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7528539385680711682/
draft: false
---

Vos agents de review ne sont jamais d'accord entre eux ?

Le problème, c'est peut-être votre codebase.

Un bon test pour savoir si elle est [assez saine](/fr/blog/rigorous-codebase-best-ai-harness/) pour vraiment tirer parti du développement agentique : observer la **convergence** de vos reviews.

## Comment faire

1. Si vous n'en avez pas... commencez par mettre en place des [agents de review](/fr/blog/ai-review-loop-specialised-agents/) (on n'est plus début 2026 !).
2. Chaque agent doit être totalement non biaisé à chaque passe : contexte frais, brief de review neutre et toujours identique.
3. Lancez une passe : review + fix + sauvegarde du rapport (ce qui a été trouvé, ce qui a été fixé).
4. Répétez 3 à 5 fois.
5. ...et comparez les rapports !

## Lire la tendance

Il restera toujours des petites remarques. Ce qui compte, c'est la tendance.

Si les retours diminuent en nombre et en gravité à chaque round : c'est bon signe.

Si chaque round trouve de nouvelles choses, voire contredit le précédent : il y a du travail. Souvent :

- des instructions de review pas claires ;
- du code pas clair ;
- des patterns et conventions appliqués sans cohérence dans l'existant ;
- un manque de standardisation ;
- etc.

## Travailler les causes

Analysez finement ces rapports, et travaillez les causes. Vous allez très probablement :

- trouver de vrais problèmes latents dans votre codebase ;
- **et** gagner énormément en efficacité sur vos agents de code.

Car ce qui n'est pas clair pour vos agents de review... n'est a priori pas clair pour vos agents tout court.

C'est exactement ce genre de diagnostic que [je fais quand je rejoins une équipe](/fr/work-with-me/). Et quand deux reviews se contredisent, [l'arbitre, ce doit être vous](/fr/blog/ai-code-review-you-are-the-referee/).
