import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./productType"




const initailState = {
    loading: false,
    data: [],
    error: ``
}

const productReducer = (state = initailState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_DATA_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: ``
        }

        case FETCH_DATA_FAILURE: return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
        }



        default: return state

    }
}

export default productReducer