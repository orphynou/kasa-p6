import logo from '../../assets/logo-footer.png'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo du site Kasa" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
