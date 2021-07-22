import React from 'react'
import "./About.css"
import Rahul from './Media/Rahul.jpg'

const About = () => {

    return (
      <div>
      <div className="about-section">
      <h1 className="abtush1">About Us</h1>
      <p className="abtp">"We here at Indo-Fashion believe in the collective energy of Community</p>
      <p className="abtp">We strive to bring you the best of fashion at the most affordable rates"</p>
      </div>
      <div className="row">
      <div className="column">
      <div className="card">
      <img className="Cimg" src={Rahul} alt="Rahul"/>
      <div className="container">
      <h2 className="abth2">Rahul</h2>
        <p className="abttitle">1835296</p>
        <p className="abtmail">csecec.1835296@gmail.com</p>
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