import { useMemo, useState, type FormEvent } from 'react'
import { ArrowRightIcon, CalendarDaysIcon, LockKeyholeIcon, MapPinIcon } from 'lucide-react'
import { serviceOptions } from '@/config/services'
import type { LeadData, ServiceCategory } from '@/types'
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
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { FlowHeader } from './FlowHeader'

interface LeadFormProps {
  value: LeadData
  onChange: (value: LeadData) => void
  onSubmit: () => void
  onBack: () => void
}

type Errors = Partial<Record<keyof LeadData, string>>

export function LeadForm({ value, onChange, onSubmit, onBack }: LeadFormProps) {
  const [errors, setErrors] = useState<Errors>({})
  const subtypes = useMemo(
    () => (value.serviceCategory ? serviceOptions[value.serviceCategory] : []),
    [value.serviceCategory],
  )

  const update = <K extends keyof LeadData>(key: K, fieldValue: LeadData[K]) => {
    onChange({ ...value, [key]: fieldValue })
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const updateCategory = (groupValue: string[]) => {
    const category = groupValue[0] as ServiceCategory | undefined
    if (!category) return
    onChange({ ...value, serviceCategory: category, serviceType: '' })
    setErrors((current) => ({ ...current, serviceCategory: undefined, serviceType: undefined }))
  }

  const validate = () => {
    const next: Errors = {}
    if (!value.name.trim()) next.name = 'Nama lengkap perlu diisi.'
    if (!/^[+\d][\d\s-]{8,}$/.test(value.phone.trim())) {
      next.phone = 'Masukkan nomor WhatsApp aktif yang valid.'
    }
    if (!value.serviceCategory) next.serviceCategory = 'Pilih jenis layanan.'
    if (!value.serviceType) next.serviceType = 'Pilih detail acara.'
    if (!value.location) next.location = 'Pilih lokasi acara.'
    if (value.location === 'Lainnya' && !value.customLocation.trim()) {
      next.customLocation = 'Tuliskan kota atau lokasi acara.'
    }
    if (!value.consent) next.consent = 'Persetujuan diperlukan untuk melanjutkan.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (validate()) onSubmit()
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <main className="min-h-screen bg-background">
      <FlowHeader onBack={onBack} backLabel="Beranda" />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:py-20">
        <aside className="flex flex-col gap-7 lg:sticky lg:top-10 lg:self-start">
          <div className="flex flex-col gap-4">
            <Badge variant="outline">Langkah 1 dari 3</Badge>
            <h1 className="font-display text-5xl leading-[0.92] tracking-[-0.035em] sm:text-6xl">
              Ceritakan
              <br />
              acaramu.
            </h1>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Isi detail singkat agar kami bisa menampilkan paket yang lebih relevan untuk momenmu.
            </p>
          </div>

          <Progress value={33} className="max-w-sm">
            <ProgressLabel>Detail acara</ProgressLabel>
            <ProgressValue>{() => '33%'}</ProgressValue>
          </Progress>

          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-xl lg:block">
            <img
              src="/assets/portfolio-detail.webp"
              alt="Detail pasangan pengantin"
              className="size-full object-cover"
              width="1000"
              height="1250"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </aside>

        <form onSubmit={handleSubmit} noValidate>
          <Card>
            <CardHeader>
              <CardTitle className="font-display text-3xl">Detail kebutuhan</CardTitle>
              <CardDescription>Kolom bertanda wajib perlu dilengkapi sebelum melihat pricelist.</CardDescription>
            </CardHeader>

            <CardContent>
              <FieldGroup>
                <FieldGroup className="sm:grid sm:grid-cols-2">
                  <Field data-invalid={Boolean(errors.name)}>
                    <FieldLabel htmlFor="name">Nama lengkap</FieldLabel>
                    <Input
                      id="name"
                      value={value.name}
                      onChange={(event) => update('name', event.target.value)}
                      placeholder="Nama kamu"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    <FieldError>{errors.name}</FieldError>
                  </Field>

                  <Field data-invalid={Boolean(errors.phone)}>
                    <FieldLabel htmlFor="phone">Nomor WhatsApp aktif</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      value={value.phone}
                      onChange={(event) => update('phone', event.target.value)}
                      placeholder="08xx xxxx xxxx"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                    />
                    <FieldError>{errors.phone}</FieldError>
                  </Field>
                </FieldGroup>

                <Separator />

                <FieldSet data-invalid={Boolean(errors.serviceCategory)}>
                  <FieldLegend>Jenis layanan</FieldLegend>
                  <FieldDescription>Pilih satu layanan yang paling mendekati kebutuhanmu.</FieldDescription>
                  <ToggleGroup
                    value={value.serviceCategory ? [value.serviceCategory] : []}
                    onValueChange={updateCategory}
                    variant="outline"
                    size="lg"
                    className="grid w-full grid-cols-2"
                    aria-invalid={Boolean(errors.serviceCategory)}
                  >
                    {(['Wedding', 'Event'] as ServiceCategory[]).map((category) => (
                      <ToggleGroupItem key={category} value={category} className="w-full">
                        {category}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                  <FieldError>{errors.serviceCategory}</FieldError>
                </FieldSet>

                {value.serviceCategory && (
                  <FieldSet data-invalid={Boolean(errors.serviceType)}>
                    <FieldLegend>Detail acara</FieldLegend>
                    <ToggleGroup
                      value={value.serviceType ? [value.serviceType] : []}
                      onValueChange={(groupValue) => groupValue[0] && update('serviceType', groupValue[0])}
                      variant="outline"
                      size="lg"
                      className="flex w-full flex-wrap justify-start"
                      aria-invalid={Boolean(errors.serviceType)}
                    >
                      {subtypes.map((type) => (
                        <ToggleGroupItem key={type} value={type}>
                          {type}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                    <FieldError>{errors.serviceType}</FieldError>
                  </FieldSet>
                )}

                <Separator />

                <FieldGroup className="sm:grid sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="date">
                      <CalendarDaysIcon /> Tanggal acara
                    </FieldLabel>
                    <Input
                      id="date"
                      type="date"
                      min={today}
                      value={value.date}
                      onChange={(event) => update('date', event.target.value)}
                    />
                    <FieldDescription>Opsional, boleh diisi nanti.</FieldDescription>
                  </Field>

                  <FieldSet data-invalid={Boolean(errors.location)}>
                    <FieldLegend>
                      <span className="flex items-center gap-2"><MapPinIcon /> Lokasi acara</span>
                    </FieldLegend>
                    <ToggleGroup
                      value={value.location ? [value.location] : []}
                      onValueChange={(groupValue) => groupValue[0] && update('location', groupValue[0])}
                      variant="outline"
                      size="lg"
                      className="grid w-full grid-cols-3"
                      aria-invalid={Boolean(errors.location)}
                    >
                      {['Kendari', 'Unaaha', 'Lainnya'].map((location) => (
                        <ToggleGroupItem key={location} value={location} className="w-full px-2">
                          {location}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                    <FieldError>{errors.location}</FieldError>
                  </FieldSet>
                </FieldGroup>

                {value.location === 'Lainnya' && (
                  <Field data-invalid={Boolean(errors.customLocation)}>
                    <FieldLabel htmlFor="custom-location">Nama kota / lokasi acara</FieldLabel>
                    <Input
                      id="custom-location"
                      value={value.customLocation}
                      onChange={(event) => update('customLocation', event.target.value)}
                      placeholder="Contoh: Kolaka"
                      aria-invalid={Boolean(errors.customLocation)}
                    />
                    <FieldError>{errors.customLocation}</FieldError>
                  </Field>
                )}

                <Field>
                  <FieldLabel htmlFor="notes">Catatan tambahan</FieldLabel>
                  <Textarea
                    id="notes"
                    value={value.notes}
                    onChange={(event) => update('notes', event.target.value)}
                    placeholder="Ceritakan sedikit kebutuhan acara kamu..."
                  />
                  <FieldDescription>Opsional. Misalnya rundown singkat atau momen yang ingin diprioritaskan.</FieldDescription>
                </Field>

                <FieldSet>
                  <FieldLegend className="sr-only">Persetujuan WhatsApp</FieldLegend>
                  <Field data-invalid={Boolean(errors.consent)} orientation="horizontal">
                    <Checkbox
                      id="consent"
                      checked={value.consent}
                      onCheckedChange={(checked) => update('consent', checked)}
                      aria-invalid={Boolean(errors.consent)}
                    />
                    <FieldContent>
                      <FieldLabel htmlFor="consent">Persetujuan WhatsApp</FieldLabel>
                      <FieldDescription>
                        Saya setuju untuk menghubungi dan/atau dihubungi Kenara Visuals melalui WhatsApp terkait kebutuhan acara saya.
                      </FieldDescription>
                      <FieldError>{errors.consent}</FieldError>
                    </FieldContent>
                  </Field>
                </FieldSet>
              </FieldGroup>
            </CardContent>

            <CardFooter className="flex-col gap-3">
              <Button type="submit" size="lg" className="w-full">
                Dapatkan Pricelist &amp; Chat Kami
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <p className="flex items-center gap-1.5 text-center text-xs text-muted-foreground">
                <LockKeyholeIcon className="size-3.5" /> Data hanya tersimpan sementara di browsermu.
              </p>
            </CardFooter>
          </Card>
        </form>
      </section>
    </main>
  )
}
