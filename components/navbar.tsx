"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, owner } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-ink/[0.72] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyanGlow/30 bg-cyanGlow/10 text-sm font-bold text-cyanGlow shadow-glow">
            SN
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">{owner.shortName}</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm text-white/[0.62] transition hover:text-white",
                pathname === item.href && "bg-white/10 text-white shadow-sm"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${owner.email}`}
          className="focus-ring hidden rounded-full border border-cyanGlow/30 px-4 py-2 text-sm font-semibold text-cyanGlow transition hover:bg-cyanGlow/10 md:inline-flex"
        >
          Say Hi
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 p-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-4 py-3 text-sm text-white/[0.72] hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
