export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "HTML", "CSS", "JavaScript", "Java"],
      icon: "💻",
    },
    {
      title: "Web & Mobile",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
      icon: "📱",
    },
    {
      title: "Backend & Databases",
      skills: ["Java Servlet", "Supabase", "MySQL", "API Integration"],
      icon: "🗄️",
    },
    {
      title: "Tools & Platforms",
      skills: ["VS Code", "GitHub", "Microsoft Office", "Google Drive"],
      icon: "🛠️",
    },
    {
      title: "Currently Learning",
      skills: ["AI/ML", "Cloud Services", "Advanced React", "Mobile Development"],
      icon: "📚",
    },
    {
      title: "Specialties",
      skills: ["Full Stack Development", "Machine Learning", "Problem Solving", "UI/UX Implementation"],
      icon: "⭐",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          Skills &{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
