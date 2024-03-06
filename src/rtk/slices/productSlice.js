import { createSlice } from "@reduxjs/toolkit";
import Data from "../../Data/Data";

const productsSlice = createSlice({
    initialState:{
        list: Data,
      },
    name:"productsSlice",
    reducers:{},
})
export const selectAllProducts = (state) => state.products.list;
export const {} = productsSlice.actions;

export default productsSlice.reducer;