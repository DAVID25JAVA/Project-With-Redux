import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter((itemID) => itemID.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
