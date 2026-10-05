import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { formatDate, type Story } from "@/lib/content";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[86rem] px-5 sm:px-8", className)}>{children}</div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="rule-top grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 pt-5">
      <div className="min-w-0">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
      </div>
      {action ? <div className="shrink-0 pb-1">{action}</div> : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  );
}

export function MoreLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="whitespace-nowrap border-b border-ember/60 pb-0.5 text-sm text-ember transition-colors hover:border-ember hover:text-ember-soft"
    >
      {children}
    </Link>
  );
}

export function StoryCard({ story, priority = false }: { story: Story; priority?: boolean }) {
  return (
    <article className="group">
      <Link to="/reporting/$slug" params={{ slug: story.slug }} className="block">

        <div className="film-grain relative aspect-[4/3] overflow-hidden bg-card">
          <img
            src={story.image}
            alt=""
            width={1200}
            height={800}
            loading={priority ? "eager" : "lazy"}
            className="size-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Tag>{story.category}</Tag>
          <Tag>{story.topic}</Tag>
        </div>
        <h3 className="mt-3 text-xl leading-snug transition-colors group-hover:text-ember sm:text-2xl">
          {story.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {story.dek}
        </p>
        <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
          {formatDate(story.date)} · {story.readTime}
        </p>
      </Link>
    </article>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-ember pl-5 font-display text-xl leading-relaxed text-foreground sm:my-14 sm:pl-8 sm:text-2xl">
      {children}
    </blockquote>
  );
}

export function FactStrip({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <dl className="rule-top grid gap-6 pt-6 sm:grid-cols-3">
      {facts.map((f) => (
        <div key={f.label}>
          <dt className="eyebrow">{f.label}</dt>
          <dd className="mt-2 font-display text-2xl">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 border border-dashed border-border px-4 py-3 font-mono text-[0.6875rem] leading-relaxed uppercase tracking-[0.14em] text-muted-foreground">
      {children}
    </p>
  );
}
