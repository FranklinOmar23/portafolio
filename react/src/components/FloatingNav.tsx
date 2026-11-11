import { useEffect, useState } from "react"

const items = [
  { href: "#sobre-mi", label: "Hola" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#vortex", label: "Vortex" },
  { href: "#empresa", label: "Arcode" },
  { href: "#contacto", label: "Contacto" },
]

/** Barra de progreso de lectura + menú tipo pastilla que aparece al bajar. */
export function FloatingNav() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? scrollY / max : 0)
      setVisible(scrollY > innerHeight * 0.6)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    addEventListener("scroll", onScroll, { passive: true })
    addEventListener("resize", onScroll)
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div className="progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <nav aria-label="Secciones" className={`fnav${visible ? " fnav--on" : ""}`}>
        <a href="#inicio" className="fnav__home" aria-label="Volver al inicio">FD<span aria-hidden="true">✷</span></a>
        <ul>
          {items.map((i) => <li key={i.href}><a href={i.href}>{i.label}</a></li>)}
        </ul>
      </nav>
    </>
  )
}
