import React, { useState, useEffect } from 'react'
import "./About.css"
import { db } from './Firebase'
import Neeraj from './Media/Neeraj.jpg'
import Priyanshu from './Media/Priyanshu.jpg'
import Himanshu from './Media/Himanshu.jpg'

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
      <div class="about-section">
<h1 className="abtush1">About Us</h1>
<p className="abtp">"We here at Indo-Fashion believe in the collective energy of Community</p>
<p className="abtp">We strive to bring you the best of fashion at the most affordable rates"</p>
</div>
<h1 className="Abouth1">Our Team</h1>
<div className="row">
<div className="column">
<div className="card">
<img class="Cimg" src={Neeraj} alt="Neeraj"/>
<div className="container">
<h2 className="abth2">Neeraj Sharma</h2>
  <p class="abttitle">19BCS1298</p>
  <p class="abtdesc">Worked in the field of ReactJS and CSS. Made the website live, working and responsive.</p>
  <p class="abtmail">19bcs1298@gmail.com</p>
</div>
</div>
</div>
<div class="column">
<div class="card">
<img class="Cimg" src={Priyanshu} alt="Priyanshu"/>
<div class="container">
  <h2 className="abth2">Priyanshu Sahoo</h2>
  <p class="abttitle">19BCS1014</p>
  <p class="abtdesc">Designed the CSS and made it look real, attractive and responsive. Also worked on VanilaJS modules. </p>
  <p class="abtmail">priyanshusahoo0007@gmail.com</p>
</div>
</div>
</div>
<div class="column">
<div class="card">
<img class="Cimg" src={Himanshu} alt="Himanshu"/>
<div class="container">
  <h2 className="abth2">Himanshu Gupta</h2>
  <p class="abttitle">19BCS1284</p>
  <p class="abtdesc">Worked on UML structure, designs and looks. Also worked on Firebase Database. </p>
  <p class="abtmail">19BCS1284@cuchd.in</p>
</div>
</div>
</div>
</div>
<div className="body">
<p className="explanation">Testimonials. From our valued customers!</p>
<div className="testimonial-slider">
<ul className="slider">
<li>
<div className="testimonial-slider-content">
  <q className="tsc">The product was as vibrant as the images - LOVED IT!</q>
  <p className="source">- Harsh N, Delhi</p>
</div>
</li>
<li>
<div className="testimonial-slider-content">
  <q className="tsc">Nice product. Fast Delivery. Completely Satisfied.</q>
  <p className="source">- Sunny M, Mumbai</p>
</div>
</li>
<li>
<div className="testimonial-slider-content">
  <q className="tsc">Delivered on time as promised - AMAZING!</q>
  <p className="source">- Deepansh L, Chennai</p>
</div>
</li>
<li>
<div className="testimonial-slider-content">
  <q className="tsc">The return policy needs improvement. Everything else is Great.</q>
  <p className="source">- Ritesh J, Kolkata</p>
</div>
</li>
</ul>
</div>
</div>


  </div>
    )
}

export default About