import { ArrowUpRightIcon, CheckIcon, Edit3Icon, InfoIcon, MessageCircleIcon, SparklesIcon } from 'lucide-react'
import { packages } from '@/config/packages'
import { createWhatsAppUrl } from '@/lib/whatsapp'
import type { LeadData } from '@/types'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { FlowHeader } from './FlowHeader'

export function PriceList({ lead, onEdit, onHome }: { lead: LeadData; onEdit: () => void; onHome: () => void }) {
  const firstName = lead.name ? lead.name.split(' ')[0] : ''

  return (
    <main className="min-h-screen bg-background">
      <FlowHeader onBack={onHome} backLabel="Beranda" />

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 pb-10 pt-14 text-center sm:px-8 sm:pt-20">
        <Badge variant="secondary">
          <SparklesIcon data-icon="inline-start" /> Pilihan paket Kenara
        </Badge>
        <h1 className="font-display text-balance text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">
          {firstName ? `${firstName}, temukan paket` : 'Temukan paket'} yang pas untuk ceritamu.
        </h1>
        <p className="max-w-xl leading-7 text-muted-foreground">
          Setiap acara punya ritme berbeda. Pilih titik awalnya, lalu kami bantu sesuaikan melalui WhatsApp.
        </p>
        <Progress value={100} className="w-full max-w-sm">
          <ProgressLabel>Langkah 3 dari 3</ProgressLabel>
          <ProgressValue>{() => 'Selesai'}</ProgressValue>
        </Progress>
      </section>

      <section className="mx-auto max-w-[86rem] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <Alert className="mx-auto mb-8 max-w-3xl">
          <InfoIcon />
          <AlertTitle>Harga masih berupa estimasi demo</AlertTitle>
          <AlertDescription>Harga final dan ketersediaan jadwal akan dikonfirmasi oleh admin Kenara Visuals.</AlertDescription>
        </Alert>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.name} className={cn('h-full', item.popular && 'ring-primary/70')}>
              <CardHeader>
                <CardTitle className="font-display text-3xl">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {item.popular && (
                  <CardAction>
                    <Badge>Paling dipilih</Badge>
                  </CardAction>
                )}
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Badge variant="outline">{item.duration}</Badge>
                  <p className="text-2xl font-semibold tracking-[-0.02em]">{item.price}</p>
                </div>
                <Separator />
                <ul className="flex flex-col gap-3.5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-xs text-muted-foreground">Estimasi delivery · {item.delivery}</p>
              </CardContent>

              <CardFooter>
                <a
                  href={createWhatsAppUrl(lead, item.name)}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: item.popular ? 'default' : 'outline', size: 'lg' }), 'w-full')}
                >
                  Pilih paket ini
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-12 sm:flex-row sm:items-center">
          <CardHeader className="flex-1">
            <CardTitle className="font-display text-3xl">Masih belum yakin?</CardTitle>
            <CardDescription>Ceritakan detailnya—kami bantu rekomendasikan paket yang paling pas.</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href={createWhatsAppUrl(lead)}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: 'lg' })}
            >
              <MessageCircleIcon data-icon="inline-start" />
              Konsultasi via WhatsApp
            </a>
          </CardContent>
        </Card>

        <div className="mt-7 flex justify-center">
          <Button type="button" variant="ghost" onClick={onEdit}>
            <Edit3Icon data-icon="inline-start" />
            Ubah detail acara
          </Button>
        </div>
      </section>
    </main>
  )
}
