"use client";

import { Bot, Send } from "lucide-react";
import { useMemo, useState } from "react";

const responses: Record<string, string> = {
  experience:
    "Srihari brings 12+ years in automation architecture, cloud quality engineering, AI evaluation, and scalable testing platforms.",
  ai: "His AI quality focus spans LLM evals, PromptFoo, DeepEval, LangChain workflows, hallucination detection, MCP, and agentic AI validation.",
  projects:
    "Featured systems include Scout Integration AI Voice Agent, Solution Scout, Honor Shield, and Uversity, each tied to measurable quality impact.",
  contact: "Use the contact page, email CTA, GitHub, or LinkedIn links to connect with Srihari."
};

export function AiChat() {
  const [query, setQuery] = useState("");
  const answer = useMemo(() => {
    const normalized = query.toLowerCase();
    if (!normalized) return "Ask about Srihari's AI testing work, automation architecture, projects, or leadership signal.";
    const key = Object.keys(responses).find((item) => normalized.includes(item));
    return key ? responses[key] : "Srihari is strongest where AI product quality, automation architecture, and release confidence intersect.";
  }, [query]);

  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-cyanGlow/10 text-cyanGlow">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-white">AI Portfolio Assistant</h3>
          <p className="text-xs text-white/[0.48]">Local recruiter-facing guide</p>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-white/10 bg-black/[0.34] p-4 text-sm leading-7 text-white/[0.64]">{answer}</div>
      <label className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="sr-only">Ask the AI assistant</span>
        <input
          suppressHydrationWarning
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask about AI evals, projects, experience..."
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/[0.34]"
        />
        <Send className="h-4 w-4 text-cyanGlow" />
      </label>
    </div>
  );
}
