import React, { createContext, useContext, useReducer } from 'react'
import { BucketReducer } from './BucketReducer'

const BucketContext = createContext()

function useBucketContext() {
    return useContext(BucketContext)
}

function BucketContextProvider({children}) {

    const initialState = {
        bucketItems: [],
        totalPrice: 0
    }
    const [bucket, dispatch] = useReducer(BucketReducer, initialState)
    const values = {
        dispatch,
        ...bucket,
    }
    
    return (
        <BucketContext.Provider value={values}>
            {children}
        </BucketContext.Provider>
    )
}
export { BucketContext, useBucketContext, BucketContextProvider }
