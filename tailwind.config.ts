import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted))",
        cyanGlow: "#31f8ff",
        tealCore: "#00f5c8",
        ink: "#050607",
        panel: "#0a0f12"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "ui-monospace", "Menlo", "monospace"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(49, 248, 255, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.46)"
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(48px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        grid: "grid 4s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        scan: "scan 5s linear infinite",
        marquee: "marquee 32s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
