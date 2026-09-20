// All site copy lives here so it can be edited in one place.

export const site = {
  name: "Kerr Life Vision",
  person: "Todd Kerr",
  email: "kerr.systems@gmail.com",
  url: "https://kerrlifevision.com",
  description:
    "Find Peace. Build Purpose. Live with Vision. The personal hub of Todd Kerr — Aging With Honor, Kerr Systems, Marketplace Global, and the books.",
};

export const anchors = ["Faith", "Family", "Dignity", "Purpose"];

export const hero = {
  eyebrow: "Kerr Life Vision · Todd Kerr · Central Iowa",
  title: "Find Peace. Build Purpose. Live with Vision.",
  lede: "A place for faith, healing, and real-life perspective. After losing my nephew Dawson at 21, I built Kerr Life Vision.",
  sub: "Four things run through all of it: faith, family, dignity, and purpose.",
};

export const social = [
  { label: "Facebook", href: "https://www.facebook.com/KerrLifeVisionTeam" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/todd-kerr-54b7a5287" },
];

export const intro = [
  "I am not a writer by trade or a marketer by training. I am a medical equipment tech who kept seeing the same things on his route and could not leave them alone.",
  "Families who did not know what a Medicare word meant until it cost them thousands. Good people doing hard caregiving work with almost no support. Rooms where somebody's mother was being handled instead of cared for.",
  "So I started building. Some of it is a mission, some of it pays the bills, and some of it is a way to keep a promise. This page is the short version and the way through to each piece.",
];

export type Brand = {
  slug: string;
  name: string;
  role: string;
  blurb: string;
  body: string[];
  href: string;
  hrefLabel: string;
};

export const brands: Brand[] = [
  {
    slug: "aging-with-honor",
    name: "Aging With Honor",
    role: "The mission",
    blurb:
      "Faith, family, and dignity in every season. Plain-language help for families walking someone through aging, caregiving, and the decisions nobody prepares you for.",
    body: [
      "Aging With Honor is the reason the rest of this exists. It grew directly out of the route, out of watching families get blindsided by rules they had never heard of, and caregivers carry weight nobody was helping them carry.",
      "It is free to read and it is meant to stay that way. Medicare observation status, the first ninety days of caregiving, what to ask and when to push back. The things I wish somebody had handed my own family.",
      "If one piece of it saves a family a bill they should never have owed, it has done its job.",
    ],
    href: "https://agingwithhonor.com",
    hrefLabel: "agingwithhonor.com",
  },
  {
    slug: "kerr-systems",
    name: "Kerr Systems",
    role: "The studio",
    blurb:
      "Done-for-you websites and automation for small businesses that need a working site more than they need a project.",
    body: [
      "Most small business owners do not want a website project. They want a site that is already done, already fast, already saying the right thing, and somebody who keeps it running.",
      "That is what Kerr Systems is. Clean one-page sites, built and deployed, with the follow-up automations that stop leads from falling through the cracks.",
      "It is also what pays for the rest of what I build.",
    ],
    href: "https://kerr.systems",
    hrefLabel: "kerr.systems",
  },
  {
    slug: "marketplace-global",
    name: "Marketplace Global",
    role: "The business",
    blurb:
      "VeraCell and PHIX, and a mission that puts food in a child's hands with every order through MannaRelief.",
    body: [
      "Marketplace Global is a working business, not a someday plan. VeraCell and PHIX are the products, and MannaRelief is the part that made me pay attention in the first place.",
      "One bag, one child. Every order sends nutrition to a kid who needs it. That is not a marketing line bolted onto a product, it is built into how the thing runs.",
      "If you want to look at it honestly, ask me and I will show you the real numbers instead of a pitch.",
    ],
    href: "mailto:kerr.systems@gmail.com",
    hrefLabel: "Ask me about it",
  },
  {
    slug: "books",
    name: "The Books",
    role: "The writing",
    blurb:
      "Please Tell Me Why, Father. Heaven's Blueprint. Unwhistled. Three books that came out of the same stubborn streak.",
    body: [
      "**Please Tell Me Why, Father** is the story of losing Dawson, and of asking God the question in the title without getting a clean answer back. Part memoir, part companion for anybody sitting in the same place. It is the most personal thing I have written.",
      "**Heaven's Blueprint** came later, and it is the more practical one. I wrote it from the front seat of a delivery route, hauling oxygen tanks and hospital beds into houses where somebody was fighting for one more good day. Ten chapters on calling, health, faith, relationships, and the legacy you leave.",
      "**Unwhistled** is the other side of me entirely. An investigative look at officiating in the WNBA, published under the Game Integrity Journal imprint. It exists because something did not add up and nobody seemed willing to say so plainly.",
      "All three are on Amazon.",
    ],
    href: "https://www.amazon.com",
    hrefLabel: "Find them on Amazon",
  },
];

export const story = {
  title: "The route, and what it taught me",
  body: [
    "I grew up in Fredericksburg, Iowa, raised mostly by my mother Joan. That matters to how I see all of this, because I watched one person carry a load meant for two and never once make it anyone else's problem.",
    "Now I work for UnityPoint at Home out of Urbandale as a medical equipment hazmat tech. Three years on the same route. Nursing homes, care facilities, private homes. I bring in the equipment, I service it, I take it back out.",
    "What that job really gives me is access. I am in rooms most people never see. I meet the families on the worst week of their year. I meet the aides who know every resident by name and are three hours into a double shift. I see which places treat people like people and which ones do not.",
    "You cannot see that every day for three years and go home unchanged. At some point you either look away or you start building something.",
    "I started building. Aging With Honor came first because the need was loudest. Kerr Systems came because the building had to pay for itself. The rest followed.",
    "Faith runs under it. I am not interested in preaching at anybody, and you will not find much of that here. But I do believe the way we treat people at their weakest is the truest thing about us, and that belief is why I keep going back out on the route and then coming home to write.",
  ],
};

export const dawson = {
  name: "Dawson Lee Kerr",
  short: "Dawson",
  line: "Kerr Life Vision began with the loss of my nephew Dawson, at 21.",
  photo: true,
  // TK's own words go here when he is ready. Leave empty and the page
  // shows only his name and his photo, which is enough.
  words: [] as string[],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Story" },
  { href: "/aging-with-honor", label: "Aging With Honor" },
  { href: "/kerr-systems", label: "Kerr Systems" },
  { href: "/marketplace-global", label: "Marketplace Global" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
];
