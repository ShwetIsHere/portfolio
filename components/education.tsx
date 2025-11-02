import { GraduationCap, BookOpen, School, Calendar, CheckCircle, Star } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science",
      institution: "Navrachna University, Vadodara",
      year: "2023 - 2027 (Expected)",
      icon: GraduationCap,
      status: "pursuing",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      field: "Science",
      institution: "Aditi Science School",
      year: "2023",
      icon: BookOpen,
      status: "completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "General Studies",
      institution: "Zen School, Padra",
      year: "2021",
      icon: School,
      status: "completed",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fadeIn text-center">
          Education &{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Timeline</span>
        </h2>

        <div className="relative">
          {/* Animated tree trunk - vertical gradient line in center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-primary/20 rounded-full shadow-lg shadow-primary/50" />

          <div className="space-y-16">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={edu.degree}
                  className={`relative flex ${isLeft ? "justify-start" : "justify-end"} animate-${isLeft ? "slideInLeft" : "slideInRight"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Content card - alternating sides */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="relative">
                      {/* Branch connector - horizontal line to center */}
                      <div
                        className={`hidden md:block absolute top-12 ${isLeft ? "right-0" : "left-0"} w-8 h-1 bg-gradient-to-${isLeft ? "r" : "l"} from-primary to-transparent rounded-full`}
                      />

                      {/* Content card - enhanced with gradients */}
                      <div className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/40 rounded-xl p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm group">
                        <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                            {edu.degree}
                          </h3>
                          {edu.status === "pursuing" && (
                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/30 to-primary/30 border border-accent text-accent text-xs md:text-sm font-bold uppercase tracking-wider animate-pulse shadow-lg shadow-accent/20 flex items-center gap-2">
                              <Star className="w-4 h-4" />
                              Currently Pursuing
                            </span>
                          )}
                        </div>
                        <p className="text-lg md:text-xl font-semibold text-primary/90 mb-3">{edu.field}</p>
                        <p className="text-base md:text-lg text-muted-foreground mb-4 text-justify leading-relaxed">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                          <span className="text-sm md:text-base font-medium text-primary bg-primary/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </span>
                          {edu.status === "completed" && (
                            <span className="text-sm md:text-base font-medium text-green-400 bg-green-400/10 px-4 py-2 rounded-full flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Completed
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tree node - centered circular badge */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-8 z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary shadow-xl shadow-primary/30 flex items-center justify-center animate-float backdrop-blur-sm">
                      <edu.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                    {/* Glowing dot at connection point */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tree roots - decorative bottom fade */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1 h-20 bg-gradient-to-b from-primary/20 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}
