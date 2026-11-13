import type { TagId } from "../data/tags";
import type { CtaKey } from "../i18n/ui";

const byPriority: [TagId, CtaKey][] = [
  ["ai-harnesses", "harness"],
  ["fractional", "fractional"],
  ["leading-devs", "fractional"],
  ["architecture", "architecture"],
  ["testing", "architecture"],
  ["code-review", "architecture"],
  ["design-system", "architecture"],
];

export function ctaFor(tags: TagId[]): CtaKey {
  return byPriority.find(([tag]) => tags.includes(tag))?.[1] ?? "default";
}
