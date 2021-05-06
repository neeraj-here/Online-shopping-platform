import React from 'react'
import "./About.css"
import Neeraj from './Media/Neeraj.jpg'
import Priyanshu from './Media/Priyanshu.jpg'
import Himanshu from './Media/Himanshu.jpg'

const About = () => {

    return (
      <div>
      <div className="about-section">
      <h1 className="abtush1">About Us</h1>
      <p className="abtp">"We here at Indo-Fashion believe in the collective energy of Community</p>
      <p className="abtp">We strive to bring you the best of fashion at the most affordable rates"</p>
      </div>
      <h1 className="Abouth1">Our Team</h1>
      <div className="row">
      <div className="column">
      <div className="card">
      <img className="Cimg" src={Neeraj} alt="Neeraj"/>
      <div className="container">
      <h2 className="abth2">Neeraj Sharma</h2>
        <p className="abttitle">19BCS1298</p>
        <p className="abtdesc">Worked in the field of ReactJS and CSS. Made the website live, working and responsive.</p>
        <p className="abtmail">19bcs1298@gmail.com</p>
      </div>
      </div>
      </div>
      <div className="column">
      <div className="card">
      <img className="Cimg" src={Priyanshu} alt="Priyanshu"/>
      <div className="container">
        <h2 className="abth2">Priyanshu Sahoo</h2>
        <p className="abttitle">19BCS1014</p>
        <p className="abtdesc">Designed the CSS and made it look real, attractive and responsive. Also worked on VanilaJS modules. </p>
        <p className="abtmail">priyanshusahoo0007@gmail.com</p>
      </div>
      </div>
      </div>
      <div className="column">
      <div className="card">
      <img className="Cimg" src={Himanshu} alt="Himanshu"/>
      <div className="container">
        <h2 className="abth2">Himanshu Gupta</h2>
        <p className="abttitle">19BCS1284</p>
        <p className="abtdesc">Worked on UML structure, designs and looks. Also worked on Firebase Database. </p>
        <p className="abtmail">19BCS1284@cuchd.in</p>
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