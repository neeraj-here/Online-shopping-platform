import React, {useState, useEffect} from 'react'
import Product from './Product'
import {db} from './Firebase'
import Filters from './Filters'
import './Products.css'
import Loading from './Loading'

function Products({ setBucketItems }) {
    
    const [productsList, setProductsList] = useState([])
    const [allProducts, setAllProducts] = useState([])
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
            setAllProducts(items)
            setLoading(false)
        })
    }
    useEffect(() => {
        getProductsList()
    }, [])

    if(loading){
        return <h1 className="Loading">
            <Loading />
        </h1> 
    }
    
    return (<>
        <Filters allProducts={allProducts} productsList={productsList} setProductsList={setProductsList} />
        <div className="products-found">{productsList.length} product{(productsList.length > 2) && 's'} available.
            {(productsList.length === 0) && <p>Try modifying the filters.</p>}
        </div>
        <main className="products-section">
        {productsList.map( (product) => {
            return <Product key={product.productId} product={product} />
        } )
        }
        </main>
        </>
    )
}

export default Products