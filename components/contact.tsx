"use client"

import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 animate-fadeIn">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <a
                  href="mailto:shwetmanojbhai@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  shwetmanojbhai@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Phone</h3>
                <a href="tel:+919429112912" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9429112912
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Location</h3>
                <p className="text-muted-foreground">Vadodara, India</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/shwetishere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/shwetishere
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">GitHub</h3>
                <a
                  href="https://github.com/ShwetIsHere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/ShwetIsHere
                </a>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="animate-slideInRight space-y-6">
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and opportunities. Feel free to get in touch!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:shwetmanojbhai@gmail.com"
                  className="block w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity"
                >
                  Send Me an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/shwetishere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 rounded-lg border border-primary text-primary font-medium text-center hover:bg-primary/10 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border mt-16 pt-8 text-center text-muted-foreground">
        <p>© 2025 Shwet Patel. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </section>
  )
}
