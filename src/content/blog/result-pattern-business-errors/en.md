---
title: "The Result Pattern: telling bugs from business errors"
description: "Your cancelOrder() can fail in many predictable ways. The Result Pattern separates the business error you return from the bug that goes to Sentry."
pubDate: 2026-10-21
tags: ["architecture"]
sources:
  - title: "Result (std::result)"
    author: "The Rust Project"
    url: https://doc.rust-lang.org/std/result/enum.Result.html
  - title: "Error handling and Go"
    author: "Andrew Gerrand"
    year: 2011
    url: https://go.dev/blog/error-handling-and-go
  - title: "TypeScript"
    url: https://www.typescriptlang.org/
  - title: "neverthrow"
    url: https://github.com/supermacro/neverthrow
  - title: "Effect"
    url: https://effect.website/
  - title: "Sentry"
    url: https://sentry.io/
draft: false
---

Your `cancelOrder()` function is lying to you.

It says it cancels the order. But the order might already be shipped, already cancelled, or past its deadline...

And if you do nothing, nothing forces you to handle these cases.

That is exactly the problem the **Result Pattern** solves.

## Two kinds of errors

The idea is that there are two kinds of errors.

On one side, the "real" errors: bugs, crashes, a database that is down, etc. They throw, bubble all the way up and land in [Sentry](https://sentry.io/), and someone looks into it urgently.

On the other side, the "normal", expected errors: an order already shipped, a deleted item, insufficient permissions... That is not a crash. It is the business saying no, that [central value of the project](/blog/the-value-is-in-the-business-rules/) we too often forget. Those, we don't throw. We **return** them.

## What that changes

Concretely, the function returns either a success, or a known error, named and visible in its signature.

And that changes everything:

- the caller of the function knows what can go wrong;
- it is forced to handle every case: "already shipped" → offer a return, "deadline passed" → show customer support;
- you add "payment being refunded" tomorrow → every place that forgets it fails to compile.

## The test to decide

The test I use:

"Can the caller do something different depending on the error?"

- Yes → Result.
- No → throw, straight to Sentry.

## The implementation doesn't matter

[Rust](https://doc.rust-lang.org/std/result/enum.Result.html) has it built into the language. [Go](https://go.dev/blog/error-handling-and-go) does it its own way. In [TypeScript](https://www.typescriptlang.org/), it takes three lines, or a library like [neverthrow](https://github.com/supermacro/neverthrow) or [Effect](https://effect.website/).

Whatever the implementation, the idea stays the same: separate what throws from what gets returned as a value. Much like how the [Functional Core isolates its decisions from its actions](/blog/functional-core-imperative-shell/): the business decision comes out as data, not as behaviour.

If you care about your business logic... give it a try :)

**PS**: don't put it everywhere. A database being down is **not** a business error! Doing Result everywhere isn't any better than letting everything throw.
