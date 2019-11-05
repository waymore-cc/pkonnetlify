/** @jsx jsx */
import { jsx } from "theme-ui"
import Helmet from "react-helmet"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { Styled } from "theme-ui"

export default ({ children }) => (
  <Styled.div
    sx={{
      mx: "auto",
      maxWidth: [90 + "%", 80 + "%", 80 + "%"],
      fontFamily: "body",
    }}
  >
    <Helmet />
    <Header></Header>
    {children}
    <Footer></Footer>
  </Styled.div>
)
