import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    additems: (state, action) => {
      state.items = action.payload;
    },
    cartItemRemove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { additems, cartItemRemove } = cartSlice.actions;
export default cartSlice.reducer;
