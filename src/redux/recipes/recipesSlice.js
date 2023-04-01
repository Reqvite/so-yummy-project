import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipesCategories: [],
  recipes: [],
  recipe: [],
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "shopping",
  initialState,
  extraReducers: (builder) => builder,
  //   .addCase(getRecipe.pending, (state, action) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(getRecipe.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.list = action.payload;
  //   })
  //   .addCase(getRecipe.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   }),
});

export const recipeReducer = recipeSlice.reducer;
