/**
 * Site copy and media slots.
 *
 * To replace placeholders: drop files in /public/media and set the
 * matching `src` field below.
 *
 *   hero.mp4              → media.hero.src
 *   trey-portrait.jpg     → media.portrait.src
 *   training-01.jpg       → media.training[0].src
 *   athlete-01.jpg        → results[0].portrait
 *   athlete-01.mp4        → results[0].video
 *   film-room.mp4         → media.film.src
 */

export const site = {
  name: "Trey Dillard Pitching",
  shortName: "TD PITCHING",
  tagline: "Become a complete pitcher.",
  descriptor: "Private pitching development",
};

export const nav = [
  { href: "/program", label: "Program" },
  { href: "/method", label: "Method" },
  { href: "/film", label: "Film" },
] as const;

export const media = {
  hero: {
    src: undefined as string | undefined,
    type: "video" as const,
    label: "HERO.MP4",
    caption: "Night bullpen — placeholder",
  },
  portrait: {
    src: undefined as string | undefined,
    type: "image" as const,
    label: "TREY-PORTRAIT.JPG",
    caption: "Portrait — placeholder",
  },
  film: {
    src: undefined as string | undefined,
    type: "video" as const,
    label: "FILM-ROOM.MP4",
    caption: "Delivery breakdown — placeholder",
  },
  training: [
    {
      src: undefined as string | undefined,
      label: "BULLPEN.JPG",
      caption: "Command work",
    },
    {
      src: undefined as string | undefined,
      label: "PHYSICAL.JPG",
      caption: "Force production",
    },
    {
      src: undefined as string | undefined,
      label: "PREP.JPG",
      caption: "Competition routine",
    },
  ],
};

export const hero = {
  eyebrow: "Private pitching development",
  headline: ["BECOME A", "COMPLETE", "PITCHER."],
  body: "Individualized pitching development for athletes who want more than a throwing program — mechanics, execution, preparation, and the mental side of competing.",
  primary: { href: "/contact", label: "GET STARTED" },
  secondary: { href: "/program", label: "EXPLORE THE PROGRAM" },
};

export const developmentIntro = {
  kicker: "Development",
  headline: ["Three systems.", "One pitcher."],
  body:
    "Physical force, delivery execution, and competitive mindset — trained as one integrated path, not three separate calendars.",
};

export const credibility = [
  {
    title: "MLB Draft",
    detail: "Los Angeles Dodgers · 16th round · 2018",
  },
  {
    title: "Mizzou Baseball",
    detail: "SEC · RHP · #47",
  },
  {
    title: "Professional Baseball",
    detail: "Drafted · college · pro systems",
  },
  {
    title: "Pitching Development",
    detail: "Delivery, command, stuff",
  },
  {
    title: "Mental Performance",
    detail: "Compete, prepare, execute",
  },
];

export const philosophy = {
  headline: ["YOU DON'T NEED", "ANOTHER GENERIC", "THROWING PROGRAM."],
  body: "Velocity without command is noise. Mechanics without intent is choreography. Stuff without a mind is luck. Pitching is a full system: the body that produces force, the delivery that directs it, the arsenal that sequences it, and the competitor who executes it when the inning is tight.",
  pillars: [
    { n: "01", label: "Physical ability" },
    { n: "02", label: "Mechanics" },
    { n: "03", label: "Pitch execution" },
    { n: "04", label: "Preparation" },
    { n: "05", label: "The mental game" },
  ],
};

export const development = [
  {
    id: "velocity",
    index: "01",
    title: "Velocity & Physical Development",
    kicker: "Force",
    body: "Build the athlete who can produce, transfer, and repeat speed. Strength, mobility, and intent — trained as one system, not a pile of lifts and long-toss days.",
    metric: { value: "90+", unit: "MPH", note: "Target zone, not a promise" },
    tone: "clay" as const,
  },
  {
    id: "pitching",
    index: "02",
    title: "Pitching / Command / Stuff",
    kicker: "Execution",
    body: "Shape the delivery. Sharpen the arsenal. Command is not “throw strikes.” It is locating with purpose, sequencing with conviction, and repeating under fatigue.",
    metric: { value: "FILM", unit: "FIRST", note: "Every session is documented" },
    tone: "stitch" as const,
  },
  {
    id: "mental",
    index: "03",
    title: "Mental Performance",
    kicker: "Compete",
    body: "The inning does not care how you felt in the bullpen. Routine, attention, and emotional control — trained with the same seriousness as the delivery.",
    metric: { value: "0–0", unit: "MIND", note: "Reset on every pitch" },
    tone: "void" as const,
  },
];

export const programs = [
  {
    id: "pitching",
    name: "Pitching Development",
    featured: false,
    summary:
      "Delivery, arsenal, and command work for athletes who need a tighter, more repeatable pitcher.",
    includes: [
      "Movement & mechanical evaluation",
      "Pitch design and command plans",
      "Live throwing + film review",
      "Between-session throwing structure",
    ],
  },
  {
    id: "mental",
    name: "Mental Performance",
    featured: false,
    summary:
      "Compete with a clear head. Build a routine that holds when the count goes against you.",
    includes: [
      "Pre-game and between-pitch routines",
      "Attention and emotional control",
      "Pressure reps and reset work",
      "Identity as a competitor",
    ],
  },
  {
    id: "mentorship",
    name: "Complete Mentorship",
    featured: true,
    badge: "Most complete",
    summary:
      "The full relationship: pitching, physical development, and mental performance under one coach who has lived the path.",
    includes: [
      "Everything in pitching + mental",
      "Physical development overlay",
      "Ongoing film and in-season support",
      "Direct access and accountability",
    ],
  },
];

