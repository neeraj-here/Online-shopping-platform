import React, {useEffect} from "react";
import './UnderDevelopment.css'
import Gif from './Media/SewingGIF.gif'
function UnderDev() {
    useEffect(() => {
    document.title = "indo-fashion"
  })
    return (
        <main>
<div className="UnderDev">
            <img src={Gif} alt="couldn't load" />
</div>
        </main>
    )
}

export default UnderDev
