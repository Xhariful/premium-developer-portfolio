/**
 * CtaSection — reusable "Let's build something" call-to-action block used at
 * the end of most pages.
 */
import { Link } from "@tanstack/react-router";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "./animated/reveal";

export function CtaSection({
  eyebrow = "Let's collaborate",
  title = "Let's build something iconic.",
  primaryLabel = "Hire Me",
  primaryTo = "/contact",
  secondaryLabel = "View Projects",
  secondaryTo = "/projects",
}: {
  eyebrow?: string;
  title?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="relative py-32 px-6 overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "var(--gradient-radial)" }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-balance">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic gradient-text">{title.split(" ").slice(-1)[0]}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to={primaryTo as string} className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              {primaryLabel} <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
            </Link>
            <Link to={secondaryTo as string} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors">
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
