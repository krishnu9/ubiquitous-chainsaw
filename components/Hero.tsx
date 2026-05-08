"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/lib/content";
import { fadeUp, heroWord, stagger } from "@/lib/motion";
import { PillButton } from "./ui/PillButton";
import { SectionLabel } from "./ui/SectionLabel";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const veilY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const words = hero.headline.split(" ");

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden border-b border-mist-border"
    >
      {/* Frosted parallax veil */}
      <motion.div
        aria-hidden
        style={{ y: veilY, opacity: veilOpacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute left-1/2 top-1/3 h-[60vh] w-[60vw] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        variants={stagger(0.15, 0.06)}
        initial="hidden"
        animate="show"
        className="shell flex min-h-[100svh] flex-col justify-center gap-8 pt-32 pb-20 tablet:pt-[20vh] tablet:pb-32"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel tone="stone" as="span">
            {hero.eyebrow}
          </SectionLabel>
        </motion.div>

        <h1 className="text-display max-w-[18ch] text-parchment">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
              style={{ marginRight: "0.25em" }}
            >
              <motion.span variants={heroWord} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-body-lg max-w-[60ch] text-ash-gray"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 tablet:flex-row tablet:items-center"
        >
          <PillButton variant="primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </PillButton>
          <PillButton variant="ghost" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label} →
          </PillButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
