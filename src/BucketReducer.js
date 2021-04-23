//import { useAuth } from './AuthContext'
//import { db } from './Firebase'

const BucketReducer = (state, action) => {

    const { bucketItems, totalQty, totalPrice } = state
    //const { currentUser } = useAuth()

    let bucketItem;
    let updatedTotQty
    let updatedTotPrice
    let itemQty
    let index
    // eslint-disable-next-line default-case
    switch (action.type) {
        
        case 'ADD_ITEM':

            bucketItem = action.payload.product
            let isPresent = bucketItems.find(item => item.productId === bucketItem.productId)
            //console.log("Is present? ", isPresent);
            if (isPresent) {
                 console.log("Already added!");
                itemQty = bucketItem.qty 
                bucketItem.qty = itemQty + 1
                index = bucketItems.findIndex(item => item.productId === bucketItem.productId)
                bucketItems[index] = bucketItem
                updatedTotPrice = totalPrice + bucketItem.price
                
                return {
                    ...state,
                    bucketItems: [...bucketItems],
                    totalPrice: updatedTotPrice
                }
            }
            //console.log("not present");
            bucketItem['qty'] = 1
            updatedTotQty = totalQty + 1
            updatedTotPrice = totalPrice + bucketItem.price

            return {
                bucketItems: [...bucketItems, bucketItem],
                totalQty: updatedTotQty,
                totalPrice: updatedTotPrice
            }
            break;
        
        case 'CHANGE_QUANTITY':
            //console.log("Quantity changed to: ", action.payload.changedQty);
            bucketItem = action.payload.product
            let currentQty = bucketItem.qty
            //console.log("old qty of the product: ", currentQty);
            bucketItem.qty = action.payload.changedQty
            //console.log("updated total quantity: ", updatedTotQty);
            updatedTotPrice = Number(totalPrice) + (bucketItem.price * (bucketItem.qty - currentQty))
            //console.log("bucket items before changing the quant: ", bucketItems);
            bucketItems.map((item) => {
                if (item.productId === bucketItem.productId) {
                    return { ...bucketItem }
                } else
                    return { ...item }
            })
            //console.log("bucket items after changing the quant: ", bucketItems);
            //console.log("END");
            return {
                ...state,
                bucketItems: [...bucketItems],
                totalPrice: updatedTotPrice
            }
            break;
    }
}

export { BucketReducer }
