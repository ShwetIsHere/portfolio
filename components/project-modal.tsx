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
          {isFutureFace ? (
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
                        Aging Progression (+25 Years | Target Age 65)
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
                        Youth Regression (-25 Years | Target Age 15)
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
          ) : (
            /* Fallback for other projects */
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
