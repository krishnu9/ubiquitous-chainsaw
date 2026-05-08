/**
 * Single source of truth for portfolio content.
 * Search this file for [TODO] and [METRIC] to fill in real values.
 */

export const profile = {
  name: "[Krishnu Pradhan]",
  email: "[krishnu9@outlook.com]",
  // Optional — paste a Calendly / Cal.com URL to enable the secondary CTA.
  schedulingUrl: "" as string,
};

export const hero = {
  eyebrow: "Applied AI · Systems Engineering",
  headline:
    "Engineering AI systems that save hours, cut costs, and run themselves.",
  subhead:
    "I design and ship production AI agents and RAG pipelines that automate the workflows businesses can't afford to do manually anymore.",
  primaryCta: { label: "View Solutions", href: "#solutions" },
  secondaryCta: { label: "See the Impact", href: "#solution-1" },
};

export const infrastructure = {
  label: "The Infrastructure",
  caption: "Production-grade tooling powering every system I ship.",
  toolsRowA: [
    "LangGraph",
    "LlamaIndex",
    "OpenAI",
    "Anthropic",
    "AWS",
    "Pinecone",
    "Postgres",
    "Temporal",
  ],
  toolsRowB: [
    "Pydantic",
    "FastAPI",
    "Next.js",
    "Docker",
    "Redis",
    "Kafka",
    "LangSmith",
    "Modal",
  ],
};

export type WorkflowKind = "before-after" | "loop";

export type Solution = {
  id: string;
  index: string; // "01"
  headline: string;
  framing: string; // 1-line below headline
  soWhat: string; // the focal-point claim
  capabilities: string[];
  workflow: WorkflowKind;
  before?: string[]; // for "before-after"
  after?: string[]; // for "before-after"
  loopSteps?: string[]; // for "loop"
};

export const solutions: Solution[] = [
  {
    id: "solution-1",
    index: "01",
    headline: "Automated Lead Processing",
    framing:
      "Inbound leads triaged, scored, and routed without a human touching the inbox.",
    soWhat:
      "[20+ hours saved/week] across [20+ sales reps] — every inbound lead reaches the right rep within minutes.",
    capabilities: [
      "Email triage",
      "CRM sync",
      "Lead scoring",
      "Slack handoff",
      "Auto-reply drafts",
    ],
    workflow: "before-after",
    before: [
      "Rep opens shared inbox",
      "Reads & classifies email",
      "Looks up CRM record",
      "Hand-types reply",
    ],
    after: [
      "Email lands → Agent reads",
      "Enriches against CRM",
      "Scores & routes to rep",
      "Drafts personalized reply",
    ],
  },
  {
    id: "solution-2",
    index: "02",
    headline: "24/7 Intelligence Hub",
    framing:
      "A single agent fronts every internal knowledge base — no on-call analyst required.",
    soWhat:
      "[METRIC: queries/day] answered with [METRIC: accuracy %] — zero on-call burden, instant citations.",
    capabilities: [
      "RAG retrieval",
      "Citation tracking",
      "Slack + web UI",
      "Self-eval loop",
      "Feedback flywheel",
    ],
    workflow: "loop",
    loopSteps: [
      "Query received",
      "Retrieve & rerank",
      "Synthesize w/ citations",
      "Self-grade response",
      "Log + feedback loop",
    ],
  },
  {
    id: "solution-3",
    index: "03",
    headline: "Document Intelligence Pipeline",
    framing:
      "Contracts, invoices, and PDFs parsed into structured data with humans only on edge cases.",
    soWhat:
      "[$30k+ saved/year] vs. manual review across [1000+ documents] — accuracy verified end-to-end.",
    capabilities: [
      "OCR",
      "Schema extraction",
      "Validation rules",
      "Human-in-the-loop",
      "Audit trail",
    ],
    workflow: "before-after",
    before: [
      "Analyst opens PDF",
      "Eyeballs key fields",
      "Types into spreadsheet",
      "Manually checks errors",
    ],
    after: [
      "PDF lands → OCR + parse",
      "Schema-typed extraction",
      "Validate against rules",
      "Flag edge cases for review",
    ],
  },
];

export const philosophy = {
  label: "Philosophy",
  heading: "Turning Complexity into Efficiency.",
  intro:
    "Three principles I bring to every system I ship — so the AI doesn't just work in a demo, it earns its keep.",
  pillars: [
    {
      title: "Measurable ROI",
      body:
        "Every workflow I automate ships with the metrics that prove it: time-saved, cost-reduced, accuracy gained. If we can't measure it, we can't trust it.",
    },
    {
      title: "Seamless Integration",
      body:
        "AI doesn't replace your stack — it slots into it. Slack, your CRM, Postgres, GDrive, whatever the team already lives in. The agent meets people where they work.",
    },
    {
      title: "Reliability & Oversight",
      body:
        "Evals, guardrails, and human-in-the-loop checkpoints from day one. Production AI is observable AI — every decision logged, every drift caught early.",
    },
  ],
};

export const contact = {
  label: "Get in Touch",
  heading: "Ready to Automate Your Workflow?",
  subhead:
    "Let's talk about where AI can take work off your team's plate. A 30-minute strategy conversation usually surfaces two or three quick wins.",
  primaryCtaLabel: "Start a Strategy Conversation",
  schedulingCtaLabel: "Or book a 30-min intro →",
  emailSubject: "Strategy consultation",
};
