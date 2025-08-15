import React from 'react'

export default function ResourceCard({ resource }) {
  const { name, category, address, phone, website, services = [] } = resource
  return (
    <div className="card">
      <h3>{name}</h3>
      <small>{category}</small>
      <div className="muted">{address}</div>
      {services.length ? <div className="subtle">Services: {services.join(', ')}</div> : null}
      <div className="card-actions">
        {phone && <a className="link" href={`tel:${phone}`}>Call</a>}
        {website && <a className="link" href={website} target="_blank" rel="noreferrer">Website</a>}
      </div>
    </div>
  )
}
