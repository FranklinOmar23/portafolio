import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import type { Project } from "../data/portfolio"

type Props = { project: Project | null; index: number; onClose: () => void }

/**
 * Modal de detalle de proyecto. Usa <dialog> nativo: atrapa el foco,
 * cierra con Esc y devuelve el foco a la tarjeta al cerrarse.
 */
export function ProjectModal({ project, index, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      d.showModal()
      document.body.style.overflow = "hidden"
    }
    if (!project && d.open) d.close()
    return () => { document.body.style.overflow = "" }
  }, [project])

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {project && (
        <div className="modal__frame">
          <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
            <X size={22} aria-hidden="true" />
          </button>
          <article className="modal__card paper">
            <div className="modal__shot">
              <img src={project.image} alt={`Captura de ${project.title}`} />
            </div>

            <div className="modal__body">
              <div className="modal__head">
                <span className="disp modal__num">{String(index + 1).padStart(2, "0")}</span>
                <h2 id="modal-title" className="disp modal__title">{project.title}</h2>
              </div>
              <p className="modal__text">{project.details}</p>

              <div className="modal__cols">
                <div>
                  <h3 className="disp modal__sub">QUÉ HACE</h3>
                  <ul className="modal__list">
                    {project.highlights.map((h) => <li key={h}>✦ {h}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="disp modal__sub">STACK</h3>
                  <ul className="tags">
                    {project.tech.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                </div>
              </div>

              {(project.demo || project.repo) && (
                <div className="modal__actions">
                  {project.demo && (
                    <a className="btn btn--accent" href={project.demo} target="_blank" rel="noopener noreferrer">
                      Ver demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.repo && (
                    <a className="btn btn--light" href={project.repo} target="_blank" rel="noopener noreferrer">
                      Código <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        </div>
      )}
    </dialog>
  )
}
