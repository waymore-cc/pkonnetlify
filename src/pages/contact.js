/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout.js"
import Contact from "../components/contactform.js"
import { Styled } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

export default () => (
  <Layout sx={{ m: 4 }}>
    <Styled.h1 sx={{ mt: 24 }}>Let's talk</Styled.h1>

    <Flex sx={{ flexWrap: "wrap" }}>
      <Box pr={5} sx={{ flexGrow: 1 }}>
        <Styled.h3>
          <span sx={{ fontWeight: "300" }}>pawel.kamyszek@waymore.cc</span>
        </Styled.h3>
        <Styled.h3>
          <span sx={{ fontWeight: "300" }}>(+48) 697 879 709</span>
        </Styled.h3>
      </Box>
      <Box sx={{ flexGrow: 1, minWidth: "50%" }}>
        <Contact></Contact>
      </Box>
    </Flex>
  </Layout>
)
