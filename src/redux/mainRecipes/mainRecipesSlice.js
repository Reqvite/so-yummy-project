import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "./operations";

const handlePending = (state) => {
  state.recipeCategories = [];
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  erroe: null,
};

const recipesSlice = createSlice({
  name: "mainRecipes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, handlePending)
      .addCase(getRecipes.rejected, handleRejected)
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.erroe = null;
        state.items = action.payload;
      });
  },
});

export const mainRecipesReducer = recipesSlice.reducer;
