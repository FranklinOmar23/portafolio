import { useRef } from "react"
import { ToonBust } from "../components/ToonBust"

/**
 * Portada. Los elementos .float se desplazan un poco con el mouse
 * (parallax): cada uno usa su propia profundidad con la variable --d.
 */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
    el.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
  }

  return (
    <header id="inicio" ref={ref} className="wrap hero" onPointerMove={onMove}>
      {/* ---------- Collage alrededor del título ---------- */}
      <div className="float hero__code" style={{ "--d": 14 } as React.CSSProperties} aria-hidden="true">
        <div className="code-card">
          <span className="tape tape--tl" />
          <pre>
            <span className="tk-k">const</span> franklin = {"{"}{"\n"}
            {"  "}rol: <span className="tk-s">"Full Stack"</span>,{"\n"}
            {"  "}stack: [<span className="tk-s">"Node"</span>, <span className="tk-s">"React"</span>, <span className="tk-s">"C#"</span>],{"\n"}
            {"  "}servidores: <span className="tk-k">true</span>,{"\n"}
            {"  "}cafe: <span className="tk-n">Infinity</span>,{"\n"}
            {"}"}
          </pre>
        </div>
      </div>

      <div className="float hero__stamp" style={{ "--d": -10 } as React.CSSProperties} aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <defs><path id="stamp-ring" d="M100 100 m -74 0 a 74 74 0 1 1 148 0 a 74 74 0 1 1 -148 0" /></defs>
          <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text fontFamily="Archivo Black, sans-serif" fontSize="17" fill="currentColor" letterSpacing="2">
            <textPath href="#stamp-ring" textLength="455" lengthAdjust="spacing">HECHO EN RD ✷ SANTO DOMINGO ✷</textPath>
          </text>
          <text x="100" y="96" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="30" fill="currentColor">RD</text>
          <text x="100" y="122" textAnchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="13" fill="currentColor" letterSpacing="1">✷ 2026 ✷</text>
        </svg>
      </div>

      <div className="float hero__status" style={{ "--d": 8 } as React.CSSProperties}>
        <span className="status-pill"><span className="status-dot" aria-hidden="true" />Disponible para proyectos</span>
      </div>

      {/* ---------- Título ---------- */}
      <div className="hero__titlewrap">
        <div className="hero__meta">
          <span>DEVELOPER / IT SUPPORT</span>
          <span className="hero__year">
            2026
            <svg aria-hidden="true" viewBox="0 0 120 60" className="scribble">
              <path d="M8 34 C 6 14, 46 4, 80 8 C 110 12, 118 30, 100 44 C 80 58, 26 58, 12 44 C 4 36, 18 22, 36 18" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <h1 className="disp hero__title" aria-label="Portfolio">
          <span aria-hidden="true" className="echo" data-text="PORTF">PORTF</span>
          <ToonBust />
          <span aria-hidden="true" className="echo" data-text="LIO">LIO</span>
        </h1>
        <svg aria-hidden="true" viewBox="0 0 600 24" preserveAspectRatio="none" className="hero__underline">
          <path d="M4 14 C 120 4, 260 22, 380 10 S 560 6, 596 14" fill="none" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="hero__note">
        <svg aria-hidden="true" width="64" height="70" viewBox="0 0 64 70" style={{ overflow: "visible" }}>
          <path d="M22 66 C 6 60, 4 40, 18 30 C 28 22, 40 26, 36 36 C 32 44, 18 38, 22 22 C 25 12, 32 6, 38 2" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M30 4 L 39 1 L 40 11" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="hand">soy yo (en 3D)<span className="only-mouse"> — pasa el mouse</span></p>
      </div>

      <div aria-hidden="true" className="symbols hero__symbols">
        <span>✷</span><span>✦</span><span>♣</span>
      </div>

      <a href="#sobre-mi" className="scroll-cue" aria-label="Bajar a la sección Hola">
        <span aria-hidden="true">↓</span>
      </a>
    </header>
  )
}
