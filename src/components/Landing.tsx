import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  AtSignIcon,
  CameraIcon,
  CheckIcon,
  Clock3Icon,
  HeartIcon,
  MapPinIcon,
  MessageCircleIcon,
  PlayIcon,
  SparklesIcon,
} from 'lucide-react'
import { contact } from '@/config/contact'
import { portfolio } from '@/config/portfolio'
import { services } from '@/config/services'
import { site } from '@/config/site'
import { createWhatsAppUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'
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
import { Separator } from '@/components/ui/separator'
import { BrandMark } from './BrandMark'
import { Navbar } from './Navbar'
import { Reveal } from './Reveal'

interface LandingProps {
  onForm: () => void
}

const benefits = [
  {
    title: 'Real-time content',
    description: 'Momen penting direkam selagi energi dan emosinya masih terasa.',
    icon: Clock3Icon,
  },
  {
    title: 'Ready to share',
    description: 'Konten vertikal yang relevan untuk Instagram, TikTok, dan galerimu.',
    icon: PlayIcon,
  },
  {
    title: 'Personal coverage',
    description: 'Pengambilan gambar mengikuti karakter dan alur acaramu.',
    icon: CameraIcon,
  },
] as const

const process = [
  {
    step: '01',
    title: 'Ceritakan acaramu',
    description: 'Isi detail singkat tentang jenis acara, tanggal, dan lokasi.',
  },
  {
    step: '02',
    title: 'Temukan paketnya',
    description: 'Lihat paket yang relevan dan pahami apa saja yang kamu dapatkan.',
  },
  {
    step: '03',
    title: 'Konsultasi di WhatsApp',
    description: 'Mulai chat dengan konteks kebutuhan yang sudah tersusun rapi.',
  },
] as const

export function Landing({ onForm }: LandingProps) {
  const directWhatsApp = createWhatsAppUrl()

  return (
    <main id="top">
      <Navbar onPricelist={onForm} />

      <section className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="ambient-orb pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[86rem] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal className="max-w-2xl" direction="left">
            <Badge variant="outline">
              <MapPinIcon data-icon="inline-start" />
              Kendari · Unaaha
            </Badge>
            <h1 className="mt-6 font-display text-balance text-[3.45rem] leading-[0.88] font-medium tracking-[-0.055em] sm:text-[5rem] lg:text-[6.5rem]">
              ONE LOVE
              <span className="block text-primary">ONE STORY</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Wedding & Event Content Creator yang menangkap suasana secara natural—cepat, personal, dan siap kamu bagikan.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={onForm} size="lg">
                Dapatkan Pricelist
                <ArrowUpRightIcon data-icon="inline-end" />
              </Button>
              <a
                href={directWhatsApp}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
              >
                <MessageCircleIcon data-icon="inline-start" />
                Chat WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {['Tanpa proses rumit', 'Data tidak disimpan', 'Mobile friendly'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckIcon className="text-primary" /> {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="grid h-[32rem] grid-cols-[1fr_0.42fr] gap-3 sm:h-[40rem]"
            delay={140}
            direction="right"
          >
            <figure className="grain relative overflow-hidden rounded-2xl">
              <img
                src="/assets/hero-wedding.webp"
                alt="Pasangan pengantin berjalan bersama di suasana resepsi"
                className="motion-media h-full w-full object-cover object-[64%_center]"
                width="1920"
                height="1280"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <Badge>
                  <HeartIcon data-icon="inline-start" />
                  Cerita yang terasa
                </Badge>
                <p className="mt-3 max-w-sm font-display text-2xl leading-tight sm:text-3xl">
                  Detail kecil yang membuat hari besar terasa utuh.
                </p>
              </figcaption>
            </figure>
            <div className="grid grid-rows-[1.15fr_0.85fr] gap-3">
              <figure className="overflow-hidden rounded-2xl">
                <img
                  src="/assets/portfolio-preparation.webp"
                  alt="Persiapan pengantin sebelum acara"
                  className="motion-media h-full w-full object-cover"
                  width="1000"
                  height="1250"
                />
              </figure>
              <figure className="overflow-hidden rounded-2xl">
                <img
                  src="/assets/portfolio-detail.webp"
                  alt="Detail tangan pasangan pengantin"
                  className="motion-media h-full w-full object-cover"
                  width="1000"
                  height="1250"
                />
              </figure>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-[86rem]" delay={240}>
          <Separator />
          <div className="grid gap-5 py-6 text-sm text-muted-foreground sm:grid-cols-3 sm:[&>p:nth-child(2)]:text-center sm:[&>p:nth-child(3)]:text-right">
            <p><span className="font-medium text-foreground">Capture</span> · momen terjadi</p>
            <p><span className="font-medium text-foreground">Curate</span> · cerita dirangkai</p>
            <p><span className="font-medium text-foreground">Deliver</span> · siap dibagikan</p>
          </div>
        </Reveal>
      </section>

      <section id="layanan" className="bg-paper px-5 py-20 text-paper-foreground sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[86rem]">
          <Reveal className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.7fr)] lg:items-end">
            <div className="max-w-3xl">
              <Badge variant="outline">Layanan Kenara</Badge>
              <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.04em] text-balance sm:text-7xl">
                Satu tim untuk momen yang bermakna.
              </h2>
            </div>
            <p className="max-w-xl text-pretty text-base leading-7 opacity-65 lg:justify-self-end lg:text-lg">
              Kami bekerja ringan di balik layar, agar kamu tetap hadir sebagai bagian dari acara—bukan sibuk memikirkan konten.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const image = index === 0
                ? '/assets/portfolio-engagement.webp'
                : '/assets/portfolio-event.webp'
              return (
                <Reveal key={service.name} className="h-full" delay={index * 110}>
                  <Card className="group h-full bg-background text-foreground [--card-spacing:--spacing(6)]">
                    <img
                      src={image}
                      alt={`Dokumentasi layanan ${service.name} Kenara Visuals`}
                      loading="lazy"
                      className="motion-media h-72 w-full object-cover sm:h-80"
                      width="1000"
                      height="1250"
                    />
                    <CardHeader className="min-h-36">
                      <CardTitle className="font-display text-4xl">{service.name}</CardTitle>
                      <CardDescription className="max-w-xl text-pretty leading-6">{service.description}</CardDescription>
                      <CardAction>
                        <Badge variant="secondary">0{index + 1}</Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="mt-auto min-h-20 flex-wrap content-center gap-2">
                      {service.items.map((item) => (
                        <Badge key={item} variant="outline">{item}</Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[86rem]">
          <Reveal className="max-w-4xl">
            <Badge variant="outline">Yang kamu dapatkan</Badge>
            <h2 className="mt-5 font-display text-balance text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">
              Konten yang cepat, tanpa kehilangan rasa.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} className="h-full" delay={index * 90}>
                <Card className="h-full min-h-72 [--card-spacing:--spacing(6)]">
                  <CardHeader>
                    <CardAction><Badge variant="outline">0{index + 1}</Badge></CardAction>
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <benefit.icon strokeWidth={1.6} />
                    </span>
                  </CardHeader>
                  <CardContent className="mt-auto min-h-28">
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="mt-3 text-pretty leading-6">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[86rem]">
          <Reveal className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="outline">Selected stories</Badge>
              <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">Momen yang<br />tetap hidup.</h2>
            </div>
            <a
              href={contact.instagramVisualsUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              <AtSignIcon data-icon="inline-start" />
              Lihat Instagram
            </a>
          </Reveal>

          <div className="mt-12 grid auto-rows-[15rem] gap-3 sm:auto-rows-[19rem] md:grid-cols-12 md:auto-rows-[10rem]">
            {portfolio.map((item, index) => (
              <Reveal key={item.title} className={cn('h-full', item.className)} delay={(index % 2) * 90}>
                <figure className="group relative h-full overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width="1000"
                    height="1250"
                    className="motion-media h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <div>
                      <p className="font-display text-3xl">{item.title}</p>
                      <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">{item.category}</p>
                    </div>
                    <SparklesIcon className="text-primary" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Visual portfolio sementara dan dapat diganti melalui konfigurasi.</p>
        </div>
      </section>

      <section id="proses" className="bg-muted px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[86rem]">
          <Reveal className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.7fr)] lg:items-end">
            <div className="max-w-3xl">
              <Badge variant="secondary">Proses sederhana</Badge>
              <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl">Dari Instagram<br />ke percakapan.</h2>
            </div>
            <p className="max-w-lg text-pretty text-base leading-7 text-muted-foreground lg:justify-self-end">Tiga langkah singkat untuk membuat konsultasimu lebih cepat dan relevan.</p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {process.map((item, index) => (
              <Reveal key={item.step} className="h-full" delay={index * 90}>
                <Card className="h-full min-h-60 [--card-spacing:--spacing(6)]">
                  <CardHeader>
                    <Badge variant="outline">{item.step}</Badge>
                  </CardHeader>
                  <CardContent className="mt-auto min-h-28">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="mt-3 text-pretty leading-6">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <Button onClick={onForm} size="lg">
              Mulai dari detail acara
              <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="area" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <Reveal className="mx-auto max-w-[86rem] overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="max-w-4xl">
              <Badge variant="secondary">
                <MapPinIcon data-icon="inline-start" /> Cakupan area
              </Badge>
              <p className="mt-7 font-display text-[18vw] leading-[0.7] tracking-[-0.06em] sm:text-8xl lg:text-9xl">Kendari</p>
              <p className="mt-4 font-display text-[18vw] leading-[0.7] tracking-[-0.06em] sm:text-8xl lg:text-9xl">& Unaaha</p>
            </div>
            <div>
              <p className="max-w-md leading-7 opacity-70">Melayani dokumentasi Wedding & Event di Kendari, Unaaha, dan area sekitarnya sesuai ketersediaan.</p>
              <a href="#top" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                Kembali ke atas <ArrowDownIcon className="rotate-180" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-5 sm:px-8 sm:pb-8 lg:px-12">
        <Reveal className="mx-auto max-w-[86rem] rounded-2xl bg-paper p-7 text-paper-foreground sm:p-12 lg:p-16">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <Badge variant="outline">Mari bercerita</Badge>
              <h2 className="mt-6 font-display text-balance text-5xl leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-8xl">Punya acara dalam waktu dekat?</h2>
              <p className="mt-6 max-w-xl text-pretty leading-7 opacity-65">Ceritakan kebutuhanmu dan lihat pilihan paket Kenara Visuals yang tersedia.</p>
            </div>
            <Button onClick={onForm} size="lg" className="lg:mb-1">
              Dapatkan Pricelist <ArrowUpRightIcon data-icon="inline-end" />
            </Button>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[86rem]">
          <div className="grid gap-10 py-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <BrandMark />
              <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Wedding & Event Content Creator untuk Kendari, Unaaha, dan cerita-cerita di sekitarnya.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Instagram</p>
              <a className="text-sm hover:text-primary" href={contact.instagramVisualsUrl} target="_blank" rel="noreferrer">{contact.instagramVisuals}</a>
              <a className="text-sm hover:text-primary" href={contact.instagramEventUrl} target="_blank" rel="noreferrer">{contact.instagramEvent}</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Mulai percakapan</p>
              <a href={directWhatsApp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-primary"><MessageCircleIcon /> WhatsApp Kenara</a>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ahsan141.</p>
            <p>{site.areas.join(' · ')} · Sulawesi Tenggara</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
