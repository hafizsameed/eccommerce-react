import { REMOVE_ITEM, ADD_DATA_SUCCESS } from "./cartType";

const initialState = {
    Item: [],
    itemNum: 0
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA_SUCCESS:
            // const prevItem = state.Item.map(item => item.id === action.payload.id);
            const itemindex = state.Item.findIndex(item => item.id === action.payload.id);
            if (itemindex < 0) {
                console.log(itemindex);
                return {
                    ...state,
                    Item: [...state.Item, action.payload]
                }
            }
        case REMOVE_ITEM:
            const Index = state.Item.filter(item => item.id !== action.payload.id);
            
            return {
                ...state,
                Item: Index
            }

        default: return state

    }
}




export default cartReducer



