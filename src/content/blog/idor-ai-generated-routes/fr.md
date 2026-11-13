---
title: "IDOR : la faille que l'IA laisse dans tes routes"
description: "L'IA crée une route qui renvoie une facture par son id, mais oublie de vérifier à qui elle appartient. Voici le test en 3 étapes pour repérer une IDOR."
pubDate: 2026-08-12
tags: ["security", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7493216729804976129/
sources:
  - title: "Insecure Direct Object Reference Prevention Cheat Sheet"
    author: "OWASP"
    url: https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html
draft: false
---

L'IA fait une bourde de sécurité fréquente : les [IDOR (Insecure Direct Object Reference)](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html).

C'est quoi ?

On demande à l'IA une route pour récupérer de la data. Disons une facture.

L'IA crée une route qui prend l'id de la facture et la renvoie. C'est top…

… sauf qu'elle oublie de vérifier que la facture appartient bien au user authentifié… ou pire, que le user est authentifié tout court.

Pourquoi ? Parce que tu ne l'as pas demandé.

Et l'IA [code ce qu'on lui demande](/fr/blog/ai-does-only-what-you-ask/), pas ce qu'on oublie de demander.

Résultat : l'id dans l'URL sert de preuve d'identité. Sauf qu'un id, c'est juste un chiffre. N'importe qui peut en taper un autre.

## Le test à faire sur ton app

1. Crée 2 comptes sur ta propre app.
2. Connecte-toi avec le compte A.
3. Dans l'URL, remplace ton id par celui du compte B.

Tu vois les données de B ?

⇒ **Tout le monde** voit tout. Tes clients voient les factures des autres clients.
