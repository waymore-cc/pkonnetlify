/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout.js"
import { Styled } from "theme-ui"
import { Box } from "@theme-ui/components"

export default () => (
  <Layout>
    <Styled.h1 sx={{ mt: 24 }}>Paweł Kamyszek</Styled.h1>
    <Box sx={{ width: [100 + "%", 70 + "%", 60 + "%"] }}>
      <Styled.h3 sx={{ fontWeight: 300 }}>
        Digital product designer & web developer based in Wrocław, Poland.
        Co-founder of the{" "}
        <a href="http://waymore.cc">Waymore Creative Collective</a>. After
        almost a year long internship at J. Walter Thompson I started freelance
        work.
      </Styled.h3>
    </Box>
  </Layout>
)
