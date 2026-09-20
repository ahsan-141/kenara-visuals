import { ArrowUpRightIcon, CheckIcon, Edit3Icon, InfoIcon, MessageCircleIcon, SparklesIcon } from 'lucide-react'
import { addOns, packages, serviceArea } from '@/config/packages'
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
          <AlertTitle>Pricelist Kenara Visuals 2026</AlertTitle>
          <AlertDescription>
            Harga berlaku untuk area Kendari & Unaaha. Ketersediaan jadwal akan dikonfirmasi oleh admin.
          </AlertDescription>
        </Alert>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <Card key={item.name} interactive featured={item.popular} className="h-full">
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
                  <p className="text-3xl font-semibold tracking-[-0.03em]">{item.price}</p>
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
              </CardContent>

              <CardFooter>
                <a
                  href={createWhatsAppUrl(lead, item.name)}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: item.popular ? 'default' : 'outline', size: 'lg' }), 'w-full')}
                >
                  Pilih paket ini
                  <ArrowUpRightIcon
                    data-icon="inline-end"
                    className="transition-transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5"
                  />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-3xl">Add-on</CardTitle>
              <CardDescription>Tambahkan layanan sesuai kebutuhan acaramu.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {addOns.map((item, index) => (
                <div key={item.name} className="flex flex-col gap-3">
                  {index > 0 && <Separator />}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display text-3xl">Area layanan</CardTitle>
              <CardDescription>Berbasis di {serviceArea.base}.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p>{serviceArea.localRate}</p>
              <Separator />
              <p className="text-muted-foreground">{serviceArea.travelRate}</p>
            </CardContent>
          </Card>
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
