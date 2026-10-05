import { Link } from "@tanstack/react-router";
import { site } from "@/lib/content";

const columns = [
  {
    title: "Work",
    links: [
      { to: "/video", label: "Video" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact & tips" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="rule-top mt-0 bg-background">
      <div className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="eyebrow">{site.role}</p>
            <p className="mt-4 font-display text-2xl font-medium uppercase leading-snug sm:text-3xl">{site.tagline}</p>
            <Link
              to="/contact"
              className="mt-6 inline-block border-b border-ember pb-0.5 text-sm text-ember transition-colors hover:text-ember-soft"
            >
              Get in touch
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex gap-4 border-t border-border pt-6">
          <a href="https://www.linkedin.com/in/brian-mugambi-973869220/" target="_blank" rel="noreferrer"
            className="font-mono text-[0.625rem] uppercase text-muted-foreground transition-colors hover:text-foreground">LinkedIn</a>
          <a href="https://www.youtube.com/@BobMwiti-b6u" target="_blank" rel="noreferrer"
            className="font-mono text-[0.625rem] uppercase text-muted-foreground transition-colors hover:text-foreground">YouTube</a>
        </div>
        <div className="mt-6 flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
          <p className="shrink-0 font-mono">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
