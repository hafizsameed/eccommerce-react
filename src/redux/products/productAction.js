import axios from "axios"
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./productType"




export const fetchDatarequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSucces = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}



export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDatarequest())
        axios.get(" http://localhost:8000/Products")
            .then(response => {
                const users = response.data
                dispatch(fetchDataSucces(users))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(fetchDataFailure(errorMsg))
            })
    }
}


