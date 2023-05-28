import { createSlice } from "@reduxjs/toolkit";
// import myData from "../arian-pars-motor-code-challenge.json";
// product
const initialCounterState = { productList: [], toggle: true };
const productSlice = createSlice({
  name: "product",
  initialState: initialCounterState,
  reducers: {
    getProductData: async (state) => {
      try {
        const response = await fetch("/arian-pars-motor-code-challenge.json");
        const jsonData = await response.json();
        state.productList = jsonData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
