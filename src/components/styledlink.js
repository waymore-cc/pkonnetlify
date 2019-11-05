import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export default props => <StyledLink {...props} />
