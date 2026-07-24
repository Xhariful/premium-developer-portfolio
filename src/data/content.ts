/**
 * Portfolio content — single source of truth.
 *
 * All copy, project data, skills, services, experience, and testimonials live
 * here so any developer can update site content without touching components.
 *
 * DEMO DATA: values below are placeholders. Replace name, bio, email, links,
 * project URLs, and images with production values before shipping.
 */

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const profile = {
  name: "Shariful Islam",
  role: "Website Developer",
  // Rotating headlines shown by the typing animation in the hero
  headlines: [
    "I engineer high-performance Python & Shopify solutions.",
    "I lead teams and architect scalable e-commerce systems.",
    "I design custom roadmaps and solve complex web challenges.",
    "I build enterprise-grade digital experiences that convert.",
  ],
  // headlines: [
  //   "I build premium digital experiences.",
  //   "I engineer high-performance React applications.",
  //   "I ship products that scale internationally.",
  //   "I design systems for demanding clients.",
  // ],
  tagline:
    "Senior Full-Stack Developer & Team Lead specializing in high-performance Python/Django backends, custom Shopify solutions, and premium web experiences for international clients.",
  location: "Remote · Serving Clients Worldwide",
  email: "sharifulpc04@gmail.com", // TODO: replace with real inbox
  phone: "+880196964104", // TODO: replace or remove
  whatsapp: "+8801996954104",
  resumeUrl: "/resume.pdf", // TODO: put resume PDF in /public
  socials: {
    github: "https://github.com/xhariful",
    linkedin: "https://linkedin.com/in/#",
    twitter: "https://twitter.com/shariful150215",
    facebook: "https://facebook.com/shariful.islam.19755",
    instagram: "https://instagram.com/sharif_ul_islam",
  },
};

export const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Countries Served" },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", level: 78, years: 2 },
      { name: "TypeScript", level: 40, years: 1 },
      { name: "Tailwind CSS", level: 96, years: 2 },
      { name: "Framer Motion", level: 90, years: 1 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Python Django", level: 88, years: 2 },
      { name: "Node.js", level: 82, years: 1 },
      { name: "PostgreSQL", level: 88, years: 1.5 },
      { name: "GraphQL", level: 85, years: 2 },
      { name: "Cloudflare", level: 82, years: 2 },
    ],
  },
  {
    id: "cms",
    title: "CMS & E-commerce",
    skills: [
      { name: "Shopify (Liquid)", level: 90, years: 2.5 },
      { name: "WordPress", level: 66, years: 2 },
      { name: "Wix", level: 64, years: 2 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 96, years: 3 },
      { name: "Docker", level: 80, years: 4 },
      { name: "Figma", level: 88, years: 1 },
      { name: "Canva", level: 88, years: 3 },
    ],
  },
];

export const services = [
  {
    icon: "code",
    title: "React Development",
    description:
      "Production-grade React and Next.js applications with rigorous performance budgets and clean, testable architecture.",
    features: ["Custom components", "Design systems", "SSR & SSG", "Performance audits"],
  },
  {
    icon: "cart",
    title: "Shopify Development",
    description:
      "Bespoke Shopify themes and headless storefronts that convert. From custom Liquid to Hydrogen-powered flagships.",
    features: ["Custom themes", "Headless commerce", "App integrations", "Store optimisation"],
  },
  {
    icon: "wordpress",
    title: "WordPress Development",
    description:
      "Fast, maintainable WordPress sites with custom themes, ACF-driven layouts, and world-class editorial UX.",
    features: ["Custom themes", "Gutenberg blocks", "WooCommerce", "Migrations"],
  },
  {
    icon: "layers",
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect translations of Figma designs into responsive, accessible, animated interfaces users love.",
    features: ["Figma to code", "Motion design", "Accessibility", "Design QA"],
  },
  {
    icon: "gauge",
    title: "Performance Optimisation",
    description:
      "Surgical performance audits and Core Web Vitals tuning that lift SEO rankings and reduce bounce rates.",
    features: ["Lighthouse audits", "Bundle analysis", "Image optimisation", "Edge caching"],
  },
  {
    icon: "wrench",
    title: "Maintenance & Support",
    description:
      "Long-term retainers covering security patches, feature work, and continuous performance improvements.",
    features: ["Monthly retainers", "Security patches", "Feature rollout", "24h response"],
  },
];

