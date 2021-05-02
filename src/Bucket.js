import React from 'react'
import { BsBucketFill } from 'react-icons/bs'
import { useBucketContext } from './BucketContext'
import './Bucket.css'
import { useAuth } from './AuthContext'
import { Link } from 'react-router-dom'
import BucketItem from './BucketItem'

function Bucket() {

    const { bucketItems, totalPrice, totalQty } = useBucketContext()
    const { currentUser } = useAuth()

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
                <div className="Bucketprice">Total Price:  Rs.{totalPrice} </div>
                <div className="Totalqty"> Total Items: x{totalQty} </div>
            </div>
        </section>
    )
}

export default Bucket
