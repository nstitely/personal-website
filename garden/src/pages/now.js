import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const NowPage = () => {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/now">Now</Link>
      </nav>
      
      <h1>Now</h1>
      <p><em>Updated June 1, 2026.</em></p>
      
      <p>What I'm doing now:</p>
      
      <ul>
        <li>Working as an IT Help Desk Technician</li>
        <li>Building out this website while learning Gatsby and React.</li>
        <li>Reading The Song of Kali and The Way of Kings.</li>
        <li>Waiting Vince Staples's new Album. This friday!!!!!</li>
        <li>Playing Video Games. Want to play deadlock this week or weekend. Lately I've either been playing old school runescape (leagues) or megabonk. Or some random risk of rain 2 runs when I feel like mixing it up.</li>

      </ul>
    </main>
  )
}

export default NowPage