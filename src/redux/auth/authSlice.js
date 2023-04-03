import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, refreshUser, register, updateUser } from "./operations";
import { toast } from "react-toastify";

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
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
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
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
      .addDefaultCase((state, action) => {
        if (action.error) {
          state.error = action.payload;
          toast.error(action.payload);
        }
      }),
});

export const authReducer = authSlice.reducer;
