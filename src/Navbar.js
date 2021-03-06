import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { GiHanger } from "react-icons/gi";
import { links, social } from './data'
import logo from './Media/logo.png'
import "./Navbar.css"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = linkHeight+"px"
    }
    else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks])

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
      </div>
    </div>
  </nav>
}

export default Navbar
