import React from 'react'

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="search" role="search">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10 4a6 6 0 1 1 3.9 10.6l3.7 3.7-1.4 1.4l-3.7-3.7A6 6 0 0 1 10 4m0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8"/></svg>
      <input
        placeholder="Search name, services, city..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search resources"
      />
      {value && (
        <button className="chip" onClick={onClear} title="Clear">Clear</button>
      )}
    </div>
  )
}
