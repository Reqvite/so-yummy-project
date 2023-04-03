import { createSlice } from "@reduxjs/toolkit";
import { getCategoryRecipes } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoryRecipesSlice = createSlice({
  name: "categoryRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryRecipes.pending, handlePending);

    builder.addCase(getCategoryRecipes.rejected, handleRejected);

    builder.addCase(getCategoryRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    });
  },
});

export const categoryRecipesReducer = categoryRecipesSlice.reducer;
