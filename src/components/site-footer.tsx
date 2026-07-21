/**
 * SiteFooter — global footer with quick links, contact, and socials.
 */
import { Link } from "@tanstack/react-router";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";
import { profile } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-2xl mb-4">{profile.name}</div>
            <p className="text-muted-foreground max-w-md leading-relaxed">{profile.tagline}</p>
            <div className="flex gap-3 mt-6">
              <SocialIcon href={profile.socials.github} label="GitHub"><FiGithub /></SocialIcon>
              <SocialIcon href={profile.socials.linkedin} label="LinkedIn"><FiLinkedin /></SocialIcon>
              <SocialIcon href={profile.socials.twitter} label="Twitter"><FiTwitter /></SocialIcon>
              <SocialIcon href={profile.socials.instagram} label="Instagram"><FiInstagram /></SocialIcon>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/achievements" className="hover:text-primary transition-colors">Achievements</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
            <ul className="space-y-3 text-sm">
              <li><a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email}</a></li>
              <li className="text-muted-foreground">{profile.location}</li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 mt-2 text-primary hover:gap-3 transition-all"
                >
                  Back to top <FiArrowUp />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name} — Crafted with intent</span>
          <span>Built with React, TanStack, Tailwind & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-grid place-items-center size-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}
