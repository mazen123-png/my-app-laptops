import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    initialState:[],
    name:"favouriteSlice",
    reducers:{
        addToFavourite:(state,action)=>{
            const FoundedProduct = state.find((product)=>product.id === action.payload.id)
            if(FoundedProduct){
                FoundedProduct.quantity += 1
            }else{
                const ProductClone = {...action.payload,quantity:1}
                state.push(ProductClone)
            }
            
        },
        deleteFromFavourite:(state,action)=>{
            
            return state.filter((product) => product.id !== action.payload.id)
        }
    }
})

export const {addToFavourite,deleteFromFavourite} = favouriteSlice.actions

export default favouriteSlice.reducer