import React from "react"
import Layout from "../components/layout.js"
import { Styled } from "theme-ui"
import { Box } from "@theme-ui/components"

export default () => (
  <Layout>
    <Styled.h2 sx={{ mt: 24 }}>Paweł Kamyszek</Styled.h2>
    <Box sx={{ width: [100 + "%", 70 + "%", 50 + "%"] }}>
      <Styled.p sx={{ fontWeight: 300 }}>
        Digital product designer & web developer based in Wrocław, Poland.
        Co-founder of the{" "}
        <a href="http://waymore.cc">Waymore Creative Collective</a>. After
        almost a year long internship at J. Walter Thompson I started freelance
        work.
      </Styled.p>
    </Box>
  </Layout>
)
