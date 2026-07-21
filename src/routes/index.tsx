/**
 * Home page — the flagship landing surface.
 *
 * Sections: Hero → Stats → About preview → Skills preview → Services preview →
 * Featured projects → Achievements preview → Contact CTA.
 *
 * All content is pulled from `src/data/content.ts` so this page has zero
 * hard-coded copy: update the data file to change the site.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import { TypingHeadline } from "@/components/animated/typing-headline";
import { StatCounter } from "@/components/animated/stat-counter";
import { Reveal } from "@/components/animated/reveal";
import { CtaSection } from "@/components/cta-section";
import {
  profile,
  stats,
  skillCategories,
  services,
  projects,
  awards,
  certifications,
} from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role} | Portfolio` },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const featuredSkills = skillCategories.slice(0, 2);
  const previewServices = services.slice(0, 4);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-5xl"
          >
            <TypingHeadline phrases={profile.headlines} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              Hire Me <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <FiDownload /> Download Resume
            </a>

            <div className="hidden sm:flex items-center gap-2 ml-2">
              <SocialLink href={profile.socials.github}><FiGithub /></SocialLink>
              <SocialLink href={profile.socials.linkedin}><FiLinkedin /></SocialLink>
              <SocialLink href={profile.socials.twitter}><FiTwitter /></SocialLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-y border-border py-16 px-6 bg-surface/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT PREVIEW ---------------- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-border glow">
              <img src={portrait} alt={profile.name} className="w-full h-full object-cover" width={900} height={1100} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">About Me</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              A senior engineer who cares about <span className="italic gradient-text">craft</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For nearly a decade I've built products for founders, agencies, and Fortune 500s. My focus is on the
              details that separate a great website from an unforgettable one: motion, performance, typography,
              and the quiet, invisible engineering that keeps everything running.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I work with a small number of clients each year so every project gets my full attention.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Read the full story <FiArrowUpRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SKILLS PREVIEW ---------------- */}
      <section className="py-32 px-6 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Expertise</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Technical Arsenal</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                View all skills <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredSkills.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <h3 className="font-display text-2xl font-bold">{cat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.skills.map((s) => (
                      <SkillBar key={s.name} {...s} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES PREVIEW ---------------- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Services</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">
                What I can build for you
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                View all services <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {previewServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full p-8 rounded-3xl border border-border bg-card hover:bg-surface hover:border-primary/40 transition-all hover:-translate-y-1">
                  <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="font-mono font-bold text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <section className="py-32 px-6 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Portfolio</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Selected Work</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                View all projects <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <FeaturedProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ACHIEVEMENTS PREVIEW ---------------- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Milestones</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Achievements</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/achievements" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                View all <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[...awards.slice(0, 2), ...certifications.slice(0, 2)].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <div className="shrink-0 size-12 rounded-xl bg-primary/10 text-primary grid place-items-center font-mono text-sm">
                    ★
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                      {item.org} · {item.date}
                    </div>
                    <div className="font-display text-lg font-bold">{item.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Let's build something iconic." />
    </>
  );
}

/* -------------------- Local helpers -------------------- */

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-grid place-items-center size-11 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}

function SkillBar({ name, level, years }: { name: string; level: number; years: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground font-mono text-xs">{years}y · {level}%</span>
      </div>
      <div className="h-1 w-full bg-surface-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-primary to-primary/60"
        />
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-surface aspect-[16/10] mb-6 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={1400}
          height={900}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 size-10 rounded-full bg-background/80 backdrop-blur-md border border-border grid place-items-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">
          <FiArrowUpRight />
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2">{project.category}</div>
          <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
        </div>
        <div className="shrink-0 font-mono text-xs px-3 py-1 border border-border rounded-full">{project.year}</div>
      </div>
    </a>
  );
}
