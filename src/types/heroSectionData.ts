export interface HeroSectionData {
  badges: string[];
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  cta: { label: string; href: string };
  blogs: { label: string; href: string };
  trustText: string;
  universityHeading: string;
  universities: {
    name: string;
    domain: string;
  }[];
}
