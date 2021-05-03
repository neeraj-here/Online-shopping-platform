import React, { useState, useEffect } from 'react'
import "./About.css"
import { db } from './Firebase'

const About = () => {

    const [loading, setLoading] = useState(false)
    const [aboutText, setAboutText] = useState("")
    const ref = db.collection("Data").doc("About")

    function getAboutText() {
        setLoading(true)
        ref.onSnapshot((doc) => {
            setAboutText(doc.data().About)
        });
        setLoading(false)
    }

    useEffect(() => {
        getAboutText()
    }, [])

    if(loading){
        return <h1 className="Loading">
            Loading! Please Wait...
        </h1> 
    }

    return (
        <div>
            {aboutText}
        </div>
    )
}

export default About
