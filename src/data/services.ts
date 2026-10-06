export type IconName =
  | "design"
  | "code"
  | "headset"
  | "seo"
  | "share"
  | "palette"
  | "data"
  | "admin";

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  excerpt: string;
  summary: string;
  intro: string;
  highlights: string[];
  deliverables: { title: string; body: string }[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "website-designing",
    title: "Website Designing",
    icon: "design",
    excerpt:
      "We design and develop custom websites for our clients that stand out from the competition.",
    summary:
      "Interface design that looks the part and, more importantly, converts.",
    intro:
      "Your website is the first handshake your business gets. We design custom interfaces around the way your customers actually behave — clear hierarchy, honest copy and a conversion path that never makes anyone guess what to do next. Every layout is drawn mobile-first, checked against real content and handed over as a living design system rather than a static picture.",
    highlights: [
      "Research-led wireframes before a single pixel of visual design",
      "Responsive layouts tested from 320px to ultra-wide displays",
      "WCAG 2.2 AA contrast, focus states and keyboard navigation",
      "Reusable component library so future pages stay on brand",
    ],
    deliverables: [
      {
        title: "UX Discovery",
        body: "Competitor teardown, user journeys and a sitemap agreed before design starts.",
      },
      {
        title: "High-Fidelity UI",
        body: "Pixel-accurate screens for every breakpoint, plus interactive prototypes.",
      },
      {
        title: "Design System",
        body: "Typography, colour, spacing and components documented for your team.",
      },
    ],
    stack: ["Figma", "Adobe XD", "Design Tokens", "Storybook"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    icon: "code",
    excerpt:
      "NextClick Corp. helps its clients build websites that gain recognition and drive real profits.",
    summary:
      "Fast, secure, search-friendly builds — from marketing sites to full web apps.",
    intro:
      "We build on a modern JavaScript stack because speed and stability are business metrics, not developer preferences. Whether you need a marketing site your team can edit, a customer portal, or a bespoke internal platform, we ship clean, typed, tested code with a deployment pipeline you actually own.",
    highlights: [
      "Next.js and TypeScript builds that score 90+ on Core Web Vitals",
      "Headless CMS so your marketing team edits without a developer",
      "REST and GraphQL API integration with third-party systems",
      "CI/CD, monitoring and documented handover on day one",
    ],
    deliverables: [
      {
        title: "Frontend Engineering",
        body: "Accessible, component-driven interfaces built with Next.js, React and Tailwind CSS.",
      },
      {
        title: "Backend & APIs",
        body: "Node.js services, secure authentication and database design that scales with you.",
      },
      {
        title: "Launch & Support",
        body: "Staging environments, automated deploys and an ongoing maintenance retainer.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "call-centre-services",
    title: "Call Centre Services",
    icon: "headset",
    excerpt:
      "Let us take the burden off your shoulders with reliable inbound and outbound call centre services.",
    summary:
      "Trained inbound and outbound agents operating as an extension of your brand.",
    intro:
      "Missed calls are missed revenue. Our contact centre teams are trained on your product, your tone and your escalation rules, then measured on the outcomes that matter to you — resolution rate, conversion and customer satisfaction. You get the coverage of an in-house team without the overhead of building one.",
    highlights: [
      "Inbound support, order taking and after-hours overflow cover",
      "Outbound lead qualification, follow-up and appointment setting",
      "Scripts, QA scorecards and call recordings shared with you",
      "Live dashboards for volume, wait time and resolution rate",
    ],
    deliverables: [
      {
        title: "Dedicated Agents",
        body: "A named team that learns your product rather than a rotating call pool.",
      },
      {
        title: "CRM Integration",
        body: "Every call logged straight into Salesforce, HubSpot or your own system.",
      },
      {
        title: "Reporting",
        body: "Weekly performance reviews with recordings and coaching notes attached.",
      },
    ],
    stack: ["Twilio", "Zendesk", "HubSpot", "Salesforce"],
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    icon: "seo",
    excerpt:
      "We plan tailored SEO strategies to meet your business goals and deliver organic performance.",
    summary:
      "Technical, on-page and content SEO that compounds month after month.",
    intro:
      "Search is the cheapest traffic you will ever buy — once you have earned it. We start with a technical audit, fix what is quietly costing you rankings, then build topical authority with content that answers the questions your buyers are actually typing. Everything is reported against revenue, not vanity keywords.",
    highlights: [
      "Full technical audit: crawlability, schema, speed and indexation",
      "Keyword mapping tied to commercial intent and buying stage",
      "Content briefs plus on-page optimisation for every priority page",
      "White-hat link acquisition and local SEO for multi-branch brands",
    ],
    deliverables: [
      {
        title: "Technical Audit",
        body: "A prioritised fix list with effort, impact and owner against every item.",
      },
      {
        title: "Content Engine",
        body: "A rolling calendar of briefs, drafts and optimisations aligned to search demand.",
      },
      {
        title: "Rank Reporting",
        body: "Monthly dashboards covering positions, traffic, conversions and revenue.",
      },
    ],
    stack: ["GA4", "Search Console", "Ahrefs", "Screaming Frog"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: "share",
    excerpt:
      "Our cutting-edge techniques ensure that your business gets the desired social media spotlight.",
    summary:
      "Organic content and paid campaigns that build an audience worth having.",
    intro:
      "Followers are not the goal; customers are. We build a content system around the platforms where your buyers actually spend time, then layer paid campaigns on top of what is already proving itself organically. Creative, scheduling, community management and reporting all sit in one place.",
    highlights: [
      "Channel strategy grounded in where your audience already is",
      "Monthly content calendars with design and copy included",
      "Paid social on Meta, LinkedIn and TikTok with tight audience testing",
      "Community management and response handling within agreed SLAs",
    ],
    deliverables: [
      {
        title: "Creative Production",
        body: "Scroll-stopping static, carousel and short-form video assets each month.",
      },
      {
        title: "Paid Campaigns",
        body: "Structured testing of audiences, hooks and offers against a clear CPA target.",
      },
      {
        title: "Performance Review",
        body: "Reach, engagement, cost per lead and what we are changing next month.",
      },
    ],
    stack: ["Meta Ads", "LinkedIn Ads", "TikTok", "Buffer"],
  },
  {
    slug: "graphic-designing-printing",
    title: "Graphic Designing & Printing",
    icon: "palette",
    excerpt:
      "Whether it is a website, logo, or brochure, we can help you design anything with no hassle.",
    summary:
      "Brand identity and print-ready collateral, consistent across every touchpoint.",
    intro:
      "A brand that looks different on every channel is a brand nobody remembers. We build identity systems — logo, palette, type, tone — then apply them across everything from pitch decks to shopfront signage, with press-ready artwork supplied and checked before it goes to print.",
    highlights: [
      "Logo design and complete visual identity systems",
      "Brand guidelines your suppliers and staff can follow",
      "Brochures, packaging, signage and exhibition collateral",
      "Print-ready CMYK artwork with bleed, trim and proofing handled",
    ],
    deliverables: [
      {
        title: "Identity Design",
        body: "Primary and secondary marks supplied in every format you will need.",
      },
      {
        title: "Brand Guidelines",
        body: "A written rulebook covering logo usage, colour, type and imagery.",
      },
      {
        title: "Print Management",
        body: "Supplier liaison, proofing and quality checks straight through to delivery.",
      },
    ],
    stack: ["Illustrator", "InDesign", "Photoshop", "Pantone"],
  },
];

export const callCentreServices = [
  {
    title: "Call Centre Outsourcing",
    icon: "headset" as IconName,
    body: "Our call centre outsourcing services can grow your business with trained agents who represent your brand on every inbound and outbound call.",
    href: "/services/call-centre-services",
  },
  {
    title: "Data Entry Services",
    icon: "data" as IconName,
    body: "Our trusted data entry services can ease your load with accurate, deadline-driven processing of forms, invoices and records at any volume.",
    href: "/services/call-centre-services",
  },
  {
    title: "Outsourced Administration",
    icon: "admin" as IconName,
    body: "Manage your business better with our administration outsourcing, from scheduling and billing to inbox and document management.",
    href: "/services/call-centre-services",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
