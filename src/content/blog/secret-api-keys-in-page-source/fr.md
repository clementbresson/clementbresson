---
title: "Tes clés API secrètes sont peut-être visibles en public"
description: "L'IA met les clés là où ça marche : dans le bundle, donc chez tout le monde. Voici comment vérifier si tes clés API secrètes sont visibles sur ton site."
pubDate: 2026-08-11
tags: ["security", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7492873432200613891/
sources:
  - title: "API keys"
    author: "Stripe"
    url: https://docs.stripe.com/keys
draft: false
---

Tu as peut-être des clés API secrètes… visibles en public sur ton site.

Pour le vérifier :

1. Va sur ton site.
2. Clic droit ⇒ « Afficher le code source ».
3. Ctrl+F (recherche), puis tape `sk_`, puis `api_key`, puis `secret`.

Si tu as des résultats, ce n'est pas bon signe…

L'IA adore mettre les clés là où ça marche. Sauf que là où ça marche = dans le bundle = chez tout le monde, en public.

Je fais cette recherche sur [chaque app qu'on me confie](/fr/work-with-me/).

PS : `sk_live_` dans le code source, c'est ta clé [Stripe](https://docs.stripe.com/keys) en libre-service. Vérifie celle-là en premier.
