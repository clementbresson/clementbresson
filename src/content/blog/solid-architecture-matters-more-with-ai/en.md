---
title: "With AI, solid architecture has never mattered more"
description: "Scattered business logic, coupling everywhere: with an AI that sees a limited context, the project wobbles. Clear layers are where invested time pays off."
pubDate: 2026-11-16
tags: ["architecture", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7528171980412596224/
draft: false
---

Solid architecture has never mattered as much as it does in 2026.

And yet, it is often what gets pushed back (I have been guilty of it in the past too).

## A project that runs... but is fragile

You can have complex features.
A carefully thought-out UI/UX.
Advanced implementations.
Infrastructure ready to scale forever.

But if the business logic is scattered to the four corners of the project...

...if touching the smallest thing requires being inside the heads of 5 teammates (hoping they are still around)...

...and if everything is so [coupled](/blog/coupling-is-the-worst-thing-in-a-codebase/) that the smallest change can have side effects impossible to predict without spending 3 days scrutinising, dissecting and hoping you understood every function...

...then the project is (very) fragile, even if it runs perfectly well today.

## With AI, it wobbles even more

And with AI on top, it is likely to wobble even more.

Why? Because an AI, by definition, only has a limited context. It sees only one piece of the project at a time.

So:

- the clearer the responsibilities,
- the sharper the boundaries,
- the more standardised things are (without reinventing the wheel),

...the better it performs. Everything becomes predictable, and confined to a single part.

## Where invested time pays off most

In practice, this is where invested time pays off most:

- analysing your [contexts](/blog/why-design-bounded-contexts/);
- separating responsibilities;
- a real domain layer for your [business rules](/blog/the-value-is-in-the-business-rules/);
- a real application layer for orchestration;
- a real [infrastructure layer](/blog/hexagonal-architecture-ports-and-adapters/), so that technology does not take over **your** added value (domain + application).

Without that, you are building a nicely decorated house of cards.

In the best case, it becomes very painful to evolve. In the worst, it ends up breaking all over the place.

## It is never too late

The good news: it has never been easier to get started. Books, talks, courses... resources are everywhere, and accessible. And if you would rather have support, [that is exactly what I do](/work-with-me/).

And it is never too late! Your future self will thank you in a few months (and your projects even more).
