export type Route = 'landing' | 'form' | 'confirmation' | 'pricelist'

export type ServiceCategory = 'Wedding' | 'Event' | ''

export interface LeadData {
  name: string
  phone: string
  serviceCategory: ServiceCategory
  serviceType: string
  date: string
  location: string
  customLocation: string
  notes: string
  consent: boolean
}

export const emptyLead: LeadData = {
  name: '',
  phone: '',
  serviceCategory: '',
  serviceType: '',
  date: '',
  location: '',
  customLocation: '',
  notes: '',
  consent: false,
}
