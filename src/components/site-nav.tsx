/**
 * SiteNav — sticky top navigation.
 *
 * Uses TanStack Router <Link> for type-safe navigation, highlights the active
 * route, and includes a mobile drawer, theme toggle, and a "Let's Talk" CTA.
 */
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { profile } from "@/data/content";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  // Add a subtle border/blur once user has scrolled a bit.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-display font-bold transition-transform group-hover:scale-110">
            {profile.name.charAt(0)}
          </span>
          <span className="font-display text-lg tracking-tight uppercase">{profile.name.split(" ")[0]}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative py-1 transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="hidden sm:inline-grid place-items-center size-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </Link>
          <button
            aria-label="Open menu"
            className="lg:hidden inline-grid place-items-center size-10 rounded-full border border-border"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-border">
              <span className="font-display uppercase">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-grid place-items-center size-10 rounded-full border border-border"
              >
                <X className="size-4" />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-2xl font-display tracking-tight border-b border-border hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <button
                onClick={() => {
                  toggle();
                }}
                className="mt-6 inline-flex items-center gap-2 self-start px-4 py-2 border border-border rounded-full text-sm"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
