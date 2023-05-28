import { createSlice } from "@reduxjs/toolkit";
// auth
const initialAuthState = { username: "", isAuth: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
      state.username = "hoseinx";
    },
    logout: (state) => {
      state.isAuth = false;
      state.username = "";
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
