import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and user experience is remarkable. Our conversion rates increased by 40% after launch.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Working with Alex was a game-changer for our startup. The mobile app they developed is not only beautiful but also highly functional. The project was delivered on time and within budget.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "DesignStudio",
      content: "Alex's design skills are outstanding. They created a brand identity that perfectly captures our company's vision. The collaboration was smooth and the final result speaks for itself.",
      rating: 5,
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "DataFlow",
      content: "The analytics dashboard Alex built transformed how we view our data. The visualizations are intuitive and the performance is excellent. Highly recommend their work.",
      rating: 5,
      avatar: "DT"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take my word for it. Here's what some of my amazing clients 
              have to say about working together.
            </p>
          </div>

          {/* Testimonial carousel */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Quote icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center justify-center space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                      {testimonials[currentIndex].avatar}
                    </div>
                    
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="h-10 w-10 p-0 rounded-full hover:bg-primary/10 hover:border-primary/40"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="h-10 w-10 p-0 rounded-full hover:bg-primary/10 hover:border-primary/40"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional testimonials grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="glass-card hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.content.length > 120 
                      ? testimonial.content.substring(0, 120) + "..." 
                      : testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}