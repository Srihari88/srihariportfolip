"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[60] hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanGlow/10 blur-3xl md:block"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  );
}
