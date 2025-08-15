// Google Maps requires payment - using leaflet for free access
import React, { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const mapContainerStyle = { width: '100%', height: '100%' }

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).toString(),
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).toString(),
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).toString(),
})

export default function MapView({ center, userLoc, items, radiusKm = 25, selectedId, setSelectedId }) {
  const selected = useMemo(() => items.find(i => i.id === selectedId), [items, selectedId])

  return (
    <div style={mapContainerStyle}>
      <MapContainer center={[center.lat, center.lng]} zoom={11} style={mapContainerStyle} scrollWheelZoom>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {userLoc && (
          <>
            <Marker position={[userLoc.lat, userLoc.lng]}>
              <Popup>You are here</Popup>
            </Marker>
            <Circle center={[userLoc.lat, userLoc.lng]} radius={radiusKm * 1000} />
          </>
        )}

        {items.map(r => r.location ? (
          <Marker
            key={r.id}
            position={[r.location.lat, r.location.lng]}
            eventHandlers={{ click: () => setSelectedId(r.id) }}
          >
            <Popup>
              <strong>{r.name}</strong><br />
              <small>{r.category}</small><br />
              <span className="subtle">{r.address}</span>
            </Popup>
          </Marker>
        ) : null)}
      </MapContainer>
    </div>
  )
}
