'use client'

export function MandalaDecor() {
  return (
    <svg viewBox="0 0 200 200" className="w-24 h-24 opacity-20 text-secondary" fill="currentColor">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
      <g opacity="0.6">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 8
          const x1 = 100 + 70 * Math.cos(angle)
          const y1 = 100 + 70 * Math.sin(angle)
          const x2 = 100 + 30 * Math.cos(angle)
          const y2 = 100 + 30 * Math.sin(angle)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
        })}
      </g>
    </svg>
  )
}

export function SpiralDecor() {
  return (
    <svg viewBox="0 0 200 200" className="w-20 h-20 opacity-15 text-secondary" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M 100 100 Q 130 80, 140 50 T 160 20 T 170 10" />
      <path d="M 100 100 Q 70 80, 60 50 T 40 20 T 30 10" />
      <path d="M 100 100 Q 130 120, 140 150 T 160 180 T 170 190" />
      <path d="M 100 100 Q 70 120, 60 150 T 40 180 T 30 190" />
    </svg>
  )
}

export function LotusDecor() {
  return (
    <svg viewBox="0 0 200 200" className="w-16 h-16 opacity-20 text-secondary" fill="currentColor">
      <g transform="translate(100, 100)">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 6
          const x = 50 * Math.cos(angle)
          const y = 50 * Math.sin(angle)
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="20"
              ry="30"
              fill="currentColor"
              opacity="0.6"
              transform={`rotate(${(angle * 180) / Math.PI})`}
            />
          )
        })}
        <circle cx="0" cy="0" r="15" fill="currentColor" />
      </g>
    </svg>
  )
}

export function DividerDecor() {
  return (
    <div className="flex items-center justify-center gap-4 py-8 opacity-40">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-secondary" fill="currentColor">
        <circle cx="12" cy="12" r="2" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  )
}

export function CornerAccent() {
  return (
    <svg viewBox="0 0 100 100" className="w-12 h-12 opacity-25 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M 10 10 L 10 40 M 10 10 L 40 10" />
      <path d="M 90 10 L 90 40 M 90 10 L 60 10" />
      <path d="M 10 90 L 10 60 M 10 90 L 40 90" />
      <path d="M 90 90 L 90 60 M 90 90 L 60 90" />
    </svg>
  )
}
