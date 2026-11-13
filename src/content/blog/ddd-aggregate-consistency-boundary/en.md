---
title: "The DDD aggregate: a consistency boundary for your invariants"
description: "In tactical DDD, an aggregate groups related objects behind a single root so your invariants always hold, including at the moment they are persisted."
pubDate: 2026-10-19
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7518014516199297025/
sources:
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
  - title: "Learning Domain-Driven Design"
    author: "Vlad Khononov"
    year: 2021
    url: https://vladikk.com/page/books/
  - title: "WealCome"
    author: "Michaël Azerhad"
    url: https://wealcomecompany.com/
draft: false
---

To do tactical [DDD](/blog/architecture-and-craftsmanship-in-the-ai-era/) in a piece of software, there is one key element: the **aggregate** (agrégat in French).

Behind this complicated name lies a simple concept.

The official definition ([Eric Evans](https://www.domainlanguage.com/ddd/blue-book/)): a cluster of related objects that you treat as a single unit for any data change. With a root and a boundary.

Put like that, it's abstract. Let's take an example.

## An example: the invoice and its items

You have two entities in your program:

- `Invoice`
- `InvoiceItem`

With two [business rules](/blog/the-value-is-in-the-business-rules/) that must **always** hold (we call them **invariants**):

- an invoice always has at least one item
- an invoice item only exists within an invoice

Now, a command in your application creates an invoice.

It creates the items, then the invoice, then saves everything...

...and there's an error somewhere.

If the invoice and its items are persisted in separate transactions, whatever the order, an error halfway through violates one of our invariants (an invoice with no items, or orphan items...).

## The solution: the aggregate

This pattern says to group all of this into one cluster, behind a root entity (the **aggregate root**, here `Invoice`). It is the only entry point into the cluster: as soon as you touch any part, the root checks everything in memory, and the whole thing is persisted in a single transaction.

=> Your invariants become impossible to break, including at persistence time.

That's why an aggregate is often described as a consistency boundary.

## No giant aggregates

Careful, don't go building a gigantic aggregate either. Prefer small aggregates: whatever can be consistent "a little later" [stays outside](/blog/outbox-pattern-consistency-between-aggregates/). But as soon as some rules must be guaranteed together, at every moment: boom, they go in the same aggregate.

Drawing those boundaries is [modelling work I do with the teams I advise](/work-with-me/).

EDIT: thanks to [Michaël Azerhad](https://wealcomecompany.com/) for a 100% valid objection in the comments of the original LinkedIn post! A simple transaction would actually be enough to solve the problem described. The aggregate really shows its value when it comes to handling concurrency. His comment explains it perfectly, well worth reading!

PS: I'm doing a short series of plain-language takes on concepts at the heart of DDD (Eric Evans, [Vlad Khononov](https://vladikk.com/page/books/)... and others). It's a quick overview to make you want to dig deeper. Go for it, it's fascinating ;)
