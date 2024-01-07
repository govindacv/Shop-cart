import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    product: [],

}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, { payload }) => {

            const productsWithStatus = payload.map((product:any) => ({ ...product, isAddedToCart: false ,isAddedToWishList:false}));
            state.product = productsWithStatus
        }
        ,
        updateStatusOfCart:(state,{payload})=>{
            state.product.map((objs:any)=>{
             if(objs.id===payload.id)
             {
               objs.isAddedToCart=true
             }
            })
         },
         updateStatusOfCartToFalse:(state,{payload})=>{
            state.product.map((objs:any)=>{
             if(objs.id===payload.id)
             {
               objs.isAddedToCart=false
             }
            })
         },
         updateStatusOfWishList:(state:any,{payload})=>{
            state.product.map((objs:any)=>{
                if(objs.id===payload.id)
                {
                    objs.isAddedToWishList=true
                }
            })
         }
    }


})

export const allItems = (state: any) => state.products.product
export const { addProducts,updateStatusOfCart,updateStatusOfCartToFalse,updateStatusOfWishList } = productSlice.actions
export default productSlice.reducer