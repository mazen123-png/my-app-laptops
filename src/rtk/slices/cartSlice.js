import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            const FoundedProduct = state.find((product)=>product.id === action.payload.id)
            if(FoundedProduct){
                FoundedProduct.quantity += 1
            }else{
                const ProductClone = {...action.payload,quantity:1}
                state.push(ProductClone)
            }
            
        },
        deleteFromCart:(state,action)=>{
            return state.filter((product) => product.id !== action.payload.id)
        },
        clearCart:(state,action)=>{
           return []
        }
    }
})

export const {addToCart,deleteFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer