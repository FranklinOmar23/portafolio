import emailjs from "@emailjs/browser"
import { HeroSection } from "./HeroSection"
import { AboutSection } from "./AboutSection"
import { NameBand } from "./NameBand"
import { ProjectsSection } from "./ProjectsSection"
import { FeaturedProject } from "./FeaturedProject"
import { CompanySection } from "./CompanySection"
import { ContactSection } from "./ContactSection"

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "")

export function Page() {
  return (
    <div className="zine paper">
      {/* Textura de papel arrugado */}
      <svg aria-hidden="true" className="crumple">
        <filter id="crumple">
          <feTurbulence type="fractalNoise" baseFrequency=".006" numOctaves={4} seed={7} />
          <feDiffuseLighting surfaceScale={3} lightingColor="#ffffff">
            <feDistantLight azimuth={45} elevation={58} />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter="url(#crumple)" />
      </svg>

      <main>
        <HeroSection />
        <AboutSection />
        <NameBand />
        <ProjectsSection />
        <FeaturedProject />
        <CompanySection />
        <ContactSection />
      </main>
    </div>
  )
}
