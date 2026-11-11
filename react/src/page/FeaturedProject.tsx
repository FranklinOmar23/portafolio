import { featured } from "../data/portfolio"

export function FeaturedProject() {
  return (
    <section aria-labelledby="gran" className="wrap" style={{ paddingTop: 60, paddingBottom: 120 }}>
      <div className="section-head rv" style={{ marginBottom: 40 }}>
        <h2 id="gran" className="disp h-section">GRAN PROYECTO</h2>
        <p className="hand" style={{ margin: 0, fontSize: 26, transform: "rotate(-3deg)" }}>el que más orgullo me da ↓</p>
      </div>

      <article className="rv hardcard featured">
        <span aria-hidden="true" className="featured__stamp">✷ DESTACADO</span>
        <div className="featured__media">
          <div className="browser-bar" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="featured__screen">
            {featured.image ? (
              <img src={featured.image} alt={`Captura de ${featured.name}`} loading="lazy" />
            ) : (
              <>
                <span className="disp spin" aria-hidden="true" style={{ position: "absolute", fontSize: "clamp(120px, 20vw, 260px)", color: "#222", lineHeight: 1 }}>✷</span>
                <span className="disp" style={{ position: "relative", color: "#fff", fontSize: "clamp(48px, 8vw, 104px)" }}>{featured.name}</span>
              </>
            )}
          </div>
        </div>
        <div className="featured__body">
          <p className="eyebrow" style={{ fontSize: 13 }}>✷ PROYECTO INSIGNIA</p>
          <h3 className="disp" style={{ margin: 0, fontSize: "clamp(48px, 5vw, 72px)" }}>{featured.name}</h3>
          <p className="muted" style={{ fontSize: 14 }}>{featured.description}</p>
          <ul className="tags">
            {featured.tech.map((t, i) => <li key={t + i} className="tag">{t}</li>)}
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
