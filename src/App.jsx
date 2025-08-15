import React, { useEffect, useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import ResourceList from './components/ResourceList.jsx'
import MapView from './components/MapView.jsx'
import useResources from './hooks/useResources.js'
import { distanceInKm } from './utils/geo.js'

export default function App() {
  const { resources, categories, services } = useResources()
  const [query, setQuery] = useState('')
  const [activeCats, setActiveCats] = useState([])
  const [service, setService] = useState('')
  const [radiusKm, setRadiusKm] = useState(25)
  const [onlyOpen, setOnlyOpen] = useState(false)
  const [userLoc, setUserLoc] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setUserLoc(null),
      { enableHighAccuracy: true, timeout: 6000 }
    )
  }, [])

  const filtered = useMemo(() => {
    const norm = (s) => s.toLowerCase()
    const now = new Date()

    return resources.filter(r => {
      if (query) {
        const q = norm(query)
        const hay = [r.name, r.address, r.city, r.zip, (r.services||[]).join(' '), r.category].join(' ').toLowerCase()
        if (!hay.includes(q)) return false
      }
      if (activeCats.length && !activeCats.includes(r.category)) return false
      if (service && !(r.services||[]).map(norm).includes(norm(service))) return false
      if (onlyOpen && !isOpenNow(r.hours, now)) return false
      if (userLoc && radiusKm && r.location) {
        const d = distanceInKm(userLoc.lat, userLoc.lng, r.location.lat, r.location.lng)
        if (d > radiusKm) return false
      }
      return true
    })
  }, [resources, query, activeCats, service, onlyOpen, userLoc, radiusKm])

  const center = userLoc || { lat: 29.7604, lng: -95.3698 } // Houston default

  return (
    <div className="app">
      <header>
        <div className="bar">
          <div className="brand">
            <img src="/logo.svg" alt="" />
            <div>Community <b>Health</b> Finder</div>
          </div>
          <SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} />
          
        </div>
      </header>

      <main className="layout">
        <section className="panel list">
          <Filters
            categories={categories}
            services={services}
            activeCats={activeCats}
            setActiveCats={setActiveCats}
            service={service}
            setService={setService}
            onlyOpen={onlyOpen}
            setOnlyOpen={setOnlyOpen}
            radiusKm={radiusKm}
            setRadiusKm={setRadiusKm}
            hasLocation={!!userLoc}
          />
          <ResourceList
            items={filtered}
            onHover={(id) => setSelectedId(id)}
            onSelect={(id) => setSelectedId(id)}
          />
        </section>
        <section className="panel map">
          <MapView
            center={center}
            userLoc={userLoc}
            items={filtered}
            radiusKm={radiusKm}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </section>
      </main>
    </div>
  )
}

function isOpenNow(hours, now = new Date()) {
  if (!hours) return false
  const day = now.getDay() // 0 = Sun
  const def = hours[day]
  if (!def || !def.open || !def.close) return false
  const [oH, oM] = def.open.split(':').map(Number)
  const [cH, cM] = def.close.split(':').map(Number)
  const openMins = oH * 60 + oM
  const closeMins = cH * 60 + cM
  const nowMins = now.getHours() * 60 + now.getMinutes()
  return nowMins >= openMins && nowMins <= closeMins
}
