import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/lib/content";
import { Container } from "@/components/site/primitives";
import { Lock, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Secure Tips — Brian Mugambi" },
      {
        name: "description",
        content:
          "How to reach journalist Brian Mugambi for commissions, corrections and confidential tips. Placeholder contact details for demonstration.",
      },
      { property: "og:title", content: "Contact & Secure Tips — Brian Mugambi" },
      {
        property: "og:description",
        content: "Reach out for commissions, corrections or to share documents confidentially.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pb-16 pt-32 sm:pt-40">
      <Container>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2.2rem,7vw,4.5rem)] leading-[1] tracking-[-0.03em]">
          Send a story, a document, or a correction
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Everything shared is treated as confidential until agreed otherwise. If your material is
          sensitive, use an encrypted channel rather than this form.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="min-w-0">
            {sent ? (
              <div className="border border-ember p-8">
                <p className="font-display text-2xl">Message noted</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your message has been sent. Brian will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 border-b border-ember pb-0.5 text-sm text-ember"
                >
                  Write another
                </button>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/brianmugambi"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" },
                  }).then(() => setSent(true));
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <Field label="Subject" name="subject" />
                <label className="block">
                  <span className="eyebrow">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={7}
                    className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ember"
                  />
                </label>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" className="mt-1 accent-[var(--ember)]" />
                  <span>Please treat this message as off the record until we speak.</span>
                </label>
                <button
                  type="submit"
                  className="w-full bg-ember px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rule-top pt-5">
              <p className="eyebrow">Direct</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-ember" />
                  <span>{site.email}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ember" />
                  <span>{site.location}</span>
                </li>
              </ul>
            </div>

            <div className="rule-top pt-5">
              <p className="eyebrow">Connect</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a href="https://www.linkedin.com/in/brian-mugambi-973869220/" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                    LinkedIn — Brian Mugambi
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@BobMwiti-b6u" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                    YouTube — Bob Mwiti Foundation
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        name={name}
        required
        className="mt-2 w-full border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ember"
      />
    </label>
  );
}
