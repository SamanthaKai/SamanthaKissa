import { useEffect, useRef } from 'react'

// Soft, out-of-focus lights drifting behind the hero, echoing the blurred office
// lights in the photo. They lean gently toward the pointer. Pauses when off screen
// and draws a single still frame for people who prefer reduced motion.
const LIGHTS = [
  { x: 0.12, y: 0.25, r: 0.32, hue: 'amber', speed: 0.00011, phase: 0 },
  { x: 0.48, y: 0.78, r: 0.26, hue: 'leaf', speed: 0.00009, phase: 2.1 },
  { x: 0.82, y: 0.18, r: 0.22, hue: 'cream', speed: 0.00013, phase: 4.2 },
  { x: 0.3, y: 0.6, r: 0.18, hue: 'amber', speed: 0.00016, phase: 1.3 },
  { x: 0.65, y: 0.42, r: 0.14, hue: 'amber', speed: 0.0002, phase: 3.4 },
]

const COLORS = {
  light: { amber: '217,170,107', leaf: '120,150,90', cream: '255,236,205', alpha: 0.32 },
  dark: { amber: '201,143,72', leaf: '94,122,69', cream: '232,203,158', alpha: 0.2 },
}

export default function AmbientCanvas({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }
    let width = 0
    let height = 0
    let frame = 0
    let visible = true

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw(t) {
      const palette = document.documentElement.classList.contains('dark') ? COLORS.dark : COLORS.light
      pointer.x += (pointer.tx - pointer.x) * 0.04
      pointer.y += (pointer.ty - pointer.y) * 0.04
      ctx.clearRect(0, 0, width, height)
      const size = Math.max(width, height)

      LIGHTS.forEach((l, i) => {
        const drift = t * l.speed + l.phase
        const lean = (i % 2 ? -1 : 1) * 0.04
        const cx = (l.x + Math.sin(drift) * 0.05 + (pointer.x - 0.5) * lean) * width
        const cy = (l.y + Math.cos(drift * 0.8) * 0.05 + (pointer.y - 0.5) * lean) * height
        const r = l.r * size
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        const rgb = palette[l.hue]
        g.addColorStop(0, `rgba(${rgb},${palette.alpha})`)
        g.addColorStop(1, `rgba(${rgb},0)`)
        ctx.fillStyle = g
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2)
      })
    }

    function loop(t) {
      if (visible) draw(t)
      frame = requestAnimationFrame(loop)
    }

    function onPointer(e) {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = (e.clientX - rect.left) / rect.width
      pointer.ty = (e.clientY - rect.top) / rect.height
    }

    resize()
    const ro = new ResizeObserver(() => { resize(); if (reduced) draw(0) })
    ro.observe(canvas)

    // Redraw the still frame when the theme changes.
    const mo = new MutationObserver(() => { if (reduced) draw(0) })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    io.observe(canvas)

    if (reduced) {
      draw(0)
    } else {
      window.addEventListener('pointermove', onPointer)
      frame = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointer)
      ro.disconnect()
      mo.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`} />
}
