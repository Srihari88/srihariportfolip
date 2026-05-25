"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { openSourceProjects, blogPosts } from "@/lib/content";
import Link from "next/link";

export function OpenSourceGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {openSourceProjects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/35"
        >
          <div className="flex items-start justify-between gap-4">
            <GitBranch className="h-6 w-6 text-cyanGlow" />
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition hover:text-cyanGlow"
              aria-label={`View ${project.name} on GitHub`}
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-6 text-white/[0.62]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full bg-cyanGlow/10 px-3 py-1 text-xs text-cyanGlow/80 border border-cyanGlow/20">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-xs font-semibold text-white/[0.52]">{project.stars}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function BlogPostsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {blogPosts.map((post: any, index: number) => (
        <motion.article
          key={post.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/35"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanGlow">{post.tag}</p>
              <h3 className="mt-3 text-lg font-semibold text-white leading-6">{post.title}</h3>
            </div>
            {post.url && (
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 transition hover:text-cyanGlow flex-shrink-0"
                aria-label={`Read on Medium`}
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-white/[0.52]">{post.read}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
