/**
 * Placeholder content model for the Brian Mugambi portfolio.
 *
 * Everything in this file is PLACEHOLDER copy written for layout purposes.
 * No publication, award, affiliation or social account referenced here is
 * real; each is explicitly marked as a placeholder.
 */

import heroImg from "@/assets/hero.jpg";
import portraitImg from "@/assets/portrait.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import brianPortrait from "@/assets/brian-mugambi-profile.jpg";

export const images = {
  heroImg,
  portraitImg: brianPortrait,
  story1,
  story2,
  story3,
  story4,
};

export const site = {
  name: "Brian Mugambi",
  role: "News Journalist · Video Editor · Media Personality",
  tagline: "Crafting narratives for the voiceless through the lens of media.",
  intro:
    "Brian Mugambi is a media personality, news journalist and video editor at the Bob Mwiti Foundation. He reports and shapes stories about people working to overcome hardship and pursue their dreams through education.",
  location: "Nairobi / Meru, Kenya",
  email: "brianmugambi@email.com",
  organization: "Bob Mwiti Foundation",
  organizationUrl: "https://www.youtube.com/@BobMwiti-b6u",
  mission:
    "The Bob Mwiti Foundation supports people in need to pursue their dreams through school-fee assistance. Brian serves the mission as an editor and news journalist.",
  social: {
    linkedin: "https://www.linkedin.com/in/brian-mugambi-973869220/",
    youtube: "https://www.youtube.com/@BobMwiti-b6u",
  },
};

export type Category = "Reporting" | "Investigation" | "Video" | "Interview";

export interface Story {
  slug: string;
  title: string;
  dek: string;
  category: Category;
  topic: string;
  outlet: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  body: string[];
  pullquote?: string;
  facts?: { label: string; value: string }[];
}

export const stories: Story[] = [
  {
    slug: "the-ledger-nobody-audited",
    title: "The Ledger Nobody Audited",
    dek: "Eleven years of county procurement records, reconstructed page by page, show a pattern of contracts awarded to firms registered weeks before they bid.",
    category: "Investigation",
    topic: "Public money",
    outlet: "Placeholder Outlet",
    date: "2026-05-14",
    readTime: "18 min",
    image: story1,
    featured: true,
    pullquote:
      "\u201CThe paperwork was never hidden. It was simply never read.\u201D [Placeholder quote]",
    facts: [
      { label: "Documents reviewed", value: "4,120 (placeholder)" },
      { label: "Months reporting", value: "14 (placeholder)" },
      { label: "Interviews", value: "63 (placeholder)" },
    ],
    body: [
      "Placeholder opening scene. A description of a room, a person and a stack of paper, written in the register of long-form reporting so the layout can be judged against realistic line lengths and paragraph rhythm.",
      "Placeholder nut graf explaining what the investigation found, how long it took and what the records show. This paragraph carries the weight of the piece and is intentionally denser than the paragraphs around it.",
      "Placeholder methodology paragraph. Records were requested, cross-checked against a second source and reconciled with interviews. Where a figure could not be confirmed twice, it does not appear.",
      "Placeholder response paragraph. Officials named in this story were contacted and given time to respond. Their replies, where given, appear in full in the appendix.",
      "Placeholder closing paragraph, returning to the opening scene and leaving the reader with the human consequence rather than the number.",
    ],
  },
  {
    slug: "water-that-never-arrived",
    title: "Water That Never Arrived",
    dek: "A pipeline was announced four times in nine years. This is what was actually built, measured against what was paid for.",
    category: "Investigation",
    topic: "Infrastructure",
    outlet: "Placeholder Outlet",
    date: "2026-03-02",
    readTime: "12 min",
    image: story2,
    featured: true,
    pullquote: "\u201CWe were told to wait for the rains instead.\u201D [Placeholder quote]",
    facts: [
      { label: "Sites visited", value: "9 (placeholder)" },
      { label: "Public tenders traced", value: "17 (placeholder)" },
    ],
    body: [
      "Placeholder scene from the field, written to test how images and text interleave on narrow screens.",
      "Placeholder findings paragraph summarising the gap between announcement and delivery.",
      "Placeholder accountability paragraph describing what the responsible agency said when asked.",
      "Placeholder closing paragraph.",
    ],
  },
  {
    slug: "night-market-economy",
    title: "The Night Market Economy",
    dek: "After the stalls close officially at seven, a second market opens. It supports thousands of households and appears in no statistic.",
    category: "Reporting",
    topic: "Cities",
    outlet: "Placeholder Outlet",
    date: "2026-01-19",
    readTime: "9 min",
    image: story3,
    featured: true,
    body: [
      "Placeholder narrative opening built around a single trader and a single night.",
      "Placeholder context paragraph on informal work and why it is undercounted.",
      "Placeholder paragraph with reported detail: prices, hours, routes, risks.",
      "Placeholder ending.",
    ],
  },
  {
    slug: "the-room-where-the-file-sat",
    title: "The Room Where the File Sat",
    dek: "How a single unopened folder delayed a decision for six years, and who paid for the delay.",
    category: "Reporting",
    topic: "Governance",
    outlet: "Placeholder Outlet",
    date: "2025-11-08",
    readTime: "7 min",
    image: story1,
    body: [
      "Placeholder reported feature text.",
      "Placeholder second paragraph.",
      "Placeholder third paragraph.",
    ],
  },
  {
    slug: "land-lines",
    title: "Land Lines",
    dek: "Boundary maps redrawn without notice, and the families who found out when the fence went up.",
    category: "Reporting",
    topic: "Land",
    outlet: "Placeholder Outlet",
    date: "2025-09-27",
    readTime: "11 min",
    image: story2,
    body: [
      "Placeholder reported feature text.",
      "Placeholder second paragraph.",
      "Placeholder third paragraph.",
    ],
  },
  {
    slug: "after-the-cameras-left",
    title: "After the Cameras Left",
    dek: "A year later, returning to a story everyone covered once and nobody followed.",
    category: "Reporting",
    topic: "Follow-up",
    outlet: "Placeholder Outlet",
    date: "2025-07-11",
    readTime: "8 min",
    image: story4,
    body: [
      "Placeholder reported feature text.",
      "Placeholder second paragraph.",
      "Placeholder third paragraph.",
    ],
  },
];

