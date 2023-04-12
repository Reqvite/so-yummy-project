import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logOut,
  refreshUser,
  register,
  updateUser,
  subscribe,
  loginGoogle,
} from "./operations";
import { toast } from "react-toastify";

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  isLoadingGoogle: false,
  status: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.status = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = false;
      })
      .addCase(login.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoading = false;
        state.status = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(loginGoogle.pending, (state) => {
        state.isLoadingGoogle = true;
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoadingGoogle = false;
        state.status = false;
      })
      .addCase(loginGoogle.rejected, (state, action) => {
        toast.error(action.payload);
        state.isLoadingGoogle = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, avatarURL: null };
        state.isLoggedIn = false;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        toast.success("Updated successfully");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.error(action.payload);
      })
      .addCase(subscribe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Thank you for subscribing to our news.");
      })
      .addCase(subscribe.rejected, (state, action) => {
        state.isRefreshing = false;
        toast.warn(action.payload);
      })
      .addDefaultCase((state, action) => {
        if (action.error) {
          if (action.payload === "Not authorized") {
            state.isLoggedIn = false;
            state.token = null;
          }
          state.error = action.payload;
          toast.error(action.payload);
        }
      }),
});

export const authReducer = authSlice.reducer;
