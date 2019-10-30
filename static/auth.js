import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

export default () => (
  <div className={styles.siteInner}>
    <Helmet>
      <script
        src={withPrefix("https://unpkg.com/netlify-auth-providers")}
        type="text/javascript"
      />
      <script src={withPrefix("auth-script.js")} type="text/javascript" />
    </Helmet>

    <h1>GitHub Auth Demo:</h1>
    <p>
      <Link to="#" id="login">
        Authenticate
      </Link>
    </p>
    <p id="output"></p>
  </div>
)
