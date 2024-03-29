import React from 'react'
import './Card.css'


function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="Image" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Card
