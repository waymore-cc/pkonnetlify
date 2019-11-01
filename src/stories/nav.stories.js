import React from "react"
import { storiesOf } from "@storybook/react"
import Link from "gatsby-link"
import styles from "../pages/index.module.css"

storiesOf(`Header/menu`, module).add(`navigation`, () => (
  <nav className={styles.nav} style={{ padding: "2rem" }}>
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
        <button>contact me</button>
      </li>
    </ul>
  </nav>
))
