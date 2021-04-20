import React, {useState} from 'react'
import { BsBucketFill } from 'react-icons/bs'
import { useBucketContext } from './BucketContext'
import './Bucket.css'
import { useAuth } from './AuthContext'
function Bucket() {

    const { addBucketItems, bucketItems, loading } = useBucketContext()
    const [bucketItemsList, setBucketItemsList] = useState(bucketItems)
    const { currentUser } = useAuth()
    
    console.log("Uid: ", currentUser.uid);
    console.log("Bucket Item list: ", bucketItemsList);
    
    if(loading){
        return <h1>
            Loading...
        </h1>
    }

    // if (bucketItems.length === 0) {
    //     return <section className="bucket">
    //         <hr/>
    //         <div className="empty-cart">
    //             <h5>It's empty? Why?!</h5>
    //             <h6>Looking good makes you feel good. So, let's add a few items.</h6>
    //         </div>
    //         <button> <BsBucketFill /> Add some items </button>
    //     </section>
    // }

    return (   
        <section className="bucket">
            <hr />
            <h2>Bucket</h2>
            {bucketItemsList.map((bucketItem) => {
                const { id, brand, price, title, imgUrl, qty } = bucketItem
                return (
                    <article key={id} className="bucket-item">
                        <img src={imgUrl} alt={brand} className="photo" />
                        <div className="product-info">
                            <h6>Brand: {brand}</h6>
                            <p>Title: {title} </p>
                            <h4>Price: {price} </h4>
                            <h4>Qty: {qty} </h4>
                        </div>
                    </article>
                )
            })}
            
        </section>
    )
}

export default Bucket
