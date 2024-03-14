import React from 'react'

const FicheHost = ({ name, picture }) => {
  return (
    <div className="fiche__host">
      <p className="fiche__host__name">{name}</p>
      <img src={picture} alt={name} className="fiche__host__pic" />
    </div>
  )
}

export default FicheHost
