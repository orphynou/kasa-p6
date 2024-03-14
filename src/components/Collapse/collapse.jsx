import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './collapse.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse__list">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse__icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
