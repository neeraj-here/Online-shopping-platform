import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {

    return (
        <div className="Landingcontainer">
        <header>
        {/*<h1 className="Landingh1">Indo-Fashion Store</h1>*/}
            <p className="LandingPara">We are The One Stop Destination For All Your Fashion Needs.</p>
            <br/>
            <div className="Landingbtn">
                <Link className="Explorelink" to='/products'><button className="Explorebtn">Explore Now</button></Link>
            </div>
        </header>
        </div>               
    )
}

export default LandingPage
