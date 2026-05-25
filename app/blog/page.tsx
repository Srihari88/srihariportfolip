import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI testing, LLM evaluation, and automation architecture insights by Srihari Naidu."
};

export default function BlogPage() {
  return (
    <main id="main" className="pt-20">
      <Section eyebrow="Insights" title="Writing placeholder for AI quality leadership.">
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyanGlow">{post.tag}</p>
              <h2 className="mt-5 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-5 text-sm text-white/[0.48]">{post.read}</p>
            </article>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
