import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage (if available)
const savedCart = localStorage.getItem("cart");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const saveCartToLocalStorage = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCartToLocalStorage(state.items);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      saveCartToLocalStorage(state.items);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];

      saveCartToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;