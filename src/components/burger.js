/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"
import { bool, func } from "prop-types"

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  position: relative;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    width: 1.5rem;
    height: 0.25rem;

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false
  return (
    <StyledBurger
      sx={{
        width: 24,
        height: 24,
        ml: [3, 3, 3],
      }}
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span sx={{ backgroundColor: "text" }} />
      <span sx={{ backgroundColor: "text" }} />
      <span sx={{ backgroundColor: "text" }} />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Burger
