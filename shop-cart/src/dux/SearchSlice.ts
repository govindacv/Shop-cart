import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedProduct: [],
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToSearchedProduct: (state, { payload }) => {
      state.searchedProduct=payload;
    },
  },
});

export const foundResults = (state:any) => state.search.searchedProduct;

export const { addToSearchedProduct } = SearchSlice.actions;

export default SearchSlice.reducer;
