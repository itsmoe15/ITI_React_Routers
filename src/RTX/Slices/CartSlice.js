import { createSlice } from '@reduxjs/toolkit';

const savedCart = JSON.parse(localStorage.getItem('cart')) || {
  items: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: savedCart,
  reducers: {
    addItemToCart(state, action) {
      const existProduct = state.items.find(item => item.id === action.payload.id);
      if (existProduct) {
        existProduct.quantity += 1; 
      } else {
        const newProduct = { ...action.payload, quantity: 1 }; 
        state.items.push(newProduct);
      }
      state.totalQuantity += 1; 

      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItemFromCart(state, action) {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
        state.totalQuantity -= 1; 
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeProductCompletely(state, action) {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        state.totalQuantity -= product.quantity; 
        state.items = state.items.filter(item => item.id !== action.payload);
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;

      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});


export const { addItemToCart, removeItemFromCart, clearCart, removeProductCompletely } = cartSlice.actions;

export default cartSlice.reducer;
