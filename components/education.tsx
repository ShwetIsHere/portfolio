"use client"

import { Star, CheckCircle2 } from "lucide-react"

export default function Education() {
  const milestones = [
    {
      year: "2019 - 2021",
      degree: "Secondary School Certificate (SSC)",
      institution: "Zen School, Padra",
      score: "SSC: 87%",
      logo: "/education/zen.png",
      description:
        "Completed secondary schooling with strong foundations in science, mathematics, and logical reasoning.",
      status: "completed",
      // Desktop positioning & SVG connections (coordinates mapped to 1000x650 viewBox)
      nodeX: 85,
      nodeY: 232,
      stemY: 175,
      cardStyle: { left: "3%", top: "1%" },
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Aditi Science School",
      score: "HSC: 64%",
      logo: "/education/aditi.png",
      description:
        "Completed higher secondary education focusing on Physics, Chemistry, and Advanced Mathematics, igniting a passion for computer science.",
      status: "completed",
      nodeX: 620,
      nodeY: 250,
      stemY: 182,
      cardStyle: { left: "54%", top: "2%" },
    },
    {
      year: "2023 - 2027 (Expected)",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Navrachana University, Vadodara",
      score: "CGPA: 7.94",
      logo: "/education/nuv.png",
      description:
        "Mastering core computing foundations, full-stack engineering, and specializing in AI/ML, autonomous multi-agent systems, and computer vision models.",
      status: "pursuing",
      nodeX: 430,
      nodeY: 560,
      stemY: 468,
      cardStyle: { left: "20%", top: "44%" },
    },
  ]

  // Smooth sweeping Bezier trajectory through all 3 milestone nodes
  const curvePath =
    "M 25 230 C 200 230 420 240 620 250 C 780 260 970 290 970 390 C 970 470 910 520 780 540 C 650 555 520 560 430 560 C 360 560 300 570 240 580"

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fadeIn">
            Education &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-xl mx-auto">
            My academic journey, core engineering foundations, and ongoing AI/ML milestones.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Sleek Luminous Sweeping Curve with Generous Text Clearance  */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full h-[660px] select-none">
          {/* SVG Canvas for Curve, Stems, and Glowing Nodes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Soft neon glow filter */}
              <filter id="curve-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur1" />
                <feGaussianBlur stdDeviation="2" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ambient Background Glow Layer along the curve */}
            <path
              d={curvePath}
              stroke="var(--primary)"
              strokeWidth="14"
              strokeLinecap="round"
              className="opacity-25 blur-md"
            />

            {/* Main Outer Neon Glow Curve */}
            <path
              d={curvePath}
              stroke="var(--primary)"
              strokeWidth="5"
              strokeLinecap="round"
              className="opacity-80"
              filter="url(#curve-glow)"
            />

            {/* Bright Inner Core Line */}
            <path
              d={curvePath}
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="dark:stroke-white stroke-slate-800"
            />

            {/* Milestones: Stems & Nodes */}
            {milestones.map((m, idx) => (
              <g key={idx}>
                {/* Vertical stem connecting curve to the text card with clean clearance */}
                <line
                  x1={m.nodeX}
                  y1={m.nodeY}
                  x2={m.nodeX}
                  y2={m.stemY}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/40 dark:text-white/40"
                />

                {/* Outer pulse aura */}
                <circle
                  cx={m.nodeX}
                  cy={m.nodeY}
                  r="13"
                  fill="var(--primary)"
                  className="opacity-25 animate-pulse"
                />

                {/* Mid glow ring */}
                <circle
                  cx={m.nodeX}
                  cy={m.nodeY}
                  r="7.5"
                  fill="var(--primary)"
                  filter="url(#node-glow)"
                />

                {/* Core bright dot */}
                <circle
                  cx={m.nodeX}
                  cy={m.nodeY}
                  r="4.5"
                  fill="#ffffff"
                  className="dark:fill-white fill-slate-900"
                />
              </g>
            ))}
          </svg>

          {/* Milestone Text Cards overlay positioned along the stems with full z-index */}
          {milestones.map((m, idx) => (
            <div
              key={idx}
              style={m.cardStyle}
              className="absolute max-w-[360px] group transition-all duration-300 hover:-translate-y-1 z-10"
            >
              <div className="relative bg-card/90 dark:bg-card/85 backdrop-blur-md border border-border/80 hover:border-primary/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all space-y-2">
                {/* Header: Logo, Year & Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white p-1 border border-border/80 shadow-xs flex items-center justify-center shrink-0">
                      <img
                        src={m.logo}
                        alt={m.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {m.year}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {m.score && (
                      <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {m.score}
                      </span>
                    )}
                    {m.status === "pursuing" && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse">
                        <Star className="w-3 h-3" />
                        Pursuing
                      </span>
                    )}
                  </div>
                </div>

                {/* Degree */}
                <div className="font-semibold text-primary/95 text-sm md:text-[15px] leading-snug">
                  {m.degree}
                </div>

                {/* Institution */}
                <div className="text-xs text-muted-foreground font-medium">
                  {m.institution}
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Sleek Vertical Timeline with Logos & Marks          */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-primary/50 space-y-8 my-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] top-1.5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-white shadow-md shadow-primary" />
                </div>
              </div>

              {/* Card content */}
              <div className="bg-card/80 border border-border/80 rounded-xl p-5 backdrop-blur-sm shadow-sm space-y-2.5 group-hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-white p-1 border border-border shadow-xs flex items-center justify-center shrink-0">
                      <img
                        src={m.logo}
                        alt={m.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold text-foreground">{m.year}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    {m.score && (
                      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {m.score}
                      </span>
                    )}
                    {m.status === "pursuing" ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse">
                        <Star className="w-3 h-3" />
                        Pursuing
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-green-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Completed
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-base font-semibold text-primary">{m.degree}</div>
                <div className="text-xs text-muted-foreground font-medium">{m.institution}</div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
