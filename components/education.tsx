"use client"

import { GraduationCap, BookOpen, School, Star, CheckCircle2 } from "lucide-react"

export default function Education() {
  const milestones = [
    {
      year: "2019 - 2021",
      degree: "Secondary School Certificate (SSC)",
      institution: "Zen School, Padra",
      field: "General Studies",
      description:
        "Completed secondary schooling with strong foundations in science, mathematics, and logical reasoning.",
      status: "completed",
      icon: School,
      // Desktop positioning & SVG connections (coordinates mapped to 1000x620 viewBox)
      nodeX: 70,
      nodeY: 150,
      stemY: 85,
      cardStyle: { left: "3%", top: "1%" },
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Aditi Science School",
      field: "Science Stream",
      description:
        "Completed higher secondary education focusing on Physics, Chemistry, and Advanced Mathematics, igniting a passion for computer science.",
      status: "completed",
      icon: BookOpen,
      nodeX: 590,
      nodeY: 185,
      stemY: 110,
      cardStyle: { left: "55%", top: "2%" },
    },
    {
      year: "2023 - 2025",
      degree: "B.Tech — Core CS Foundations",
      institution: "Navrachna University, Vadodara",
      field: "Computer Science & Engineering",
      description:
        "Mastered core computing foundations: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, and Full-Stack Engineering.",
      status: "completed",
      icon: GraduationCap,
      nodeX: 840,
      nodeY: 435,
      stemY: 355,
      cardStyle: { left: "57%", top: "37%" },
    },
    {
      year: "2025 - 2027 (Expected)",
      degree: "B.Tech — AI/ML & Applied Systems",
      institution: "Navrachna University, Vadodara",
      field: "AI/ML Specialization",
      description:
        "Developing autonomous AI agents (LangGraph, MCP), computer vision models (YOLO, ResNet), and scalable intelligent software applications.",
      status: "pursuing",
      icon: Star,
      nodeX: 440,
      nodeY: 520,
      stemY: 440,
      cardStyle: { left: "18%", top: "51%" },
    },
  ]

  // Smooth continuous Bezier curve passing through all nodes
  const curvePath =
    "M 25 150 C 200 150 400 170 590 185 C 760 200 970 230 970 310 C 970 380 910 415 840 435 C 710 470 570 505 440 520 C 390 528 360 535 320 540"

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
        {/* DESKTOP VIEW: Sleek Luminous Sweeping Curve (Matching Reference Design)   */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full h-[640px] select-none">
          {/* SVG Canvas for Curve, Stems, and Glowing Nodes */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 620"
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

            {/* Bright Inner Core White Line */}
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
                {/* Vertical stem connecting curve to the text card */}
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

          {/* Milestone Text Cards overlay positioned along the stems */}
          {milestones.map((m, idx) => (
            <div
              key={idx}
              style={m.cardStyle}
              className="absolute max-w-[340px] group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle ambient blur behind each text card */}
              <div className="absolute -inset-3 bg-primary/10 rounded-xl blur-lg pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-1.5 p-2">
                {/* Year Header */}
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {m.year}
                  </h3>
                  {m.status === "pursuing" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse">
                      <Star className="w-3 h-3" />
                      Pursuing
                    </span>
                  )}
                </div>

                {/* Degree & Field */}
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
        {/* MOBILE & TABLET VIEW: Sleek Vertical Luminous Timeline                    */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-primary/50 space-y-10 my-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] top-1.5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-white shadow-md shadow-primary" />
                </div>
              </div>

              {/* Card content */}
              <div className="bg-card/70 border border-border/80 rounded-xl p-5 backdrop-blur-sm shadow-sm space-y-2 group-hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-lg font-bold text-foreground">{m.year}</span>
                  {m.status === "pursuing" ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 animate-pulse">
                      <Star className="w-3 h-3" />
                      Pursuing
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-green-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  )}
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
