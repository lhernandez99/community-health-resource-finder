import React from 'react'
import ResourceCard from './ResourceCard.jsx'

export default function ResourceList({ items, onHover, onSelect }) {
  if (!items.length) {
    return <div className="card"><b>No matches.</b><div className="muted">Try expanding your radius or clearing filters.</div></div>
  }
  return (
    <div>
      {items.map(r => (
        <div key={r.id} onMouseEnter={()=>onHover(r.id)} onClick={()=>onSelect(r.id)}>
          <ResourceCard resource={r} />
        </div>
      ))}
    </div>
  )
}
