import { createSlice } from "@reduxjs/toolkit";
// import myData from "../arian-pars-motor-code-challenge.json";
// product
const initialCounterState = {
  productList: [],
  productEditList: [],
  toggle: true,
};
const productSlice = createSlice({
  name: "product",
  initialState: initialCounterState,
  reducers: {
    setProductData: (state, action) => {
      const data = action.payload;
      state.productList = data;
      state.productEditList = data;
    },
    setEditProductData: (state, action) => {
      const item = action.payload;
      const findItem = state.productEditList.find((x) => x.id == item.id);
      state.productList = data;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
