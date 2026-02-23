import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ImageDisplay } from "../components/image-upload"
import { Code2, Mail, Github, MapPin, Briefcase, ExternalLink, Rocket } from "lucide-react"

interface HeroSectionProps {
  isVisible: boolean
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 animate-bounce">
                <Rocket className="w-4 h-4 mr-2" />
                Disponible para proyectos
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hola, soy{" "}
                <span className="text-emerald-600 dark:text-emerald-400 inline-block hover:scale-110 transition-transform duration-300">
                  Franklin Disla
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Desarrollador Full Stack
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Soy Franklin, cofundador de Arcode Dominicana y desarrollador Freelancer. Me apasiona crear soluciones que realmente le hagan la vida más fácil a la gente, ya sea desarrollando con Node.js, React o C#, o asegurándome de que todo funcione como debe en los servidores.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open(`https://wa.me/18099735660?text=Hola!%20Me%20gustaría%20contactarte.`, "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contáctame
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://github.com/franklinomar23", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                Ver Proyectos
              </Button>
            </div>

            <div className={`flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="flex items-center space-x-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>República Dominicana</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                <Briefcase className="w-4 h-4" />
                <a
                  href="https://arcodedominicana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 group"
                >
                  Arcode Dominicana
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <ImageDisplay imageUrl="/Omar.jpeg" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-emerald-600 dark:to-teal-700 rounded-2xl transform rotate-6 opacity-20 -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
