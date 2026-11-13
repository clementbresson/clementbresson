export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export type CtaKey = "harness" | "architecture" | "fractional" | "default";
export interface Copy {
  htmlLang: string;
  ogLocale: string;
  metaTitle: string;
  metaDescription: string;
  name: string;
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  links: {
    work: string;
    linkedin: string;
    blog: string;
    github: string;
    malt: string;
    email: string;
  };
  portraitAlt: string;
  work: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    intro: string;
    forTitle: string;
    forItems: string[];
    notFor: string;
    howTitle: string;
    steps: { title: string; body: string; more: string; path: string }[];
    auditOnly: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    contactTitle: string;
    contactBody: string;
  };
  cta: {
    messages: Record<CtaKey, string>;
    howIWork: string;
    email: string;
  };
  langSwitchLabel: string;
  blog: {
    title: string;
    metaTitle: string;
    description: string;
    empty: string;
    backToBlog: string;
    published: string;
    updated: string;
    rss: string;
    topics: string;
    related: string;
    sources: string;
    originallyOnLinkedIn: string;
    minRead: string;
  };
}
