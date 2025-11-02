import { Code2, Wrench, BookOpen } from "lucide-react"

const TechCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="group bg-background border-2 border-border rounded-lg p-4 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center gap-3 min-h-[140px] justify-center hover:scale-105">
      <div className="w-16 h-16 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2360a5fa'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='20'%3E?%3C/text%3E%3C/svg%3E"
          }}
        />
      </div>
      <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
        {name}
      </p>
    </div>
  )
}

export default function Skills() {
  const knownLanguages = [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ]

  const tools = [
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    {
      name: "Microsoft Apps",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
  ]

  const learning = [
    {
      name: "AI/ML",
      logo: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
    },
    {
      name: "Cloud Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    {
      name: "API",
      logo: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          Skills &{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
        </h2>

        {/* Known Programming Languages */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-primary">Programming Languages</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {knownLanguages.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TechCard name={tech.name} logo={tech.logo} />
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-primary">Tools I Use</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TechCard name={tech.name} logo={tech.logo} />
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-accent" size={32} />
            <h3 className="text-2xl font-bold text-accent">Currently Learning</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {learning.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TechCard name={tech.name} logo={tech.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
