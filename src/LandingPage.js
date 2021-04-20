import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <div className="landingPage-container">
        <header>
            <h1>Indo-Fashion</h1>
            <h2>Buy Your Style</h2>
        </header>
        <Link to='/products'>Explore Now..</Link>
        </div>              
    )
}

export default LandingPage
