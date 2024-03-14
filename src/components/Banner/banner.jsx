import React from 'react'
import './banner.scss'

const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      {title && <h1 className="banner__text">{title}</h1>}
      {image && <img className="banner__img" src={image} alt="bannière" />}
    </div>
  )
}

export default Banner
