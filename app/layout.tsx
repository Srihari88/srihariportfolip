import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CommandPalette } from "@/components/command-palette";
import { CursorGlow } from "@/components/cursor-glow";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { owner } from "@/lib/content";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://srihari-ai-quality.vercel.app";

export const viewport: Viewport = {
  themeColor: "#050607",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${owner.shortName} | Lead SDET & AI Quality Engineer`,
    template: `%s | ${owner.shortName}`
  },
  description: owner.intro,
  keywords: [
    "Lead SDET",
    "AI Quality Engineer",
    "LLM Testing",
    "Playwright Automation",
    "PromptFoo",
    "DeepEval",
    "LangChain",
    "Srihari Naidu"
  ],
  authors: [{ name: owner.name }],
  creator: owner.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${owner.shortName} | Engineering Quality for AI-Powered Systems`,
    description: owner.intro,
    siteName: `${owner.shortName} Portfolio`,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: owner.shortName }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${owner.shortName} | AI Quality Engineer`,
    description: owner.intro,
    images: ["/og.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: siteUrl
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <a
          href="#main"
          className="focus-ring fixed left-4 top-4 z-[100] -translate-y-20 rounded-full bg-cyanGlow px-4 py-2 text-sm font-semibold text-ink transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
