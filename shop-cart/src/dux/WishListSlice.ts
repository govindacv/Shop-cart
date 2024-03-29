import { createSlice } from "@reduxjs/toolkit";
 

const initialState:any = {
    wishList: [],
    countOfWishList:0
};

const wishListSlice = createSlice({
    name: "wishLists",
    initialState,
    reducers: {
        addTowishList: (state, { payload }) => {


            const existingItem = state.wishList.find((item:any) => item.id === payload.id);

            if (!existingItem) {
                state.wishList = [...state.wishList, payload];
                state.countOfWishList=state.countOfWishList+1
            }
        },
    },
});


export const wishListItems = (state: any) => state.wishLists.wishList;
export const getCountOfWhislList=(state:any)=>state.wishLists.countOfWishList
export const { addTowishList  } = wishListSlice.actions;
export default wishListSlice.reducer;
