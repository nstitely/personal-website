import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/now">Now</Link>
      </nav>
      
      <h1>The Garden</h1>
      <p>Welcome to my digital garden. Content coming soon.</p>
    </main>
  )
}
export default IndexPage

export const Head = () => <title>my garden</title>
