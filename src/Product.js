import React from 'react'
import { BsBucketFill } from 'react-icons/bs'
import './Product.css'
import { useBucketContext } from './BucketContext'
import './Products.css'

function Product({ product }) {
    
    const { imgUrl, brand, title, price} = product
    const { dispatch } = useBucketContext()

    return (
        <article className="single-product">
            <div className="tile">
            <img className="photo" src={imgUrl} alt={brand} />  
            <div className="Info">          
                <h6 className="Producth6">{brand}</h6>
                <p className="Productp">{title} </p>
                <h3 className="Producth3">{price} </h3>  
            </div>         
            <button className="add-item-btn" data-hover="Click to Add" onClick={() => dispatch({ type: 'ADD_ITEM', payload: { product } } )}><div><BsBucketFill />Add to Cart</div> </button>         
            </div>
        </article>
    )
}

export default Product
