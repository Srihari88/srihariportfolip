"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { achievements, expertise, projects, radar, terminalLines } from "@/lib/content";

export function ExpertiseGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {expertise.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyanGlow/35"
        >
          <item.icon className="h-8 w-8 text-cyanGlow" />
          <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/[0.58]">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const visible = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {visible.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="glass group overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/35"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanGlow">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/[0.34] transition group-hover:text-cyanGlow" />
          </div>

          <div className="mt-6 grid gap-4 text-sm leading-7 text-white/[0.58]">
            <p><span className="text-white">Problem:</span> {project.problem}</p>
            <p><span className="text-white">Architecture:</span> {project.architecture}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/70">
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/[0.36] p-4 font-mono text-xs text-cyanGlow">
            <div className="mb-3 flex items-center gap-2 text-white/[0.38]">
              <Code2 className="h-4 w-4" />
              eval.spec.ts
            </div>
            <code>{project.code}</code>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            {project.impact.map((impact) => (
              <div key={impact} className="rounded-xl border border-cyanGlow/[0.12] bg-cyanGlow/5 p-3 text-xs text-white/[0.66]">
                <CheckCircle2 className="mb-2 h-4 w-4 text-cyanGlow" />
                {impact}
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function MetricGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="glass rounded-2xl p-6"
        >
          <item.icon className="h-7 w-7 text-cyanGlow" />
          <div className="mt-5 text-3xl font-semibold text-white">{item.value}</div>
          <p className="mt-2 text-sm text-white/[0.56]">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function TerminalPanel() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-5">
      <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-cyanGlow/10 to-transparent" />
      <div className="mb-4 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-tealCore/70" />
      </div>
      <div className="space-y-3 font-mono text-sm text-cyanGlow">
        {terminalLines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.14 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export function TechRadar() {
  return (
    <div className="glass relative mx-auto aspect-square max-w-xl overflow-hidden rounded-full p-8">
      <div className="absolute inset-8 rounded-full border border-cyanGlow/[0.16]" />
      <div className="absolute inset-20 rounded-full border border-cyanGlow/[0.16]" />
      <div className="absolute inset-32 rounded-full border border-cyanGlow/[0.16]" />
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-cyanGlow/[0.12]" />
      <div className="absolute left-8 right-8 top-1/2 h-px bg-cyanGlow/[0.12]" />
      {radar.map((item) => (
        <motion.div
          key={item.label}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: item.x / 40 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-2 text-xs text-white shadow-glow"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
        >
          <span className="flex items-center gap-2">
            <item.icon className="h-4 w-4 text-cyanGlow" />
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
