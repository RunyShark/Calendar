import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticate";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onRegister: (state, { payload }) => {
      state.status = "checking";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onRegister } = authSlice.actions;
