---
title: "Scaling a vibe-coded MVP: when heavy operations blow up"
description: "A heavy operation the AI runs in memory holds up in a prototype, then blows up as users pile in. Without queues or observability, good luck finding why."
pubDate: 2026-08-18
tags: ["ai-era", "architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7495435940614717440/
draft: false
---

Scaling on a vibe-coded MVP will kill your project.

A common example:

- On your SaaS, a customer can run a heavy operation (say, purely by chance, reading a file with OCR and working on it with an AI)
- For a prototype, the AI will often run the whole process in memory
- The operation takes tens of seconds
- You scale
- You have more and more users
- You add the option for a customer to run several operations in parallel

… everything blows up…

… and you don't even know why…

… customers complain and churn goes up.

Why? **One** heavy synchronous in-memory operation on the server is fine… but when they pile up at the same time, it's over.

Whereas a barely experienced developer would have set up a dynamic queue system to handle all of it.

The worst part is that this bug will very likely be hard to find, because the AI, [unless you specifically ask for it](/blog/ai-does-only-what-you-ask/), rarely takes it upon itself to add proper observability.

Queues and observability: two things [I look at first in a vibe-coded app](/work-with-me/).
