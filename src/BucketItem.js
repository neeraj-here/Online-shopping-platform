import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useBucketContext } from './BucketContext'
import './BucketItem.css'

const BucketItem = ({bucketItem}) => {

    const { productId, brand, price, title, imgUrl, qty } = bucketItem
    const { dispatch } = useBucketContext()

    function handleChange(e) {
        dispatch({
            type: 'CHANGE_QTY',
            payload: {
                product: bucketItem,
                changedQty: e.target.value
            }
        })
    }
    
    return (
        <article className="bucket-item">
            <div className="bucket-info">
                <div className="bucket-img">
                    <img src={imgUrl} alt={brand} className="bucket-photo" />
                </div>
                <div className="bucket-info1">
                    <p className="Bucket-h6">{brand}</p>
                    <p className="Bucket-p">{title}</p>
                </div>
                <div className="bucket-info2">
                <p className="Bucket-h4">Rs.{price} </p>
                </div> 
                <div className="label-info">  
                    <label className="qty" htmlFor='qty'> Qty: </label>
                    <select className="bselect"
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
                </div>
                <div className="del-info">
                    <button title="Remove item" className="Bucketdel" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: {product: bucketItem, id: productId} })}>
                    <RiDeleteBin5Line />
                    </button>
                </div>  
            </div>
        </article>
    )
}

export default BucketItem
