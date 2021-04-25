import React from 'react'
import { BsBucketFill } from 'react-icons/bs'
import './Product.css'
import { useBucketContext } from './BucketContext'

function Product({ product }) {
    
    const { imgUrl, brand, title, price} = product
    const { dispatch } = useBucketContext()

    return (
        <article className="single-product">
            <img src={imgUrl} alt={brand} className="photo" />
            <div className="product-info">
                <h6>{brand}</h6>
                <p>{title} </p>
                <h4>{price} </h4>
            </div>
            <button className="add-item-btn" onClick={() => dispatch({ type: 'ADD_ITEM', payload: { product } } )} >
                <BsBucketFill /> Add Item
            </button>
        </article>
    )
}

export default Product
