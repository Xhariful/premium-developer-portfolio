/**
 * About page — long-form bio, journey timeline, values, working process.
 */
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/animated/reveal";
import { CtaSection } from "@/components/cta-section";
import { profile, experience, education, workingProcess, stats } from "@/data/content";
import { StatCounter } from "@/components/animated/stat-counter";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      { name: "description", content: `Get to know ${profile.name}, a ${profile.role} focused on premium client work.` },
      { property: "og:title", content: `About — ${profile.name}` },
      { property: "og:description", content: profile.tagline },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Professional Communication", body: "Clear updates, sensible timelines, and no surprises. English fluent, timezone-flexible." },
  { title: "Clean, Tested Code", body: "Type-safe, documented, and easy to hand over to your in-house team when the time comes." },
  { title: "Fast Delivery", body: "Weekly demos and short feedback cycles. Most projects ship in weeks, not quarters." },
  { title: "Modern Design", body: "Motion, typography, and interaction details that feel expensive and considered." },
  { title: "Long-term Support", body: "Optional retainers for maintenance, security patches, and feature rollouts." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Building the web with intent and craft."
        description={`I'm ${profile.name}, a ${profile.role.toLowerCase()} based ${profile.location.toLowerCase()}. For nearly a decade I've helped founders, agencies, and enterprise teams ship products people love to use.`}
      />

      {/* Intro */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border glow">
              <img src={portrait} alt={profile.name} className="w-full h-full object-cover" width={900} height={1100} loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              A senior developer, not a template shop.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started coding at 14 and never really stopped. What began as building Minecraft mods turned into
                a career shipping high-stakes products for startups and enterprises across three continents.
              </p>
              <p>
                Today I run a small, deliberate practice: I take on a handful of clients each year so every project
                gets senior attention from discovery to launch. I don't outsource, I don't disappear, and I don't
                hide behind account managers.
              </p>
              <p>
                My superpower is the seam between design and engineering — the animations, the micro-interactions,
                the empty states — the details that quietly signal quality.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((s) => <StatCounter key={s.label} {...s} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey / Experience */}
      <section className="py-24 px-6 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Journey</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Experience</h2>
              <p className="mt-6 text-muted-foreground max-w-sm">The companies, clients, and challenges that shaped my craft.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-12 relative border-l border-border pl-8">
            {experience.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-2 size-3 rounded-full bg-primary ring-4 ring-background" />
                  <div className="font-mono text-xs text-primary">{e.year}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold">{e.role}</h3>
                  <div className="text-muted-foreground text-sm">{e.company}</div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 border border-border rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Learning</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">Education</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-border bg-card">
                  <div className="font-mono text-xs text-primary">{e.year}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold">{e.degree}</h3>
                  <div className="text-muted-foreground text-sm">{e.school}</div>
                  <p className="mt-3 text-muted-foreground">{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Why work with me</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl">
              Clients keep coming back for the <span className="italic gradient-text">same reasons.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full hover:border-primary/40 transition-colors">
                  <div className="font-mono text-primary text-sm mb-4">0{i + 1}</div>
                  <h3 className="font-display text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Working Process</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tighter">
              How I run every project
            </h2>
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

      <CtaSection eyebrow="Ready to start?" title="Let's ship something great." primaryLabel="Hire Me" />
    </>
  );
}
