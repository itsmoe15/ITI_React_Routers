// src/RTX/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/Products';
import cartReducer from './Slices/CartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
