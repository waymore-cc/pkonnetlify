/** @jsx jsx */
import { jsx } from "theme-ui"
import Nav from "../components/nav.js"
import Link from "gatsby-link"
import { ColorMode } from "theme-ui"
import Logointer from "../components/logointer.js"
import Resnav from "../components/resnav.js"

function Header() {
  return (
    <header
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: [1, 2, 2],
        width: 100 + "%",
        py: [4, 4, 5],
        color: "text",
        borderBottom: ["solid 1px", "none", "none"],
        borderColor: "text",
      }}
    >
      <ColorMode />
      <div
        sx={{
          height: 100 + "%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Logointer sx={{ maxHeight: [48, 64, 80], maxWidth: [48, 64, 80] }} />
        </Link>
      </div>

      <Nav sx={{ display: ["none", "block", "block"] }} />
      <Resnav />
    </header>
  )
}

export default Header
