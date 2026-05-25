import type { Metadata } from "next";
import { MetricGrid } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { ExperienceTimeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience timeline for Srihari Naidu across Wolters Kluwer, Chegg, and PitchVision."
};

export default function ExperiencePage() {
  return (
    <main id="main" className="pt-20">
      <Section eyebrow="Experience" title="A career built around scalable quality engineering.">
        <ExperienceTimeline />
      </Section>
      <Section eyebrow="Impact" title="Quality metrics that hiring teams can read quickly.">
        <MetricGrid />
      </Section>
      <Footer />
    </main>
  );
}
