"use client"

import { useMemo, useState } from "react"
import { ExternalLink, Github, Globe, Wind, Camera, Hospital, GraduationCap, Building2, Monitor, ChefHat, Users, ScanFace, Plane, Bot, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectModal, { type ProjectData } from "@/components/project-modal"

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Future-Face",
    date: "03 Aug, 2026 - 31 Oct, 2026",
    description:
      "Developed an AI-powered age estimation and facial age transformation system that predicts age and generates future facial appearances.",
    tags: ["Python", "PyTorch", "Torchvision", "ResNet-50", "Yu-Net", "Computer Vision"],
    github: "https://github.com/ShwetIsHere/Future-Face",
    icon: ScanFace,
    hasDetails: true,
  },
  {
    id: 2,
    title: "Triply - Multi Agent Trip Planner",
    date: "20 Aug, 2026 - 24 Aug, 2026",
    description:
      "Autonomous multi-agent travel planner built using LangGraph, FastAPI, and MCP, coordinating specialized LLMs to generate real-time flight, hotel, and weather itineraries.",
    tags: ["Python", "MCP", "API", "AI Agents", "LangGraph", "LangSmith", "LLMs"],
    github: "https://github.com/ShwetIsHere/Triply-Travel-Agent-LangGraph-MCP",
    live: "https://travel.heyshwet.me/",
    icon: Plane,
    hasDetails: true,
  },
  {
    id: 3,
    title: "Agentic Project Manager",
    date: "02 Aug, 2026 - 30 Oct, 2026",
    description:
      "Built a multi-agent AI project management system automating client communication, resource allocation, budgeting, scheduling, risk prediction, and quality assurance.",
    tags: ["Python", "LangChain", "Supabase", "LLMs", "API", "AI Agents"],
    github: "https://github.com/ShwetIsHere/Project-Management-AI",
    icon: Bot,
    hasDetails: true,
  },
  {
    id: 4,
    title: "QAir - Asthma Tracker",
    date: "12 Jul, 2025 - 21 May, 2026",
    description:
      "Real-time asthma patient tracking and reporting app with weather integration and danger zone detection.",
    tags: ["React Native", "Supabase", "API", "Maps", "IoT", "ESP32", "AI/ML"],
    github: "https://github.com/ShwetIsHere/QAir-Asthma",
    icon: Wind,
    hasDetails: true,
  },
  {
    id: 5,
    title: "Campus AI Surveillance",
    description:
      "Smart campus monitoring system using YOLO model for crowd detection, weapon detection, and restricted area alerts.",
    tags: ["Python", "YOLO", "Computer Vision", "Hadoop", "Spark", "Kafka"],
    github: "https://github.com/ShwetIsHere/Studio",
    icon: Camera,
  },
  {
    id: 6,
    title: "SnakIt - Recipe App",
    description:
      "Mobile app with recipe suggestions based on available ingredients, community features, and a grocery store.",
    tags: ["React Native", "Supabase", "API"],
    github: "https://github.com/ShwetIsHere/SnackIt-MobileApp-ReactNative",
    icon: ChefHat,
  },
  {
    id: 7,
    title: "CommUnity - Social App",
    description:
      "Community platform for sharing memories, reels, real-time chat, and personal dashboards with followers.",
    tags: ["React Native", "Supabase", "API"],
    github: "https://github.com/ShwetIsHere/CommUnity-MobileApp-ReactNative",
    icon: Users,
  },
  {
    id: 8,
    title: "Clinic Management System",
    description: "Comprehensive web application for clinic administration with patient, doctor, and staff management.",
    tags: ["Java Servlet", "JSP", "MySQL", "Modern UI"],
    github: "https://github.com/ShwetIsHere/Clinic-Management-System-Java-Servlet-MySQL",
    icon: Hospital,
  },
  {
    id: 9,
    title: "University Management System",
    description:
      "Student and teacher management system with leave requests, result portal, and fee payment functionality.",
    tags: ["Java Swing", "MySQL", "Desktop App"],
    github: "https://github.com/ShwetIsHere/University-Management-System-Java-Swing-MySQL",
    icon: GraduationCap,
  },
  {
    id: 10,
    title: "Bank Management System",
    description:
      "Banking application with account creation, deposits, withdrawals, and transaction management features.",
    tags: ["Java Swing", "MySQL", "Desktop App"],
    github: "https://github.com/ShwetIsHere/Bank-Management-System-Java-Swing-MySQL",
    icon: Building2,
  },
  {
    id: 11,
    title: "Screen Share Application",
    description:
      "P2P screen sharing and real-time chat application using socket programming and wireless connectivity.",
    tags: ["Python", "Socket", "Networking"],
    github: "https://github.com/ShwetIsHere/Screen-Share-Python",
    icon: Monitor,
  }
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)

  const visibleProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 4)
  }, [showAll])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeIn flex flex-col justify-between"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    <Eye size={16} />
                    See Details
                  </button>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium text-sm"
                    >
                      <Globe size={16} />
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                  >
                    <Github size={16} />
                    GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {projects.length > 4 && (
          <div className="mt-10 flex justify-center">
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              {showAll ? "Show Less" : "Load More"}
            </Button>
          </div>
        )}

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
