---
title: "Subdomains vs bounded contexts: the problem and the solution"
description: "In DDD, subdomains and bounded contexts are often confused. The first exist in the business; the second are designed to organise the software solution."
pubDate: 2026-10-25
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7520201521322532864/
draft: false
---

When you start with DDD, there are two notions people often mix up (and I mixed them up myself): subdomains and bounded contexts...

## Subdomains: the world of the problem

**Subdomains** live in the world of the **problem** to solve. They come from the reality of the business domain, which you **analyse** to identify them.

They are all the business components of the domain.

For example, for a platform selling e-tickets by phone:

- the payment system
- the telephony infrastructure
- sales tracking
- the ticket catalogue
- schedule management
- financial analysis
- accounting
- online advertising
- ...and so on

You will even notice that some subdomains can have nothing to do with your software. Accounting, for example, can very well be handed to an external firm.

## Bounded contexts: the world of the solution

**Bounded contexts**, on the other hand, live in the world of the **solution**. They are **designed** to help model and organise the solution.

Their purpose is to draw boundaries in order to:

- protect the language of a model (the ubiquitous language)
- and/or make management and maintenance easier (separate teams, different scalability needs, different deployment needs)

A bounded context can span **several** subdomains.

Going back to my subdomains above, you could for example split them into 3 bounded contexts:

- Marketing (advertising)
- Sales (schedules, catalogue, payment, telephony infrastructure)
- After-sales (sales tracking, financial analysis, accounting)

But you can also have one bounded context **per** subdomain. It is common... and it is probably why the confusion is so frequent.

In short:

- Subdomains **exist** in the business; you find them through analysis.
- Bounded contexts are **created** to best serve the needs of the software.

## Why tell them apart?

Because their purpose is different.

Subdomains mainly tell you what not to rebuild in-house, where to put your main effort, and potentially lead you to reassess a project's viability. [I go into more detail here](/blog/core-supporting-generic-subdomains/) if you are interested.

Bounded contexts are there to organise the solution so that it stays maintainable over time. Drawing those boundaries is [work I do hand in hand with a team](/work-with-me/).

If you remember subdomain = a problem that exists, and bounded context = a solution you design, you're good :)
