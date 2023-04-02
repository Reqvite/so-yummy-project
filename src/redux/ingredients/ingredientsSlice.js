import { createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "./operations";

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getIngredients.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredients = action.payload;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const ingredientsReducer = ingredientsSlice.reducer;
