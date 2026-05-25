import type { Metadata } from "next";
import { AiChat } from "@/components/ai-chat";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { owner } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Srihari Naidu for Lead SDET, AI Quality Engineer, Automation Architect, and LLM Testing roles."
};

export default function ContactPage() {
  return (
    <main id="main" className="pt-20">
      <Section eyebrow="Contact" title="Ready for AI quality engineering leadership.">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="glass rounded-2xl p-6">
            <p className="text-lg leading-8 text-white/[0.66]">
              Reach out for Lead SDET, AI Quality Engineer, Automation Architect, and LLM Testing Specialist opportunities.
            </p>
            <div className="mt-8 grid gap-3">
              <a className="focus-ring rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/[0.72] hover:text-cyanGlow" href={`mailto:${owner.email}`}>
                {owner.email}
              </a>
              <a className="focus-ring rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/[0.72] hover:text-cyanGlow" href={owner.linkedin}>
                LinkedIn
              </a>
              <a className="focus-ring rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/[0.72] hover:text-cyanGlow" href={owner.github}>
                GitHub
              </a>
              <a className="focus-ring rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/[0.72] hover:text-cyanGlow" href={owner.resume}>
                Resume Download
              </a>
            </div>
          </div>
          <AiChat />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