export const projectCategories = ["All", "React", "Shopify", "WordPress", "Full Stack"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const projects: {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
  featured: boolean;
  client?: string;
  duration?: string;
}[] = [
  {
    slug: "vantage-ai",
    title: "Vantage AI",
    category: "Full Stack",
    description:
      "A fintech dashboard rebuilt from the ground up. Sub-100ms interactions, real-time data, and a design system used across five product teams.",
    image: project1,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com/vantage",
    githubUrl: "https://github.com/alex-vaughan/vantage",
    year: "2024",
    featured: true,
    client: "Vantage Financial",
    duration: "6 months",
  },
  {
    slug: "luminary-studios",
    title: "Luminary Studios",
    category: "Shopify",
    description:
      "Headless Shopify flagship for a luxury fragrance house. Editorial-grade product pages with 3D reveals and 98+ Lighthouse.",
    image: project2,
    tech: ["Hydrogen", "Shopify", "Three.js", "GSAP"],
    liveUrl: "https://example.com/luminary",
    githubUrl: "https://github.com/alex-vaughan/luminary",
    year: "2024",
    featured: true,
    client: "Luminary Parfums",
    duration: "4 months",
  },
  {
    slug: "north-analytics",
    title: "North Analytics",
    category: "React",
    description:
      "A B2B analytics workspace with saved views, granular RBAC, and 50+ chart types. Handles 40M events per day.",
    image: project3,
    tech: ["React", "Recharts", "tRPC", "Prisma"],
    liveUrl: "https://example.com/north",
    githubUrl: "https://github.com/alex-vaughan/north",
    year: "2023",
    featured: true,
    client: "North Data",
    duration: "8 months",
  },
  {
    slug: "atelier-osborne",
    title: "Atelier Osborne",
    category: "WordPress",
    description:
      "A bespoke WordPress build for an architecture studio. Custom Gutenberg blocks, editorial photography, multi-language.",
    image: project4,
    tech: ["WordPress", "ACF", "Alpine.js", "Tailwind"],
    liveUrl: "https://example.com/osborne",
    githubUrl: "https://github.com/alex-vaughan/osborne",
    year: "2023",
    featured: false,
    client: "Osborne Studio",
    duration: "3 months",
  },
  {
    slug: "helios-storefront",
    title: "Helios Storefront",
    category: "Shopify",
    description:
      "Direct-to-consumer eyewear brand. Custom configurator, home try-on flow, and content-driven landing pages.",
    image: project2,
    tech: ["Shopify", "Liquid", "Alpine.js"],
    liveUrl: "https://example.com/helios",
    githubUrl: "https://github.com/alex-vaughan/helios",
    year: "2023",
    featured: false,
    client: "Helios Eyewear",
    duration: "2 months",
  },
  {
    slug: "kestrel-ops",
    title: "Kestrel Ops",
    category: "Full Stack",
    description:
      "Internal ops platform for a logistics operator. Real-time fleet map, exceptions inbox, and driver comms.",
    image: project3,
    tech: ["Next.js", "Mapbox", "Postgres", "Websockets"],
    liveUrl: "https://example.com/kestrel",
    githubUrl: "https://github.com/alex-vaughan/kestrel",
    year: "2022",
    featured: false,
    client: "Kestrel Freight",
    duration: "10 months",
  },
];

export const experience = [
  {
    year: "2022 — Present",
    role: "Lead Frontend Engineer",
    company: "Independent Consultant",
    description:
      "Leading web engineering for venture-backed startups across the US and EU. Ship design systems, hire teams, and set technical direction.",
    tech: ["React", "Next.js", "TypeScript", "AWS"],
  },
  {
    year: "2020 — 2022",
    role: "Senior Frontend Engineer",
    company: "Northline Studio",
    description:
      "Delivered flagship products for luxury and fintech clients. Owned architecture for a 4-market e-commerce platform.",
    tech: ["React", "Shopify Hydrogen", "GraphQL"],
  },
  {
    year: "2017 — 2020",
    role: "Full-Stack Developer",
    company: "Cove Digital",
    description:
      "Built and maintained 30+ production sites. Introduced testing culture and CI/CD across the agency's project templates.",
    tech: ["Node.js", "WordPress", "React"],
  },
];

export const education = [
  {
    year: "2015 — 2019",
    degree: "B.Sc. Computer Science",
    school: "University of Technology",
    description:
      "First-class honours. Thesis on real-time collaborative editing with CRDTs; published in undergraduate journal.",
  },
  {
    year: "2020",
    degree: "Advanced React Patterns",
    school: "Frontend Masters",
    description: "Deep-dive into performance, testing, and advanced composition patterns for React apps.",
  },
];

export const testimonials = [
  {
    quote:
      "Alex delivered our platform three weeks early with zero P1 bugs at launch. The engineering rigour is genuinely rare.",
    name: "Sarah Chen",
    role: "VP Product, Vantage Financial",
    rating: 5,
  },
  {
    quote:
      "One of the sharpest engineers we've worked with. Deep taste in design, and an obsession with performance.",
    name: "Marco Bianchi",
    role: "Founder, Luminary Parfums",
    rating: 5,
  },
  {
    quote:
      "We interviewed a dozen senior devs. Alex was the only one who talked about maintenance costs first. Hired within a week.",
    name: "Priya Patel",
    role: "CTO, North Data",
    rating: 5,
  },
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    date: "2024",
    url: "https://example.com/cert-aws",
  },
  {
    title: "Google Cloud Professional Developer",
    org: "Google Cloud",
    date: "2023",
    url: "https://example.com/cert-gcp",
  },
  {
    title: "Shopify Partner — Expert",
    org: "Shopify",
    date: "2023",
    url: "https://example.com/cert-shopify",
  },
  {
    title: "Meta Frontend Developer",
    org: "Meta",
    date: "2022",
    url: "https://example.com/cert-meta",
  },
];

