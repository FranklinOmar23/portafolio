import { certifications, experience, skills } from "../data/portfolio"

const handles = [
  ["0%", "0%"], ["50%", "0%"], ["100%", "0%"], ["0%", "50%"],
  ["100%", "50%"], ["0%", "100%"], ["50%", "100%"], ["100%", "100%"],
]

export function AboutSection() {
  return (
    <section id="sobre-mi" aria-labelledby="hola" className="wrap hello rv">
      <span aria-hidden="true" className="ghost">01</span>
      {/* Foto con marco de selección estilo Figma */}
      <div>
        <div className="select-frame">
          <span aria-hidden="true" className="tape tape--photo" />
          <p className="hand sticky-note">¡disponible para freelance! <span aria-hidden="true">✦</span></p>
          <span className="select-frame__label" style={{ top: -26, left: -2 }}>franklin.jpeg</span>
          <img src="/Omar.jpeg" alt="Franklin Disla de traje azul marino y corbata azul" />
          {handles.map(([x, y]) => (
            <span key={x + y} className="select-frame__handle" style={{ left: x, top: y }} />
          ))}
          <span className="select-frame__label" style={{ bottom: -24, left: "50%", transform: "translateX(-50%)", fontSize: 10 }}>280 × 466</span>
        </div>
      </div>

      {/* Centro */}
      <div className="col">
        <h2 id="hola" className="disp" style={{ margin: 0, fontSize: "clamp(56px, 7vw, 92px)" }}><span className="mark">HOLA</span></h2>
        <p style={{ fontWeight: 700 }}>Hi, soy Franklin Disla.</p>
        <p style={{ maxWidth: "42ch", color: "#333" }}>
          Cofundador de Arcode Dominicana y desarrollador freelance. Me apasiona crear soluciones que le hagan
          la vida más fácil a la gente, ya sea con Node.js, React o C#, o asegurándome de que todo funcione en los servidores.
        </p>
        <h3 className="disp h-sub" style={{ marginTop: 26 }}>EDUCACIÓN</h3>
        <div>
          <p style={{ fontWeight: 700 }}>Administración de Empresas</p>
          <p className="muted">Universidad O&amp;M</p>
        </div>
        <div>
          <p style={{ fontWeight: 700, marginBottom: 6 }}>Certificaciones</p>
          <ul className="plain-list">
            {certifications.map((c) => <li key={c}>✦ {c}</li>)}
          </ul>
        </div>
      </div>

      {/* Derecha */}
      <div className="col">
        <h3 className="disp h-sub">SKILLS</h3>
        <ul className="skills">
          {skills.map((s) => (
            <li key={s.name} className="skill">
              <span className="skill__tile" style={{ color: s.color }} aria-hidden="true">{s.mono}</span>
              <span className="skill__name">{s.name}</span>
            </li>
          ))}
        </ul>
        <h3 id="experiencia" className="disp h-sub" style={{ marginTop: 26 }}>EXPERIENCIA</h3>
        <ol className="xp">
          {experience.map((x) => (
            <li key={x.years + x.company}>
              <p className="xp__year">{x.years}</p>
              <p style={{ fontWeight: 700 }}>{x.role}</p>
              <p className="muted">{x.company}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
