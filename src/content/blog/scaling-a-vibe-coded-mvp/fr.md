---
title: "Scaler un MVP vibecodé : quand les opérations lourdes explosent"
description: "Une opération lourde traitée en mémoire par l'IA tient en prototype, puis explose quand les utilisateurs affluent. Sans queues ni observabilité, bon courage."
pubDate: 2026-08-18
tags: ["ai-era", "architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7495435940614717440/
draft: false
---

Scaler sur un MVP vibecodé va tuer votre projet.

Un exemple courant :

- Sur votre SaaS, un client peut faire une opération lourde (disons, à tout hasard, lire un fichier avec de l'OCR et travailler dessus avec une IA)
- Pour un prototype, l'IA va souvent faire tout le processus en mémoire
- L'opération prend des dizaines de secondes
- Vous scalez
- Vous avez de plus en plus d'utilisateurs
- Vous ajoutez la possibilité pour un client de lancer plusieurs opérations en parallèle

… tout explose…

… et vous ne savez même pas pourquoi…

… les clients se plaignent et le churn grimpe.

Pourquoi ? **Une** opération lourde synchrone en mémoire sur le serveur, ça va… mais quand elles s'accumulent en simultané, c'est fini.

Alors qu'un développeur à peine expérimenté aurait mis en place un système dynamique de queues pour gérer tout ça.

Le pire, c'est qu'il y a fort à parier que ce bug sera difficile à trouver, car l'IA, [sauf si on le lui demande spécifiquement](/fr/blog/ai-does-only-what-you-ask/), prend rarement sur elle d'ajouter une observabilité correcte.

Queues et observabilité : deux choses que [je regarde en premier dans une app vibecodée](/fr/work-with-me/).
