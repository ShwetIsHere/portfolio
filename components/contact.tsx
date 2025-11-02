"use client"

import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react"
import { useState, FormEvent } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const subject = `Portfolio Contact: Message from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    
    // Open default email client with pre-filled information
    window.location.href = `mailto:shwetmanojbhai@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Left Side */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>

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
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
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
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  github.com/ShwetIsHere
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="animate-slideInRight">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                I'm always interested in hearing about new projects and opportunities. Fill out the form below to get in touch!
              </p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                      placeholder="Full Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                      placeholder="youremail@domain.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-sm"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={7}
                    className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none text-sm"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
                
                <a
                  href="https://www.linkedin.com/in/shwetishere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-2.5 rounded-lg border border-primary text-primary font-medium text-center hover:bg-primary/10 transition-colors"
                >
                  Or Connect on LinkedIn
                </a>
              </form>
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