export interface Investigation {
  slug: string;
  title: string;
  dek: string;
  status: "Published" | "Ongoing" | "Archived";
  years: string;
  scope: string;
  image: string;
  summary: string;
  methods: string[];
  findings: { heading: string; text: string }[];
  documents: { label: string; note: string }[];
}

export const investigations: Investigation[] = [
  {
    slug: "the-ledger",
    title: "The Ledger",
    dek: "A multi-part examination of county procurement records and the firms that won them.",
    status: "Published",
    years: "2024 – 2026",
    scope: "Public money · 4 counties (placeholder)",
    image: story1,
    summary:
      "Placeholder investigation summary describing the scope of the records obtained, the period covered and the central question the reporting set out to answer.",
    methods: [
      "Records requests filed with each county authority (placeholder)",
      "Company registry cross-matching by director name and address (placeholder)",
      "Field verification of 22 delivery sites (placeholder)",
      "Independent review of the dataset by an outside analyst (placeholder)",
    ],
    findings: [
      {
        heading: "A pattern in registration dates",
        text: "Placeholder finding text describing the timing relationship between company registration and tender award.",
      },
      {
        heading: "Repeat addresses",
        text: "Placeholder finding text describing shared addresses across ostensibly unrelated bidders.",
      },
      {
        heading: "Deliveries that cannot be located",
        text: "Placeholder finding text describing site visits where paid-for works were not found.",
      },
    ],
    documents: [
      { label: "Procurement schedule 2019–2025", note: "Placeholder document, not published" },
      { label: "Registry extract set A", note: "Placeholder document, not published" },
      { label: "Field verification log", note: "Placeholder document, not published" },
    ],
  },
  {
    slug: "dry-season",
    title: "Dry Season",
    dek: "Tracing nine years of water infrastructure spending against what exists on the ground.",
    status: "Ongoing",
    years: "2025 – present",
    scope: "Infrastructure · Rural supply (placeholder)",
    image: story2,
    summary:
      "Placeholder summary for an ongoing investigation, including a note that findings are provisional and will be updated as reporting continues.",
    methods: [
      "Tender-to-site matching (placeholder)",
      "Satellite imagery comparison across seasons (placeholder)",
      "Household interviews in nine settlements (placeholder)",
    ],
    findings: [
      {
        heading: "Announcements outpace construction",
        text: "Placeholder provisional finding text.",
      },
      { heading: "Maintenance budgets unspent", text: "Placeholder provisional finding text." },
    ],
    documents: [
      { label: "Tender index 2017–2026", note: "Placeholder document, not published" },
      { label: "Site survey notes", note: "Placeholder document, not published" },
    ],
  },
  {
    slug: "paper-boundaries",
    title: "Paper Boundaries",
    dek: "How administrative map revisions moved property lines without public notice.",
    status: "Archived",
    years: "2023 – 2024",
    scope: "Land · Records (placeholder)",
    image: story3,
    summary: "Placeholder summary of a closed investigation retained here for the archive.",
    methods: ["Historic map comparison (placeholder)", "Title record sampling (placeholder)"],
    findings: [
      { heading: "Revisions without notice", text: "Placeholder finding text." },
      { heading: "Appeals rarely resolved", text: "Placeholder finding text." },
    ],
    documents: [{ label: "Map revision set", note: "Placeholder document, not published" }],
  },
];

export interface VideoPiece {
  slug: string;
  title: string;
  dek: string;
  runtime: string;
  format: string;
  year: string;
  image: string;
  videoId?: string;
  url?: string;
}

