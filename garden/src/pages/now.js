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
     
      <p><em>Updated June 14, 2026</em></p>
      
      <h2>What I'm Doing Now:</h2>
      
      <h2>Working</h2>

      <p>Working as an IT Help Desk Technician.</p>

      <h2>Programming</h2>
      
      <p>Building this website using Gatsby and React.</p>
      <p>Automating updates to this website.</p>
      <p>Prisoner's Dilemma Simulation Project - Python</p>
      <p>Trying to code daily.</p>

      <h2>Hobbies</h2>
     
      <h2>Books</h2>

      <p>Finished reading - The Song of Kali.</p>
      <p>Currently reading - The Way of Kings.</p>

      <p>Want to read:</p>
      <ul>
        <li>Ilyum</li>
        <li>Olympos</li>
        <li>Confessions (something about time allegedly)</li>
        <li>Essential Keats</li>
      </ul>
     
      <h2>Video Games</h2>
     
      <p>Playing video games:</p>
      <ul>
        <li>Megabonk</li>
        <li>Elden Ring</li>
        <li>Hades</li>
      </ul>

      <p>Want to play:</p>
    <ul>
        <li>Deadlock</li>
        <li>Everything is Crab</li>
        <li>Destiny 2?</li>
        <li>Rim World</li>

      </ul>

    </main>
  )
}

export default NowPage