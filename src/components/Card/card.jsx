import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ logements }) => {
  return (
    <li className="card__liste">
      <Link to={`/fiches/${logements.id}`}>
        <img
          className="card__image"
          src={logements.cover}
          alt={logements.title}
        />
        <h2 className="card__title">{logements.title}</h2>
      </Link>
    </li>
  )
}

export default Card
