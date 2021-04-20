/*
import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { db } from './Firebase'

const BucketReducer = (state, action) => {

    const { currentUser } = useAuth()
    const { productReferenceId, qty } = state
    //const [error, setError] = useState('')
    console.log("i'm into bucket reducer!");
    switch (action.type) { 
        
        case 'ADD_ITEM':
            console.log("I'm adding item!");
            let BucketItem = {
                productReferenceId: action.payload.id,
                qty: qty + 1    
            }
            db.collection('SignedUpUserData').doc(currentUser.uid).collection('bucketItems').add(BucketItem).then(() => {
                console.log("i'm clearing data here!");
                console.log("Hello?");
                return {
                    productReferenceId: '',
                    qty: 0
                }
            }).catch(err => console.log(err.message))

    }
}

export { BucketReducer }
*/