/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Link from "gatsby-link"
import Button from "../components/button.js"
import Layout from "../components/layout.js"
import { Styled } from "theme-ui"
class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Styled.h1 sx={{ fontWeight: 500, my: [16, 32, 48] }}>
            <span sx={{ fontWeight: "body" }}>
              this is the playground where {""}
            </span>
            <Link
              to="/"
              sx={{
                textDecoration: "underline",
                color: "text",
                ":hover": { color: "link" },
              }}
            >
              chance plays fate
            </Link>
            *
          </Styled.h1>

          <Styled.h3
            sx={{
              my: [16, 32, 48],
              maxWidth: [100 + "%", 70 + "%", 60 + "%"],
            }}
          >
            *chance {""}
            <span sx={{ fontWeight: "body" }}>
              is you didn’t get here by accident, now if that’s the case – let
              me help you{" "}
            </span>
            design<span sx={{ fontWeight: "body" }}> your</span> fate
          </Styled.h3>
          <div>
            <Link to="/">
              <Button>Collaborate</Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
