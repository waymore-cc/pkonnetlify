import React from "react"
import Layout from "../components/layout.js"
import { Styled } from "theme-ui"
import { Box } from "@theme-ui/components"

export default () => (
  <Layout>
    <Styled.h2 sx={{ mt: 24 }}>Thank you!</Styled.h2>
    <Box sx={{ width: [100 + "%", 70 + "%", 50 + "%"] }}>
      <Styled.p sx={{ fontWeight: 300 }}>
        I'll write you back as soon as possible{" "}
        <span role="img" aria-label="technologist emoji">
          👨‍💻
        </span>
      </Styled.p>
    </Box>
  </Layout>
)