export const videos: VideoPiece[] = [
  {
    slug: "angel-gakenia",
    title: "Rugendo Rwa Angel Gakenia",
    dek: "Kugwatira Kiroto Mithangikone · Njota Cia Miiru. Produced for the Bob Mwiti Foundation channel.",
    runtime: "Watch",
    format: "News feature",
    year: "2026",
    image: "https://i.ytimg.com/vi/yEJ3mqTEuZU/hqdefault.jpg",
    videoId: "yEJ3mqTEuZU",
    url: "https://youtu.be/yEJ3mqTEuZU",
  },
  {
    slug: "blessing-kathambi",
    title: "Rugendo Rwa Blessing Kathambi",
    dek: "Gutaukirwa, Guciata Na Arimu Ba Bata · Njota Cia Miiru. Produced for the Bob Mwiti Foundation channel.",
    runtime: "Watch",
    format: "News feature",
    year: "2026",
    image: "https://i.ytimg.com/vi/AW-L4S8SjII/hqdefault.jpg",
    videoId: "AW-L4S8SjII",
    url: "https://youtu.be/AW-L4S8SjII",
  },
  {
    slug: "juster-karugi",
    title: "Rugendo Rwa Juster Karugi",
    dek: "Kwendia Nkuu, Utethio Bwa Mwarimu Na Undagitari · Njota Cia Miiru. Produced for the Bob Mwiti Foundation channel.",
    runtime: "Watch",
    format: "News feature",
    year: "2025",
    image: "https://i.ytimg.com/vi/Ck721YJ73GA/hqdefault.jpg",
    videoId: "Ck721YJ73GA",
    url: "https://youtu.be/Ck721YJ73GA",
  },
];

export interface Interview {
  slug: string;
  guest: string;
  descriptor: string;
  title: string;
  excerpt: string;
  date: string;
  format: "Audio" | "Video" | "Print";
}

export const interviews: Interview[] = [
  {
    slug: "interview-one",
    guest: "A. Placeholder",
    descriptor: "Former procurement officer (placeholder role)",
    title: "\u201CNobody asks where the file goes next.\u201D",
    excerpt:
      "Placeholder interview excerpt of two or three sentences, long enough to test how quoted text sits inside a card at both mobile and desktop widths.",
    date: "2026-04-22",
    format: "Audio",
  },
  {
    slug: "interview-two",
    guest: "B. Placeholder",
    descriptor: "Hydrologist (placeholder role)",
    title: "\u201CYou can model the rain. You cannot model the tender.\u201D",
    excerpt: "Placeholder interview excerpt for layout purposes.",
    date: "2026-02-15",
    format: "Video",
  },
  {
    slug: "interview-three",
    guest: "C. Placeholder",
    descriptor: "Market trader (placeholder role)",
    title: "\u201CWe open when the lights go off.\u201D",
    excerpt: "Placeholder interview excerpt for layout purposes.",
    date: "2025-12-03",
    format: "Print",
  },
  {
    slug: "interview-four",
    guest: "D. Placeholder",
    descriptor: "Records archivist (placeholder role)",
    title: "\u201CThe archive is honest. People are not.\u201D",
    excerpt: "Placeholder interview excerpt for layout purposes.",
    date: "2025-10-09",
    format: "Audio",
  },
];

export const timeline = [
  {
    year: "Now",
    text: "Editor and news journalist at the Bob Mwiti Foundation.",
  },
];

export const beats = [
  "News journalism",
  "Video editing",
  "Human-interest stories",
  "Education and opportunity",
];

export const education = [
  {
    institution: "Multimedia University of Kenya",
    degree: "Bachelor of Journalism",
    field: "Broadcast Journalism",
    period: "Oct 2020 – 2024",
    location: "Nairobi, Kenya",
    type: "university" as const,
    initials: "MU",
  },
  {
    institution: "Nairobi School",
    degree: "Kenya Certificate of Secondary Education",
    field: "Secondary Education",
    period: "Feb 2016 – Nov 2019",
    location: "Nairobi, Kenya",
    type: "school" as const,
    initials: "NS",
  },
];

export const experience = [
  {
    role: "Digital Media Analyst",
    org: "International Scholars Program",
    type: "Full-time",
    period: "Jul 2026 – Present",
    duration: "4 mos",
    location: "Meru, Meru County, Kenya",
    mode: "On-site",
    initials: "ISP",
  },
  {
    role: "Media Instructor",
    org: "MIBS College Meru",
    type: "Internship",
    period: "Jan 2025 – Jul 2026",
    duration: "1 yr 7 mos",
    location: "Meru, Kenya",
    mode: "On-site",
    initials: "MI",
  },
  {
    role: "Television News Reporter",
    org: "Hope Media Kenya",
    type: "Internship",
    period: "Jan 2024 – Mar 2024",
    duration: "3 mos",
    location: "Nairobi County, Kenya",
    mode: "On-site",
    initials: "TV",
  },
];

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const featuredStories = stories.filter((s) => s.featured);
export const reportingStories = stories;
