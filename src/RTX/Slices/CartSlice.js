import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
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
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    }
  }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
