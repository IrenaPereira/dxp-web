// Canonical service list — one name per service, everywhere (see
// .claude/brand-voice-guidelines.md → "Naming three things one thing").
// Used by the homepage, /services, /about, and the contact form.

export type Track = "product" | "growth";

export interface Service {
  n: string;
  track: Track;
  title: string;
  /** one-line hook for cards */
  blurb: string;
  /** the situation it answers, in the buyer's words */
  when: string;
  skills: string[];
}

export const tracks: Record<Track, { label: string; title: string; lede: string }> = {
  product: {
    label: "Track A — Product & UX",
    title: "Make the thing people love",
    lede: "Senior UX and UI embedded in your team: the screens, flows, and systems that decide whether players and customers stay.",
  },
  growth: {
    label: "Track B — Brand & GTM",
    title: "Get it in front of the right people",
    lede: "Market analysis, branding, go-to-market strategy, marketing, and the websites and stores that turn attention into revenue.",
  },
};

export const services: Service[] = [
  {
    n: "01",
    track: "product",
    title: "Embedded UX & UI",
    blurb: "Senior hands this sprint. In your team within days, in your Figma files the same week.",
    when: "The ship date isn't moving and your UX bandwidth is gone.",
    skills: ["Prototyping", "Wireframing / Greyboxing", "UX Design", "UI Design", "UI Animation", "UI Implementation"],
  },
  {
    n: "02",
    track: "product",
    title: "UX Strategy",
    blurb: "Senior thinking that sets direction before a single screen is drawn.",
    when: "The team is building fast, just not in the same direction.",
    skills: ["Vision Clarification", "UI Art Direction", "Product / Market Fit", "Persona Development", "Design Systems", "Vision & Slide Deck Design"],
  },
  {
    n: "03",
    track: "product",
    title: "UI/UX Audits",
    blurb: "A senior teardown of what's hurting players and customers, why it hurts, and what to fix first.",
    when: "Reviews or funnels say something's broken, and nobody agrees on what.",
    skills: ["Heuristic Evaluation", "FTUE / Onboarding Review", "Usability Review", "Readability & Accessibility", "Competitive Benchmarking", "Prioritized Recommendations"],
  },
  {
    n: "04",
    track: "product",
    title: "Team Workshops & Training",
    blurb: "We level up the team you already have, and leave it stronger than we found it.",
    when: "You want a better UX practice in-house, not a permanent dependency.",
    skills: ["Lean UX Training", "Design Workshops", "Team Health & Collaboration", "Process Design", "Service Design", "Maturing UX Practices"],
  },
  {
    n: "05",
    track: "growth",
    title: "Market Analysis",
    blurb: "Deep market research before the first pixel: who's buying, who you're up against, and where the open lane is.",
    when: "You're about to bet a launch on a market you haven't mapped.",
    skills: ["Competitive Landscape", "Audience & Persona Research", "Market Sizing", "Positioning Gaps", "Pricing & Monetization Benchmarks", "Player & Customer Data Analysis"],
  },
  {
    n: "06",
    track: "growth",
    title: "GTM Strategy",
    blurb: "Positioning, messaging, channels, and a launch plan your whole team can run.",
    when: "The product is close. The plan for selling it isn't.",
    skills: ["Positioning & Messaging", "Launch Planning", "Channel Strategy", "Pricing & Packaging", "Organic & Social Growth Loops", "Launch Metrics & KPIs"],
  },
  {
    n: "07",
    track: "growth",
    title: "Branding & Marketing",
    blurb: "A brand worth remembering, and the campaigns, content, and creative that earn the click, the install, or the cart.",
    when: "You have a great product, a forgettable brand, and a quiet launch.",
    skills: ["Brand Identity & Naming", "Brand & Creative Direction", "Campaign Planning", "Content & Social", "Email & Lifecycle", "Store Page & Landing Page Optimization", "A/B Testing"],
  },
  {
    n: "08",
    track: "growth",
    title: "Websites & Ecommerce",
    blurb: "Fast, art-directed sites and stores built to convert, not just to look the part.",
    when: "Your website undersells the product, or your store leaks carts.",
    skills: ["Website Design & Build", "Ecommerce Storefronts", "Checkout & Conversion UX", "Merch & Direct-to-Fan Stores", "Analytics & Tracking", "CMS & Handoff"],
  },
];

export const productServices = services.filter((s) => s.track === "product");
export const growthServices = services.filter((s) => s.track === "growth");
