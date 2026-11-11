/**
 * Inclinación 3D sutil siguiendo el puntero. Escribe variables CSS en el
 * elemento (--tx, --ty para la rotación; --gx, --gy para el brillo) y el CSS
 * decide cómo usarlas. Solo con mouse; en táctil no hace nada.
 */
export function tiltHandlers(max = 8) {
  return {
    onPointerMove(e: React.PointerEvent<HTMLElement>) {
      if (e.pointerType !== "mouse") return
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.setProperty("--ty", `${((x - 0.5) * max * 2).toFixed(2)}deg`)
      el.style.setProperty("--tx", `${((0.5 - y) * max * 2).toFixed(2)}deg`)
      el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`)
      el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`)
    },
    onPointerLeave(e: React.PointerEvent<HTMLElement>) {
      const el = e.currentTarget
      el.style.setProperty("--tx", "0deg")
      el.style.setProperty("--ty", "0deg")
    },
  }
}
