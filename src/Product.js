import React from 'react'
import { BsBucketFill } from 'react-icons/bs'

function Product({ product, setBucketItems }) {
    const { id, imgUrl, brand, price, title } = product
    function handleClick() {
        setBucketItems((bucketItems) => [...bucketItems, { id, imgUrl, brand, price, title }])
    }
        
    return (
        <article key={id} className="single-product">
            <img src={imgUrl} alt={brand} className="photo" />
            <div className="product-info">
                <h6>{brand}</h6>
                <p>{title} </p>
                <h4>{price} </h4>
            </div>
            <button className="add-item-btn" onClick={handleClick}> <BsBucketFill /> Add Item </button>
        </article>
    )
}

export default Product
