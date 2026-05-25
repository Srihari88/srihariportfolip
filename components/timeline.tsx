"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyanGlow via-cyanGlow/30 to-transparent md:block" />
      <div className="space-y-6">
        {timeline.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative md:pl-12"
          >
            <span className="absolute left-2 top-7 hidden h-5 w-5 -translate-x-1/2 rounded-full border border-cyanGlow bg-ink shadow-glow md:block" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanGlow">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-1 text-white/[0.58]">{item.role}</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/60">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyanGlow" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
