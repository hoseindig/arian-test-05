import { configureStore } from "@reduxjs/toolkit";

import couterReduce from "./counter";
import authReduce from "./auth";
import productReduce from "./product";

const store = configureStore({
  reducer: {
    counter: couterReduce,
    auth: authReduce,
    product: productReduce,
  },
});

export default store;
