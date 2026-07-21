/**
 * PageHero — shared banner block for interior pages (About, Skills, etc.).
 * Uses the signature radial glow behind the heading.
 */
import type { ReactNode } from "react";
import { Reveal } from "./animated/reveal";

export function PageHero({ eyebrow, title, description, children }: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{ backgroundImage: "var(--gradient-radial)" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-primary mb-6">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-balance max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
