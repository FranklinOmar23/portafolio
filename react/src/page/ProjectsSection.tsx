import { useState } from "react"
import { projects } from "../data/portfolio"
import { ProjectModal } from "../components/ProjectModal"
import { tiltHandlers } from "../components/useTilt"

const tilt = tiltHandlers(7)

const INITIAL = 4

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const hasMore = projects.length > INITIAL
  const visible = showAll ? projects : projects.slice(0, INITIAL)

  return (
    <section id="proyectos" aria-labelledby="proy" className="wrap" style={{ paddingTop: 80, paddingBottom: 60 }}>
      <span aria-hidden="true" className="ghost">03</span>
      <div className="section-head rv">
        <h2 id="proy" className="disp h-section"><span className="mark">PROYECTOS</span></h2>
        <p className="eyebrow" style={{ fontSize: 15 }}>✷ {String(projects.length).padStart(2, "0")} TRABAJOS SELECCIONADOS</p>
      </div>

      <ul id="lista-proyectos" className="projects">
        {visible.map((p, i) => (
          <li key={p.title} className="rv">
            <article className="pol pol--clickable" style={{ "--r": p.rotate } as React.CSSProperties} {...tilt}>
              <span aria-hidden="true" className="glare" />
              <span aria-hidden="true" className="pol__tape" />
              <div className="pol__shot">
                <img src={p.image} alt="" loading="lazy" />
                <span aria-hidden="true" className="pol__hint">VER DETALLE ↗</span>
              </div>
              <div className="pol__head">
                <span className="disp pol__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pol__title">
                  <button type="button" className="pol__open" aria-haspopup="dialog" onClick={() => setOpenIdx(i)}>
                    {p.title}
                  </button>
                </h3>
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

      <ProjectModal
        project={openIdx === null ? null : projects[openIdx]}
        index={openIdx ?? 0}
        onClose={() => setOpenIdx(null)}
      />
    </section>
  )
}
