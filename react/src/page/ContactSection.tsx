import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { TornEdge } from "../components/TornEdge"
import { links } from "../data/portfolio"

const empty = { nombre: "", email: "", asunto: "", mensaje: "" }

export function ContactSection() {
  const [form, setForm] = useState(empty)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"" | "ok" | "error">("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          to_email: links.email,
          from_email: form.email,
          from_name: form.nombre,
          subject: form.asunto,
          message: form.mensaje,
        },
      )
      setStatus("ok")
      setForm(empty)
      setTimeout(() => setStatus(""), 5000)
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    { href: links.github, label: "GitHub", Icon: Github },
    { href: links.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: links.instagram, label: "Instagram", Icon: Instagram },
    { href: links.whatsapp, label: "WhatsApp", Icon: MessageCircle },
  ].filter((s) => s.href)

  return (
    <section id="contacto" aria-labelledby="hablemos" className="band contact">
      <TornEdge position="top" seed={23} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <span aria-hidden="true" className="ghost ghost--dark">06</span>
        <h2 id="hablemos" className="disp contact__title rv">
          HABLEMOS<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div className="contact__grid">
          <div className="contact__info rv">
            <p style={{ color: "#cfcfcf", maxWidth: "36ch" }}>
              ¿Necesitas desarrollo full stack, soporte técnico o gestión ágil de proyectos? Escríbeme.
            </p>
            <div>
              <p className="contact__label">EMAIL</p>
              <a href={`mailto:${links.email}`} style={{ fontSize: "clamp(15px, 1.8vw, 19px)" }}>{links.email}</a>
            </div>
            <div>
              <p className="contact__label">TELÉFONO</p>
              <a href={links.phoneHref}>{links.phone}</a>
            </div>
            <div>
              <p className="contact__label">UBICACIÓN</p>
              <a href={links.maps} target="_blank" rel="noopener noreferrer">{links.location}</a>
            </div>
            <div className="socials">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} className="social" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <form className="note-form rv" aria-label="Formulario de contacto" onSubmit={onSubmit}>
            <div className="paper note">
              <span aria-hidden="true" className="note__tape" style={{ top: -14, left: 24, width: 96, background: "rgba(255,43,43,.85)", transform: "rotate(-6deg)" }} />
              <span aria-hidden="true" className="note__tape" style={{ top: -12, right: 28, width: 80, background: "rgba(240,240,232,.85)", transform: "rotate(5deg)" }} />
              <p className="hand" style={{ margin: 0, fontSize: 28, lineHeight: 1 }}>Déjame una nota ✦</p>
              <div className="fields-2">
                <label className="lbl">NOMBRE
                  <input className="fld" type="text" name="nombre" autoComplete="name" placeholder="Tu nombre" required value={form.nombre} onChange={onChange} />
                </label>
                <label className="lbl">EMAIL
                  <input className="fld" type="email" name="email" autoComplete="email" placeholder="tu@correo.com" required value={form.email} onChange={onChange} />
                </label>
              </div>
              <label className="lbl">ASUNTO
                <input className="fld" type="text" name="asunto" placeholder="¿De qué hablamos?" required value={form.asunto} onChange={onChange} />
              </label>
              <label className="lbl">MENSAJE
                <textarea className="fld" name="mensaje" rows={4} placeholder="Cuéntame tu idea…" required value={form.mensaje} onChange={onChange} />
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <button className="btn btn--accent" type="submit" disabled={loading}>
                  {loading ? "Enviando…" : "Enviar mensaje"}
                </button>
                <span className="hand" role="status" style={{ fontSize: 22 }}>
                  {status === "ok" && "¡Recibido! Te respondo pronto."}
                  {status === "error" && "Ups, no se envió. Intenta de nuevo."}
                </span>
              </div>
            </div>
          </form>
        </div>

        <footer className="footer">
          <span>
            © 2026 Franklin Disla · Powered by{" "}
            <a href={links.arcode} target="_blank" rel="noopener noreferrer">Arcode Dominicana</a>
          </span>
          <span aria-hidden="true" style={{ color: "#fff" }}>✷ ✦ ♣</span>
        </footer>
      </div>
    </section>
  )
}
