import { AnimatedSection } from "../components/animated-section"
import { StaggeredList } from "../components/staggered-list"
import { Award, ExternalLink, Code2, Server, Database, Globe, Settings, Users, Rocket, Shield, FileCode } from "lucide-react"

const skills = [
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "React", icon: Code2, category: "Frontend" },
  { name: "C#", icon: FileCode, category: "Backend" },
  { name: "JavaScript", icon: Code2, category: "Frontend" },
  { name: "SQL Server", icon: Database, category: "Database" },
  { name: "Supabase", icon: Database, category: "Database" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "WordPress", icon: Globe, category: "CMS" },
  { name: "Plugin Development", icon: Settings, category: "CMS" },
  { name: "Scrum Master", icon: Users, category: "Management" },
  { name: "TypeScript", icon: Code2, category: "Frontend" },
  { name: "Next.js", icon: Rocket, category: "Frontend" },
  { name: "Windows Server", icon: Server, category: "Infrastructure" },
  { name: "Server Administration", icon: Settings, category: "Infrastructure" },
  { name: "Active Directory", icon: Shield, category: "Infrastructure" },
  { name: "IIS", icon: Globe, category: "Infrastructure" },
  { name: "PowerShell", icon: Code2, category: "Infrastructure" },
]

const certifications = [
  "Certified Scrum Master (CSM)",
  "Desarrollo de Plugins WordPress",
  "Administración de Windows Server",
  "Especialista en Microsoft Active Directory",
]

export function AboutSection() {
  return (
    <AnimatedSection animation="fade-up" duration={0.8}>
      <section id="sobre-mi" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-down" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                Sobre Mí
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Combino la experiencia técnica en desarrollo full stack con el liderazgo empresarial y la gestión ágil de proyectos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Mi Trayectoria</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Como cofundador de{" "}
                  <a href="https://arcodedominicana.com" target="_blank" rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold inline-flex items-center gap-1 group">
                    Arcode Dominicana
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  , he liderado el desarrollo de soluciones tecnológicas innovadoras utilizando tecnologías como Node.js, React, C# y bases de datos como SQL Server y PostgreSQL.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  En mi rol como Encargado de Soporte en una empresa de tecnologia, gestiono equipos técnicos, administro servidores Windows Server, configuro Active Directory e IIS, y resuelvo incidencias críticas aplicando metodologías ágiles como Scrum Master certificado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg transform hover:scale-110 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg transform hover:scale-110 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certificaciones</h4>
                <StaggeredList staggerDelay={0.05} animation="fade-right" className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Stack Tecnológico</h3>

              {[
                { label: "Backend & Bases de Datos", categories: ["Backend", "Database"] },
                { label: "Frontend", categories: ["Frontend"] },
                { label: "CMS & Gestión", categories: ["CMS", "Management"] },
                { label: "Infraestructura & Servidores", categories: ["Infrastructure"] },
              ].map(({ label, categories }) => (
                <div key={label} className="space-y-3">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">{label}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.filter((s) => categories.includes(s.category)).map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer">
                        <skill.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
