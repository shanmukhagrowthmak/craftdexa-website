export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { n: "01", title: "Built in 2026", sub: "A studio for now." },
  { n: "02", title: "Ship in Weeks", sub: "Not quarters." },
  { n: "03", title: "AI-Native", sub: "Default, not bolted on." },
];

export const SERVICE_INDEX = [
  {
    n: "01",
    title: "Lead Generation",
    desc: "Qualified local customers through Meta Ads.",
    href: "#lead-generation",
  },
  {
    n: "02",
    title: "Web Design & Development",
    desc: "Fast, conversion-focused websites.",
    href: "#web",
  },
  {
    n: "03",
    title: "SaaS & AI Product Development",
    desc: "Market-ready software, built fast.",
    href: "#saas",
  },
];

export type Service = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  howFast: string;
  whatWeDo: string;
  whoFor: string;
  deliver: string[];
  methodology: { name: string; note: string; stages: string[] };
};

export const SERVICES: Service[] = [
  {
    id: "lead-generation",
    index: "02",
    kicker: "Lead Generation",
    title: "Qualified local leads, on tap.",
    howFast: "First qualified leads within 14 days.",
    whatWeDo:
      "A done-for-you Meta Ads (Facebook & Instagram) engine that turns ad spend into a predictable flow of qualified local leads. You run your business; we bring the customers to your door.",
    whoFor:
      "Local businesses — salons, gyms, clinics, restaurants, real estate, home services, retail — that want more bookings, calls, and walk-ins without learning ads.",
    deliver: [
      "Market & audience research",
      "Offer & messaging strategy",
      "Ad creative (copy + visuals)",
      "Landing / lead-capture page",
      "Campaign launch & daily optimisation",
      "Qualified leads delivered (WhatsApp, email, sheet, or CRM)",
    ],
    methodology: {
      name: "4DDBL",
      note: "6 stages",
      stages: [
        "Discover",
        "Define",
        "Design",
        "Deploy",
        "Build",
        "Lead Delivery",
      ],
    },
  },
  {
    id: "web",
    index: "03",
    kicker: "Web Design & Development",
    title: "Websites that sell, not just sit there.",
    howFast: "Live in 3 weeks.",
    whatWeDo:
      "Custom, conversion-focused websites — designed and engineered to turn visitors into enquiries, not just look pretty.",
    whoFor:
      "Founders, local businesses, and small teams who need a professional site that actually brings in customers — not a generic template.",
    deliver: [
      "Strategy & site architecture",
      "Custom UI/UX design",
      "Responsive, fast, accessible development",
      "Conversion copywriting",
      "SEO & performance setup",
      "Analytics & tracking",
    ],
    methodology: {
      name: "4D + Refine",
      note: "5 stages",
      stages: ["Discover", "Design", "Develop", "Deploy", "Refine"],
    },
  },
  {
    id: "saas",
    index: "04",
    kicker: "SaaS & AI Product Development",
    title: "From idea to live product.",
    howFast: "MVP in 6 weeks.",
    whatWeDo:
      "We design and build market-ready software — MVPs, dashboards, and AI-powered SaaS — engineered to launch fast and scale.",
    whoFor:
      "Founders, domain experts, and startups with an idea but no technical team to build it.",
    deliver: [
      "Product scoping & prioritisation",
      "UX & interface design",
      "Full-stack development",
      "Auth, payments & dashboards",
      "AI integration (GPT, RAG, custom agents)",
      "Deployment & analytics",
    ],
    methodology: {
      name: "The Product Loop",
      note: "5 stages",
      stages: ["Validate", "Architect", "Build", "Launch", "Scale"],
    },
  },
];

export const WORK_VALUES = [
  {
    n: "01",
    title: "One team, end to end",
    desc: "Strategy, design, engineering, and growth in one place. No handoffs between vendors.",
  },
  {
    n: "02",
    title: "Weekly progress, not black boxes",
    desc: "You see real work every week, never a surprise at the end.",
  },
  {
    n: "03",
    title: "Senior specialists only",
    desc: "A lean team that actually ships, not a layer of account managers.",
  },
  {
    n: "04",
    title: "Built to move fast",
    desc: "Ruthless scope, real deadlines, real delivery.",
  },
];

export const CONTACT = [
  { label: "Founder", value: "Shanmukha", href: null },
  { label: "Email", value: "craftdexa@gmail.com", href: "mailto:craftdexa@gmail.com" },
  { label: "Phone / WhatsApp", value: "+91 84682 59753", href: "tel:+918468259753" },
  { label: "Website", value: "craftdexa.com", href: "https://craftdexa.com" },
  { label: "Instagram", value: "@craftdexa", href: "https://instagram.com/craftdexa" },
];

export const FOOTER_SERVICES = [
  "Lead Generation",
  "Web Design & Development",
  "SaaS & AI Product Development",
];

export const FOOTER_ELSEWHERE = [
  "X / Twitter",
  "LinkedIn",
  "Instagram",
  "GitHub",
  "Dribbble",
];

export const MARQUEE_ITEMS = [
  "LEAD GENERATION",
  "META ADS",
  "WEB DESIGN",
  "CONVERSION",
  "SAAS",
  "AI PRODUCTS",
  "MVP IN 6 WEEKS",
  "ONE TEAM",
];
