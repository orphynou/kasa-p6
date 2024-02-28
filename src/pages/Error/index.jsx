import { Link } from 'react-router-dom'
import error from '../../assets/404.png'

function Error() {
  return (
    <div>
      <img src={error} alt="visuel 404"></img>{' '}
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error
