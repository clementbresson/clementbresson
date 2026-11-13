import type { TagId } from "../data/tags";
import type { CtaKey } from "../i18n/ui";

export function ctaFor(tags: TagId[]): CtaKey {
  // TODO(Clément): pick the message that fits the article's tags.
  return "default";
}
