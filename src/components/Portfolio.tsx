import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with advanced features and seamless user experience.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "gradient-card", // Using CSS class for placeholder
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/duncanjohanne",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with real-time notifications.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "TypeScript"],
      image: "gradient-card",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Beautiful data visualization dashboard for business intelligence and analytics.",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      image: "gradient-card",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 4,
      title: "Brand Identity Design",
      description:
        "Complete brand identity design including logo, typography, and visual guidelines.",
      category: "design",
      technologies: ["Figma", "Adobe Illustrator", "After Effects"],
      image: "gradient-card",
      liveUrl: "https://example.com",
      githubUrl: null,
    },
    {
      id: 5,
      title: "Task Management Tool",
      description:
        "Collaborative project management tool with real-time updates and team features.",
      category: "web",
      technologies: ["Next.js", "Supabase", "Tailwind CSS"],
      image: "gradient-card",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description:
        "Cross-platform fitness app with workout tracking and progress analytics.",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "ML Kit"],
      image: "gradient-card",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 7,
      title: "Database Backup Utility",
      description: `The utility allows you to create backups of your PostgreSQL and MySQL databases quickly and reliably.
It is designed to run on Linux/MacOS system with a Java Runtime Environment (JRE) installed`,
      category: "tools",
      technologies: ["Java"],
      image: "gradient-card",
      liveUrl: null,
      githubUrl: "https://github.com/innaesim/backup-utility",
    },
    {
      id: 8,
      title: "System Monitor",
      description: `A lightweight Java utility for monitoring system resources in real-time. Display CPU usage, memory statistics, disk usage, and more through a CLI interface`,
      category: "tools",
      technologies: ["Java"],
      image: "gradient-card",
      liveUrl: null,
      githubUrl: "https://github.com/innaesim/system_monitor",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "scripts", label: "Automation Scripts" },
    { key: "tools", label: "Utility Tools" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring web applications, mobile
              apps, and design projects that solve real-world problems.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className={`transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-primary/10 hover:border-primary/40"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group glass-card hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill={siGithub.hex}
                              width="32"
                              height="32"
                            >
                              <title>${siGithub.title}</title>
                              <path d={siGithub.path} />
                            </svg>
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-full text-4xl font-bold text-primary/40">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
