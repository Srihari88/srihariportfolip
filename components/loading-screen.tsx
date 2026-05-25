"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink"
          aria-label="Loading portfolio"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative grid h-32 w-32 place-items-center rounded-full border border-cyanGlow/20"
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-cyanGlow/40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t border-cyanGlow"
            />
            <span className="font-mono text-sm font-semibold text-cyanGlow">AI-QA</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
