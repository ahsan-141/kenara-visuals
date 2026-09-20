export const packages = [
  {
    name: 'Basic Package',
    description: 'Engagement, Sangjit, Siraman, atau Pengajian.',
    price: 'Rp350.000',
    duration: '3 jam standby',
    features: [
      '6 Story Instagram real-time',
      '1 video editing (same day)',
      '1 video Reels Instagram (H+1)',
      '1 content creator (H+1)',
      'Semua file Google Drive resolusi 4K (H+1)',
    ],
    popular: false,
  },
  {
    name: 'Standard Package',
    description: 'Akad, Pemberkatan, atau Resepsi.',
    price: 'Rp400.000',
    duration: '4 jam standby',
    features: [
      '9 Story Instagram real-time',
      '1 video editing (same day)',
      '1 video Reels Instagram (H+1)',
      '1 content creator (H+1)',
      '2 request konten TikTok (H+1)',
      'Semua file Google Drive resolusi 4K (H+1)',
    ],
    popular: true,
  },
  {
    name: 'Exclusive Package',
    description: 'Akad, Akad Perjamuan, Pemberkatan & Resepsi.',
    price: 'Rp700.000',
    duration: '8 jam standby',
    features: [
      '13 Story Instagram real-time',
      '1 video editing (same day)',
      '2 video Reels Instagram (H+1)',
      '2 content creator',
      '3 request konten TikTok (H+1)',
      'Semua file Google Drive resolusi 4K (H+1)',
    ],
    popular: false,
  },
] as const

export const addOns = [
  { name: 'Tambahan waktu', price: 'Rp50.000' },
  { name: '1 video Reels', price: 'Rp100.000' },
] as const

export const serviceArea = {
  base: 'Kendari & Unaaha',
  localRate: 'Gratis untuk area Kendari & Unaaha',
  travelRate: 'Di luar area: Rp30.000 / 10 km',
} as const
