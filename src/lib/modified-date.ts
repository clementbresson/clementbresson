import { spawnSync } from "node:child_process";
import { today } from "./publish-date.ts";

// Commits up to this one migrated tooling, formatting and the LinkedIn import: they are not article updates.
const BASELINE = "c24d39e";

const cache = new Map<string, Date | undefined>();

function lastCommitDay(file: string): Date | undefined {
  const r = spawnSync(
    "git",
    ["log", "-1", "--format=%cI", `${BASELINE}..HEAD`, "--", file],
    { encoding: "utf8" },
  );
  const iso = r.status === 0 ? r.stdout.trim() : "";
  return iso ? new Date(`${today(new Date(iso))}T00:00:00Z`) : undefined;
}

export function updatedDate(
  file: string,
  pubDate: Date,
  explicit?: Date,
): Date | undefined {
  if (explicit) return explicit;
  if (!cache.has(file)) cache.set(file, lastCommitDay(file));
  const day = cache.get(file);
  return day && day.getTime() > pubDate.getTime() ? day : undefined;
}
