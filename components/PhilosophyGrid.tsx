"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { philosophy } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "./ui/SectionLabel";

export function PhilosophyGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const yC = useTransform(scrollYProgress, [0, 1], ["0px", "-70px"]);
  const cardYs = [yA, yB, yC];

  return (
    <section
      id="philosophy"
      ref={ref}
      className="section-y border-b border-mist-border"
    >
      <div className="shell flex flex-col gap-12 tablet:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0, 0.1)}
          className="flex flex-col gap-6 max-w-[60ch]"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel tone="stone">{philosophy.label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-section text-parchment max-w-[18ch]"
          >
            {philosophy.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-ash-gray">
            {philosophy.intro}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 tablet:gap-6">
          {philosophy.pillars.map((p, i) => (
            <motion.article
              key={p.title}
              style={{ y: cardYs[i] }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="flex flex-col gap-4 rounded-[14px] border border-mist-border bg-frosted-veil p-6 tablet:p-8"
            >
              <SectionLabel tone="purple">
                {String(i + 1).padStart(2, "0")}
              </SectionLabel>
              <h3 className="text-card-title text-parchment">{p.title}</h3>
              <p className="text-body text-ash-gray">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
