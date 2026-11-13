---
title: "The outbox pattern: consistency outside the aggregate"
description: "An aggregate keeps one business unit consistent. For what lies outside, like emailing the invoice, the outbox pattern guarantees it eventually happens."
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

[Yesterday I explained that an aggregate](/blog/ddd-aggregate-consistency-boundary/) is there to keep things consistent inside one business unit.

But... what about what lies outside, and must **also** be consistent?

The answer: the **outbox pattern**.

The concept is fairly simple on paper.

## The problem

Let's go back to yesterday's example: you create an invoice (your aggregate), and you have to email it to the customer.

Naive code persists the invoice... then calls the `Mailer`.

But what if the `Mailer` fails for some reason? The customer never gets their invoice...

And a simple retry in the code isn't enough: if the app crashes in between, nobody knows anymore that this email had to be sent.

(This is the moment when many readers think "wait, that's how I've always done it" :)

## With the outbox pattern

1. When you persist the invoice, you write an `InvoiceCreated` event to an outbox table in the **same** transaction.

   => No invoice without an event, no event without an invoice.

   (Hence the name: it's your app's outbox, like the one in your email client.)

2. A worker reads the outbox table and publishes the event to an event broker. As long as the broker hasn't acknowledged receipt (ack): retry, often with exponential backoff. Once the ack is received, it marks the event as sent.

   => The event will reach the broker, no matter what.

3. The consumers subscribed to that event (here a `SendCustomerInvoiceEmailHandler`, for example... because I like explicit names) do their job, then ack the broker. Same thing on failure: retry.

Careful: the same event can arrive several times (the worker may republish after a crash, the broker may redeliver). So your consumers must be idempotent... otherwise the customer gets their invoice 3 times.

So: invoice created => event received by the broker => email sent. Not necessarily right away, but for sure.

## Well... almost

The guarantee isn't **absolute**: after X retries, a message can end up failing (usually in a dead letter queue). When that happens, make it **very** visible (red alert!), because you have a real consistency problem.

## As a bonus: decoupled code

Along the way, you've [decoupled your code](/blog/coupling-is-the-worst-thing-in-a-codebase/). If there are 10 other actions to run when an invoice is created, they go into consumers of the event... rather than being chained one after another with 20 "if"s after the invoice is persisted.

Wiring this up properly is [something I often help teams with](/work-with-me/).

PS: I'm doing a short series of plain-language takes on concepts at the heart of DDD ([Eric Evans](https://www.domainlanguage.com/ddd/blue-book/), [Vlad Khononov](https://vladikk.com/page/books/)... and others). It's a quick overview to make you want to dig deeper. Go for it, it's fascinating ;)
