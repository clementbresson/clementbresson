---
title: "Harnais IA : une instance locale fraîche et observable"
description: "AGENTS.md et skills ne suffisent pas : pour vérifier son travail au runtime, un agent doit lancer le programme complet en local et tout observer."
pubDate: 2026-09-20
tags: ["ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7507326248327659520/
sources:
  - title: "Is your codebase ready for a good AI harness?"
    author: "Clément Bresson"
    year: 2026
    url: https://harnessers.dev/en/blog/is-your-codebase-ready-for-an-ai-harness/
  - title: "AGENTS.md"
    url: https://agents.md/
  - title: "Docker Compose"
    author: "Docker"
    url: https://docs.docker.com/compose/
  - title: "OpenTelemetry"
    url: https://opentelemetry.io/
draft: false
---

Pour des résultats bien meilleurs, un coding agent doit :

1. pouvoir lancer une instance fraîche du programme complet localement ;
2. avoir accès à une observabilité maximale sur cette instance.

Votre codebase n'est peut-être pas du tout prête à recevoir un bon [harnais IA](/fr/blog/ai-harness-guides-and-sensors/).

Quand on parle de harnais IA, tout le monde pense immédiatement aux fichiers [AGENTS.md](https://agents.md/), aux skills, aux règles de lint, aux type checks...

Mais quand vous commencez à faire du développement agentic poussé, il y a **deux** autres points absolument nécessaires pour que l'IA puisse vérifier son travail dans de bonnes conditions.

## 1. Démarrer tout le programme localement

L'IA doit être en mesure de démarrer localement tout ce qui compose le programme, facilement. Par exemple avec un `init.sh` qui s'occupe de tout.

À noter que si vous travaillez avec des [agents en parallèle via des worktrees](/fr/blog/slow-down-to-go-10x/) sur une même machine... il faudra tout isoler par instance (ports dynamiques, BDD, volumes, noms de projets [Docker Compose](https://docs.docker.com/compose/)...) pour pouvoir lancer plusieurs fois le programme complet en parallèle. Et [prévoir de la RAM](/fr/blog/the-next-bottleneck-is-ram/)...

Il est aussi important que le programme soit dans un état clean à chaque lancement. Adieu la BDD locale qui dure pendant des mois et des mois. Chaque démarrage doit avoir sa propre BDD fraîche avec des seeds (et potentiellement des sets différents selon les tests).

## 2. Une instance observable au maximum

Chaque instance complète du programme doit être la plus observable possible (logs, network, [OpenTelemetry](https://opentelemetry.io/), metrics...) et chaque agent doit avoir un accès complet à l'observabilité de son instance.

Grâce à cet environnement de développement, les agents peuvent vérifier leur travail au runtime. Et la différence de résultats est flagrante !

De nouvelles consignes deviennent aussi possibles : « aucune erreur dans les logs », « action en dessous de XXX ms », etc.

C'est [ce que je construis en premier quand une équipe me confie son repo](/fr/work-with-me/).

Pensez-y sur vos projets ;)

Cet article a d'abord été publié sur le [blog de Harnessers](https://harnessers.dev/fr/blog/is-your-codebase-ready-for-an-ai-harness/).
