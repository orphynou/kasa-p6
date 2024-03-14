import React from 'react'

const FicheTitle = ({ title, location }) => {
  return (
    <div className="fiche__name">
      <h2 className="fiche__name__title">{title}</h2>
      <h3 className="fiche__name__location">{location}</h3>
    </div>
  )
}

export default FicheTitle
