import { contact } from '@/config/contact'
import type { LeadData } from '@/types'
import { formatDate } from './utils'

export function createWhatsAppUrl(lead?: LeadData, packageName?: string) {
  if (!lead?.name) {
    const generic =
      'Halo Kenara Visuals 👋\n\nSaya ingin berkonsultasi mengenai layanan Wedding & Event Content Creator. Boleh dibantu informasinya?'
    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(generic)}`
  }

  const location =
    lead.location === 'Lainnya' ? lead.customLocation : lead.location
  const lines = [
    'Halo Kenara Visuals 👋',
    '',
    `Saya ${lead.name}, ingin konsultasi mengenai layanan ${lead.serviceCategory}${lead.serviceType ? ` — ${lead.serviceType}` : ''}.`,
    '',
    'Detail acara:',
    ...(lead.date ? [`Tanggal: ${formatDate(lead.date)}`] : []),
    `Lokasi: ${location}`,
    ...(packageName ? ['', `Paket yang menarik: ${packageName}`] : []),
    ...(lead.notes ? ['', 'Catatan:', lead.notes] : []),
    '',
    'Saya sudah melihat pricelist di website Kenara Visuals.',
    '',
    'Boleh dibantu untuk rekomendasi paket yang cocok?',
  ]

  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}
