import { cn } from '@/lib/utils'

export function BrandMark({
  className,
  symbolTone = 'primary',
}: {
  className?: string
  symbolTone?: 'primary' | 'white'
}) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span
        aria-hidden="true"
        className={cn('h-9 w-6 shrink-0', symbolTone === 'white' ? 'bg-logo-mark' : 'bg-primary')}
        style={{
          WebkitMaskImage: "url('/assets/kenara-symbol.webp')",
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskImage: "url('/assets/kenara-symbol.webp')",
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
        }}
      />
      <span className="text-[0.95rem] font-bold tracking-[-0.02em]">
        Kenara <span className="font-medium text-muted-foreground">Visuals</span>
      </span>
    </span>
  )
}
