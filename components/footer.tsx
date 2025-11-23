import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shwet. All rights reserved.
          </p>
        </div>

        <nav className="flex gap-6">
          {["About", "Projects", "Skills", "Education", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
