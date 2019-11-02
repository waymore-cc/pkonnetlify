/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useRef } from "react"
import { useOnClickOutside } from "../hooks/hooks.js"
import FocusLock from "react-focus-lock"
import Burger from "../components/burger.js"
import Menu from "../components/menu.js"

function Resnav() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  const menuId = "main-menu"
  return (
    <div sx={{ display: ["", "none", "none"] }} ref={node}>
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  )
}
export default Resnav
