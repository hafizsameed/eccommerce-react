import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))



export default store
