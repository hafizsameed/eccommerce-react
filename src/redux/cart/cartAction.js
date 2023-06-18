import { REMOVE_ITEM, ADD_DATA_SUCCESS } from "./cartType";


// export const addDatarequest = () => {
//     return {
//         type: ADD_DATA_REQUEST
//     }
// }

export const addDataSucces = (item) => {
    return {
        type: ADD_DATA_SUCCESS,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}
