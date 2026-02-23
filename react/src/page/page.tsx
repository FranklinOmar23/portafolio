import { useState, useEffect } from "react"
import { StarsBackground } from "../components/stars-background"
import { FloatingParticles } from "../components/floating-particles"
import { Navbar } from "./Navbar"
import { HeroSection } from "./HeroSection"
import { AboutSection } from "./AboutSection"
import { ProjectsSection } from "./ProjectsSection"
import { ExperienceSection } from "./ExperienceSection"
import { CompanySection } from "./CompanySection"
import { ContactSection } from "./ContactSection"
import { Footer } from "./Footer"
import emailjs from "@emailjs/browser"

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "")

export function Page() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "proyectos", "experiencia", "contacto"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800 transition-colors relative">
      <StarsBackground />
      <FloatingParticles />
      <Navbar isVisible={isVisible} activeSection={activeSection} />
      <HeroSection isVisible={isVisible} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </div>
  )
}