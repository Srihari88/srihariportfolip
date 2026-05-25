import { skills } from "@/lib/content";

export function TechMarquee() {
  const row = [...skills, ...skills];

  return (
    <div className="marquee border-y border-white/[0.08] bg-white/[0.02] py-5">
      <div className="flex animate-[marquee_32s_linear_infinite] gap-4 whitespace-nowrap [--tw-translate-x:0]">
        {row.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full border border-cyanGlow/[0.18] bg-cyanGlow/[0.06] px-4 py-2 font-mono text-xs text-white/[0.68]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
