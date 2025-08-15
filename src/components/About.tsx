import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Heart } from "lucide-react"

export function About() {
  const skills = [
    "Java",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Backend Development",
    "DevOps",
    "Linux",
    "AWS EC2",
    "SQL",
  ];

  const highlights = [
    {
      icon: Code,
      title: "Back-End Development",
      description:
        "Building robust applications with modern technologies and best practices.",
    },
    {
      icon: Code,
      title: "Automation Scripts",
      description:
        "Creating efficient scripts to streamline workflows, reduce manual effort, and boost productivity.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Ensuring fast, responsive, and scalable solutions for every project.",
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description:
        "Dedicated to delivering exceptional work that exceeds expectations.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 4 years of experience in software development, I bring ideas to life 
              through clean code and thoughtful design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile image placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl font-bold text-primary/40 hover-scale">
                  AM
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* About content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-2xl font-semibold">
                Crafting digital experiences that matter
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer who believes in the power of clean code. 
                My journey started with a curiosity about how things work, which led me to explore 
                both the technical and creative sides of building digital products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies or enjoying a tech article while 
                sketching out ideas for my next project.
              </p>

              {/* Skills */}
              <div className="pt-4">
                <h4 className="font-semibold mb-4">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="glass-card hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}