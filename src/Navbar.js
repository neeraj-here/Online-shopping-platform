import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from "react-icons/fa"
//import {FiLogOut} from 'react-icons/fi'
import { links } from './data'
import logo from './Media/logo.png'
//import { useAuth } from './AuthContext'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useBucketContext } from './BucketContext';


const Navbar = () => {
  
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const { totalQty } = useBucketContext()
  //const { logout } = useAuth()

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = linkHeight + "px"
    }
    else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks])

  // async function handleLogout() {
  //   setError("")
  //   try {
  //     await logout()
  //   }
  //   catch {
  //     console.log("Failed to logout!");
  //   }
  // }

  return <nav>
   
    <div className="nav-center">
      <div className="nav-header">
        <Link to='/products'>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="Toggle">
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
        </div>
        <div className="Navqty">{totalQty}</div>
        <Link className="Navqty1" to='/bucket'>Bucket</Link>
        
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link
            return <li key={id}>
              <Link to={url} > {text} </Link>
            </li>
          })}
        </ul>
        { }
      </div>
    </div>
  </nav>
}

export default Navbar