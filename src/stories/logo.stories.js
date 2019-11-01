import React from "react"
import { storiesOf } from "@storybook/react"
import logo from "../assets/logo.svg"

storiesOf(`Logo`, module).add(`default`, () => (
  <img src={logo} alt="Logo" style={{ height: "6rem" }} />
))
