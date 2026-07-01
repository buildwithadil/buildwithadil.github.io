import { ImageIcon } from 'lucide-react'
import { cn } from '../lib/cn'

interface ImagePlaceholderProps {
  /** Visible label, e.g. "[Future Meds Academy Screenshot]". */
  label: string
  className?: string
}

/**
 * Clearly-marked placeholder for a not-yet-provided image (screenshot, gallery,
 * etc.). Keeps layout production-shaped while making the gap obvious to replace.
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
        'flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border-strong bg-bg-subtle p-4 text-center',
        className,
      )}
    >
      <ImageIcon className="size-5 text-fg-subtle" aria-hidden />
      <span className="text-xs font-medium text-fg-subtle">{label}</span>
    </div>
  )
}
