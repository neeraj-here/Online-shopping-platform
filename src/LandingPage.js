import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <div className="Landingcontainer">
        <header>
            <h1 class="Landingh1">Indo-Fashion Store</h1>
            <br/>
            <p class="LandingPara">The One Stop Destination For All Your Fashion Needs. Click Below to Buy Your Style!</p>
            <br></br>
            <div class="Landingbtn">
        <Link className="Explorelink" to='/products'><button class="Explorebtn">Explore Now</button></Link>
        </div>
        </header>
        </div>               
    )
}

export default LandingPage
