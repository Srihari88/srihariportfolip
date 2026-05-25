"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      {(eyebrow || title || intro) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyanGlow">{eyebrow}</p>
          ) : null}
          {title ? <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2> : null}
          {intro ? <p className="mt-4 text-base leading-8 text-white/[0.62] sm:text-lg">{intro}</p> : null}
        </motion.div>
      )}
      {children}
    </section>
  );
}