export const awards = [
  { title: "Awwwards Site of the Day", org: "Awwwards", date: "2024" },
  { title: "CSS Design Awards — Best UI", org: "CSSDA", date: "2023" },
  { title: "Top 3% on Upwork", org: "Upwork", date: "2022" },
];

export const workingProcess = [
  { step: "01", title: "Discovery", description: "Deep-dive call on your goals, users, and constraints." },
  { step: "02", title: "Planning", description: "Scope, timelines, deliverables — and a fixed price when possible." },
  { step: "03", title: "Design", description: "Wireframes, then high-fidelity mocks, then interactive prototype." },
  { step: "04", title: "Build", description: "Weekly demos, clean commits, and full test coverage on critical paths." },
  { step: "05", title: "Test & Ship", description: "QA, performance audits, accessibility review, and launch." },
  { step: "06", title: "Support", description: "30-day free bugfix window, then optional monthly retainer." },
];

export const faqs = [
  {
    q: "How do we get started?",
    a: "Book a 30-minute intro call. We'll scope the project and I'll follow up within 48 hours with a fixed-price proposal.",
  },
  {
    q: "What is your typical timeline?",
    a: "Landing pages 1–2 weeks, e-commerce or SaaS 6–12 weeks depending on scope. I never overcommit.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Most of my work is remote across US, EU, and APAC time zones. I overlap for 3–4 hours daily as standard.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely, before we discuss anything sensitive.",
  },
];
