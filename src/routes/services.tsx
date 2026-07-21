/**
 * Services page — full services grid + working process + FAQ.
 */
import { createFileRoute } from "@tanstack/react-router";
import { FiCheck } from "react-icons/fi";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/animated/reveal";
import { CtaSection } from "@/components/cta-section";
import { profile, services, workingProcess, faqs } from "@/data/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${profile.name}` },
      { name: "description", content: `Services offered: React, Shopify, WordPress, UI/UX, performance, and long-term support.` },
      { property: "og:title", content: `Services — ${profile.name}` },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Premium engineering, from strategy to launch."
        description="I focus on a small number of high-impact services. Every one delivered end-to-end, senior-only."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group h-full p-8 rounded-3xl border border-border bg-card hover:bg-surface hover:border-primary/40 transition-all hover:-translate-y-1">
                <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6 font-mono font-bold group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <FiCheck className="text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Working Process</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">How every project runs</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workingProcess.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full">
                  <div className="font-display text-5xl font-extrabold gradient-text mb-4">{p.step}</div>
                  <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">FAQ</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Common questions</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group py-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-display text-xl font-bold">{f.q}</span>
                    <span className="size-8 rounded-full border border-border grid place-items-center transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Request a quote" title="Let's scope your project." />
    </>
  );
}
