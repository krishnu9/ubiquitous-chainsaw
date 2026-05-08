"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Solution } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { FrostedTag } from "./ui/FrostedTag";
import { SectionLabel } from "./ui/SectionLabel";
import { WorkflowPlaceholder } from "./ui/WorkflowPlaceholder";

type Props = { solution: Solution };

export function SolutionBlock({ solution }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax on the workflow container
  const workflowY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  return (
    <section
      id={solution.id}
      ref={ref}
      className="section-y border-b border-mist-border"
    >
      <div className="shell flex flex-col gap-8 tablet:gap-12">
        {/* Index marker */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionLabel tone="stone">
            {solution.index} / Solution
          </SectionLabel>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-section max-w-[20ch] text-parchment"
        >
          {solution.headline}
        </motion.h2>

        {/* Framing line */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-body-lg max-w-[58ch] text-ash-gray"
        >
          {solution.framing}
        </motion.p>

        {/* Focal-point divider + impact */}
        <FocalImpact soWhat={solution.soWhat} />

        {/* Capability tags */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-wrap gap-2"
        >
          {solution.capabilities.map((c) => (
            <FrostedTag key={c}>{c}</FrostedTag>
          ))}
        </motion.div>

        {/* Workflow placeholder */}
        <motion.div style={{ y: workflowY }} className="mt-6 tablet:mt-12">
          <WorkflowPlaceholder solution={solution} />
        </motion.div>
      </div>
    </section>
  );
}

function FocalImpact({ soWhat }: { soWhat: string }) {
  return (
    <div className="relative mt-6 tablet:mt-12">
      {/* Full-width divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-mist-border" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -inset-x-6 -inset-y-12 -z-10 rounded-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.05), transparent 80%)",
        }}
      />

      <div className="pt-10 tablet:pt-14">
        <SectionLabel tone="purple" className="mb-4 tablet:mb-6">
          The Impact
        </SectionLabel>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-subhead max-w-[26ch] text-parchment"
        >
          {soWhat}
        </motion.p>
      </div>
    </div>
  );
}
