import React, { useState } from 'react'
import { BsBucketFill } from 'react-icons/bs'

function Bucket({bucketItems}) {

    if (bucketItems.length === 0) {
        return <section className="bucket">
            <hr/>
            <div className="empty-cart">
                <h5>It's empty? Why?!</h5>
                <h6>Looking good makes you feel good. So, let's add a few items.</h6>
            </div>
            <button> <BsBucketFill /> Add some items </button>
        </section>
    }

    return (   
        <section className="bucket">
            <hr />
            <h2>Bucket</h2>
            {bucketItems.map((singleItem) => {
                const { id, brand, price, title, imgUrl } = singleItem
                return (
                    <article key={id} className="bucket-item">
                        <img src={imgUrl} alt={brand} className="photo" />
                        <div className="product-info">
                            <h6>{brand}</h6>
                            <p>{title} </p>
                            <h4>{price} </h4>
                        </div>
                    </article>
                )
            })}
            
        </section>
    )
}

export default Bucket
