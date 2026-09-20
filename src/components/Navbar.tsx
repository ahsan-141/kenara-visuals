import { useState } from 'react'
import { ArrowUpRightIcon, MenuIcon } from 'lucide-react'
import { BrandMark } from './BrandMark'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const links: ReadonlyArray<{ label: string; href: string; external?: boolean }> = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Proses', href: '#proses' },
  { label: 'Area', href: '#area' },
  {
    label: 'Instagram',
    href: 'https://instagram.com/kenara.visuals',
    external: true,
  },
]

export function Navbar({ onPricelist }: { onPricelist: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[86rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          aria-label="Kenara Visuals — kembali ke atas"
          className="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <BrandMark symbolTone="white" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="rounded-md text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={onPricelist} size="lg">
            Dapatkan Pricelist
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="outline" size="icon" className="lg:hidden" />}
          >
            <MenuIcon />
            <span className="sr-only">Buka navigasi</span>
          </SheetTrigger>
          <SheetContent className="w-[86vw] sm:max-w-sm" side="right">
            <SheetHeader>
              <BrandMark symbolTone="white" />
              <SheetTitle className="sr-only">Navigasi Kenara Visuals</SheetTitle>
              <SheetDescription>
                Wedding & Event Content Creator di Kendari dan Unaaha.
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Navigasi mobile">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'w-full justify-start',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                onClick={() => {
                  setOpen(false)
                  onPricelist()
                }}
                size="lg"
                className="w-full"
              >
                Dapatkan Pricelist
                <ArrowUpRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
