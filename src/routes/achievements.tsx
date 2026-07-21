/**
 * Achievements page — certifications, awards, testimonials, key stats.
 */
import { createFileRoute } from "@tanstack/react-router";
import { FiExternalLink, FiStar } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/animated/reveal";
import { CtaSection } from "@/components/cta-section";
import { StatCounter } from "@/components/animated/stat-counter";
import { profile, certifications, awards, testimonials, stats } from "@/data/content";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: `Achievements — ${profile.name}` },
      { name: "description", content: `Certifications, awards, and client testimonials.` },
      { property: "og:title", content: `Achievements — ${profile.name}` },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Awards, certifications, and the people I've worked with."
        description="Recognition matters less than results, but it's a decent proxy. Here's a snapshot."
      />

      {/* Stats */}
      <section className="py-16 px-6 border-y border-border bg-surface/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Certifications</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Official credentials</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <div className="shrink-0 size-14 rounded-2xl bg-primary/10 text-primary grid place-items-center">
                    <FiStar className="size-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                      {c.org} · {c.date}
                    </div>
                    <div className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                      {c.title}
                    </div>
                  </div>
                  <FiExternalLink className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 px-6 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Awards</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Industry recognition</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full">
                  <div className="font-display text-5xl font-extrabold gradient-text mb-4">★</div>
                  <div className="font-display text-xl font-bold">{a.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{a.org} · {a.date}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Testimonials</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Client feedback</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <blockquote className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
                  <div className="flex gap-1 text-primary mb-4">
                    {Array.from({ length: t.rating }).map((_, k) => <FiStar key={k} className="fill-current" />)}
                  </div>
                  <p className="italic text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
                  <footer className="mt-6 pt-6 border-t border-border">
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Work with me" title="Let's add to the list." />
    </>
  );
}
