"use client";

import { motion } from "framer-motion";
import type { Solution } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

type Props = { solution: Solution };

export function WorkflowPlaceholder({ solution }: Props) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-mist-border bg-frosted-veil p-6 tablet:p-10 dotted-grid">
      <div className="mb-6 flex items-center justify-between">
        <SectionLabel tone="stone">Workflow</SectionLabel>
        <SectionLabel tone="stone">
          {solution.workflow === "loop" ? "Autonomous Loop" : "Before → After"}
        </SectionLabel>
      </div>

      {solution.workflow === "before-after" ? (
        <BeforeAfter before={solution.before ?? []} after={solution.after ?? []} />
      ) : (
        <AutonomousLoop steps={solution.loopSteps ?? []} />
      )}
    </div>
  );
}

function BeforeAfter({ before, after }: { before: string[]; after: string[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 gap-8 tablet:grid-cols-[1fr_auto_1fr] tablet:items-center"
    >
      <Column label="Before" tone="stone" steps={before} />
      <motion.div
        variants={itemVariants}
        className="hidden tablet:flex h-full items-center justify-center text-stone-gray"
        aria-hidden
      >
        <Arrow />
      </motion.div>
      <Column label="After" tone="purple" steps={after} highlight />
    </motion.div>
  );
}

function Column({
  label,
  steps,
  tone,
  highlight = false,
}: {
  label: string;
  steps: string[];
  tone: "stone" | "purple";
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel tone={tone}>{label}</SectionLabel>
      {steps.map((step, i) => (
        <motion.div
          key={`${label}-${i}`}
          variants={itemVariants}
          className={`rounded-lg border border-mist-border px-4 py-3 text-body ${
            highlight ? "text-parchment bg-frosted-veil" : "text-ash-gray"
          }`}
        >
          <span className="mr-3 text-stone-gray">{String(i + 1).padStart(2, "0")}</span>
          {step}
        </motion.div>
      ))}
    </div>
  );
}

function AutonomousLoop({ steps }: { steps: string[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 gap-3 tablet:grid-cols-5"
    >
      {steps.map((step, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="relative flex items-start gap-3 rounded-lg border border-mist-border bg-frosted-veil px-4 py-4 text-body text-parchment"
        >
          <span className="text-label text-muted-purple">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{step}</span>
          {i < steps.length - 1 ? (
            <span
              className="hidden tablet:block absolute -right-2 top-1/2 -translate-y-1/2 text-stone-gray"
              aria-hidden
            >
              →
            </span>
          ) : null}
        </motion.div>
      ))}
      <p className="tablet:col-span-5 mt-2 text-caption text-stone-gray">
        Loop continues — every response feeds the next retrieval.
      </p>
    </motion.div>
  );
}

function Arrow() {
  return (
    <svg width="56" height="20" viewBox="0 0 56 20" fill="none">
      <path
        d="M2 10h50m0 0l-8-7m8 7l-8 7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
