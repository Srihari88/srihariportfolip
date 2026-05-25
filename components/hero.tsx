"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cloud, Code2, Download, PlayCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { NeuralBackground } from "@/components/background";
import { ButtonLink } from "@/components/button";
import { metrics, owner, rotatingKeywords } from "@/lib/content";

const icons = [
  { Icon: Bot, label: "AI", className: "left-[8%] top-[28%]" },
  { Icon: BrainCircuit, label: "LLM", className: "right-[8%] top-[22%]" },
  { Icon: Code2, label: "QA", className: "left-[14%] bottom-[22%]" },
  { Icon: Cloud, label: "AWS", className: "right-[16%] bottom-[18%]" },
  { Icon: ShieldCheck, label: "Trust", className: "right-[34%] top-[12%]" }
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <NeuralBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/20 bg-cyanGlow/[0.08] px-3 py-2 font-mono text-xs uppercase tracking-[0.22em] text-cyanGlow">
            Open source + enterprise quality engineering
          </div>
          <h1 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span className="block text-gradient">Srihari Naidu</span>
            <span className="mt-2 block text-white/[0.82]">Engineering Quality for AI Systems</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68] sm:text-xl">{owner.role}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/[0.58]">{owner.intro}</p>

          <div className="mt-7 flex min-h-8 items-center gap-3 font-mono text-sm text-white/[0.62]">
            <span className="text-cyanGlow">tracking:</span>
            <RotatingKeyword />
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#projects">
              <PlayCircle className="h-4 w-4" />
              View AI Systems
            </ButtonLink>
            <ButtonLink href={owner.resume} variant="ghost">
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          <div className="absolute inset-0 rounded-full bg-cyanGlow/10 blur-3xl" />
          <div className="glass relative h-full overflow-hidden rounded-[2rem] p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow to-transparent" />
            <div className="relative h-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(49,248,255,0.22),transparent_38%),#071013]">
              <Image
                src="/profile.svg"
                alt="Srihari Naidu futuristic AI quality portrait"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/[0.42] p-4 backdrop-blur-md">
                <p className="font-mono text-xs text-cyanGlow">quality_signal: production_ready</p>
                <p className="mt-1 text-sm text-white/70">LLM evals, automation architecture, and cloud quality systems.</p>
              </div>
            </div>
          </div>
          {icons.map(({ Icon, label, className }, index) => (
            <motion.div
              key={label}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
              className={`glass absolute hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-white/80 md:flex ${className}`}
            >
              <Icon className="h-4 w-4 text-cyanGlow" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-3 pb-12 sm:grid-cols-5">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08 }}
            className="glass rounded-2xl p-4"
          >
            <div className="text-2xl font-semibold text-white">{metric.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-white/[0.48]">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RotatingKeyword() {
  return (
    <span className="relative inline-grid h-6 min-w-[15rem] overflow-hidden text-cyanGlow">
      {rotatingKeywords.map((keyword, index) => (
        <motion.span
          key={keyword}
          className="absolute"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: [24, 0, 0, -24], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: index * 2,
            times: [0, 0.08, 0.17, 0.25]
          }}
        >
          {keyword}
        </motion.span>
      ))}
    </span>
  );
}
