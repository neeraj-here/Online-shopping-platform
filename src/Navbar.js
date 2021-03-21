import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from "react-icons/fa"
import { GiHanger } from "react-icons/gi";
import {FiLogOut} from 'react-icons/fi'
import { links, social } from './data'
import logo from './Media/logo.png'
import { useAuth } from './AuthContext'
import "./Navbar.css"


const Navbar = () => {
  
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const [error, setError] = useState("")
  const { logout } = useAuth()

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = linkHeight+"px"
    }
    else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks])

  async function handleLogout() {
    setError("")
    try {
      await logout()
    }
    catch {
      console.log("Failed to logout!");
    }
  }

  return <nav>
   
    <div className="nav-center">
      <div className="nav-header">
      <img src={logo} alt="logo" className="logo" />
      <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
        <FaBars />
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
        <button onClick={handleLogout}> {FiLogOut} </button>
      </div>
    </div>
  </nav>
}

export default Navbar
