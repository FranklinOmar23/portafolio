import { ThemeToggle } from "../components/theme-toggle"
import { Code2 } from "lucide-react"

interface NavbarProps {
  isVisible: boolean
  activeSection: string
}

const navLinks = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#sobre-mi", label: "Sobre Mí", id: "sobre-mi" },
  { href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "#experiencia", label: "Experiencia", id: "experiencia" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
]

export function Navbar({ isVisible, activeSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#inicio" className={`flex items-center space-x-2 transition-all duration-500 hover:opacity-80 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <Code2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Franklin Disla</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label, id }) => (
              <a key={id} href={href}
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${activeSection === id ? "text-emerald-600 dark:text-emerald-400" : ""}`}>
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 ${activeSection === id ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
