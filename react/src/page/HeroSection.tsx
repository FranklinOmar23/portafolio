import { ToonBust } from "../components/ToonBust"

export function HeroSection() {
  return (
    <header id="inicio" className="wrap hero">
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <div className="hero__meta">
          <span>DEVELOPER / IT SUPPORT</span>
          <span>2026</span>
        </div>
        <h1 className="disp hero__title" aria-label="Portfolio">
          <span aria-hidden="true">PORTF</span>
          <ToonBust />
          <span aria-hidden="true">LIO</span>
        </h1>
      </div>

      <svg aria-hidden="true" width="64" height="70" viewBox="0 0 64 70" style={{ marginTop: 28, marginLeft: 40, overflow: "visible" }}>
        <path d="M22 66 C 6 60, 4 40, 18 30 C 28 22, 40 26, 36 36 C 32 44, 18 38, 22 22 C 25 12, 32 6, 38 2" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M30 4 L 39 1 L 40 11" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="hand" style={{ margin: "0 0 0 150px", fontSize: 22, transform: "rotate(-4deg)", color: "#333" }}>
        soy yo (en 3D)
      </p>
      <div aria-hidden="true" className="symbols" style={{ fontSize: 34, marginTop: 40 }}>
        <span>✷</span><span>✦</span><span>♣</span>
      </div>
    </header>
  )
}
