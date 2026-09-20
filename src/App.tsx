import { useCallback, useEffect, useState } from 'react'
import { Confirmation } from '@/components/Confirmation'
import { Landing } from '@/components/Landing'
import { LeadForm } from '@/components/LeadForm'
import { PriceList } from '@/components/PriceList'
import { emptyLead, type LeadData, type Route } from '@/types'

function readRoute(): Route {
  const route = window.location.hash.replace('#', '')
  if (route === 'form' || route === 'confirmation' || route === 'pricelist') return route
  return 'landing'
}

function App() {
  const [route, setRoute] = useState<Route>(readRoute)
  const [lead, setLead] = useState<LeadData>(emptyLead)

  useEffect(() => {
    const syncRoute = () => setRoute(readRoute())
    window.addEventListener('hashchange', syncRoute)
    window.addEventListener('popstate', syncRoute)
    return () => {
      window.removeEventListener('hashchange', syncRoute)
      window.removeEventListener('popstate', syncRoute)
    }
  }, [])

  const navigate = useCallback((next: Route) => {
    const nextUrl = next === 'landing' ? window.location.pathname + window.location.search : `#${next}`
    window.history.pushState(null, '', nextUrl)
    setRoute(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const activeRoute = route === 'confirmation' && !lead.name ? 'form' : route

  if (activeRoute === 'form') {
    return <LeadForm value={lead} onChange={setLead} onSubmit={() => navigate('confirmation')} onBack={() => navigate('landing')} />
  }

  if (activeRoute === 'confirmation') {
    return <Confirmation name={lead.name} onContinue={() => navigate('pricelist')} />
  }

  if (activeRoute === 'pricelist') {
    return <PriceList lead={lead} onEdit={() => navigate('form')} onHome={() => navigate('landing')} />
  }

  return <Landing onForm={() => navigate('form')} />
}

export default App
