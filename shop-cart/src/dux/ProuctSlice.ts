import { createSlice } from "@reduxjs/toolkit";

const initialState={
    product: []
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        addProducts:(state,{payload}) =>{
             state.product=payload
        }
    }

})

export const allItems=(state:any)=>state.products.product
export const {addProducts} =productSlice.actions
export default productSlice.reducer