/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { navigate } from "gatsby"
import Recaptcha from "react-google-recaptcha"
import Button from "../components/button.js"
import { Label, Input, Textarea } from "@theme-ui/components"

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div sx={{ width: 100 + "%" }}>
      <form
        name="contact-recaptcha"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <Label sx={{ mb: 2 }}>Your name:</Label>
          <Input type="text" name="name" onChange={handleChange} />
        </p>
        <p>
          <Label sx={{ mb: 2 }}>Your email:</Label>
          <Input type="email" name="email" onChange={handleChange} />
        </p>
        <p>
          <Label sx={{ mb: 2 }}>Tell me about your project:</Label>
          <Textarea name="message" onChange={handleChange} />
        </p>
        <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
        <p>
          <Button type="submit">Send</Button>
        </p>
      </form>
    </div>
  )
}
