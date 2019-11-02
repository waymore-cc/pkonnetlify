/** @jsx jsx */
import { jsx } from "theme-ui"
import Logok from "../assets/logo-k.svg"
import Logop from "../assets/logo-p.svg"
import Logob from "../assets/logo-b.svg"

function Logointer() {
  return (
    <div
      sx={{
        position: "relative",
        width: [48, 64, 80],
        height: [48, 64, 80],
      }}
    >
      <Logok
        sx={{
          width: [24, 32, 40],
          position: "absolute",
          top: 0,
          left: 0,
          fill: "brand",
        }}
      ></Logok>
      <Logop
        sx={{
          width: [24, 32, 40],
          position: "absolute",
          top: 0,
          right: 0,
          fill: "logo",
          transition: "0.65s ease-in-out",
          // "::before": {
          //   width: 100 + "%",
          //   height: 100 + "%",
          //   top: 0,
          //   content: '""',
          //   position: "absolute",
          //   bg: "#fff",
          // },
          // "::after": {
          //   width: 100 + "%",
          //   height: 100 + "%",
          //   top: 0,
          //   left: 100 + "%",
          //   content: '""',
          //   position: "absolute",
          //   bg: "#fff",
          // },
          ":hover": {
            top: [24, 32, 40],
            transition: "0.65s ease-in-out",
            transform: "rotate(45deg)",
          },
        }}
      ></Logop>
      <Logob
        sx={{
          width: [24, 32, 40],
          position: "absolute",
          bottom: 0,
          left: 0,
          fill: "logo",
        }}
      ></Logob>
    </div>
  )
}

export default Logointer
