import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo du site Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
