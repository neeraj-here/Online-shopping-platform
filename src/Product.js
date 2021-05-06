import React from 'react'
import { BsBucketFill } from 'react-icons/bs'
import './Product.css'
import { useBucketContext } from './BucketContext'
import './Products.css'

function Product({ product }) {
    
    const { imgUrl, brand, title, price, sizes} = product
    const { dispatch } = useBucketContext()

    return (
        <article className="single-product">
            <div className="tile">
                <img className="photo" src={imgUrl} alt={brand} />  
                <div className="Info">          
                    <h6 className="Producth6">{brand}</h6>
                    <p className="Productp">{title} </p>
                    <h3 className="Producth3">Rs. {price} </h3>
                    <div className="sizes"> {sizes.map((size, index) => <span key={index} className="size">{size}</span>)} </div>
                </div>         
                <button
                    className="add-item-btn"
                    data-hover="Click to Add"
                    onClick={() => dispatch({ type: 'ADD_ITEM', payload: { product } })}
                >
                    <div><BsBucketFill />Add item</div>
                </button>
            </div>
        </article>
    )
}

export default Product
