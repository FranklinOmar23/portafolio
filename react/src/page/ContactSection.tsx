import { useState } from "react"
import { AnimatedSection } from "../components/animated-section"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({ nombre: "", email: "", asunto: "", mensaje: "" })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: "fdisla@arcodedominicana.com",
          from_email: formData.email,
          from_name: formData.nombre,
          subject: formData.asunto,
          message: formData.mensaje,
        }
      )
      setMessage("✅ ¡Mensaje enviado correctamente!")
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
      setTimeout(() => setMessage(""), 5000)
    } catch (error) {
      console.error("Error:", error)
      setMessage("❌ Error al enviar el mensaje. Intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatedSection animation="fade-up" duration={0.8}>
      <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
              Hablemos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ¿Necesitas desarrollo full stack, soporte técnico o gestión ágil de proyectos? Contacta conmigo para discutir tu próximo proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { href: "mailto:fdisla@arcodedominicana.com", icon: Mail, label: "Email", value: "fdisla@arcodedominicana.com" },
                  { href: "tel:+18099735660", icon: Phone, label: "Teléfono", value: "+1 (809) 973-5660" },
                  { href: "https://www.google.com/maps/search/Santo+Domingo+Norte,+República+Dominicana", icon: MapPin, label: "Ubicación", value: "Santo Domingo Norte, República Dominicana" },
                ].map(({ href, icon: Icon, label, value }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{label}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <Separator className="bg-gray-200 dark:bg-gray-700" />

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, onClick: () => window.open("https://github.com/franklinomar23", "_blank") },
                    { icon: Linkedin, onClick: () => {} },
                    { icon: Globe, onClick: () => {} },
                  ].map(({ icon: Icon, onClick }, i) => (
                    <Button key={i} variant="outline" size="icon" onClick={onClick}
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <Card className="p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-gray-900 dark:text-white">Envíame un mensaje</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Completa el formulario y te responderé lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
                      { name: "email", label: "Email", type: "email", placeholder: "tu@email.com" },
                    ].map(({ name, label, type, placeholder }) => (
                      <div key={name} className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
                        <input type={type} name={name} value={formData[name as keyof typeof formData]}
                          onChange={handleFormChange} required placeholder={placeholder}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                    <input type="text" name="asunto" value={formData.asunto} onChange={handleFormChange} required
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                    <textarea rows={4} name="mensaje" value={formData.mensaje} onChange={handleFormChange} required
                      placeholder="Cuéntame sobre tu proyecto..."
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400" />
                  </div>
                  {message && (
                    <p className={`text-sm text-center font-medium ${message.includes("✅") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {message}
                    </p>
                  )}
                  <Button type="submit" disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed">
                    <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
