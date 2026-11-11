import { featured } from "../data/portfolio"

export function FeaturedProject() {
  return (
    <section id="vortex" aria-labelledby="gran" className="wrap" style={{ paddingTop: 60, paddingBottom: 120 }}>
      <span aria-hidden="true" className="ghost">04</span>
      <div className="section-head rv" style={{ marginBottom: 40 }}>
        <h2 id="gran" className="disp h-section">GRAN <span className="mark">PROYECTO</span></h2>
        <p className="hand" style={{ margin: 0, fontSize: 26, transform: "rotate(-3deg)" }}>el que más orgullo me da ↓</p>
      </div>

      <article className="rv hardcard featured">
        <span aria-hidden="true" className="featured__stamp">✷ DESTACADO</span>

        <div className="featured__media">
          <div className="browser-bar" aria-hidden="true">
            <span /><span /><span />
            <span className="browser-bar__url">vortex-pos.com</span>
          </div>
          <a className="featured__screen" href={featured.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${featured.name} en una pestaña nueva`}>
            <img src={featured.image} alt={`Pantalla de punto de venta de ${featured.name}`} loading="lazy" />
          </a>
          <ul className="featured__gallery">
            {featured.gallery.map((g) => (
              <li key={g.src}>
                <figure>
                  <img src={g.src} alt={`${featured.name}: ${g.caption}`} loading="lazy" />
                  <figcaption className="hand">{g.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="featured__body">
          <p className="eyebrow" style={{ fontSize: 13 }}>✷ PROYECTO INSIGNIA</p>
          <h3 style={{ margin: 0 }}>
            <img className="featured__logo" src={featured.logo} alt={featured.name} />
          </h3>
          <p style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", fontSize: 12 }}>{featured.tagline}</p>
          <p className="muted" style={{ fontSize: 14 }}>{featured.description}</p>
          <ul className="plain-list" style={{ fontSize: 13.5 }}>
            {featured.highlights.map((h) => <li key={h}>✦ {h}</li>)}
          </ul>
          <ul className="tags">
            {featured.tags.map((t) => <li key={t} className="tag">{t}</li>)}
          </ul>
          <div style={{ marginTop: 8 }}>
            <a className="btn" href={featured.url} target="_blank" rel="noopener noreferrer">
              Ir a {featured.name} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
