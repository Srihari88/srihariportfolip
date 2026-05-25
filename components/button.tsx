import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300",
        variant === "primary"
          ? "bg-cyanGlow text-ink shadow-glow hover:bg-white"
          : "border border-white/[0.12] bg-white/[0.03] text-white hover:border-cyanGlow/50 hover:bg-cyanGlow/10",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
