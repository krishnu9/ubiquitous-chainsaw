"use client";

import { motion } from "framer-motion";
import { contact, profile } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { PillButton } from "./ui/PillButton";
import { SectionLabel } from "./ui/SectionLabel";

export function ContactCTA() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    contact.emailSubject,
  )}`;

  return (
    <section
      id="contact"
      className="relative section-y border-b border-mist-border overflow-hidden"
    >
      {/* Frosted backdrop panel */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0, 0.1)}
        className="shell flex flex-col items-start tablet:items-center gap-8 max-w-[720px] mx-auto text-left tablet:text-center"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel tone="stone">{contact.label}</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-section text-parchment max-w-[20ch] mx-auto"
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-body-lg text-ash-gray max-w-[58ch]"
        >
          {contact.subhead}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col tablet:flex-row gap-4 tablet:items-center"
        >
          <PillButton variant="primary" href={mailto}>
            {contact.primaryCtaLabel}
          </PillButton>
          {profile.schedulingUrl ? (
            <PillButton
              variant="ghost"
              href={profile.schedulingUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {contact.schedulingCtaLabel}
            </PillButton>
          ) : null}
        </motion.div>

        <motion.a
          variants={fadeUp}
          href={mailto}
          className="text-body text-muted-purple underline underline-offset-4 hover:text-parchment transition-colors"
        >
          {profile.email}
        </motion.a>
      </motion.div>
    </section>
  );
}
