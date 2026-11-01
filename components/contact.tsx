"use client"

import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Bot,
  Sparkles,
} from "lucide-react"
import { useState, FormEvent } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState("")
  const [warningMessage, setWarningMessage] = useState<string | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setWarningMessage(null)
    setIsLoading(true)
    setLoadingStep("AI Agent is reviewing your message...")

    try {
      // Step 1: AI Verification via secure server API (Groq LLM)
      const verifyRes = await fetch("/api/verify-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const verifyData = await verifyRes.json()

      if (!verifyData.approved) {
        setWarningMessage(
          verifyData.reason ||
            "Your message was not accepted. Please ensure your message is professional and relates to business, inquiries, or constructive feedback."
        )
        setIsLoading(false)
        return
      }

      // Step 2: Submit to Web3Forms directly from the browser
      setLoadingStep("Sending message via Web3Forms...")

      const web3FormData = new FormData()
      web3FormData.append("access_key", verifyData.accessKey || "")
      web3FormData.append("name", formData.name.trim())
      web3FormData.append("email", formData.email.trim())
      web3FormData.append("phone", formData.phone.trim())
      web3FormData.append("message", formData.message.trim())
      web3FormData.append("subject", `New Portfolio Contact: ${formData.name.trim()}`)
      web3FormData.append("from_name", "Portfolio Contact Form")

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      })

      const web3Data = await web3Response.json()

      if (web3Data.success) {
        setShowSuccessModal(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setWarningMessage(
          web3Data.message || "Failed to deliver message. Please try again later."
        )
      }
    } catch (error) {
      console.error("Submission error:", error)
      setWarningMessage(
        "A connection issue occurred while submitting. Please check your internet connection and try again."
      )
    } finally {
      setIsLoading(false)
      setLoadingStep("")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Left Side */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Connect
                </span>
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
                I'm always interested in hearing about new projects, business inquiries, and opportunities. Fill out the form below to get in touch!
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-muted-foreground mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isLoading}
                      className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-sm disabled:opacity-50"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-muted-foreground mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isLoading}
                      className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-sm disabled:opacity-50"
                      placeholder="youremail@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-muted-foreground mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={isLoading}
                    className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors text-sm disabled:opacity-50"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isLoading}
                    rows={7}
                    className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none text-sm disabled:opacity-50"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>{loadingStep || "Reviewing Message..."}</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* AI Review Status Indicator */}
                {isLoading && (
                  <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center gap-2 text-xs text-muted-foreground animate-pulse">
                    <Bot size={15} className="text-primary shrink-0" />
                    <span>AI Guardian is reviewing content for ethical and professional guidelines...</span>
                  </div>
                )}

                {/* Rejection / Warning Message under the form */}
                {warningMessage && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive flex items-start gap-3 animate-fadeIn">
                    <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
                    <div className="space-y-1 text-sm">
                      <div className="font-semibold text-foreground">Message Not Accepted</div>
                      <p className="text-muted-foreground leading-relaxed">{warningMessage}</p>
                    </div>
                  </div>
                )}

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

      {/* Success Popup Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md text-center p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-inner">
              <CheckCircle2 size={36} />
            </div>

            <DialogHeader className="space-y-2 text-center sm:text-center">
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-center gap-2">
                <Sparkles size={20} className="text-primary" />
                Message Sent!
              </DialogTitle>
              <DialogDescription className="text-base text-foreground/90 font-medium leading-relaxed pt-2">
                Thanks for contacting me, I will contact you as soon as possible. Thanks for giving your valuable time.
              </DialogDescription>
            </DialogHeader>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity w-full sm:w-auto min-w-[140px] cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
