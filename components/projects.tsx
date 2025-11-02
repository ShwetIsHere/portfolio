"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "QAir - Asthma Tracker",
    description:
      "Real-time asthma patient tracking and reporting app with weather integration and danger zone detection.",
    tags: ["React Native", "Supabase", "API", "Maps"],
    github: "https://github.com/ShwetIsHere/QAir-Asthma",
    icon: "🫁",
  },
  {
    id: 2,
    title: "Campus AI Surveillance",
    description:
      "Smart campus monitoring system using YOLO model for crowd detection, weapon detection, and restricted area alerts.",
    tags: ["Python", "YOLO", "React", "Computer Vision"],
    github: "https://github.com/ShwetIsHere/Campus-AI-Surveillance",
    icon: "🎥",
  },
  {
    id: 3,
    title: "Clinic Management System",
    description: "Comprehensive web application for clinic administration with patient, doctor, and staff management.",
    tags: ["Java Servlet", "JSP", "MySQL", "Modern UI"],
    github: "https://github.com/ShwetIsHere/Clinic-Management-System-Java-Servlet-MySQL",
    icon: "🏥",
  },
  {
    id: 4,
    title: "University Management System",
    description:
      "Student and teacher management system with leave requests, result portal, and fee payment functionality.",
    tags: ["Java Swing", "MySQL", "Desktop App"],
    github: "https://github.com/ShwetIsHere/University-Management-System-Java-Swing-MySQL",
    icon: "🎓",
  },
  {
    id: 5,
    title: "Bank Management System",
    description:
      "Banking application with account creation, deposits, withdrawals, and transaction management features.",
    tags: ["Java Swing", "MySQL", "Desktop App"],
    github: "https://github.com/ShwetIsHere/Bank-Management-System-Java-Swing-MySQL",
    icon: "🏦",
  },
  {
    id: 6,
    title: "Screen Share Application",
    description:
      "P2P screen sharing and real-time chat application using socket programming and wireless connectivity.",
    tags: ["Python", "Socket", "Networking"],
    github: "https://github.com/ShwetIsHere/Screen-Share-Python",
    icon: "🖥️",
  },
  {
    id: 7,
    title: "SnakIt - Recipe App",
    description:
      "Mobile app with recipe suggestions based on available ingredients, community features, and a grocery store.",
    tags: ["React Native", "Supabase", "API"],
    github: "https://github.com/ShwetIsHere/MAD",
    icon: "🍳",
  },
  {
    id: 8,
    title: "CommUnity - Social App",
    description:
      "Community platform for sharing memories, reels, real-time chat, and personal dashboards with followers.",
    tags: ["React Native", "Supabase", "API"],
    github: "https://github.com/ShwetIsHere/CommUnity-MobileApp-ReactNative",
    icon: "👥",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
              >
                <Github size={20} />
                View on GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
