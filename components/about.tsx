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
              I am passionate about full-stack development and machine learning, with a strong focus on solving real-life problems through innovative technology solutions. With expertise in building scalable applications using modern web technologies, I have developed a strong foundation in React, React Native, Python, and Java, creating solutions that bridge the gap between design and functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              My journey in tech has taken me through multiple domains - from mobile app development with React Native to AI-powered surveillance systems using YOLO models, from comprehensive clinic management systems to community-driven social platforms. I believe in writing clean, maintainable code and creating user-friendly interfaces that make complex systems accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Currently pursuing my Bachelor of Technology in Computer Science at Navrachna University, Vadodara, I am continuously expanding my knowledge in AI/ML, cloud database services, and modern frameworks. I am always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible with code.
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
                  <Phone size={16} />
                  +91 9429112912
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
