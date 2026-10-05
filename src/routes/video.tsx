import { createFileRoute } from "@tanstack/react-router";
import { videos } from "@/lib/content";
import { Container, Tag } from "@/components/site/primitives";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/video")({
  head: () => ({
    meta: [
      { title: "Video & Documentary — Brian Mugambi" },
      {
        name: "description",
        content:
          "Selected news and human-interest video work edited and reported by Brian Mugambi for the Bob Mwiti Foundation.",
      },
      { property: "og:title", content: "Video & Documentary — Brian Mugambi" },
      {
        property: "og:description",
        content: "Selected news and human-interest videos by Brian Mugambi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://i.ytimg.com/vi/yEJ3mqTEuZU/hqdefault.jpg" },
      { name: "twitter:image", content: "https://i.ytimg.com/vi/yEJ3mqTEuZU/hqdefault.jpg" },
      { property: "og:url", content: "/video" },
    ],
    links: [{ rel: "canonical", href: "/video" }],
  }),
  component: VideoPage,
});

function VideoPage() {
  const [lead, ...rest] = videos;
  return (
    <div className="pb-16 pt-32 sm:pt-40">
      <Container>
        <p className="eyebrow">Moving image</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2.2rem,7vw,4.5rem)] leading-[1] tracking-[-0.03em]">
          Video &amp; documentary
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          News and human-interest stories produced for the Bob Mwiti Foundation, where Brian works
          as an editor and news journalist.
        </p>

        {lead && (
          <section className="mt-12">
            <div className="relative aspect-video overflow-hidden bg-card">
              <iframe
                className="absolute inset-0 size-full"
                src={`https://www.youtube-nocookie.com/embed/${lead.videoId}`}
                title={lead.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  <Tag>{lead.format}</Tag>
                  <Tag>{lead.runtime}</Tag>
                  <Tag>{lead.year}</Tag>
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl">{lead.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{lead.dek}</p>
            </div>
          </section>
        )}

        <section className="rule-top mt-16 pt-6">
          <p className="eyebrow">More films</p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((v) => (
              <a key={v.slug} href={v.url} target="_blank" rel="noreferrer" className="group block">
                <div className="relative aspect-video overflow-hidden bg-card">
                  <img
                    src={v.image}
                    alt=""
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="size-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <span className="absolute bottom-3 left-3 bg-background/80 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] backdrop-blur">
                    {v.runtime}
                  </span>
                </div>
                <h3 className="mt-4 flex items-start justify-between gap-4 text-xl leading-snug">{v.title}<ArrowUpRight className="mt-1 size-4 shrink-0 text-ember" /></h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.dek}</p>
                <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {v.format} · {v.year}
                </p>
              </a>
            ))}
          </div>
        </section>

        <a
          href="https://www.youtube.com/@BobMwiti-b6u"
          target="_blank"
          rel="noreferrer"
          className="mt-14 inline-flex items-center gap-3 border-b border-ember pb-1 font-mono text-xs uppercase text-ember"
        >
          More work on the Bob Mwiti Foundation channel <ArrowUpRight className="size-4" />
        </a>
      </Container>
    </div>
  );
}
