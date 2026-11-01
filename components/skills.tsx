import { Code2, Wrench, BookOpen, Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react"

const TechCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="group bg-card border-2 border-border rounded-lg p-4 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center gap-3 min-h-[140px] justify-center hover:scale-105">
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

// Crisp official AWS vector logo with signature smile arrow
const AwsLogo = ({ className = "h-6 w-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 304 182"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="AWS Logo"
  >
    <path
      fill="currentColor"
      d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6V66.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.3 5.9 3.5 10.5 3.5zM126.1 92.4c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1H126.1zM254.6 95.1c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.4 1.3-9.1 2-14.2 2z"
    />
    <path
      fill="#FF9900"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.4 10.2 3.7 4.8 7.6z"
    />
    <path
      fill="#FF9900"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 3.5-10 12.4-32.3 8.2-37.5z"
    />
  </svg>
)

export default function Skills() {
  const knownLanguages = [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ]

  const tools = [
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    {
      name: "Microsoft Apps",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "DBMS",
      logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    },
    {
      name: "AI Libraries",
      logo: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    },
  ]

  const learning = [
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    {
      name: "AI/ML",
      logo: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png",
    },
    {
      name: "Cloud Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Cloud Service",
      logo: "https://cdn-icons-png.flaticon.com/512/4115/4115745.png",
    },
    {
      name: "API",
      logo: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
    },
  ]

  const certifications = [
    {
      title: "Machine Learning Foundations",
      badgeName: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "AWS Academy",
      credentialId: "ade1a541-f451-4886-9e73-ce38f08963b5",
      credentialUrl:
        "https://www.credly.com/badges/ade1a541-f451-4886-9e73-ce38f08963b5/linked_in_profile",
      issued: "Apr 2026",
      badgeImage: "/certifications/aws-ml.png",
    },
    {
      title: "Cloud Foundations",
      badgeName: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      credentialId: "daa94063-d247-45fc-bcbd-ca11ea6156ec",
      credentialUrl:
        "https://www.credly.com/badges/daa94063-d247-45fc-bcbd-ca11ea6156ec/linked_in_profile",
      issued: "March 2026",
      badgeImage: "/certifications/aws-cloud.png",
    },
    {
      title: "Data Engineering",
      badgeName: "AWS Academy Graduate - Data Engineering",
      issuer: "AWS Academy",
      credentialId: "fddb1267-aff9-4905-ac9d-6f017c93f78b",
      credentialUrl:
        "https://www.credly.com/badges/fddb1267-aff9-4905-ac9d-6f017c93f78b/linked_in_profile",
      issued: "Apr 2026",
      badgeImage: "/certifications/aws-data.png",
    },
    {
      title: "Generative AI Foundations",
      badgeName: "AWS Academy Graduate - Generative AI Foundations",
      issuer: "AWS Academy",
      credentialId: "c0bf16b6-855d-4d48-93cb-33692ba1648e",
      credentialUrl:
        "https://www.credly.com/badges/c0bf16b6-855d-4d48-93cb-33692ba1648e/linked_in_profile",
      issued: "Oct 2026",
      badgeImage: "/certifications/aws-genai.png",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn">
          Skills &{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        {/* Known Programming Languages */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-primary">Programming Languages</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-accent" size={32} />
            <h3 className="text-2xl font-bold text-accent">Currently Learning</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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

        {/* Certifications & Badges */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-primary" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-primary">Certifications & Credentials</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Official AWS Academy Graduate credentials verified on Credly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <div
                key={cert.credentialId}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="group h-full bg-card border-2 border-border hover:border-primary/60 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between hover:scale-[1.02]">
                  <div>
                    {/* Header: AWS Vector Logo & Issued Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="h-6 w-12 text-slate-800 dark:text-white flex items-center shrink-0">
                        <AwsLogo className="h-5 w-auto" />
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground bg-muted/70 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-border/50">
                        <Calendar size={11} className="text-primary" />
                        {cert.issued}
                      </span>
                    </div>

                    {/* Official Credly Badge Image - Expanded size for crystal clarity */}
                    <div className="w-full flex justify-center py-3">
                      <div className="w-36 h-36 sm:w-40 sm:h-40 p-2 rounded-2xl bg-white/95 dark:bg-card border border-border/80 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={cert.badgeImage}
                          alt={cert.badgeName}
                          className="w-full h-full object-contain drop-shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Issuer Subtitle */}
                    <div className="text-[11px] font-semibold text-primary uppercase tracking-wider text-center pt-1">
                      {cert.issuer} Graduate
                    </div>

                    {/* Standardized Title Container - Keeps all titles leveled identically */}
                    <div className="h-[48px] sm:h-[52px] flex items-center justify-center text-center px-1 mt-1">
                      <h4 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </h4>
                    </div>

                    {/* Full Credential ID - Cleanly formatted and completely visible */}
                    <div className="mt-3 pt-3 border-t border-border/70 space-y-1">
                      <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider text-center">
                        Credential ID
                      </div>
                      <div
                        className="px-2 py-1.5 rounded-lg bg-muted/60 border border-border/60 text-[11px] font-mono text-foreground text-center break-all select-all font-medium hover:border-primary/40 transition-colors"
                        title={cert.credentialId}
                      >
                        {cert.credentialId}
                      </div>
                    </div>
                  </div>

                  {/* Verify Action Link - Perfectly pinned to the bottom */}
                  <div className="mt-4 pt-1">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-lg border border-primary/40 text-primary hover:bg-primary text-xs font-semibold hover:text-primary-foreground transition-all duration-200 shadow-xs cursor-pointer"
                    >
                      <CheckCircle2 size={13} />
                      Verify on Credly
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
