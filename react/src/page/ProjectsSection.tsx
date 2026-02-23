import { AnimatedSection } from "../components/animated-section"
import { StaggeredList } from "../components/staggered-list"
import { Badge } from "../components/ui/badge"
import { Rocket } from "lucide-react"

const projects = [
  {
    title: "Sistema de Gestión Hospitalaria",
    description: "Aplicación completa desarrollada en Nodejs y React para la administración de pacientes, médicos y citas médicas. Incluye control de inventario, reportes y gestión de usuarios con diferentes roles.",
    tech: ["NodeJS", "React", "SQL Server", "Express"],
    image: "/hospital-system.png",
  },
  {
    title: "Generador de Volantes de Pago",
    description: "Herramienta desarrollada en Python para automatizar la creación de volantes de pago en PDF a partir de datos de nómina. Reduce tiempos de generación y mejora la precisión en los cálculos.",
    tech: ["Python", "Pandas", "ReportLab", "Excel"],
    image: "/payroll-generator.png",
  },
  {
    title: "Sistema de Organización de Viajes",
    description: "Plataforma web que permite gestionar reservas, clientes y pagos para agencias de viajes. Incluye panel administrativo, historial de excursiones y control de cupos disponibles.",
    tech: ["React", "Vite", "SupaBase", "NodeJS"],
    image: "/travel-system.png",
  },
  {
    title: "Generador y Gestor de PDF",
    description: "Aplicación web desarrollada en React que permite convertir imágenes en archivos PDF, separar documentos por páginas y unir varios PDF en uno solo. Una herramienta práctica y rápida para la gestión de documentos digitales.",
    tech: ["React", "JavaScript", "PDF.js", "FileSaver.js"],
    image: "/pdf-generator.png",
  },
]

export function ProjectsSection() {
  return (
    <AnimatedSection animation="zoom-in" duration={0.8}>
      <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Selección de proyectos que demuestran mi experiencia en desarrollo full stack y liderazgo técnico.
            </p>
          </div>

          <StaggeredList staggerDelay={0.15} animation="fade-up">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-stretch group mb-16`}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 h-full">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-2xl font-bold text-white">0{index + 1}</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200 dark:bg-emerald-900 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 w-fit">
                      <Rocket className="w-3 h-3 mr-1" />
                      Proyecto Destacado
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-2xl transition-all duration-500">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300 cursor-default shadow-sm">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>
    </AnimatedSection>
  )
}
