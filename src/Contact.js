import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <div className="CU">
            <div className="Form">
            <div className="ContactUs">
                <h1>Get in Touch!</h1>
                <div className="contactip">
                <label>Name : </label>
                <input className="frmName" type="text" placeholder="Enter Your Name"></input>
                </div>
                <div className="contactip">
                <label>Email : </label>
                <input className="frmMail" type="email" placeholder="Enter Your Email"></input>
                </div>
                <div className="contactip">
                <label>Phone : </label>
                <input className="frmNun" type="phone" placeholder="Enter Your Number"></input>
                </div>
                <div className="contactip">
                <label>Message : </label>
                <textarea></textarea>
                </div>
                <button className="Contactbtn">Send</button>
            </div>
            </div>
            <div className="Contactinfo">
                <h3>Add More Stuff</h3>
            </div>
        </div>    
            
       
        

        
    )
}

export default Contact
