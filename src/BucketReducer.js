//import { useAuth } from './AuthContext'
//import { db } from './Firebase'

const BucketReducer = (state, action) => {

    const { bucketItems, totalQty, totalPrice } = state
    //const { currentUser } = useAuth()

    let bucketItem;
    let updatedTotQty
    let updatedTotPrice
    let index
    let newArray
    
    bucketItem = action.payload.product
    index = bucketItems.findIndex(item => item.productId === bucketItem.productId)

    // eslint-disable-next-line default-case
    switch (action.type) {
    
        case 'ADD_ITEM':

            let isPresent = bucketItems.find(item => item.productId === bucketItem.productId)
            if (isPresent) {
                if (bucketItems[index].qty === 6) {
                    return state
                } else {
                    console.log("Already added!");
                    newArray = [...bucketItems]
                    newArray[index] = { ...newArray[index], qty: newArray[index].qty + 1 }
                    updatedTotPrice = totalPrice + bucketItem.price
                
                    return {
                        ...state,
                        bucketItems: [...newArray],
                        totalPrice: updatedTotPrice
                    }
                }
            } else {
                console.log("Item added!");
                bucketItem['qty'] = 1
                updatedTotQty = totalQty + 1
                updatedTotPrice = totalPrice + bucketItem.price

                return {
                    bucketItems: [...bucketItems, bucketItem],
                    totalQty: updatedTotQty,
                    totalPrice: updatedTotPrice
                }
            }
        
        case 'CHANGE_QTY':

            console.log("Quantity Changed!");
            newArray = [...bucketItems]
            newArray[index] = {
                ...newArray[index],
                qty: action.payload.changedQty
            }
            updatedTotPrice = totalPrice + (bucketItem.price * (action.payload.changedQty - bucketItem.qty))

            return {
                ...state,
                bucketItems: [...newArray],
                totalPrice: updatedTotPrice
            }
        
        case 'REMOVE_ITEM':

            updatedTotQty = totalQty - 1
            updatedTotPrice = totalPrice - (bucketItem.price * bucketItem.qty)
            newArray = bucketItems.filter(item => item.productId !== bucketItem.productId)

            return {
                bucketItems: [...newArray],
                totalPrice: updatedTotPrice,
                totalQty: updatedTotQty
            }     
    }
}

export { BucketReducer }
