/** @jsx jsx */
import { jsx } from "theme-ui"
import StyledLink from "../components/styledlink.js"
import { Styled } from "theme-ui"
import { useColorMode } from "theme-ui"
import Nightmode from "../assets/night-mode.svg"

const S = Styled

function Nav() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <nav
      sx={{
        height: 100 + "%",
        ml: "auto",
        display: ["flex", "flex", "flex"],
      }}
    >
      <ul sx={{ display: "flex", alignItems: "center", mr: "auto" }}>
        <S.li
          sx={{
            display: ["none", "flex", "flex"],
          }}
        >
          <StyledLink
            to="/"
            sx={{
              color: "text",
              pl: [3, 4, 4],
              alignSelf: "center",
              fontSize: [1, 2, 3],
              fontWeight: 500,
              ":hover": { color: "#0084ff;" },
            }}
          >
            Work
          </StyledLink>
        </S.li>
        <S.li
          sx={{
            display: ["none", "flex", "flex"],
          }}
        >
          <StyledLink
            to="/about"
            sx={{
              color: "text",
              pl: [3, 4, 4],
              alignSelf: "center",
              fontSize: [1, 2, 3],
              fontWeight: 500,
              ":hover": { color: "#0084ff;" },
            }}
          >
            About
          </StyledLink>
        </S.li>
        <S.li
          sx={{
            display: ["none", "flex", "flex"],
          }}
        >
          <StyledLink
            to="/contact"
            sx={{
              color: "text",
              pl: [3, 4, 4],
              alignSelf: "center",
              fontSize: [1, 2, 3],
              fontWeight: 500,
              ":hover": { color: "#0084ff;" },
            }}
          >
            Contact
          </StyledLink>
        </S.li>
      </ul>
      <div sx={{ pl: [3, 4, 4], display: "flex", alignItems: "center" }}>
        <button
          sx={{
            borderWidth: "none",
            borderStyle: "none",
            borderColor: "none",
            borderImage: "none",
            background: "none",
            py: 0,
          }}
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default")
          }}
        >
          {colorMode === "default" ? (
            <Nightmode
              sx={{
                width: 22,
                height: 22,
                lineHeight: 0,
                bg: "transparent",
                transition: "1.15s ease-out",
              }}
            />
          ) : (
            <Nightmode
              sx={{
                width: 22,
                height: 22,
                lineHeight: 0,
                bg: "transparent",
                fill: "white",
                transition: "1.15s ease-out",
              }}
            />
          )}
        </button>
      </div>
    </nav>
  )
}
export default Nav
