"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          SP
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {["About", "Projects", "Skills", "Education", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Shwet_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border p-4 space-y-3 animate-slideInRight">
          {["About", "Projects", "Skills", "Education", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a
            href="/Shwet_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
