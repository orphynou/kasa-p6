import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.scss'

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="logo du site Kasa"></img>
      </NavLink>
      <nav className="header__navigation">
        <NavLink to="/"> Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
