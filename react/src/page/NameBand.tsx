import { TornEdge } from "../components/TornEdge"
import { skills } from "../data/portfolio"

/** Puntas de la estrella del sticker (24 picos alternando radio). */
const burst = Array.from({ length: 48 }, (_, i) => {
  const a = (i / 48) * Math.PI * 2
  const r = i % 2 === 0 ? 190 : 158
  return `${(200 + Math.cos(a) * r).toFixed(1)},${(200 + Math.sin(a) * r).toFixed(1)}`
}).join(" ")

function Row({ reverse = false, outline = false }: { reverse?: boolean; outline?: boolean }) {
  const names = reverse ? [...skills].reverse() : skills
  const line = names.map((s) => s.name).join("  ✷  ") + "  ✷  "
  return (
    <div className={`mq disp${reverse ? " mq--reverse" : ""}${outline ? " mq--outline" : ""}`}>
      <span>{line}</span>
      <span aria-hidden="true">{line}</span>
    </div>
  )
}

/** Franja negra con carrusel de tecnologías y sticker central. */
export function NameBand() {
  return (
    <section aria-label="Tecnologías que domino" className="band nameband">
      <TornEdge position="top" seed={3} />
      <div className="marquee">
        <Row />
        <Row reverse outline />
      </div>

      <div className="sticker" aria-hidden="true">
        <svg viewBox="0 0 400 400">
          <polygon points={burst} fill="var(--accent)" stroke="#fff" strokeWidth="10" strokeLinejoin="round" />
          <circle cx="200" cy="200" r="128" fill="none" stroke="#111" strokeWidth="3" strokeDasharray="4 7" />
          <text x="200" y="168" textAnchor="middle" fill="#fff" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="20" letterSpacing="4">✷ DESDE 2021 ✷</text>
          <text x="200" y="228" textAnchor="middle" fill="#111" fontFamily="Archivo Black, sans-serif" fontSize="54" textLength="262" lengthAdjust="spacingAndGlyphs">FULL STACK</text>
          <text x="200" y="272" textAnchor="middle" fill="#fff" fontFamily="Archivo Black, sans-serif" fontSize="30" textLength="214" lengthAdjust="spacingAndGlyphs">&amp; IT SUPPORT</text>
        </svg>
      </div>
      <TornEdge position="bottom" seed={5} />
    </section>
  )
}
