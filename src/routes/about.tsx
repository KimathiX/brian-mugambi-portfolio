import { createFileRoute, Link } from "@tanstack/react-router";
import { site, images, timeline, beats } from "@/lib/content";
import { Container, PlaceholderNote } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brian Mugambi — News Journalist & Video Editor" },
      {
        name: "description",
        content:
          "Meet Brian Mugambi, a media personality, news journalist and video editor at the Bob Mwiti Foundation.",
      },
      { property: "og:title", content: "About Brian Mugambi" },
      {
        property: "og:description",
        content: "Brian Mugambi’s work in news, video editing and human-interest storytelling.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Brian Mugambi",
          jobTitle: "News Journalist and Video Editor",
          worksFor: { "@type": "Organization", name: site.organization },
          description: site.intro,
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pb-16 pt-32 sm:pt-40">
      <Container>
        <p className="eyebrow">About</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(2.2rem,7vw,4.5rem)] leading-[1] tracking-[-0.03em]">
          Giving voice to stories that matter
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div className="film-grain relative aspect-[4/5] overflow-hidden bg-card lg:sticky lg:top-28 lg:self-start">
            <img
              src={images.portraitImg}
              alt={`Portrait of ${site.name}`}
              width={1200}
              height={1504}
              className="size-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="font-display text-2xl leading-snug sm:text-3xl">{site.intro}</p>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Growing up in Kenya and studying Broadcast Journalism at Multimedia University of Kenya,
                Brian developed a deep conviction that media should serve communities — not just reflect power.
                He graduated in 2024 and immediately put that conviction to work.
              </p>
              <p>
                At the Bob Mwiti Foundation, he operates at the intersection of journalism and social impact,
                reporting on real people — students who sell firewood to pay school fees, families navigating
                hardship with quiet dignity — and editing their stories into news features that move audiences.
              </p>
              <p>
                His career spans television news reporting at Hope Media Kenya, media instruction at MIBS College
                Meru, and digital media analysis at the International Scholars Program. Across every role,
                the throughline is the same: storytelling as a tool for change.
              </p>
            </div>

            <section className="rule-top mt-14 pt-6">
              <p className="eyebrow">Beats</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {beats.map((b) => (
                  <li key={b} className="border border-border px-4 py-3 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rule-top mt-14 pt-6">
              <p className="eyebrow">Current role</p>
              <ul className="mt-6 space-y-6">
                {timeline.map((t) => (
                  <li key={t.year} className="grid grid-cols-[4rem_minmax(0,1fr)] gap-4">
                    <span className="font-mono text-sm text-ember">{t.year}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{t.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rule-top mt-14 pt-6">
              <p className="eyebrow">Working together</p>
              <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-muted-foreground">
                 For video editing, journalism and media collaborations, use the contact page.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-block bg-ember px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact
              </Link>
            </section>

          </div>
        </div>
      </Container>
    </div>
  );
}
