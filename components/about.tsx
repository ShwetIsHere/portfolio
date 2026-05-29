import { Globe, Mail, Phone, Linkedin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 md:col-span-2 animate-slideInLeft">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              I am an AI/ML Engineering student passionate about building practical technology solutions that solve real-world problems. My work focuses on computer vision, intelligent automation, IoT-integrated healthcare systems, and full-stack application development. I have hands-on experience with Python, OpenCV, React Native, Flask, Supabase, MySQL, and cloud-based tools, which helps me create scalable and useful applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              My journey in technology includes developing projects such as QAir-Asthma, a smart healthcare mobile application for real-time inhaler usage monitoring; Campus AI Surveillance, an AI-powered system for detecting crowd gatherings, fights, weapons, and unauthorized access; and SnackIt, a community-driven recipe-sharing mobile platform with AI-based ingredient recommendations. These projects have helped me explore multiple domains, including mobile app development, AI surveillance, healthcare technology, and community-based platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Currently, I am pursuing my Bachelor of Technology in Computer Science at Navrachna University, Vadodara. I am continuously improving my skills in AI/ML, computer vision, full-stack development, cloud tools, and database systems. I enjoy learning new technologies, participating in hackathons, and working on challenging projects that allow me to combine creativity, problem-solving, and code to build meaningful digital solutions.
            </p>
          </div>

          <div className="space-y-4 animate-slideInRight">
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="text-primary" size={20} />
                <h3 className="text-primary font-semibold">Languages Spoken</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• English</li>
                <li>• Hindi</li>
                <li>• Gujarati</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="text-primary" size={20} />
                <h3 className="text-primary font-semibold">Contact Info</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  shwetmanojbhai@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={16} />
                  linkedin.com/in/shwetishere
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
