"use client"

import { ArrowRight, Github, Linkedin, Mail, Phone, User } from "lucide-react"
import Link from "next/link"
import TypingEffect from "./typing-effect"

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(96, 165, 250, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(96, 165, 250, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`animate-slideInLeft ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Shwet{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Patel</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary mt-2">
                  <TypingEffect />
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate about full-stack development and machine learning. Focused on solving real-life problems
                through innovative technology solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  View My Work <ArrowRight size={18} />
                </Link>
                <a
                  href="https://drive.google.com/file/d/1JaEP8TLqYZ6HaUyLh1FuTdgWJkM25fO7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-colors"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/ShwetIsHere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/10 text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shwetishere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/10 text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:shwetmanojbhai@gmail.com"
                  className="p-3 rounded-lg bg-card hover:bg-primary/10 text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:+919429112912"
                  className="p-3 rounded-lg bg-card hover:bg-primary/10 text-primary transition-colors"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className={`animate-slideInRight ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="relative w-full h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-primary/30 animate-glowBorder flex items-center justify-center">
                <div className="text-center">
                  <User className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground">Your Image Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
