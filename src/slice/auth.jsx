import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers";

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
  },
  reducers: {
    signStart: (state) => {
      state.isLoading = true;
    },
    signSuccess: (state, action) => {
      (state.loggedIn = true),
        (state.isLoading = false),
        (state.user = action.payload),
        setItem("token", action.payload.token);
    },
    signFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logOutUser: (state) => {
      (state.user = null), (state.loggedIn = false);
    },
  },
});
export const { signFailure, signStart, signSuccess, logOutUser } = authActions;
