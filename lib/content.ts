import {
  Award,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap
} from "lucide-react";

export const owner = {
  name: "Srihari Naidu Pudu",
  shortName: "Srihari Naidu",
  role: "Lead SDET | AI Quality Engineer | Automation Architect",
  tagline: "Engineering Quality for AI-Powered Systems",
  intro:
    "Lead SDET and AI Quality Engineer with 12+ years of experience in automation architecture, AI evaluation, cloud-native quality engineering, and scalable testing platforms.",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "sriharinaidu88@gmail.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Srihari88",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/srihari-naidu-sdet/",
  resume: process.env.NEXT_PUBLIC_RESUME_URL ?? "/SrihariNaiduPuduAIQA.pdf"
};

export const rotatingKeywords = [
  "AI Testing",
  "LLM Evaluation",
  "Agentic AI",
  "Playwright Automation",
  "Cloud Quality Engineering",
  "Scalable Test Infrastructure"
];

export const metrics = [
  { value: "12+", label: "Years Experience" },
  { value: "80%+", label: "E2E Coverage" },
  { value: "45%", label: "Regression Reduction" },
  { value: "30%", label: "Faster Execution" },
  { value: "20%", label: "Flaky Test Reduction" }
];

export const skills = [
  "Playwright",
  "Python",
  "Selenium",
  "Cypress",
  "Robot Framework",
  "LangChain",
  "LangGraph",
  "PromptFoo",
  "DeepEval",
  "OpenAI API",
  "AWS",
  "CI/CD",
  "Performance Testing",
  "API Testing",
  "AI Agent Testing",
  "MCP",
  "Agentic AI"
];

export const expertise = [
  {
    icon: BrainCircuit,
    title: "LLM Evaluation Systems",
    description:
      "Designs repeatable eval harnesses for accuracy, refusal behavior, tool use, regressions, and multi-turn reasoning quality."
  },
  {
    icon: ShieldCheck,
    title: "Hallucination & Risk Detection",
    description:
      "Builds adversarial test suites, groundedness checks, red-team prompts, and production scorecards for AI reliability."
  },
  {
    icon: Workflow,
    title: "Agentic AI Validation",
    description:
      "Tests planners, memory, MCP tools, retrieval, action execution, fallback flows, and human-in-the-loop controls."
  },
  {
    icon: Layers3,
    title: "Automation Architecture",
    description:
      "Creates scalable Playwright, Cypress, Selenium, API, and performance frameworks with CI-native observability."
  }
];

export const projects = [
  {
    name: "Scout Integration AI Voice Agent",
    category: "Voice AI Quality",
    problem:
      "Validate an AI voice agent that handles real-time user intent, tool calls, and ambiguous conversation paths.",
    architecture:
      "Voice pipeline with transcription, LLM orchestration, tool routing, conversation memory, telemetry, and eval gates.",
    tools: ["OpenAI API", "LangChain", "Playwright", "DeepEval", "AWS"],
    ai: ["voice intent evals", "tool-call validation", "latency scoring"],
    impact: ["32% faster triage", "18% higher intent pass rate", "24/7 eval suite"],
    code: "await evalVoiceAgent({ intent: 'schedule_demo', latencyBudget: 1200, grounded: true })"
  },
  {
    name: "Solution Scout",
    category: "Agentic Search",
    problem:
      "Improve solution discovery across complex product knowledge while reducing hallucinated recommendations.",
    architecture:
      "RAG workflows, prompt regression tests, retrieval quality scoring, citation checks, and agent trace review.",
    tools: ["LangGraph", "PromptFoo", "MCP", "Python", "OpenAI API"],
    ai: ["RAG evals", "prompt scoring", "agent graph validation"],
    impact: ["41% fewer bad answers", "2.3x faster QA review", "traceable responses"],
    code: "promptfoo eval --config solution-scout.yaml --grader groundedness"
  },
  {
    name: "Honor Shield",
    category: "AI Trust & Safety",
    problem:
      "Catch policy-risk responses, jailbreak attempts, and low-confidence model behavior before release.",
    architecture:
      "Safety test matrix, synthetic adversarial prompts, confidence thresholds, audit reports, and CI release blocks.",
    tools: ["DeepEval", "Python", "CI/CD", "AWS", "API Testing"],
    ai: ["jailbreak detection", "toxicity checks", "model policy regression"],
    impact: ["58% expanded risk coverage", "zero critical escapes", "release-ready evidence"],
    code: "assert_safety(response, policy='academic_integrity', min_score=0.92)"
  },
  {
    name: "Uversity",
    category: "Cloud QA Platform",
    problem:
      "Scale automation and quality telemetry across web, API, data, and AI-powered learning workflows.",
    architecture:
      "Cloud execution grid, contract tests, Playwright suites, API checks, perf baselines, and quality dashboards.",
    tools: ["Playwright", "AWS", "Selenium", "Robot Framework", "Grafana"],
    ai: ["learning journey validation", "content QA scoring", "anomaly detection"],
    impact: ["80%+ E2E coverage", "30% faster runs", "20% fewer flakes"],
    code: "npx playwright test --project=chromium --grep @critical --shard=1/4"
  }
];

