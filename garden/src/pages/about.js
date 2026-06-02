import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const AboutPage = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/now">Now</Link>
      </nav>
      
      <h1>About</h1>
      <p>This page will be about me one day!</p>
    </main>
  )
}
export default AboutPage