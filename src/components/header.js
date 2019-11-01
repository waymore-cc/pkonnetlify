/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "gatsby-link"
import styles from "../pages/index.module.css"
import Logo from "../assets/logo.svg"

function Header() {
  return (
    <header className="header">
      <div className={styles.logobox}>
        <Logo className={styles.logo}>Logo</Logo>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">.pawelkamyszek</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <button sx={{ variant: "buttons.secondary" }}>contact me</button>
          </li>
        </ul>
      </nav>

      <div className={styles.mobileMenu}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
