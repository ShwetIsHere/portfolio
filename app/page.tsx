"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="relative">
        <Hero isLoaded={isLoaded} />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
