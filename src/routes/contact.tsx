/**
 * Contact page — contact info, form, and FAQ.
 *
 * The form submission is client-side only for now (logs + toast). To wire it
 * up to a real inbox, use EmailJS, Resend, or a Lovable Cloud server function.
 * Placeholder integration point is marked in `onSubmit` below.
 */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { FiMail, FiMapPin, FiPhone, FiMessageSquare, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/animated/reveal";
import { profile, faqs } from "@/data/content";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      { name: "description", content: `Get in touch with ${profile.name} for new projects, retainers, and collaborations.` },
      { property: "og:title", content: `Contact — ${profile.name}` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

// Zod schema — validate before submit to prevent injection/malformed data.
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form) as Record<string, string>;

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      // ------------------------------------------------------------------
      // TODO: replace this stub with a real integration.
      // Options:
      //  1. EmailJS: import emailjs and call emailjs.send(SERVICE_ID, TEMPLATE_ID, parsed.data, PUBLIC_KEY)
      //  2. Resend / SendGrid: post to a Lovable Cloud server function
      //     (createServerFn) that calls the provider with a secret API key.
      //  3. Formspree / Getform: post to the endpoint URL directly.
      // ------------------------------------------------------------------
      await new Promise((r) => setTimeout(r, 800));
      console.log("[contact] submission", parsed.data);
      toast.success("Message sent — I'll reply within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something amazing together."
        description="Have a project in mind, or just want to say hi? I reply to every message within 24 hours."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <Reveal className="lg:col-span-2 space-y-4">
            <InfoCard icon={<FiMail />} title="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <InfoCard icon={<FiPhone />} title="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
            <InfoCard icon={<FaWhatsapp />} title="WhatsApp" value={profile.whatsapp} href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`} />
            <InfoCard icon={<FiMapPin />} title="Location" value={profile.location} />
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Response Time
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm">Usually replies within 24 hours</span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="p-8 md:p-10 rounded-3xl border border-border bg-card space-y-5"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <span className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <FiMessageSquare />
                </span>
                <div>
                  <div className="font-display text-xl font-bold">Start a conversation</div>
                  <div className="text-xs text-muted-foreground mt-0.5">All fields except phone are required</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field name="name" label="Name" placeholder="Jane Doe" error={errors.name} />
                <Field name="email" label="Email" placeholder="jane@company.com" type="email" error={errors.email} />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field name="phone" label="Phone (optional)" placeholder="+1 555 010 2024" error={errors.phone} />
                <Field name="subject" label="Subject" placeholder="New React project" error={errors.subject} />
              </div>
              <Field
                name="message"
                label="Message"
                placeholder="Tell me about your project, timeline, and budget..."
                as="textarea"
                error={errors.message}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : <>Send message <FiSend /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-border bg-surface/30">
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
    </>
  );
}

function InfoCard({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group">
      <span className="shrink-0 size-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <div>
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{title}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  as = "input",
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
}) {
  const base =
    "w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} placeholder={placeholder} rows={5} className={base} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={base} />
      )}
      {error && <span className="mt-2 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
