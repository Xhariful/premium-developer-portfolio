/**
 * Projects page — filterable portfolio grid.
 */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/animated/reveal";
import { CtaSection } from "@/components/cta-section";
import { profile, projects, projectCategories, type ProjectCategory } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${profile.name}` },
      { name: "description", content: `Selected work by ${profile.name}: React apps, Shopify stores, and full-stack products.` },
      { property: "og:title", content: `Projects — ${profile.name}` },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Case studies from clients across three continents."
        description="A curated selection of recent projects. Every one shipped, most are still growing."
      >
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                filter === c
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.article
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group"
                >
                  <div className="overflow-hidden rounded-3xl border border-border bg-surface aspect-[16/10] relative mb-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1400}
                      height={900}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-x-6 bottom-6 flex gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all">
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:bg-primary hover:text-primary-foreground">
                        <FiExternalLink /> Live
                      </a>
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium">
                        <FiGithub /> Code
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                        {p.category} · {p.year}
                      </div>
                      <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-1 border border-border rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 size-10 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition-colors">
                      <FiArrowUpRight />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && (
            <Reveal>
              <div className="text-center py-24 text-muted-foreground">No projects in this category yet.</div>
            </Reveal>
          )}
        </div>
      </section>

      <CtaSection eyebrow="Have a similar project?" title="Let's start yours." />
    </>
  );
}
