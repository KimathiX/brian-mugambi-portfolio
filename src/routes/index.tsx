import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { site, images, videos, experience, education } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brian Mugambi — Investigative Journalist" },
      {
        name: "description",
        content:
          "The reporting portfolio of Brian Mugambi: investigations, long-form journalism, documentary video and interviews.",
      },
      { property: "og:title", content: "Brian Mugambi — Investigative Journalist" },
      {
        property: "og:description",
        content: "Investigations, long-form reporting, documentary video and interviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function IndexLabel({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[0.625rem] uppercase text-muted-foreground">{children}</span>;
}

function Home() {

  return (
    <div className="mx-auto max-w-[90rem] px-3 pb-3 pt-24 sm:px-6 sm:pb-6 lg:pt-28">
      <div className="border border-border">
        <section className="grid min-h-[calc(100svh-8rem)] lg:grid-cols-[5rem_minmax(0,1fr)]">
          <aside className="hidden flex-col items-center justify-between border-r border-border py-10 lg:flex">
            <div className="flex rotate-180 items-center gap-5 [writing-mode:vertical-rl]">
              <IndexLabel>Independent · Nairobi</IndexLabel>
              <span className="h-12 w-px bg-border" />
              <span className="font-display text-lg font-semibold uppercase">{site.name}</span>
            </div>
            <span className="size-2 bg-ember" />
          </aside>

          <div className="grid min-w-0 grid-rows-[minmax(0,1fr)_auto]">
            <div className="grid min-h-0 lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,0.75fr)]">
              <div className="flex min-w-0 flex-col justify-between border-b border-border p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14 xl:p-16">
                <div className="flex items-center justify-between gap-6">
                  <IndexLabel>Portfolio / 2026</IndexLabel>
                  <span className="font-mono text-[0.625rem] uppercase text-ember-soft">Available for projects</span>
                </div>
                <div className="py-16 sm:py-20 lg:py-10">
                  <h1 className="max-w-[11ch] text-[clamp(3.8rem,8.4vw,8.5rem)] font-medium uppercase leading-[0.82]">
                    Brian
                    <br />
                    <span className="editorial-outline ml-[0.45em]">Mugambi</span>
                  </h1>
                  <div className="mt-10 grid max-w-3xl gap-8 border-t border-border pt-6 sm:grid-cols-[8rem_1fr]">
                    <IndexLabel>Journalist / Storyteller</IndexLabel>
                    <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {site.tagline} Investigations, records and field reporting from Kenya.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 font-mono text-[0.625rem] uppercase">
                  <Link to="/video" className="border-b border-ember pb-1 text-foreground transition-colors hover:text-ember">
                    Watch videos
                  </Link>
                  <Link to="/contact" className="border-b border-border pb-1 text-muted-foreground transition-colors hover:text-foreground">
                    Contact
                  </Link>
                </div>
              </div>

              <Link to="/about" className="group relative min-h-[28rem] overflow-hidden bg-card lg:min-h-0">
                <img
                  src={images.portraitImg}
                  alt={`Portrait of ${site.name} (placeholder image)`}
                  width={1200}
                  height={1504}
                  className="size-full object-cover grayscale transition duration-1000 group-hover:scale-[1.025] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                  <div>
                    <IndexLabel>Current focus</IndexLabel>
                    <p className="mt-2 max-w-[16rem] font-display text-lg font-medium uppercase">Media personality · Video editor · Crafting narratives for the voiceless through the lens of media</p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-ember transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

          </div>
        </section>

        <section className="grid border-t border-border lg:grid-cols-[5rem_minmax(0,1fr)]">
          <div className="hidden border-r border-border p-5 lg:block"><IndexLabel>03 / Watch</IndexLabel></div>
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <IndexLabel>Moving image</IndexLabel>
              <h2 className="mt-3 text-4xl font-medium uppercase sm:text-6xl">Documentary</h2>
              <Link to="/video" className="group relative mt-10 block aspect-video overflow-hidden bg-card">
                <img src={videos[0]?.image} alt="" width={1200} height={800} loading="lazy" className="size-full object-cover grayscale transition duration-1000 group-hover:scale-[1.03] group-hover:grayscale-0" />
                <span className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full border border-foreground bg-background/70 backdrop-blur-sm"><Play className="size-5 fill-foreground" /></span></span>
              </Link>
              <h3 className="mt-5 text-2xl font-medium">{videos[0]?.title}</h3>
            </div>
            <div className="flex flex-col justify-between p-6 sm:p-10">
              <div>
                <IndexLabel>More work</IndexLabel>
                <h2 className="mt-3 text-4xl font-medium uppercase sm:text-6xl">Video</h2>
                <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                  Brian produces and edits news features for the Bob Mwiti Foundation — stories of education, courage and opportunity told through film.
                </p>
              </div>
              <Link to="/video" className="mt-10 inline-flex items-center gap-2 border-b border-ember pb-1 font-mono text-[0.625rem] uppercase">
                Watch all videos <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 04 / Career */}
        <section className="grid border-t border-border lg:grid-cols-[5rem_minmax(0,1fr)]">
          <div className="hidden border-r border-border p-5 lg:block"><IndexLabel>04 / Career</IndexLabel></div>
          <div className="p-6 sm:p-10">
            <div className="flex items-end justify-between gap-6 border-b border-border pb-6 sm:pb-10">
              <div>
                <IndexLabel>Work history</IndexLabel>
                <h2 className="mt-3 text-4xl font-medium uppercase sm:text-6xl">Experience</h2>
              </div>
            </div>
            <ol className="divide-y divide-border">
              {experience.map((job) => (
                <li key={job.role} className="grid gap-4 py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-card font-display text-lg font-bold uppercase text-ember">{job.initials}</div>
                  <div>
                    <h3 className="text-xl font-medium">{job.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.org} · {job.type}</p>
                    <p className="mt-1 font-mono text-[0.625rem] uppercase text-ember-soft">{job.period} · {job.duration}</p>
                    <p className="mt-1 font-mono text-[0.625rem] uppercase text-muted-foreground">{job.location} · {job.mode}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 05 / Education */}
        <section className="grid border-t border-border lg:grid-cols-[5rem_minmax(0,1fr)]">
          <div className="hidden border-r border-border p-5 lg:block"><IndexLabel>05 / Education</IndexLabel></div>
          <div className="p-6 sm:p-10">
            <div className="flex items-end justify-between gap-6 border-b border-border pb-6 sm:pb-10">
              <div>
                <IndexLabel>Academic background</IndexLabel>
                <h2 className="mt-3 text-4xl font-medium uppercase sm:text-6xl">Education</h2>
              </div>
            </div>
            <ol className="divide-y divide-border">
              {education.map((item) => (
                <li key={item.institution} className="grid gap-4 py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-card font-display text-lg font-bold uppercase text-ember">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{item.institution}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.degree}{item.field !== item.degree ? ` · ${item.field}` : ""}</p>
                    <p className="mt-1 font-mono text-[0.625rem] uppercase text-ember-soft">{item.period}</p>
                    <p className="mt-1 font-mono text-[0.625rem] uppercase text-muted-foreground">{item.location}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}