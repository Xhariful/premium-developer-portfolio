/**
 * Skills page — full breakdown of technical skills by category.
 */
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/animated/reveal";
import { CtaSection } from "@/components/cta-section";
import { profile, skillCategories } from "@/data/content";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: `Skills — ${profile.name}` },
      { name: "description", content: `Full-stack skills across frontend, backend, CMS, and DevOps.` },
      { property: "og:title", content: `Skills — ${profile.name}` },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="Battle-tested across the modern web stack."
        description="I go deep on the tools I use most and stay current with the wider ecosystem. Here's what I bring to every engagement."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.05}>
              <div className="p-8 rounded-3xl border border-border bg-card hover:border-primary/40 transition-colors h-full">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-display text-2xl font-bold">{cat.title}</h2>
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">
                          {s.years}y · {s.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection eyebrow="Have a project?" title="Let's put these skills to work." />
    </>
  );
}
