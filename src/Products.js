import React, {useState, useEffect} from 'react'
import Product from './Product'
import {db} from './Firebase'
import './Products.css'

function Products({ setBucketItems }) {
    
    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(false)

    const ref = db.collection("Products")
    
    function getProductsList() {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push({ ...doc.data(), productId: doc.id })
            })
            setProductsList(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        getProductsList()
    }, [])

    if(loading){
        return <h1>
            Loading...
        </h1>
    }
    
    return (
        <main className="products-section">
        { productsList.map((product) => {
            return <Product key={product.productId} product={product} setBucketItems={setBucketItems}  />
        })
        }
        </main>
    )
}

export default Products