export const timeline = [
  {
    company: "Wolters Kluwer",
    role: "Lead SDET / AI Quality Engineer",
    period: "Enterprise quality leadership",
    points: [
      "Architected automation strategy across product, API, cloud, and AI-assisted workflows.",
      "Introduced quality gates, observability, and AI evaluation patterns for high-trust releases.",
      "Led coverage expansion, flake reduction, and regression acceleration programs."
    ]
  },
  {
    company: "Chegg",
    role: "Automation Architect",
    period: "Education technology scale",
    points: [
      "Built resilient Playwright, Selenium, API, and CI/CD automation systems.",
      "Drove scalable test infrastructure for large product surfaces and fast release cycles.",
      "Improved execution speed and confidence with parallelization and smart test selection."
    ]
  },
  {
    company: "PitchVision",
    role: "Senior QA Automation Engineer",
    period: "Sports technology platform",
    points: [
      "Established automated quality foundations across web, API, and device-integrated flows.",
      "Partnered closely with product and engineering to validate performance-sensitive experiences.",
      "Created reusable automation patterns for evolving product teams."
    ]
  }
];

export const achievements = [
  { icon: Gauge, value: "80%+", label: "Critical E2E automation coverage" },
  { icon: Zap, value: "45%", label: "Regression cycle reduction" },
  { icon: LineChart, value: "30%", label: "Execution acceleration" },
  { icon: GitBranch, value: "20%", label: "Flaky test reduction" },
  { icon: Award, value: "12+", label: "Years in quality engineering" },
  { icon: Cloud, value: "Cloud", label: "AWS-native quality systems" }
];

export const certifications = [
  "AI Quality Engineering Leadership",
  "Advanced Test Automation Architecture",
  "Cloud-Native QA Strategy",
  "Performance & API Quality Engineering",
  "LLM Evaluation and Prompt Testing",
  "Enterprise CI/CD Quality Gates"
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const radar = [
  { label: "Evals", x: 50, y: 14, icon: Bot },
  { label: "Agents", x: 82, y: 34, icon: Network },
  { label: "CI/CD", x: 72, y: 78, icon: GitBranch },
  { label: "Cloud", x: 28, y: 78, icon: Cloud },
  { label: "Code", x: 15, y: 34, icon: Code2 },
  { label: "Trust", x: 50, y: 50, icon: Sparkles }
];

export const terminalLines = [
  "> initializing_ai_quality_engineer.exe",
  "> loading_playwright_framework...",
  "> validating_llm_responses...",
  "> scanning_agentic_tool_calls...",
  "> publishing_quality_signal: PASS"
];

export const blogPosts = [
  {
    title: "Integrating Playwright with Axe Playwright for Accessibility Testing",
    tag: "Accessibility Testing",
    read: "5 min read",
    url: "https://medium.com/@sriharinaidu88/integrating-playwright-with-axe-playwright-for-accessibility-testing-743a65df5b6f"
  },
  {
    title: "Leveraging Playwright for Effective End-to-End Testing",
    tag: "E2E Testing",
    read: "7 min read",
    url: "https://medium.com/@sriharinaidu88/leveraging-playwright-for-effective-end-to-end-testing-1e802f66442f"
  },
  {
    title: "API Testing with TestCafe",
    tag: "API Testing",
    read: "6 min read",
    url: "https://medium.com/@sriharinaidu88/api-testing-with-testcafe-4ab0336602a0"
  },
  {
    title: "TestCafe: A Perfect End-to-End Automation Tool for Web Applications",
    tag: "Web Automation",
    read: "8 min read",
    url: "https://medium.com/@sriharinaidu88/testcafe-a-perfect-end-to-end-automation-tool-for-web-based-applications-5fe82e5ea4c7"
  }
];

export const openSourceProjects = [
  {
    name: "Playwright Web Vitals",
    description: "A Playwright library for measuring and asserting Web Vitals metrics (LCP, FID, CLS) in automated tests. Essential for performance-driven QA.",
    tech: ["Playwright", "Web Vitals", "Performance Testing"],
    url: "https://github.com/Srihari88/playwright-web-vitals",
    stars: "Quality & Performance"
  },
  {
    name: "Playwright Fire Reports",
    description: "Enhanced HTML reporting for Playwright tests with detailed traces, screenshots, videos, and failure analysis. Makes debugging test failures intuitive.",
    tech: ["Playwright", "Reporting", "HTML"],
    url: "https://github.com/Srihari88/playwright-fire-reports",
    stars: "Automation Excellence"
  },
  {
    name: "End-to-End Automation Framework",
    description: "Production-grade test framework combining Playwright, Page Object Model, CI/CD integration, and scalable test organization. Built for enterprise-scale testing.",
    tech: ["Playwright", "Framework", "CI/CD", "Page Object Model"],
    url: "https://github.com/Srihari88/End-end-automation-framework",
    stars: "Architecture & Scale"
  }
];
