import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import productReducer, { productsFetch } from './features/productSlice';
// import { productApi } from './features/productsApi';


// const store = configureStore({
//   reducer: {
//     products: productReducer,
//     [productApi.reducerPath]: productApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(productApi.middleware)
//   }
// })

// store.dispatch(productsFetch())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
);


