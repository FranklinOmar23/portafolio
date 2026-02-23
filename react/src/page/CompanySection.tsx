import { RevealOnScroll } from "../components/reveal-on-scroll"
import { Button } from "../components/ui/button"
import { Target, Award, Users, ArrowRight, ExternalLink } from "lucide-react"

export function CompanySection() {
  return (
    <RevealOnScroll direction="bottom" delay={0.2}>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600 dark:bg-emerald-800 transition-colors relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <a href="https://arcodedominicana.com" target="_blank" rel="noopener noreferrer" className="inline-block group">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:scale-110 transition-transform duration-300 inline-flex items-center gap-2">
                Arcode Dominicana
                <ExternalLink className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
              </h2>
            </a>
            <p className="text-xl text-emerald-100 dark:text-emerald-200 max-w-3xl mx-auto leading-relaxed">
              Como cofundador, lideramos el desarrollo de soluciones tecnológicas innovadoras, desde aplicaciones web con React y Node.js hasta sistemas empresariales con C# y SQL Server. Especializados en WordPress y desarrollo de plugins personalizados.
            </p>
            <Button asChild size="lg" variant="secondary"
              className="mt-6 bg-white text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <a href="https://arcodedominicana.com" target="_blank" rel="noopener noreferrer">
                Visitar Arcode Dominicana
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Target, title: "Innovación", desc: "Tecnologías modernas para soluciones eficientes" },
                { icon: Award, title: "Calidad", desc: "Metodologías ágiles y mejores prácticas" },
                { icon: Users, title: "Soporte", desc: "Acompañamiento técnico especializado" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center transform hover:scale-110 transition-all duration-300">
                  <Icon className="w-12 h-12 text-emerald-200 dark:text-emerald-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-emerald-100 dark:text-emerald-200">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}
