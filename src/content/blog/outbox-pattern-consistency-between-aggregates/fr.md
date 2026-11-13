---
title: "L'outbox pattern : la cohérence en dehors de l'agrégat"
description: "Un agrégat garde la cohérence à l'intérieur d'une brique métier. Pour ce qui est dehors, comme l'email de facture, l'outbox pattern garantit qu'il part."
pubDate: 2026-10-20
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7518380029853089792/
sources:
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
  - title: "Learning Domain-Driven Design"
    author: "Vlad Khononov"
    year: 2021
    url: https://vladikk.com/page/books/
draft: false
---

[Hier, j'expliquais qu'un agrégat](/fr/blog/ddd-aggregate-consistency-boundary/) sert à garder la cohérence à l'intérieur d'une brique métier.

Mais... qu'en est-il de ce qui est à l'extérieur, et qui doit **aussi** être cohérent ?

La réponse : l'**outbox pattern**.

Le concept est relativement simple sur le papier.

## Le problème

Reprenons l'exemple d'hier : vous créez une facture (votre agrégat), et vous devez l'envoyer par email au client.

Un code naïf persiste la facture... puis appelle le `Mailer`.

Mais si le `Mailer` est en erreur pour X raison ? Le client ne reçoit jamais sa facture...

Et un simple retry dans le code ne suffit pas : si l'app crashe entre les deux, plus personne ne sait qu'il fallait envoyer cet email.

(C'est le moment où beaucoup de lecteurs se disent « mais attends, j'ai toujours fait comme ça » :)

## Avec l'outbox pattern

1. Quand vous persistez la facture, vous écrivez dans la **même** transaction un event `InvoiceCreated` dans une table outbox.

   => Pas de facture sans event, pas d'event sans facture.

   (D'où le nom : c'est la boîte d'envoi de votre app, comme celle de votre client mail.)

2. Un worker lit la table outbox et publie l'event dans un event broker. Tant que le broker n'a pas acquitté la réception (ack) : retry, souvent avec backoff exponentiel. Une fois l'ack reçu, il marque l'event comme envoyé.

   => L'event finira forcément par arriver dans le broker.

3. Les consommateurs abonnés à cet event (ici un `SendCustomerInvoiceEmailHandler` par exemple... parce que j'aime les noms explicites) font leur tâche, puis ack le broker. Idem, en cas d'échec : retry.

Attention : un même event peut arriver plusieurs fois (le worker peut republier après un crash, le broker peut redistribuer). Vos consommateurs doivent donc être idempotents... sinon le client reçoit 3 fois sa facture.

Donc : facture créée => event reçu par le broker => email envoyé. Pas forcément tout de suite, mais à coup sûr.

## Enfin... presque

L'assurance n'est pas **absolue** : après X retries, un message peut finir en échec (en général dans une dead letter queue). Dans ce cas, rendez-le **très** visible (alerte rouge !), car vous avez un vrai problème de cohérence.

## En bonus : du code découplé

Au passage, vous avez [découplé votre code](/fr/blog/coupling-is-the-worst-thing-in-a-codebase/). S'il y a 10 autres actions à faire à la création d'une facture, elles iront dans des consommateurs de l'event... et pas enchaînées les unes après les autres avec 20 « if » après la persistance de la facture.

Bien câbler cette mécanique, c'est [un chantier sur lequel j'aide souvent les équipes](/fr/work-with-me/).

PS : je fais une petite série de vulgarisation de concepts au cœur du DDD ([Eric Evans](https://www.domainlanguage.com/ddd/blue-book/), [Vlad Khononov](https://vladikk.com/page/books/)... etc). C'est du survol pour vous donner envie de creuser. Foncez, c'est passionnant ;)
