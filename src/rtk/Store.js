import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
export const store = configureStore({
    reducer:{
        products: productReducer,
        cart:cartSlice,
        favourite:favouriteSlice
    }
})
