import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import './carousel.scss'

function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const NextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === pictures.length - 1 ? 0 : currentSlide + 1,
    )
  }

  const PrevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1,
    )
  }

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null
  }

  return (
    <div className="carousel__container">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="courousel__left__chevron"
        onClick={PrevSlide}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="courousel__right__chevron"
        onClick={NextSlide}
      />
      {pictures.map((picture, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <img src={picture} alt="logements" className="carousel__pic" />
            )}
          </div>
        )
      })}
      <div className="carousel__page-number">
        {currentSlide + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Carousel
