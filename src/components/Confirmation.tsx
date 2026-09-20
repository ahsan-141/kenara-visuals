import { useEffect, useState } from 'react'
import { ArrowRightIcon, CheckIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'

export function Confirmation({ name, onContinue }: { name: string; onContinue: () => void }) {
  const [progress, setProgress] = useState(8)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setProgress(100))
    const timer = window.setTimeout(onContinue, 1400)
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [onContinue])

  return (
    <main className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-16">
      <div className="absolute inset-x-0 top-0 mx-auto h-72 max-w-3xl bg-primary/10 blur-3xl" />
      <Card className="relative w-full max-w-xl text-center" aria-live="polite">
        <CardHeader className="justify-items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckIcon className="size-6" />
          </div>
          <Badge variant="secondary">Detail diterima</Badge>
          <CardTitle className="font-display text-4xl leading-none sm:text-5xl">
            Terima kasih, {name.split(' ')[0]}.
          </CardTitle>
          <CardDescription className="max-w-md text-base leading-7">
            Kami sudah menyiapkan pilihan paket untuk kebutuhan acaramu.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Progress value={progress}>
            <ProgressLabel>Menyiapkan pricelist</ProgressLabel>
            <ProgressValue>{() => (progress === 100 ? 'Siap' : 'Memuat')}</ProgressValue>
          </Progress>
        </CardContent>

        <CardFooter className="justify-center">
          <Button onClick={onContinue} size="lg">
            Lihat Pricelist Sekarang
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
