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
                <h5>It's empty? Why?!</h5>
                <h6>Looking good makes you feel good. So, let's add a few items.</h6>
            </div>
            <Link to='/products'> <BsBucketFill /> Add some items </Link>
        </section>
    }
    console.log("bucket items: ", bucketItems);
    return (   
        <section className="bucket">
            <hr />
            <h2>Bucket</h2>
            {bucketItems.map((bucketItem) => {
                return <BucketItem key={bucketItem.productId} bucketItem = {bucketItem} />
            })}
            <div>Total Price: {totalPrice} </div>
            <div> Total Quantity: {totalQty} </div>
        </section>
    )
}

export default Bucket
