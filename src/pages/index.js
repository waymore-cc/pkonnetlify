import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import styles from "./index.module.css"
import Header from "../components/header.js"

class RootIndex extends React.Component {
  render() {
    return (
      <div className={styles.siteInner}>
        <Helmet />
        <Header></Header>

        <div className={styles.content}>
          <h1 className={styles.slogan}>
            this is the playground where{" "}
            <span className={styles.sloganBold}>
              {" "}
              <Link to="#"> chance plays fate</Link>
            </span>
            *
          </h1>

          <p className={styles.sloganSub}>
            <span className={styles.sloganBold}>*chance</span> is you didn’t get
            here by accident,
            <br /> now if that’s the case – let me help you{" "}
            <span className={styles.sloganBold}>design</span> your{" "}
            <span className={styles.sloganBold}>fate</span>
          </p>
          <div className={styles.slogan_buttons}>
            <button>start a project</button>
            <button className={styles.buttonGold}>more...</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RootIndex
