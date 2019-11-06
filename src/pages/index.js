/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import StyledLink from "../components/styledlink.js"
import Button from "../components/button.js"
import Layout from "../components/layout.js"
import { Styled } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"
class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Styled.h1
            sx={{
              mb: 4,
              mt: 24,
              width: [96 + "%", 100 + "%", 100 + "%"],
            }}
          >
            This is the playground where {""}
            <StyledLink
              to="/contact"
              sx={{
                color: "text",
                borderBottom: ["none", "solid 2px", "solid 2px"],
                borderColor: "text",
                pb: "8px",
                transition: "0.1s ease-in-out",
                ":hover": { color: "link" },
              }}
            >
              chance plays fate.
            </StyledLink>
          </Styled.h1>

          <Styled.h3
            sx={{
              my: [32, 32, 48],
              maxWidth: [100 + "%", 70 + "%", 60 + "%"],
            }}
          >
            <span sx={{ fontWeight: "300" }}>
              I help brands create amazing digital products and experiences.
              Designing great UX/UI and leveraging the lean approach.
            </span>
          </Styled.h3>
          <div>
            <StyledLink to="/contact">
              <Button>let's talk</Button>
            </StyledLink>
          </div>
        </div>
        <Flex sx={{ flexWrap: "wrap", mt: 5 }}>
          <Box
            sx={{
              flex: ["0 100%", "0 48%", "0 46%"],
              border: "1px solid",
              p: 3,
              bg: "#dedef0",
              filter: "blur(2px) grayscale(90%)",
              ":hover": { border: "4px solid", p: 13, filter: "blur(0px)" },
            }}
          >
            <Styled.h3 sx={{ mt: 1, mb: 3 }}>Waymore</Styled.h3>
            <Styled.p>
              Would you like to know more about what we do at the Waymore
              Creative Collective? Our website is under construction{" "}
              <span role="img" aria-label="rocket emoji">
                🚀
              </span>
            </Styled.p>
            Coming soon...
          </Box>
          <Box
            sx={{
              flex: ["0 100%", "0 48%", "0 46%"],
              ml: "auto",
              border: "1px solid",
              p: 3,
              bg: "#e6f8f9",
              filter: "blur(2px) grayscale(90%)",
              ":hover": {
                border: "4px solid",
                p: 13,
                filter: "blur(0px)",
              },
            }}
          >
            <Styled.h3 sx={{ mt: 1, mb: 3 }}>Design System</Styled.h3>
            <Styled.p>
              We work on an awesome Design System and I honestly can't wait to
              tell you more about it. You'll just have to wait a little bit more{" "}
              <span role="img" aria-label="rocket emoji">
                ⏳
              </span>
            </Styled.p>
            Coming soon...
          </Box>
        </Flex>
      </Layout>
    )
  }
}

export default RootIndex
