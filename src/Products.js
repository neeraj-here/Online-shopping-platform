import React, {useState} from 'react'
import { products } from './data'
import Product from './Product'
function Products({setBucketItems}) {
    const [productsList, setProductsList] = useState(products)

    return (
        <main className="products-section">
        { productsList.map((product) => {
            return <Product product={product} setBucketItems={setBucketItems}  />
        })
        }
        </main>
    )
}

export default Products
