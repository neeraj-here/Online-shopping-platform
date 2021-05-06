import React, { useRef, useState } from 'react'
import { BsBucketFill } from 'react-icons/bs'
import { useBucketContext } from './BucketContext'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import BucketItem from './BucketItem'
import './Bucket.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { db } from './Firebase'

function Bucket() {
    
    const nameRef = useRef()
    const landmarkRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const pincodeRef = useRef()
    const { bucketItems, totalPrice } = useBucketContext()
    const totalItems = bucketItems.length
    const totalPieces = bucketItems.reduce((pieces, item) => Number(pieces) + Number(item.qty), 0)
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        console.log("handling submit");
        if (phoneRef.current.value !== "") {
            setLoading(true)
            db.collection('CustomerFeedbacks').doc(phoneRef.current.value+"_"+nameRef+"_"+totalPrice).set({
                name: nameRef.current.value,
                pincode: pincodeRef.current.value,
                phone: phoneRef.current.value,
                address: addressRef.current.value,
                OrderedItems: bucketItems
            }).then(() => {
                console.log("sent!");
                nameRef.current.value = ""
                pincodeRef.current.value = ""
                phoneRef.current.value = ""
                addressRef.current.value = ""
                setLoading(false)
            }).catch(err => console.log("Error: ", err))
        }
    }

    async function handleToken(token) {
        const response = await axios.post('https://xkv22.sse.codesandbox.io/checkout', {
            token,
            totalPrice 
        })
        const { status } = response.data;
        console.log("Response:", response.data);
        bucketItems.length = 0
        if (status === "success") {
            toast("Payment succesfull!", { type: 'success'})
        } else {
            console.log("successfull 0");
        }
    }   

    if (bucketItems.length === 0) {
        return <section className="bucket">
            <hr/>
            <h2 className="Bucket-h2">Bucket</h2>
            <div className="empty-cart">
                <div className="empty-cart-text">
                    <h5 className="empty-h5">It's empty! Why?</h5>
                    <p className="empty-p">Let's add some items.</p>
                    <br/>
                    <Link to='/products' className="bucket-btn"> <BsBucketFill /> Add some items </Link><span><span><span><span></span></span></span></span> 
                </div>
            </div>
        </section>
    }

    return (   
        <section className="bucket">
            <hr />
            <h2 className="Bucket-h2">Bucket</h2>
            {bucketItems.map((bucketItem) => {
                return <BucketItem key={bucketItem.productId} bucketItem = {bucketItem} />
            })}
            <div className="Bucketsummary">
                <div className="summary-box">
                    <div className="ordersummary">
                        <u>ORDER SUMMARY</u>
                        ({totalItems} Item{(totalItems > 1) && 's'})
                    </div>
                    <div className="Bucketprice">Total Amount:  Rs.{totalPrice} </div>
                    <div className="Totalqty"> Total Pieces:  x{totalPieces} </div>
                </div>
            </div>
            <div className="Whole">
                <h2 className="checkh2">Please enter the following details to Order.</h2>
                <div className="checkoutfinal">
                    <form action="#">
                        <label className="checklabel" htmlFor="customerName">Name</label>
                        <input className="checkinput" ref={nameRef} type="text" id="customerName" name="customerName" required=""/>
                        <label className="checklabel" htmlFor="customerPhone">Phone</label>
                        <input className="checkinput" ref={phoneRef} type="tel" id="customerphone" name="customerPhone" required="" pattern="[0-9] {10}"/>
                        <label className="checklabel" htmlFor="PinCode">Pincode</label>
                        <input className="checkinput" type="tel" ref={pincodeRef} id="pincode" name="pincode" required=""/>
                        <label className="checklabel" htmlFor="address">Address</label>
                        <textarea className="checktextarea" rows="4" ref={addressRef} id="addresRef" name="addresRef" required=""></textarea>
                        <label className="checklabel" htmlFor="landmark">Landmark</label>
                        <input className="checkinput" type="text" id="landmark" name="landmark" ref={landmarkRef} required="" />
                    </form>
                    <h3 className="checkh3">*Enter all the above details. Mail/Call for replacements/returns.</h3>
                    <button className="checkbutton" id="customerOrder" onClick={handleSubmit}>{loading ? "Submitting..." : "Submit"}</button>
                    <StripeCheckout
                        stripeKey="pk_test_51Inxa4SJyqfhpaD0jKSjLrRZuP3cCQ6bqEQT4tG34ybcunC4jcxNnGBQLosm5yQU6Ui0Cmb6YC0NXyaTB7zflZ8500YWabZ77p"
                        token={handleToken}
                        amount={totalPrice}
                    /> 
                </div>
            </div>
        </section>
    )
}

export default Bucket
