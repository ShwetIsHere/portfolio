export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science",
      institution: "Navrachna University, Vadodara",
      year: "2023 - 2027 (Expected)",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      institution: "Aditi Science School",
      year: "2023",
      icon: "📖",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "General Studies",
      institution: "Zen School, Padra",
      year: "2021",
      icon: "📚",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          Education &{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Timeline</span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="flex gap-6 animate-slideInLeft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl">{edu.icon}</div>
              <div className="flex-1 border-l-2 border-primary/30 pl-6 pb-6 last:border-l-0 last:pb-0">
                <h3 className="text-2xl font-bold text-primary mb-2">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground mb-1">{edu.field}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm font-medium text-primary/70">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
