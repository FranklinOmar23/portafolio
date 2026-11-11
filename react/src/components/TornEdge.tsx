/** Borde de papel rasgado (SVG) para las bandas negras. */
function tornPath(seed: number, base: number, amp: number) {
  let s = seed
  const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280 }
  let d = `M0 48 L0 ${(base + (r() - 0.5) * amp).toFixed(1)}`
  for (let x = 0; x <= 1200; x += 10 + r() * 22) d += ` L${x.toFixed(1)} ${(base + (r() - 0.5) * amp * 2).toFixed(1)}`
  return `${d} L1200 ${base} L1200 48 Z`
}

export function TornEdge({ position, seed }: { position: "top" | "bottom"; seed: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 48" preserveAspectRatio="none" className={`torn torn--${position}`}>
      <path d={tornPath(seed, 18, 12)} fill="#fafafa" />
      <path d={tornPath(seed * 3 + 7, 28, 10)} fill="#111" />
    </svg>
  )
}
