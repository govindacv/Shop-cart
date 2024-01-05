import { createSlice } from "@reduxjs/toolkit";
 


const initialState:any = {
  cart: [],
  count: 0,

};
const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {

      const existingItem = state.cart.find((item:any) => item.id === payload.id);


      if (!existingItem) {
        state.cart = [...state.cart, { ...payload,quantity:1,isAddedToCart:false}];
        state.count = state.count + 1;
      }
    },
    updateCount:(state,{payload})=>{
      state.cart.map((objs:any)=>{
        if(objs.id===payload.id)
        {
            objs.quantity=payload.quantity+1
            
        }
      })
    },
    decreaseCount:(state,{payload})=>{
      state.cart.map((objs:any)=>{
        if(objs.id===payload.id)
        {
            objs.quantity=payload.quantity-1
            
        }
      })
    },
    removeFromCart:(state,{payload})=>{
      state.cart=state.cart.filter((objs:any)=>{
        return (objs.id!==payload.id)
      })
      state.count-=1

    },
    updateStatusOfCart:(state,{payload})=>{
       state.cart.map((objs:any)=>{
        if(objs.id===payload.id)
        {
          objs.isAddedToCart=true
        }
       })
    }

  },
});


export const cartItems = (state: any) => state.cartItem.cart;
export const count = (state: any) => state.cartItem.count;
export const totalPrice=(state:any)=>{
  return(
    state.cart.map((obj:any)=>{
        console.log(obj);
        
    })
  )
}
export const { addToCart ,updateCount,decreaseCount,removeFromCart,updateStatusOfCart} = cartSlice.actions;

export default cartSlice.reducer;
