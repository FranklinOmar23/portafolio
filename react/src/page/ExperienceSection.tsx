import { AnimatedSection } from "../components/animated-section"
import { StaggeredList } from "../components/staggered-list"
import { Card } from "../components/ui/card"
import { Calendar, ExternalLink, Rocket, Shield, Users } from "lucide-react"

const experience = [
  {
    title: "Cofundador & Desarrollador Full Stack",
    company: "Arcode Dominicana",
    companyLink: "https://arcodedominicana.com",
    period: "2025 - Presente",
    description: "Cofundador de empresa tecnológica especializada en desarrollo de software. Liderazgo técnico, arquitectura de sistemas y desarrollo full stack con tecnologías modernas.",
    icon: Rocket,
  },
  {
    title: "Encargado de Soporte Técnico",
    company: "TSI Dominicana",
    period: "2023 - Presente",
    description: "Responsable del soporte técnico especializado, administración y creación de servidores Windows Server, gestión de Active Directory, configuración de IIS y resolución de incidencias críticas de infraestructura, aplicando metodologías ágiles como Scrum Master certificado.",
    icon: Shield,
  },
  {
    title: "Scrum Master & Desarrollador",
    company: "Proyectos Freelance",
    period: "2021 - presente",
    description: "Gestión ágil de proyectos de desarrollo, facilitación de ceremonias Scrum y desarrollo de aplicaciones web con React y Node.js.",
    icon: Users,
  },
]

export function ExperienceSection() {
  return (
    <AnimatedSection animation="fade-left" duration={0.8}>
      <section id="experiencia" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
              Experiencia Profesional
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mi trayectoria profesional combinando desarrollo de software, liderazgo empresarial y soporte técnico especializado.
            </p>
          </div>

          <StaggeredList staggerDelay={0.2} animation="zoom-in">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <exp.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      {exp.companyLink ? (
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer"
                          className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline flex items-center gap-1 group/link">
                          {exp.company}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </StaggeredList>
        </div>
      </section>
    </AnimatedSection>
  )
}
