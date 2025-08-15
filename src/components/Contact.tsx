import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "duncankachasu@gmail.com",
      href: "mailto:duncankachasu@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 843 753 804",
      href: "tel:+27843753804"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mucklenueck, Pretoria",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/duncanjohanne",
      username: "@duncanjohanne"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/duncankachasu",
      username: "/in/duncankachasu"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and 
              see how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full transition-colors focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full transition-colors focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="w-full transition-colors focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact information */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-surface transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <social.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{social.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {social.username}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Response time indicator */}
              <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium">Usually responds within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}