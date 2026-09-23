type ReactMarkProps = {
  className?: string
  label?: string
}

/** A small, reusable React atom mark used as the course's visual signature. */
export function ReactMark({ className, label = 'React' }: ReactMarkProps) {
  return (
    <svg className={className} viewBox="0 0 240 220" role="img" aria-label={label}>
      <g fill="none" stroke="currentColor" strokeWidth="11">
        <ellipse cx="120" cy="110" rx="104" ry="42" />
        <ellipse cx="120" cy="110" rx="104" ry="42" transform="rotate(60 120 110)" />
        <ellipse cx="120" cy="110" rx="104" ry="42" transform="rotate(120 120 110)" />
      </g>
      <circle cx="120" cy="110" r="16" fill="currentColor" />
    </svg>
  )
}
