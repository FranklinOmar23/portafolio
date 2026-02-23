import { Code2, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8 transition-colors relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Code2 className="h-6 w-6 text-emerald-400 animate-pulse" />
          <span className="text-lg font-semibold">Franklin Disla</span>
        </div>
        <p className="text-gray-400">© 2025 Franklin Disla. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="https://arcodedominicana.com" target="_blank" rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 group">
            Powered by Arcode Dominicana
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  )
}
