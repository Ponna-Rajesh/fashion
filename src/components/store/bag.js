import { createSlice } from "@reduxjs/toolkit";

const bag = createSlice({
  name: "bag",
  initialState: {
    items: []
  },
  reducers: {
    bagitems: (state, action) => {
        state.items.push(action.payload);
    },
    clearBag: (state) => {
      state.items = []; 
    },
    reduceItem: (state, action) => {
      //
    }
  }
});

export const { bagitems, clearBag } = bag.actions;
export default bag.reducer;
