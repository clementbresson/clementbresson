#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://clementbresson.com";
const KEY = "7eeee43f95ac270749df574f2321d1aa";
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const BUILT_SITEMAP = path.join(ROOT, "dist/sitemap-0.xml");

type Entries = Map<string, string>;

function parse(xml: string): Entries {
  const entries: Entries = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (loc) entries.set(loc, block.match(/<lastmod>([^<]+)</)?.[1] ?? "");
  }
  return entries;
}

async function liveEntries(): Promise<Entries> {
  const res = await fetch(`${SITE}/sitemap-0.xml`);
  if (!res.ok) throw new Error(`live sitemap: HTTP ${res.status}`);
  return parse(await res.text());
}

async function builtEntries(): Promise<Entries> {
  return parse(await readFile(BUILT_SITEMAP, "utf8"));
}

async function plan(out: string): Promise<void> {
  const [live, built] = await Promise.all([liveEntries(), builtEntries()]);
  const changed = [...built].filter(([loc, mod]) => live.get(loc) !== mod);
  await writeFile(out, changed.map(([loc]) => loc).join("\n"));
  console.log(`${changed.length} changed URL(s) of ${built.size}`);
}

async function submit(urls: string[]): Promise<void> {
  if (!urls.length) return console.log("nothing to submit");
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList: urls,
    }),
  });
  console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URL(s)`);
  if (!res.ok) process.exit(1);
}

const [command, file] = process.argv.slice(2);
if (command === "plan" && file) await plan(file);
else if (command === "submit" && file)
  await submit((await readFile(file, "utf8")).split("\n").filter(Boolean));
else if (command === "submit-all")
  await submit([...(await builtEntries()).keys()]);
else {
  console.error("usage: indexnow.ts plan <file> | submit <file> | submit-all");
  process.exit(1);
}
