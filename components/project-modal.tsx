"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Github,
  ExternalLink,
  Calendar,
  Sparkles,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Video,
  BrainCircuit,
  Info,
  X,
  Plane,
  Building,
  CloudSun,
  Map,
  FileText,
  Server,
  Cpu,
  Globe,
  Compass,
  MessageSquare,
  Users,
  DollarSign,
  Clock,
  ShieldAlert,
  BarChart3,
  Bot,
  Database,
  LayoutGrid,
  Target,
  ShieldCheck,
  CheckSquare,
  GitBranch,
  type LucideIcon,
} from "lucide-react"

export interface ProjectData {
  id: number
  title: string
  date?: string
  description: string
  tags: string[]
  github: string
  live?: string
  icon: LucideIcon
  hasDetails?: boolean
}

interface ProjectModalProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  const isFutureFace = project.title === "Future-Face" || project.id === 1
  const isTriply = project.title.toLowerCase().includes("triply") || project.id === 2
  const isPM =
    project.title.toLowerCase().includes("project manager") ||
    project.title.toLowerCase().includes("project-management") ||
    project.id === 3

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden p-0 gap-0 rounded-2xl border border-border bg-background shadow-2xl"
      >
        {/* ========================================================================= */}
        {/* FIXED HEADER: Stays permanently visible during scrolling                  */}
        {/* ========================================================================= */}
        <div className="shrink-0 bg-background/95 backdrop-blur-md px-5 py-4 sm:px-8 sm:py-5 border-b border-border z-20 space-y-3">
          {/* Top row: Badges, Actions, and Fixed Close Button */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                <Sparkles size={13} />
                Project Details
              </span>
              {project.date && (
                <span className="px-3 py-1 rounded-full text-xs font-medium text-muted-foreground bg-muted/60 flex items-center gap-1.5">
                  <Calendar size={13} />
                  {project.date}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  Live Project
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary text-xs sm:text-sm font-medium bg-card transition-colors"
                >
                  <Github size={14} />
                  Repository
                </a>
              )}

              {/* Fixed Close Button - Accessible at all scroll positions */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project modal"
                className="p-1.5 sm:p-2 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Title Row */}
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-3">
            <project.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
            <span>{project.title}</span>
          </DialogTitle>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SCROLLABLE BODY: Content scrolls independently with sleek custom scrollbar */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-10 custom-scrollbar text-foreground leading-relaxed">
          {/* ===================================================================== */}
          {/* 1. FUTURE-FACE CASE STUDY                                             */}
          {/* ===================================================================== */}
          {isFutureFace && (
            <>
              {/* 1. Hero Preview: Combine.png */}
              <div className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
                  <img
                    src="/projects/future-face/Combine.png"
                    alt="Future-Face Age Progression Overview"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center italic">
                  Full-spectrum age progression pipeline (-10 years youth transformation to +50 years elder aging).
                </p>
              </div>

              {/* 2. Why This Project? */}
              <section className="space-y-4 rounded-xl p-5 sm:p-6 bg-card border border-border/80">
                <div className="flex items-center gap-2.5 text-primary">
                  <BrainCircuit className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Why Future-Face?
                  </h3>
                </div>
                <div className="text-base sm:text-lg font-semibold text-foreground/90">
                  Introducing Future-Face: AI-Powered Facial Age Estimation and Age Transformation
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p className="p-3.5 rounded-lg bg-primary/5 border-l-4 border-primary text-foreground/90 font-medium">
                    "What if an individual captured in an old CCTV image needs to be identified years later, after significant changes in their appearance?"
                  </p>
                  <p>
                    This fundamental question inspired me to develop <strong className="text-foreground">Future-Face</strong>—an AI-powered project that estimates facial age and generates age-transformed facial images.
                  </p>
                  <p>
                    In real-world investigative scenarios, historical CCTV footage or old photographs may contain images of suspects or missing individuals. If a person remains unidentified for years, understanding how their appearance might have changed over time could potentially assist investigators in reviewing leads and comparing visual information.
                  </p>
                </div>
              </section>

              {/* 3. Project Journey */}
              <section className="space-y-8">
                <div className="flex items-center gap-2.5 text-primary pb-2 border-b border-border">
                  <Layers className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Project Journey & Architecture
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground">
                  First, I divided this project into two parts: first, identifying age from an image; and second, transforming the image based on a given number of years.
                </p>

                {/* Stage 1: Age Identification */}
                <div className="space-y-4 rounded-xl p-5 bg-card border border-border">
                  <div className="flex items-center gap-2 text-foreground font-bold text-lg">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                    Stage 1: Age Identification
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    For age identification, I used the <strong>UTKFace dataset</strong> which has more than <strong>24k images</strong> of children, teens, and adults. I fine-tuned that model on <strong>ResNet-50</strong> and used <strong>Yu-Net</strong> for face detection.
                  </p>

                  {/* Age Estimate Image */}
                  <div className="space-y-2 pt-2">
                    <div className="overflow-hidden rounded-xl border border-border bg-black/40">
                      <img
                        src="/projects/future-face/age_estimate.png"
                        alt="Real-time Age Estimation Benchmark"
                        className="w-full h-auto object-contain max-h-[420px] mx-auto"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground text-center italic">
                      Real-time face detection with Yu-Net and age estimation benchmarked against public ground truth.
                    </p>
                  </div>
                </div>

                {/* Stage 2: Age Transformation & Challenges */}
                <div className="space-y-6 rounded-xl p-5 bg-card border border-border">
                  <div className="flex items-center gap-2 text-foreground font-bold text-lg">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">2</span>
                    Stage 2: Age Transformation & Challenges
                  </div>

                  {/* Challenge 1: FG-Net */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-center gap-2 text-amber-500 font-semibold text-base">
                      <AlertTriangle size={18} />
                      Challenge 1: Old & Blurry Dataset (FG-Net)
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Then I came to age transformation. Initially discovered the <strong>FG-Net dataset</strong> which has 1,000 images, but the problem was this dataset was too old and blurry. When I trained the model, it yielded messy, distorted, and inappropriate images:
                    </p>

                    {/* Side by side: FG-Net problem */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1.5 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Given Image (Left Side)
                        </span>
                        <div className="overflow-hidden rounded-xl border border-border bg-background p-2 aspect-square flex items-center justify-center">
                          <img
                            src="/projects/future-face/problem-1-.png"
                            alt="Given Image Input"
                            className="max-h-full max-w-full object-contain rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-rose-500">
                          Transform (Right Side - Messy / Distorted)
                        </span>
                        <div className="overflow-hidden rounded-xl border border-rose-500/30 bg-background p-2 aspect-square flex items-center justify-center">
                          <img
                            src="/projects/future-face/problem-1.jpg"
                            alt="Distorted Model Output"
                            className="max-h-full max-w-full object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge 2: CACD & Gender Drift */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-amber-500 font-semibold text-base">
                      <AlertTriangle size={18} />
                      Challenge 2: High Quality Dataset & The Gender Problem
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      For better results, I discovered a new dataset—<strong>CACD</strong>, which has more than <strong>150k images</strong> of celebrities captured from the internet (high quality). I trained again, but this time the problem changed: the model didn't identify the gender of the given photo.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      As shown below, the given image is female, but sometimes it converted into a man, and sometimes into female.
                    </p>

                    {/* Side by side: Gender problem and fix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1.5 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-rose-500">
                          Gender Inconsistency Issue
                        </span>
                        <div className="overflow-hidden rounded-xl border border-rose-500/30 bg-background p-2 flex items-center justify-center">
                          <img
                            src="/projects/future-face/Gender_problem.png"
                            alt="Gender Problem"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5 text-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                          Gender Preserved (Corrected Model)
                        </span>
                        <div className="overflow-hidden rounded-xl border border-emerald-500/30 bg-background p-2 flex items-center justify-center">
                          <img
                            src="/projects/future-face/Gender_problem_fix.png"
                            alt="Gender Problem Fix"
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resolution: SAM */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-emerald-500 font-semibold text-base">
                      <CheckCircle2 size={18} />
                      The Solution: Fine-Tuning Pre-trained SAM Model
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      For this, I discovered the <strong>SAM (Style-based Age Manipulation) model</strong>, which is already a pre-trained model for this. I fine-tuned this model on the CACD dataset, which produced nearly perfect, identity-preserving visualizations.
                    </p>
                  </div>
                </div>

                {/* Final Result Demonstration: demo1 and demo2 SIDE BY SIDE */}
                <div className="space-y-4 rounded-xl p-5 bg-card border border-border">
                  <div className="flex items-center gap-2 text-primary font-bold text-lg">
                    <Sparkles size={20} />
                    Final Transformation Results
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Look at the results showing continuous bidirectional transformation: aging progression (+25 years) alongside youth regression (-25 years) with identity, expression, and gender preservation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    {/* demo1.jpg */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary text-center">
                        Aging Progression (demo1: +25 Years | Target Age 65)
                      </div>
                      <div className="overflow-hidden rounded-xl border border-border bg-black/40 shadow-md">
                        <img
                          src="/projects/future-face/demo1.jpg"
                          alt="Future-Face Aging Result (+25 Years)"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-center italic">
                        Given image (Age 39.5) → Transformed to Target Age 65
                      </p>
                    </div>

                    {/* demo2.jpg */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-accent text-center">
                        Youth Regression (demo2: -25 Years | Target Age 15)
                      </div>
                      <div className="overflow-hidden rounded-xl border border-border bg-black/40 shadow-md">
                        <img
                          src="/projects/future-face/demo2.jpg"
                          alt="Future-Face Youth Result (-25 Years)"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-center italic">
                        Given image (Age 39.5) → Transformed to Target Age 15
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video Demonstration */}
                <div className="space-y-4 rounded-xl p-5 bg-card border border-border">
                  <div className="flex items-center gap-2 text-primary font-bold text-lg">
                    <Video size={20} />
                    Live System Demonstration (Video)
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Watch Future-Face in action performing real-time face detection, age estimation, and continuous facial aging transformation:
                  </p>
                  <div className="overflow-hidden rounded-xl border border-border bg-black shadow-lg">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto max-h-[480px] mx-auto"
                    >
                      <source src="/projects/future-face/Future-Face.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ===================================================================== */}
          {/* 2. TRIPLY MULTI-AGENT TRAVEL PLANNER CASE STUDY                       */}
          {/* ===================================================================== */}
          {isTriply && (
            <>
              {/* 1. Hero Architecture Workflow Banner: workflow.png */}
              <div className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
                  <img
                    src="/projects/triply/workflow.png"
                    alt="Triply Multi-Agent LangGraph Workflow"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center italic">
                  End-to-end multi-agent orchestration architecture managed with LangGraph, specialized LLMs, and Model Context Protocol (MCP).
                </p>
              </div>

              {/* 2. Project Overview & Live Deployment Callout */}
              <section className="space-y-4 rounded-xl p-5 sm:p-6 bg-card border border-border/80">
                <div className="flex items-center gap-2.5 text-primary">
                  <Compass className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    About Triply
                  </h3>
                </div>
                <div className="text-base sm:text-lg font-semibold text-foreground/90">
                  AI Multi-Agent Platform for End-to-End Travel Planning
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-foreground">Triply</strong> is an AI multi-agent platform where users can plan trips seamlessly. It provides end-to-end real-time intelligence about flights, hotel accommodations, weather conditions, and day-by-day customized itineraries.
                  </p>

                  {/* Live Project Alert Card */}
                  <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent border border-primary/20 space-y-3">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-base">
                      <Globe className="text-primary w-5 h-5 shrink-0" />
                      Live in Production
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The project is already live and interactive! You can test real travel planning prompts directly at{" "}
                      <a
                        href="https://travel.heyshwet.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold underline underline-offset-4 hover:text-accent"
                      >
                        travel.heyshwet.me
                      </a>
                      . If you have any feedback or ideas, please submit the feedback page in the app—I actively review all responses to improve Triply as a full product.
                    </p>
                    <div className="pt-1">
                      <a
                        href="https://travel.heyshwet.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
                      >
                        Launch Triply Live App
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Sample Query */}
              <section className="space-y-3 p-5 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                  <MessageSquare size={16} />
                  Sample Benchmark Query
                </div>
                <div className="text-base sm:text-lg font-bold text-foreground">
                  “Plan a 3-day trip from Vadodara, Gujarat, India, to Alaska, USA, with a total budget under ₹6,00,000.”
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Triply ingests this complex cross-continental, budget-constrained query and orchestrates 5 autonomous agents to query flight systems, hotel providers, and weather stations to generate a complete, cohesive schedule.
                </p>
              </section>

              {/* 4. The 5-Agent Architecture */}
              <section className="space-y-6">
                <div className="flex items-center gap-2.5 text-primary pb-2 border-b border-border">
                  <Layers className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    The 5 Specialized Agents
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground">
                  I created 5 specialized agents coordinated through a LangGraph directed graph, where each agent is responsible for an isolated domain of the trip:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Agent 1 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        <Plane size={18} />
                      </div>
                      1. Flight Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Searches real-time flight availability, departure/arrival schedules, layovers, and airport information matching the route and budget constraints.
                    </p>
                  </div>

                  {/* Agent 2 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <Building size={18} />
                      </div>
                      2. Hotel Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Queries and evaluates accommodations, checking room rates, amenities, proximity to key locations, and total cost against the trip budget.
                    </p>
                  </div>

                  {/* Agent 3 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                        <CloudSun size={18} />
                      </div>
                      3. Weather Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Checks live atmospheric metrics, temperature ranges, precipitation chances, and multi-day forecasts for the destination city during travel dates.
                    </p>
                  </div>

                  {/* Agent 4 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                        <Map size={18} />
                      </div>
                      4. Itinerary Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Constructs an optimized day-wise travel schedule, allocating attractions, meal recommendations, and activities aligned with weather and flight timings.
                    </p>
                  </div>

                  {/* Agent 5 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 md:col-span-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <FileText size={18} />
                      </div>
                      5. Final Synthesis Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Aggregates and synthesizes data collected from the first 4 agents to produce a polished, unified executive travel dossier ready for the traveler.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. MCP Architecture */}
              <section className="space-y-4 rounded-xl p-5 sm:p-6 bg-card border border-border">
                <div className="flex items-center gap-2.5 text-primary font-bold text-lg">
                  <Server className="w-5 h-5" />
                  Model Context Protocol (MCP) Ecosystem
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  In this project, I integrated a combination of remote, local, and custom Model Context Protocol (MCP) servers to standardize tool connectivity across agents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-background border border-border space-y-1.5">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Remote MCP</div>
                    <div className="font-semibold text-sm text-foreground">Tavily Search</div>
                    <p className="text-xs text-muted-foreground">
                      Handles deep web research, hotel discovery, and destination intelligence.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-background border border-border space-y-1.5">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Local MCP</div>
                    <div className="font-semibold text-sm text-foreground">AviationStack</div>
                    <p className="text-xs text-muted-foreground">
                      Direct local connectivity for real-time flight schedules and airport data.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-background border border-border space-y-1.5">
                    <div className="text-xs font-bold text-accent uppercase tracking-wider">Custom MCP</div>
                    <div className="font-semibold text-sm text-foreground">OpenWeather</div>
                    <p className="text-xs text-muted-foreground">
                      Custom-engineered MCP server querying hyper-local forecasts and temperatures.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Demo Video */}
              <section className="space-y-4 rounded-xl p-5 bg-card border border-border">
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <Video size={20} />
                  Triply in Action (Video Demo)
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Watch the multi-agent system orchestrate flight searches, hotel reservations, weather checks, and itinerary compilation in real-time:
                </p>
                <div className="overflow-hidden rounded-xl border border-border bg-black shadow-lg">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto max-h-[480px] mx-auto"
                  >
                    <source src="/projects/triply/triply.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>
            </>
          )}

          {/* ===================================================================== */}
          {/* 3. AGENTIC PROJECT MANAGER CASE STUDY                                 */}
          {/* ===================================================================== */}
          {isPM && (
            <>
              {/* 1. Hero Architecture Banner: agent_workflow.png */}
              <div className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
                  <img
                    src="/projects/pm/agent_workflow.png"
                    alt="Autonomous Multi-Agent AI System Architecture Workflow"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground text-center italic">
                  Autonomous Multi-Agent AI System Architecture: Collaborative reasoning, real-time orchestration & lifecycle execution managed by the Decision Agent over Supabase.
                </p>
              </div>

              {/* 2. What is this project? */}
              <section className="space-y-4 rounded-xl p-5 sm:p-6 bg-card border border-border/80">
                <div className="flex items-center gap-2.5 text-primary">
                  <Bot className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    1. What is this project?
                  </h3>
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    The <strong className="text-foreground">Agentic AI Project Management System</strong> is a multi-agent AI platform designed to manage software development projects from initial client communication to final delivery.
                  </p>
                  <p>
                    It uses <strong className="text-foreground">nine specialized AI agents</strong> coordinated by a central <strong>Decision Agent</strong> to handle project planning, employee allocation, budget management, scheduling, risk prediction, quality assurance, and documentation.
                  </p>
                  <p>
                    Clients can communicate with the system through a <strong>ChatGPT-like conversational interface</strong> to request new features, ask about project progress, discuss budgets, and modify requirements. The system evaluates the impact of these requests, coordinates the relevant agents, updates project information in Supabase, and communicates the results back to the client.
                  </p>
                  <p>
                    The platform also integrates directly with <strong className="text-foreground">GitHub</strong> to access project repositories and allows the Quality Assurance Agent to test code and identify potential bugs.
                  </p>
                </div>
              </section>

              {/* 3. Why this project? */}
              <section className="space-y-5 rounded-xl p-5 sm:p-6 bg-card border border-border/80">
                <div className="flex items-center gap-2.5 text-primary">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    2. Why this project?
                  </h3>
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Traditional project management often requires significant manual coordination between clients, project managers, developers, finance teams, and quality assurance teams. When a client requests a new feature during development, it can affect the budget, deadline, resource allocation, and existing tasks.
                  </p>
                  <p className="p-3.5 rounded-lg bg-primary/5 border-l-4 border-primary text-foreground/90 font-medium">
                    This project aims to automate and coordinate these critical activities using Agentic AI.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-sm font-bold text-foreground uppercase tracking-wider">
                    Core Objectives:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <CheckSquare size={16} />
                        Automated Project Management
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Coordinate planning, task tracking, milestones, and progress continuously.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <MessageSquare size={16} />
                        Intelligent Client Communication
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Understand client requests and provide project updates through natural dialogue.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Users size={16} />
                        Dynamic Resource Allocation
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Assign available employees according to skills, workload, and real-time availability.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <DollarSign size={16} />
                        Budget & Timeline Management
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Evaluate the financial and scheduling impact of changing client requirements.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <ShieldAlert size={16} />
                        Proactive Risk Prediction
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Identify potential delivery delays, budget overruns, and resource shortages early.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <ShieldCheck size={16} />
                        Automated Quality Assurance
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Inspect GitHub repositories, execute isolated tests, and pinpoint defects.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Clock size={16} />
                        Transparent Project Tracking
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Maintain an immutable audit trail of client requests, agent steps, and expenses.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-background border border-border space-y-1">
                      <div className="font-semibold text-sm text-primary flex items-center gap-2">
                        <Database size={16} />
                        Centralized Information Store
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Use Supabase to store project data and ensure consistent state across the ecosystem.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground italic pt-1">
                  Ultimately, the goal is to build an intelligent project management platform that reduces manual toil, improves cross-team alignment, and enables faster, more informed decisions.
                </p>
              </section>

              {/* 4. The Nine AI Agents */}
              <section className="space-y-6">
                <div className="flex items-center gap-2.5 text-primary pb-2 border-b border-border">
                  <Layers className="w-6 h-6" />
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    3. The Nine AI Agents and Their Responsibilities
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground">
                  The system consists of <strong>nine specialized agents</strong>, including the <strong>Decision Agent</strong>, which coordinates the other eight agents around a reactive state bus:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Agent 1 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border-2 border-primary/40 space-y-2 md:col-span-2 bg-gradient-to-r from-primary/10 via-background to-transparent shadow-sm">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
                      <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                        <BrainCircuit size={18} />
                      </div>
                      1. Decision Agent (Central Orchestrator / Boss Agent)
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Acts as the central cognitive engine or "boss agent." It parses intent, decomposes requests into sub-tasks, determines which agents need to be invoked, routes execution paths, evaluates consensus, and commits final decisions to Supabase.
                    </p>
                  </div>

                  {/* Agent 2 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                        <MessageSquare size={18} />
                      </div>
                      2. Communication Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Communicates with clients in real-time through natural dialogue. Understands requirements, answers status questions, processes feature requests, and requests sign-offs for budget/timeline modifications.
                    </p>
                  </div>

                  {/* Agent 3 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <CheckSquare size={18} />
                      </div>
                      3. Project Management Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Manages project tasks, milestones, deadlines, dependencies, features, and overall completion percentages. Automatically updates sprint planning and work breakdown structures when scope shifts.
                    </p>
                  </div>

                  {/* Agent 4 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                        <Users size={18} />
                      </div>
                      4. Resource Management Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Evaluates developer skills, current availability, and workload capacity. Matches sub-tasks with ideal developers, sets real-time status (`FREE` vs `ALLOCATED`) in Supabase, and balances workloads to avoid burnout.
                    </p>
                  </div>

                  {/* Agent 5 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
                        <ShieldAlert size={18} />
                      </div>
                      5. Risk Prediction Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Evaluates potential project risks across schedule, budget caps, and development bottlenecks. Scores risk as LOW, MEDIUM, HIGH, or CRITICAL, providing proactive mitigation strategies and fallback plans.
                    </p>
                  </div>

                  {/* Agent 6 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-teal-500/10 text-teal-500">
                        <DollarSign size={18} />
                      </div>
                      6. Budget Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Calculates costs per feature and sub-task. Allocates budgets across engineering, databases, cloud hosting, third-party APIs, and testing while enforcing organizational commission locks and expenditure thresholds.
                    </p>
                  </div>

                  {/* Agent 7 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                        <Clock size={18} />
                      </div>
                      7. Timeline Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Creates and recalculates task schedules, sequential durations, critical paths, and hard deadlines. Evaluates parallel track feasibility whenever tasks are delayed, modified, or added.
                    </p>
                  </div>

                  {/* Agent 8 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                        <BarChart3 size={18} />
                      </div>
                      8. Analytics Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Maintains comprehensive technical project documentation and generates executive reports on completed deliverables, client requests, budget burn rates, developer allocations, and audit histories.
                    </p>
                  </div>

                  {/* Agent 9 */}
                  <div className="p-4 sm:p-5 rounded-xl bg-card border border-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-foreground font-bold text-sm sm:text-base">
                      <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500">
                        <GitBranch size={18} />
                      </div>
                      9. Quality Assurance Agent
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Accesses authorized GitHub repositories, instantiates isolated test environments, generates test cases, analyzes failures, identifies bugs, and submits formal QA reports. Triggers task reassignment if defects are detected.
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  Note: There are nine agents in total. The Timeline Agent manages dynamic scheduling, while the Analytics Agent handles metrics, documentation, and reporting.
                </p>
              </section>

              {/* 5. Database: Supabase */}
              <section className="space-y-4 rounded-xl p-5 sm:p-6 bg-card border border-border">
                <div className="flex items-center gap-2.5 text-primary font-bold text-lg">
                  <Database className="w-5 h-5" />
                  4. Database: Supabase (Relational Source of Truth)
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  The project uses <strong className="text-foreground">Supabase</strong> as its central PostgreSQL database and reactive event backend, persisting:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Project details, client data & project status
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Employee profiles, skills & workload allocations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Tasks, milestones, deadlines & dependencies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Budgets, service allocations & operational expenses
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Features, risk evaluations & GitHub QA test logs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Client chat history, audit logs & generated reports
                  </li>
                </ul>

                <div className="space-y-3 pt-3">
                  <div className="text-sm font-semibold text-foreground">
                    State Synchronization & Allocation Lifecycle:
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-muted/70 text-foreground font-semibold border-b border-border">
                        <tr>
                          <th className="p-3">Event Trigger</th>
                          <th className="p-3">Employee Status in Supabase</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-muted-foreground">
                        <tr className="hover:bg-muted/20">
                          <td className="p-3">Employee is available</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-md font-mono text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              FREE
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/20">
                          <td className="p-3">Employee is assigned a task</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-md font-mono text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                              ALLOCATED
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/20">
                          <td className="p-3">Employee completes the task</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-md font-mono text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              FREE
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/20">
                          <td className="p-3">Task is blocked or reassigned</td>
                          <td className="p-3">
                            Update allocation according to the actual assignment
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-1 text-xs text-muted-foreground flex items-center gap-1.5">
                  <span>Official Reference:</span>
                  <a
                    href="https://supabase.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Supabase Documentation
                    <ExternalLink size={12} />
                  </a>
                </div>
              </section>

              {/* 6. User Interface */}
              <section className="space-y-4 rounded-xl p-5 sm:p-6 bg-card border border-border">
                <div className="flex items-center gap-2.5 text-primary font-bold text-lg">
                  <LayoutGrid className="w-5 h-5" />
                  5. User Interface (ChatGPT-Inspired 3-Panel Layout)
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  The platform utilizes a structured 3-panel layout designed for maximum operational visibility and seamless client interaction:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider">Left Panel</div>
                    <div className="font-semibold text-sm text-foreground">Ongoing Projects</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Displays active projects, completion progress bars, and operational status. Selecting a project opens its full management workspace.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                    <div className="text-xs font-bold text-accent uppercase tracking-wider">Middle Panel</div>
                    <div className="font-semibold text-sm text-foreground">Project Dashboard</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Shows project telemetry: active features, task kanban, milestones, budget allocation, Gantt timeline, staff allocations, and live agent events.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-background border border-border space-y-1.5">
                    <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Right Panel</div>
                    <div className="font-semibold text-sm text-foreground">Communication Agent</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Conversational chat UI where clients request features, ask questions, approve budget proposals, and receive automated progress debriefs.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Expected Outcome */}
              <section className="space-y-3 rounded-xl p-5 sm:p-6 bg-card border border-border">
                <div className="flex items-center gap-2.5 text-primary font-bold text-lg">
                  <Sparkles className="w-5 h-5" />
                  6. Expected Outcome & Core Innovation
                </div>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    The outcome is a fully functional multi-agent autonomous platform that coordinates software project management workflows, responds intelligently to client prompts, keeps database records synchronized in Supabase, evaluates financial/schedule risks dynamically, and automates code testing through GitHub integration.
                  </p>
                  <p className="p-3.5 rounded-lg bg-primary/5 border-l-4 border-primary text-foreground/90 font-medium text-xs sm:text-sm">
                    <strong>Key Architectural Innovation:</strong> The coordination of specialized AI agents around a shared, persistent relational project state—enabling the system to evaluate cross-functional ripple effects across the entire project rather than treating client interactions as isolated chatbot responses.
                  </p>
                </div>
              </section>

              {/* 8. Demo Video */}
              <section className="space-y-4 rounded-xl p-5 bg-card border border-border">
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <Video size={20} />
                  System Demonstration (Video Demo)
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Watch the Agentic AI Project Management System in action coordinating client dialogue, agent decision paths, Supabase updates, and project execution:
                </p>
                <div className="overflow-hidden rounded-xl border border-border bg-black shadow-lg">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto max-h-[480px] mx-auto"
                  >
                    <source src="/projects/pm/pm.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>
            </>
          )}

          {/* ===================================================================== */}
          {/* 4. FALLBACK FOR OTHER PROJECTS                                        */}
          {/* ===================================================================== */}
          {!isFutureFace && !isTriply && !isPM && (
            <div className="py-8 space-y-6">
              <div className="p-4 rounded-xl bg-card border border-border space-y-3">
                <h4 className="text-lg font-bold text-foreground">Project Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
                <Info className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">In-Depth Case Study Coming Soon:</strong>{" "}
                  We are currently documenting the complete architecture, dataset workflows, and interactive demos for this project. Check out the GitHub repository above to view the source code and documentation.
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
