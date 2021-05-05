import React from 'react'
import { BsBucketFill } from 'react-icons/bs'
import { useBucketContext } from './BucketContext'
import './Bucket.css'
import { Link } from 'react-router-dom'
import BucketItem from './BucketItem'

function Bucket() {

    const { bucketItems, totalPrice, totalQty } = useBucketContext()

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
                <u><div className="ordersummary">Order Summary </div></u>
                <div className="Bucketprice">Total Price:  Rs.{totalPrice} </div>
                <div className="Totalqty"> Total Items: x{totalQty} </div>
            </div>
            <div className="Whole">
                <h2 className="checkh2">Please enter the following details to Order.</h2>
                <div className="checkoutfinal">
                    <form action="#">
                    <label class="checklabel" for="customerName">Name</label>
        <input class="checkinput" type="text" id="customerName" name="customerName" required=""/>
        <label class="checklabel"for="customerPhone">Phone</label>
        <input class="checkinput" type="tel" id="customerphone" name="customerPhone" required="" pattern="[0-9] {10}"/>
        <label class="checklabel" for="orderNumber">Pincode</label>
        <input class="checkinput" type="tel" id="orderNumber" name="orderNumber" required=""/>
        <label class="checklabel" for="customerNote">Address</label>
        <textarea class="checktextarea" rows="4" id="customerNote" name="customerNote" required=""></textarea>
        <label class="checklabel" for="customerEmail">Landmark</label>
        <input class="checkinput" type="text" id="customerEmail" name="customerEmail" required=""/>
                    </form>
                    <h3 class="checkh3">*Enter all the above details. Mail/Call for replacements/returns.</h3>
    <button class="checkbutton" id="customerOrder">CHECKOUT</button>
                </div>
            </div>
        </section>
    )
}

export default Bucket
