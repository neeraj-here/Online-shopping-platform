import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { db } from './Firebase'

const BucketContext = createContext()

function useBucketContext() {
    return useContext(BucketContext)
}

const BucketContextProvider = ({ children }) => {

    const { currentUser } = useAuth()
    const [bucketItems, setBucketItems] = useState([])
    const [loading, setLoading] = useState(false)
    
    const addBucketItem = (productId) => {
        db.collection('SignedUpUserData').doc(currentUser.uid).collection('bucketItems').add({
            product: db.doc('Products/' + productId),
            qty: 1,
        })
            .then(() => console.log("Item added: ", productId))
            .catch((err) => console.log("Error while adding item: ", err.message))
    }

    const ref = db.collection('SignedUpUserData').doc(currentUser.uid).collection('bucketItems')    
    
    function getBucketItems() {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const tempBucketItems = []
            querySnapshot.forEach((bucketItem) => {
                    bucketItem.data().product.onSnapshot((doc) => {
                        tempBucketItems.push({ ...doc.data(), qty: bucketItem.data().qty, bucketItemId: bucketItem.id })                    
                })
         })
            setBucketItems(tempBucketItems)
            console.log(bucketItems.length);
            setLoading(false)
        })
    }
    console.log("Bucket: ", bucketItems);

    useEffect(() => {
        getBucketItems()
    }, [])

    const values = {
        addBucketItem,
        bucketItems,
        loading        
    }

    return (
        <BucketContext.Provider value={values}>
            {children}
        </BucketContext.Provider>
    )
}

 export {BucketContext, BucketContextProvider, useBucketContext}