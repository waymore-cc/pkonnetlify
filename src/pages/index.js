/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import StyledLink from "../components/styledlink.js"
import Button from "../components/button.js"
import Layout from "../components/layout.js"
import { Styled } from "theme-ui"
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
              to="/"
              sx={{
                color: "text",
                borderBottom: ["none", "solid 2px", "solid 2px"],
                borderColor: "text",
                pb: "8px",
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
      </Layout>
    )
  }
}

export default RootIndex
