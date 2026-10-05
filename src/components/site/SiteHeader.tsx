import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Linkedin, Youtube } from "lucide-react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/video", label: "Video" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <Link to="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-lg font-semibold uppercase sm:text-xl">
            {site.name}
          </span>
          <span className="eyebrow mt-0.5 block truncate">Journalist · Video Editor</span>
        </Link>

        <nav className="hidden items-center gap-6 font-mono lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-1 text-[0.65rem] uppercase text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-ember transition-all duration-300",
                      isActive ? "w-full" : "w-0",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://www.linkedin.com/in/brian-mugambi-973869220/" target="_blank" rel="noreferrer"
            aria-label="LinkedIn" className="flex size-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">
            <Linkedin className="size-3.5" />
          </a>
          <a href="https://www.youtube.com/@BobMwiti-b6u" target="_blank" rel="noreferrer"
            aria-label="YouTube" className="flex size-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">
            <Youtube className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-5 pb-16 pt-6 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.to} className="border-b border-border/70">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                  activeProps={{ className: "text-ember" }}
                >
                  <span className="font-display text-3xl">{item.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
