// rootReducer.ts

import { combineReducers } from "redux";
import cartReducer from "./CartSlice";
import productReducer from "./ProuctSlice";
import wishListReducer from "./WishListSlice"
import SearchReducer from './SearchSlice'

const rootReducer = combineReducers({
  cartItem: cartReducer,
  products: productReducer,
  wishLists:wishListReducer,
  search:SearchReducer

});

export default rootReducer;
