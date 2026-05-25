"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, owner } from "@/lib/content";

const actions = [
  ...navItems,
  { href: owner.resume, label: "Download Resume" },
  { href: `mailto:${owner.email}`, label: "Email Srihari" }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring fixed bottom-5 right-5 z-50 hidden rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 backdrop-blur-xl transition hover:border-cyanGlow/40 hover:text-white md:inline-flex"
      >
        <Search className="mr-2 h-4 w-4" />
        Command
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              className="glass mx-auto mt-24 max-w-xl rounded-2xl p-3"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-3 py-3">
                <Search className="h-5 w-5 text-cyanGlow" />
                <span className="font-mono text-sm text-white/60">jump_to_signal</span>
              </div>
              <div className="grid gap-1 p-2">
                {actions.map((action) => (
                  <Link
                    key={`${action.href}-${action.label}`}
                    href={action.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-xl px-3 py-3 text-sm text-white/[0.72] transition hover:bg-cyanGlow/10 hover:text-white"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
