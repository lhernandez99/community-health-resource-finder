import React from 'react'

const CatChip = ({label, active, onClick}) => (
  <span className={active ? 'chip active' : 'chip'} onClick={onClick} role="button" aria-pressed={active}>
    {label}
  </span>
)

export default function Filters({
  categories = [], services = [],
  activeCats, setActiveCats,
  service, setService,
  onlyOpen, setOnlyOpen,
  radiusKm, setRadiusKm,
  hasLocation
}) {
  function toggleCat(c) {
    setActiveCats(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])
  }
  return (
    <div>
      <div className="filters">
        {categories.map(c => (
          <CatChip key={c} label={c} active={activeCats.includes(c)} onClick={() => toggleCat(c)} />
        ))}
      </div>
      <div className="card" style={{background:'#0d1328'}}>
        <div style={{display:'grid', gap:10}}>
          <label className="subtle">
            Service:
            <select value={service} onChange={(e)=>setService(e.target.value)} style={{marginLeft:8}}>
              <option value="">Any</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label className="subtle">
            <input type="checkbox" checked={onlyOpen} onChange={(e)=>setOnlyOpen(e.target.checked)} />
            <span style={{marginLeft:8}}>Open now</span>
          </label>
          <label className="subtle">
            Radius: {radiusKm} km {hasLocation ? '' : '(enable location for radius filter)'}
            <input type="range" min="5" max="50" step="5" value={radiusKm} onChange={(e)=>setRadiusKm(Number(e.target.value))} disabled={!hasLocation} />
          </label>
        </div>
      </div>
      <div className="card muted">
        Sample data only — not real-time or exhaustive. Add your datasets later via a backend.
      </div>
    </div>
  )
}
