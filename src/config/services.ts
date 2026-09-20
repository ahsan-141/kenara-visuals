export const services = [
  {
    name: 'Wedding',
    eyebrow: '01 — Your story',
    description:
      'Dari persiapan yang hening sampai selebrasi yang ramai, kami merekam momen pernikahanmu apa adanya.',
    items: ['Akad Nikah', 'Pemberkatan', 'Resepsi', 'Engagement'],
  },
  {
    name: 'Event',
    eyebrow: '02 — Your moment',
    description:
      'Konten personal untuk perayaan, gathering, dan event yang ingin kamu simpan lebih lama.',
    items: ['Birthday', 'Gathering', 'Celebration', 'Family Event'],
  },
] as const

export const serviceOptions = {
  Wedding: ['Akad', 'Pemberkatan', 'Resepsi', 'Akad + Resepsi', 'Lainnya'],
  Event: ['Birthday', 'Gathering', 'Celebration', 'Event lainnya'],
} as const
