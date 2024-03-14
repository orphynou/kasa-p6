import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './ficheRating.scss'

const FicheRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar

  const stars = []
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className="star full-star" />,
    )
  }
  if (halfStar === 1) {
    stars.push(
      <FontAwesomeIcon key="half" icon={faStar} className="star half-star" />,
    )
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={`empty-${i}`}
        icon={faStar}
        className="star empty-star"
      />,
    )
  }

  return (
    <div className="rating">
      <div className="stars">{stars}</div>
    </div>
  )
}

export default FicheRating
