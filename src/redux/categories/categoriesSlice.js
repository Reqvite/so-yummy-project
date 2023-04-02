import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, handlePending);

    builder.addCase(getCategories.rejected, handleRejected);

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
