import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { owner } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/[0.48] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {owner.name}. Engineering quality for AI-powered systems.</p>
        <div className="flex gap-3">
          <Link href={owner.github} className="focus-ring rounded-full p-2 text-white/[0.62] hover:text-cyanGlow" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Link>
          <Link href={owner.linkedin} className="focus-ring rounded-full p-2 text-white/[0.62] hover:text-cyanGlow" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href={`mailto:${owner.email}`} className="focus-ring rounded-full p-2 text-white/[0.62] hover:text-cyanGlow" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
