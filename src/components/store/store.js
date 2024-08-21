import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import bagItems from "./bag";

const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        bag: bagItems
    }
})

export default appStore