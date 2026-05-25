import { AiChat } from "@/components/ai-chat";
import { ExpertiseGrid, MetricGrid, ProjectGrid, TechRadar, TerminalPanel } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/marquee";
import { Section } from "@/components/section";
import { ExperienceTimeline } from "@/components/timeline";
import { OpenSourceGrid, BlogPostsGrid } from "@/components/open-source";
import { blogPosts, certifications, owner, skills } from "@/lib/content";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TechMarquee />

      <Section
        id="about"
        eyebrow="Identity"
        title="A quality engineer for the AI era."
        intro="Srihari operates at the intersection of automation architecture, LLM evaluation, agent validation, and cloud-native release confidence."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-2xl p-6 text-base leading-8 text-white/[0.62]">
            <p>
              The portfolio is designed around one clear signal: Srihari helps teams ship AI-powered systems with measurable trust. That means test architecture, prompt evaluation, hallucination detection, API reliability, performance baselines, and release gates that leaders can understand.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Automation Architect", "LLM Testing Specialist", "Cloud QA Strategist", "Agentic AI Validator"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/[0.72]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <TerminalPanel />
        </div>
      </Section>

      <Section id="ai-expertise" eyebrow="AI Expertise" title="Evaluation systems for products where correctness matters.">
        <ExpertiseGrid />
      </Section>

      <Section id="skills" eyebrow="Technical Skills" title="A senior SDET stack with modern AI depth.">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-cyanGlow/[0.18] bg-cyanGlow/[0.06] px-4 py-2 text-sm text-white/[0.72] transition hover:-translate-y-1 hover:border-cyanGlow/50 hover:text-white">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience Timeline" title="Quality leadership across enterprise, education, and product platforms.">
        <ExperienceTimeline />
      </Section>

      <Section id="projects" eyebrow="Featured AI Projects" title="Systems that turn quality from a checkpoint into an operating advantage.">
        <ProjectGrid limit={4} />
      </Section>

      <Section id="metrics" eyebrow="Metrics" title="Recruiter-readable outcomes, not vague ownership.">
        <MetricGrid />
      </Section>

      <Section id="philosophy" eyebrow="AI Testing Philosophy" title="Trust is engineered through evidence.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <TechRadar />
          <div className="glass rounded-2xl p-6">
            <p className="text-lg leading-8 text-white/[0.68]">
              AI quality is not a single assertion. It is a living system of scenario design, model behavior scoring, retrieval checks, tool-call validation, safety coverage, latency budgets, trace review, and release governance.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Evaluate model behavior with versioned prompts and deterministic scorecards.",
                "Validate tool use, memory, retrieval, and fallback paths as first-class product flows.",
                "Convert test output into leadership-ready quality signals before release."
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/[0.64]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="certifications" eyebrow="Certifications / Awards" title="Credibility markers for high-trust engineering teams.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <div key={item} className="glass rounded-2xl p-5 text-sm font-medium text-white/[0.72]">{item}</div>
          ))}
        </div>
      </Section>

      <Section id="open-source" eyebrow="Open Source Contributions" title="Production-grade tools and frameworks for quality engineers.">
        <OpenSourceGrid />
      </Section>

      <Section id="blog" eyebrow="Blog / Insights" title="Practical guides on automation, testing, and quality engineering.">
        <BlogPostsGrid />
      </Section>

      <Section id="contact" eyebrow="Contact" title="Build reliable AI systems with a quality leader who speaks product and engineering.">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="glass rounded-2xl p-6">
            <p className="text-lg leading-8 text-white/[0.66]">
              Available for lead SDET, AI quality engineering, automation architecture, and LLM testing specialist roles.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${owner.email}`} className="focus-ring rounded-full bg-cyanGlow px-5 py-3 text-center text-sm font-semibold text-ink shadow-glow transition hover:bg-white">
                Contact Srihari
              </a>
              <a href={owner.resume} className="focus-ring rounded-full border border-white/[0.12] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyanGlow/50 hover:bg-cyanGlow/10">
                Download Resume
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
