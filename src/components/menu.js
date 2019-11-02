/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"
import { bool } from "prop-types"
import Link from "gatsby-link"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 832px) {
    width: 100%;
    height: 100vh;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1
  return (
    <StyledMenu
      sx={{ backgroundColor: "menu" }}
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <Link sx={{ color: "background" }} to="/" tabIndex={tabIndex}>
        Work
      </Link>
      <Link sx={{ color: "background" }} to="/about" tabIndex={tabIndex}>
        About
      </Link>
      <Link sx={{ color: "background" }} to="/faq" tabIndex={tabIndex}>
        Contact
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
