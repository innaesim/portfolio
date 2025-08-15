import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { siGithub, siMaildotru, siGitconnected } from "simple-icons";

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Portfolio</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            I'm Duncan Kachasu, a passionate developer crafting
            <span className="text-foreground font-medium">
              {" "}
              digital experiences
            </span>{" "}
            that inspire and engage.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={scrollToPortfolio}
              className="btn-hero text-lg px-8 py-4"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-lg px-8 py-4 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/duncanjohanne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale"
            >
              <svg
                viewBox="0 0 24 24"
                fill={siGithub.hex}
                width="32"
                height="32"
              >
                <title>GitHub</title>
                <path d={siGithub.path} />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/duncankachasu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale"
            >
              <svg
                viewBox="0 0 24 24"
                fill={siGitconnected.hex}
                width="32"
                height="32"
              >
                <title>LinkedIn</title>
                <path d={siGitconnected.path} />
              </svg>
            </a>
            <a
              href="mailto:duncankachasu@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-scale"
            >
              <svg
                viewBox="0 0 24 24"
                fill={siMaildotru.hex}
                width="32"
                height="32"
              >
                <title>Email</title>
                <path d={siMaildotru.path} />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
