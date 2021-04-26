import React from 'react'
import './hostBanner.css'

function HostBanner({ img, title, description }) {
  return (
    <div className="become_host">
      <div className="info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default HostBanner
