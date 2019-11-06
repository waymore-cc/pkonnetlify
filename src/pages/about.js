/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout.js"
import Portrait from "../components/portrait.js"
import { Styled } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"
import StyledLink from "../components/styledlink.js"
import Button from "../components/button.js"

export default () => (
  <Layout>
    <Flex sx={{ flexWrap: "wrap", mt: 4 }}>
      <Box
        sx={{
          flex: ["1 100%", "1 100%", "0 48%"],
          m: ["0 auto 0 0", "0 auto 32px 0", "0 auto 0 0"],
        }}
      >
        <Portrait />
      </Box>
      <Box sx={{ pr: 3, flex: ["1 100%", "1 100%", "0 48%"], m: "auto 0" }}>
        <Styled.h2 sx={{ fontWeight: 600, pt: [4, 0, 0], mt: 0 }}>
          Paweł Kamyszek
        </Styled.h2>
        <Styled.p sx={{ fontWeight: 300 }}>
          <span sx={{ fontWeight: 500 }}>
            Digital product designer & web developer
          </span>{" "}
          based in Wrocław, Poland. Co-founder of the{" "}
          <span sx={{ fontWeight: 500 }} href="http://waymore.cc">
            Waymore – Creative Collective
          </span>
          .
        </Styled.p>
        <Styled.p sx={{ fontWeight: 300, mb: 40 }}>
          I've spent altogether almost a year as an intern at{" "}
          <Styled.a
            sx={{ fontWeight: 400 }}
            href="https://www.jwt.com/pl/poland"
          >
            JWT
          </Styled.a>{" "}
          and{" "}
          <Styled.a sx={{ fontWeight: 400 }} href="https://www.ogilvy.pl/">
            Ogilvy
          </Styled.a>{" "}
          agencies in Wrocław which has merged during my time there.
        </Styled.p>
        <StyledLink to="/contact">
          <Button>let's talk</Button>
        </StyledLink>
      </Box>
    </Flex>
  </Layout>
)
