import { useState } from "react"
import { projects } from "../data/portfolio"

const INITIAL = 4

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const hasMore = projects.length > INITIAL
  const visible = showAll ? projects : projects.slice(0, INITIAL)

  return (
    <section id="proyectos" aria-labelledby="proy" className="wrap" style={{ paddingTop: 80, paddingBottom: 60 }}>
      <div className="section-head rv">
        <h2 id="proy" className="disp h-section">PROYECTOS</h2>
        <p className="eyebrow" style={{ fontSize: 15 }}>✷ {String(projects.length).padStart(2, "0")} TRABAJOS SELECCIONADOS</p>
      </div>

      <ul id="lista-proyectos" className="projects">
        {visible.map((p, i) => (
          <li key={p.title} className="rv">
            <article className="pol" style={{ "--r": p.rotate } as React.CSSProperties}>
              <span aria-hidden="true" className="pol__tape" />
              <div className="pol__shot">
                <img src={p.image} alt={`Captura de ${p.title}`} loading="lazy" />
              </div>
              <div className="pol__head">
                <span className="disp pol__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pol__title">{p.title}</h3>
              </div>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="more">
          <button type="button" className="btn btn--light" aria-expanded={showAll} aria-controls="lista-proyectos" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Ver menos" : `Ver más proyectos (${projects.length - INITIAL})`}
            <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
          </button>
        </div>
      )}
    </section>
  )
}
