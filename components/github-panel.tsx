import Image from "next/image";
import { Github } from "lucide-react";

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "Srihari88";

export function GithubPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass rounded-2xl p-6">
        <Github className="h-8 w-8 text-cyanGlow" />
        <h3 className="mt-5 text-2xl font-semibold text-white">GitHub Signal</h3>
        <p className="mt-3 text-sm leading-7 text-white/[0.58]">
          Live cards use public GitHub endpoints and can be personalized with
          <span className="font-mono text-cyanGlow"> NEXT_PUBLIC_GITHUB_USERNAME</span>.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-white/[0.68]">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Top repositories and coding activity</div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Contribution graph for recruiter scanning</div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Automation, AI evals, and framework work highlighted</div>
        </div>
      </div>
      <div className="glass grid gap-4 rounded-2xl p-4">
        <Image
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=31f8ff&text_color=ffffff&icon_color=00f5c8`}
          alt="GitHub stats"
          width={900}
          height={360}
          className="w-full rounded-xl border border-white/[0.08] bg-black/20"
        />
        <Image
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=31f8ff&text_color=ffffff`}
          alt="Top languages"
          width={900}
          height={260}
          className="w-full rounded-xl border border-white/[0.08] bg-black/20"
        />
      </div>
    </div>
  );
}
