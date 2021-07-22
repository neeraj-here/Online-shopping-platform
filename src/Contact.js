import React, { useRef, useState } from 'react'
import { db } from './Firebase'
import "./Contact.css"

const Contact = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const messageRef = useRef()
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        if (emailRef.current.value !== "") {
            setLoading(true)
            db.collection('CustomerFeedbacks').doc(emailRef.current.value).set({
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value
            }).then(() => {
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
                <input className="frmName" type="text" placeholder="e.g. Rahul" required ref={nameRef}></input>
                </div>
                <div className="contactip">
                <label>Email : </label>
                <input className="frmMail" type="email" placeholder="e.g. csecec.1835296@email.com" required ref={emailRef}></input>
                </div>
                <div className="contactip">
                <label>Phone : </label>
                <input className="frmNun" type="phone" placeholder="7876657310" required ref={phoneRef}></input>
                </div>
                <div className="contactip">
                <label>Message : </label>
                <textarea placeholder="Your message" ref={messageRef}></textarea>
                </div>
                    <button className="Contactbtn" onClick={handleSubmit} disable={loading}> {loading ? "Sending..." : "Send"} </button>
            </div>
            </div>
            <div className="Contactinfo">
                <h2 className="coh2">Contact Details</h2>
                <p>Email: support@indo-fashion.in</p>
                <p>Toll Free No.: 1800-080-6156-1999</p>
                <br/>
                <h3 className="coh3">Want to reach us old style? Here is our postal address</h3>
                <h4 className="coh4">Returns Processing Facility</h4>
                <p>Nayapalli and Clover</p>
                <p>Outer Ring Road, Bhubaneswar</p>
                <p>751001</p>
                <h4 className="coh4">Corporate Office</h4>
                <p>Buildings Alyssa</p>
                <p>Embassy Tech Village, Bhubaneswar</p>
                <p>751007</p>
            </div>
        </div>    
            
       
        

        
    )
}

export default Contact
