import { toast } from "react-toastify";
toast.configure();

const BucketReducer = (state, action) => {

    const { bucketItems, totalPrice } = state

    let bucketItem;
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
                    toast.success("Already added!")
                    return state
                } else {
                    toast(`Cool! You want ${bucketItems[index].qty+1} of these!`, { type: "success" })
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
                toast.info('Item added!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                bucketItem['qty'] = 1
                updatedTotPrice = totalPrice + bucketItem.price

                return {
                    bucketItems: [...bucketItems, bucketItem],
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
            
            toast.error('Removed!')
            updatedTotPrice = totalPrice - (bucketItem.price * bucketItem.qty)
            newArray = bucketItems.filter(item => item.productId !== bucketItem.productId)

            return {
                bucketItems: [...newArray],
                totalPrice: updatedTotPrice,
            }     
    }
}

export { BucketReducer }