export const method = [
  {
    n: "01",
    title: "Evaluate",
    body: "We start with the athlete in front of us — movement, arsenal, history, and how they compete. No template until the picture is honest.",
  },
  {
    n: "02",
    title: "Build",
    body: "A plan specific to that pitcher. Constraints, throwing, strength, and mental work sequenced so each piece supports the next.",
  },
  {
    n: "03",
    title: "Coach",
    body: "Live sessions and film. Cues that the athlete can feel, not a lecture they forget by the next bullpen.",
  },
  {
    n: "04",
    title: "Develop",
    body: "The work compounds. In-season adjustments, off-season building, and a standard that does not reset every winter.",
  },
];

export const results = [
  {
    id: "a1",
    name: "Athlete 01",
    role: "HS RHP · Placeholder",
    quote:
      "Replace this with a real testimonial. Keep it specific — what changed in the delivery, the compete level, or the results.",
    velo: { before: "—", after: "—" },
    metric: { label: "Command", value: "Placeholder" },
    portrait: undefined as string | undefined,
    video: undefined as string | undefined,
  },
  {
    id: "a2",
    name: "Athlete 02",
    role: "College RHP · Placeholder",
    quote:
      "Placeholder quote. Speak to the process, not a miracle. Athletes and parents should recognize themselves here.",
    velo: { before: "—", after: "—" },
    metric: { label: "Stuff+", value: "Placeholder" },
    portrait: undefined as string | undefined,
    video: undefined as string | undefined,
  },
  {
    id: "a3",
    name: "Athlete 03",
    role: "College LHP · Placeholder",
    quote:
      "Placeholder quote. When real film and numbers arrive, this card is ready — portrait, velo, metrics, and video slots are already wired.",
    velo: { before: "—", after: "—" },
    metric: { label: "Compete", value: "Placeholder" },
    portrait: undefined as string | undefined,
    video: undefined as string | undefined,
  },
];

export const filmRoom = {
  athlete: "ATHLETE · SAMPLE",
  pitch: "FB · RHP",
  velocity: "91.4",
  checkpoints: [
    { id: "balance", label: "Balance", time: 8, note: "Posture stacked. Eyes quiet." },
    { id: "lift", label: "Leg Lift", time: 26, note: "Lead hip closed. No early drift." },
    { id: "stride", label: "Foot Strike", time: 52, note: "Front side holding. Delay the open." },
    { id: "release", label: "Release", time: 74, note: "Extension through the line. Stay on-line." },
    { id: "finish", label: "Extension", time: 90, note: "Finish athletic. Field your position." },
  ],
  metrics: [
    { label: "Velo", value: "91.4", unit: "mph" },
    { label: "Spin", value: "2280", unit: "rpm" },
    { label: "IVB", value: "16.2", unit: "in" },
    { label: "HB", value: "8.4", unit: "in" },
    { label: "Ext", value: "6.4", unit: "ft" },
    { label: "Rel H", value: "5.9", unit: "ft" },
  ],
  notes: [
    "Sample analysis — replace with live session notes.",
    "Front side is the constraint. If it leaks, command leaks with it.",
    "Fastball shape is playable. Location to glove-side needs to be earned, not hoped for.",
  ],
};

export const faq = [
  {
    q: "Who is this for?",
    a: "High school, college, and professional pitchers who want individualized development — not a generic throwing calendar. Parents are part of the process. Book an evaluation call or explore the Mental Dugout to get started.",
  },
  {
    q: "What is the difference between the programs?",
    a: "Pitching Development is delivery, arsenal, and command. Mental Performance is compete, routine, and pressure. Complete Mentorship is both, plus physical development and ongoing in-season support. If you are unsure where to start, book an evaluation call.",
  },
  {
    q: "Do you work remotely or in person?",
    a: "Both, depending on the athlete and the season. Film-based coaching is precise when the process is serious. In-person work is used when the delivery needs to be felt, not just seen. Format is decided after evaluation.",
  },
  {
    q: "How do I get started?",
    a: "Go to the contact page to choose your next step: book an evaluation call or explore the Mental Dugout.",
  },
  {
    q: "Will you promise velocity jumps?",
    a: "No. Velocity can move when the athlete earns it. We do not sell numbers we cannot stand behind. The standard is a more complete pitcher — physical, mechanical, and mental.",
  },
  {
    q: "What does a typical week look like?",
    a: "Depends on the season and the program. Throwing is planned, not guessed. Film is reviewed. Mental work is assigned like physical work. You will always know what the week is for.",
  },
];

export const finalCta = {
  headline: "READY TO BECOME A BETTER PITCHER?",
  body: "Choose your next step: book an evaluation or explore the Mental Dugout.",
  cta: "GET STARTED",
};

export const apply = {
  eyebrow: "Application",
  headline: "Apply for coaching.",
  body: "Limited roster. Tell us who the athlete is, where they are, and what they want. If there is a fit, we will follow up with next steps.",
  levels: ["High School", "College", "Professional", "Youth / 14U–16U"] as const,
  interests: [
    "Pitching Development",
    "Mental Performance",
    "Complete Mentorship",
    "Not sure yet",
  ] as const,
};
