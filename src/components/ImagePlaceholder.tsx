import { ImageIcon } from 'lucide-react'
import { cn } from '../lib/cn'

interface ImagePlaceholderProps {
  /** Visible label, e.g. "[Future Meds Academy Screenshot]". */
  label: string
  className?: string
}

/**
 * Clearly-marked placeholder for a not-yet-provided image. Clean, texture-only
 * (no colour wash) — keeps layout production-shaped and easy to replace.
 */
export default function ImagePlaceholder({
  label,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-md border border-border bg-bg-subtle p-4 text-center',
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-fg-subtle shadow-sm">
        <ImageIcon className="size-4" aria-hidden />
      </span>
      <span className="text-xs font-medium text-fg-subtle">{label}</span>
    </div>
  )
}
