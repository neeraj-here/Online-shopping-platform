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
            <div className="empty-cart">
                <h5 className="empty-h5">It's empty! Why?</h5>
                <br/>
                <h6 className="empty-h6">Looking good makes you feel good. Lets add some items.</h6>
                <br/>
               
                <button className="bucket-btn"><Link to='/products'> <BsBucketFill /> Add some items </Link><span><span><span><span></span></span></span></span></button>
                
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
