import { configureStore } from "@reduxjs/toolkit";

import couterReduce from "./counter";
import authReduce from "./auth";

const store = configureStore({
  reducer: {
    counter: couterReduce,
    auth: authReduce,
  },
});

export default store;
