"use client"

import { useEffect, useState } from "react"

export default function TypingEffect() {
  const roles = ["Full Stack Developer", "Machine Learning"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    if (isTyping) {
      // Typing effect (left to right)
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 100) // Speed of typing
        return () => clearTimeout(timeout)
      } else {
        // Pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false)
          setCharIndex(currentRole.length)
        }, 2000) // Pause duration
        return () => clearTimeout(timeout)
      }
    } else {
      // Erasing effect (right to left)
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 50) // Speed of erasing
        return () => clearTimeout(timeout)
      } else {
        // Move to next role
        const timeout = setTimeout(() => {
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
          setIsTyping(true)
          setCharIndex(0)
        }, 500) // Pause before next role
        return () => clearTimeout(timeout)
      }
    }
  }, [charIndex, isTyping, currentRoleIndex, roles])

  return (
    <span className="inline-block min-w-[300px]">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  )
}
