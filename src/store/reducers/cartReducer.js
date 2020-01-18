import {
    ADD_TO_CART,

} from '../actions/types'

const initialState = {
    items: [],
    addedItems: [],
    total: 0

}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:

            const { product, quantity} = action.payload

            const addedItem = product
            //check if the action id exists in the addedItems
            const existed_item = state.addedItems.find(item => product._id === item._id)

            if (existed_item) {
                addedItem.quantity += quantity
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }
            else {
                addedItem.quantity = quantity;
                //calculating the total
                const newTotal = state.total + (addedItem.price * addedItem.quantity)

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }

            }

        default:
    }
    return state
}