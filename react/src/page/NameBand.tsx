import { TornEdge } from "../components/TornEdge"

/** Franja negra con el nombre en marquee y la foto recortada tipo sticker. */
export function NameBand() {
  const silhouette = (
    <>
      <ellipse cx="200" cy="172" rx="80" ry="106" />
      <rect x="160" y="240" width="80" height="70" />
      <path d="M8 420 C 18 330, 100 300, 200 296 C 300 300, 382 330, 392 420 Z" />
    </>
  )
  return (
    <section aria-label="Franklin Disla" className="band nameband">
      <TornEdge position="top" seed={3} />
      <div className="marquee">
        <div className="mq disp">
          <span>FRANKLIN DISLA ✷ FRANKLIN DISLA ✷</span>
          <span aria-hidden="true">FRANKLIN DISLA ✷ FRANKLIN DISLA ✷</span>
        </div>
      </div>

      <div className="sticker">
        <svg viewBox="0 0 400 420" role="img" aria-label="Foto de Franklin Disla">
          <defs>
            <clipPath id="sticker-clip">{silhouette}</clipPath>
          </defs>
          <g fill="var(--accent)" stroke="var(--accent)" strokeWidth="30" strokeLinejoin="round">{silhouette}</g>
          <image href="/Omar.jpeg" x="-115" y="-87" width="556" height="850" clipPath="url(#sticker-clip)" preserveAspectRatio="xMidYMid slice" />
        </svg>
      </div>

      <div aria-hidden="true" className="symbols wob nameband__symbols">
        <span>✷</span><span>✦</span><span>♣</span>
      </div>
      <TornEdge position="bottom" seed={5} />
    </section>
  )
}
