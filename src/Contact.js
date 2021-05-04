import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from './Firebase'
import "./Contact.css"

const Contact = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const messageRef = useRef()
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        console.log("handling submit");
        if (emailRef.current.value !== "") {
            setLoading(true)
            db.collection('CustomerFeedbacks').doc(emailRef.current.value).set({
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value
            }).then(() => {
                console.log("sent!");
                nameRef.current.value = ""
                emailRef.current.value = ""
                phoneRef.current.value = ""
                messageRef.current.value = ""
                setLoading(false)
            }).catch(err => console.log("Error: ", err))
        }
    }

    return (
        <div className="CU">
            <div className="Form">
            <div className="ContactUs">
                <h1>Get in Touch!</h1>
                <div className="contactip">
                <label>Name : </label>
                <input className="frmName" type="text" placeholder="e.g. Rajan Dudeja" required ref={nameRef}></input>
                </div>
                <div className="contactip">
                <label>Email : </label>
                <input className="frmMail" type="email" placeholder="e.g. rajan@email.com" required ref={emailRef}></input>
                </div>
                <div className="contactip">
                <label>Phone : </label>
                <input className="frmNun" type="phone" placeholder="9999988888" required ref={phoneRef}></input>
                </div>
                <div className="contactip">
                <label>Message : </label>
                <textarea placeholder="Your message" ref={messageRef}></textarea>
                </div>
                    <button className="Contactbtn" onClick={handleSubmit} disable={loading}>{loading ? "Sending..." : "Send"}</button>
            </div>
            </div>
            <div className="Contactinfo">
                <h3>Add More Stuff</h3>
            </div>
        </div>    
            
       
        

        
    )
}

export default Contact
