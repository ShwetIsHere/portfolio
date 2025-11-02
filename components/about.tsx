export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 md:col-span-2 animate-slideInLeft">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in building scalable applications using modern web
              technologies. With a strong foundation in React, React Native, Python, and Java, I create solutions that
              bridge the gap between design and functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has taken me through multiple domains - from mobile app development to AI-powered
              surveillance systems. I believe in writing clean, maintainable code and solving real-world problems
              through innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Computer Science at Navrachna University, I'm continuously learning about
              AI/ML, cloud databases, and modern frameworks. When I'm not coding, you can find me exploring new
              technologies or contributing to open-source projects.
            </p>
          </div>

          <div className="space-y-4 animate-slideInRight">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-primary font-semibold mb-3">Languages Spoken</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• English</li>
                <li>• Hindi</li>
                <li>• Gujarati</li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-primary font-semibold mb-3">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>📧 shwetmanojbhai@gmail.com</li>
                <li>📱 +91 9429112912</li>
                <li>🔗 linkedin.com/in/shwetishere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
