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
     
      <p><em>Updated June 1, 2026</em></p>
      
      <p>What I'm doing now:</p>
      
      <h2>Working / Programming</h2>
     
      <p>Working as an IT Help Desk Technician.</p>
      <p>Building this website using Gatsby and React.</p>

      <h2>Hobbies</h2>
     
      <h3>Books</h3>
     
      <p>Currently reading - The Song of Kali and The Way of Kings.</p>
      <p>Want to read:</p>
      <ul>
        <li>Ilyum</li>
        <li>Olympos</li>
        <li>Confessions (something about time allegedly)</li>
        <li>Essential Keats</li>
      </ul>
     
      <h3>Music</h3>
     
      <p>Waiting for Vince Staples's new Album - Cry Baby. This friday, june 5th!!!!!</p>

      <h3>Video Games</h3>
     
      <p>Playing Video Games:</p>
      <ul>
        <li>Megabonk</li>
        <li>Mini Motorways</li>
      </ul>

      <p>Want to play:</p>
    <ul>
        <li>Deadlock</li>
        <li>Elden Ring</li>
        <li>Hades</li>
        <li>Everything is Crab</li>
      </ul>

    </main>
  )
}

export default NowPage