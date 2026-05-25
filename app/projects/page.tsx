import type { Metadata } from "next";
import { ProjectGrid, TerminalPanel } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Featured AI Projects",
  description: "AI quality, LLM evaluation, agent validation, and automation architecture projects by Srihari Naidu."
};

export default function ProjectsPage() {
  return (
    <main id="main" className="pt-20">
      <Section eyebrow="Projects" title="AI quality systems with architecture, code signal, and measurable impact.">
        <div className="mb-8">
          <TerminalPanel />
        </div>
        <ProjectGrid />
      </Section>
      <Footer />
    </main>
  );
}
