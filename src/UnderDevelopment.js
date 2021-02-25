import React, {useEffect} from "react";
import './UnderDevelopment.css'
import Gif from './SewingGIF.gif'
function UnderDev() {
    useEffect(() => {
    document.title = "indo-fashion"
  })
    return (
        <main>
            <img src={Gif} alt="couldn't load" />
        </main>
    )
}

export default UnderDev
