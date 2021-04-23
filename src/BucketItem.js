import React from 'react'
import { useBucketContext } from './BucketContext'

const BucketItem = ({bucketItem}) => {

    const { brand, price, title, imgUrl, qty } = bucketItem
    const { dispatch } = useBucketContext()

    function handleChange(e) {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                product: bucketItem,
                changedQty: e.target.value
            }
        })
    }
    
    return (
        <article className="bucket-item">
            <img src={imgUrl} alt={brand} className="item-img" />
            <div className="product-info">
                <h6>Brand: {brand}</h6>
                <p>Title: {title} </p>
                <h4>Price: {price} </h4>
                <h3>Qty: {qty} </h3>
                {/*<label htmlFor='qty'> Qty </label>
                 <select
                    name="qty"
                    id="qty"
                    value={qty}
                    onChange={handleChange}
                >
                    <option value='1'>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                */ }
            </div>
        </article>
    )
}

export default BucketItem
