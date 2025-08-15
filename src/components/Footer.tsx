import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/duncanjohanne",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/duncankachasu",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:duncankachasu@gmail.com",
      label: "Email"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and description */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold gradient-text tracking-tight mb-2 hover:opacity-80 transition-opacity"
              >
                Duncan Kachasu
              </button>
              <p className="text-muted-foreground text-sm">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
                © {currentYear} Made with 
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                by Duncan Kachasu
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 mt-8 pt-8">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}