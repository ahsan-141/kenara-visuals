import { ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandMark } from './BrandMark'

export function FlowHeader({
  onBack,
  backLabel = 'Kembali',
}: {
  onBack: () => void
  backLabel?: string
}) {
  return (
    <header className="border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandMark symbolTone="white" />
        <Button type="button" variant="ghost" onClick={onBack}>
          <ArrowLeftIcon data-icon="inline-start" />
          {backLabel}
        </Button>
      </div>
    </header>
  )
}
