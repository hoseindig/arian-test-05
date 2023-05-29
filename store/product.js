import {
  createSlice
} from "@reduxjs/toolkit";
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
      let productEditList = state.productEditList
      console.log("setEditProductData", action);
      const item = action.payload;
      const findItemIndex = productEditList.findIndex((x) => x.id == item.id);
      productEditList.splice(findItemIndex, 1)
      productEditList.push(action.payload)
      state.productEditList = productEditList;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;