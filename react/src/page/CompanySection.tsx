import { links } from "../data/portfolio"

const values = [
  { sym: "✷", title: "INNOVACIÓN", desc: "Tecnologías modernas para soluciones eficientes." },
  { sym: "✦", title: "CALIDAD", desc: "Metodologías ágiles y mejores prácticas." },
  { sym: "♣", title: "SOPORTE", desc: "Acompañamiento técnico especializado." },
]

export function CompanySection() {
  return (
    <section id="empresa" aria-labelledby="arcode" className="wrap arcode rv">
      <span aria-hidden="true" className="ghost">05</span>
      <div style={{ flex: "1 1 280px" }}>
        <div className="seal">
          <svg className="spin" viewBox="0 0 300 300" aria-hidden="true">
            <defs><path id="ring" d="M150 150 m -118 0 a 118 118 0 1 1 236 0 a 118 118 0 1 1 -236 0" /></defs>
            <circle cx="150" cy="150" r="146" fill="#111" />
            <circle cx="150" cy="150" r="136" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 5" />
            <text fill="#fff" fontFamily="Archivo Black, sans-serif" fontSize="20" letterSpacing="3">
              <textPath href="#ring" textLength="728" lengthAdjust="spacing">ARCODE DOMINICANA ✷ SANTO DOMINGO ✷ EST. 2025 ✷</textPath>
            </text>
          </svg>
          <div className="seal__core">
            <img src="/brand/arcode-logo.webp" alt="Logo de Arcode Dominicana" />
          </div>
        </div>
      </div>

      <div style={{ flex: "999 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>
        <p className="eyebrow">✷ MI EMPRESA</p>
        <h2 id="arcode" className="disp" style={{ margin: 0, fontSize: "clamp(44px, 6vw, 84px)" }}>ARCODE DOMINICANA</h2>
        <p className="muted" style={{ margin: 0, fontSize: 14, maxWidth: "62ch" }}>
          Como cofundador, lideramos el desarrollo de soluciones tecnológicas: aplicaciones web con React y Node.js,
          sistemas empresariales con C# y SQL Server, y plugins de WordPress a la medida.
        </p>
        <ul className="values">
          {values.map((v) => (
            <li key={v.title} className="hardcard">
              <span aria-hidden="true" style={{ fontSize: 26, lineHeight: 1 }}>{v.sym}</span>
              <h3 className="disp">{v.title}</h3>
              <p>{v.desc}</p>
            </li>
          ))}
        </ul>
        <div>
          <a className="btn" href={links.arcode} target="_blank" rel="noopener noreferrer">
            Visitar Arcode Dominicana <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
