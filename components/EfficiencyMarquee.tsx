"use client";

import { motion } from "framer-motion";
import { infrastructure } from "@/lib/content";
import { SectionLabel } from "./ui/SectionLabel";

function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: string[];
  duration: number;
  reverse?: boolean;
}) {
  // Duplicate items so the loop is seamless when translateX hits -50%
  const loop = [...items, ...items];

  return (
    <div className="edge-fade-x w-full overflow-hidden">
      <motion.ul
        className="flex w-max items-center gap-12 tablet:gap-16 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <li
            key={i}
            className="text-feature text-ash-gray opacity-80 hover:opacity-100 transition-opacity"
          >
            {item}
            <span className="ml-12 tablet:ml-16 text-stone-gray/40">·</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export function EfficiencyMarquee() {
  return (
    <section className="section-y border-b border-mist-border">
      <div className="shell mb-12 tablet:mb-16 flex flex-col gap-3">
        <SectionLabel tone="stone">{infrastructure.label}</SectionLabel>
        <p className="text-body-lg text-ash-gray max-w-[60ch]">
          {infrastructure.caption}
        </p>
      </div>

      <div className="flex flex-col gap-6 tablet:gap-10">
        <MarqueeRow items={infrastructure.toolsRowA} duration={45} />
        <MarqueeRow items={infrastructure.toolsRowB} duration={55} reverse />
      </div>
    </section>
  );
}
