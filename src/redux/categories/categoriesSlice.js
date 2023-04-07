import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getCategoryRecipes,
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "./operations";

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
    recipeCategories: [],
    searchByTitle: [],
    searchByIngredient: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCategoryRecipes.pending, handlePending)
      .addCase(getCategoryRecipes.rejected, handleRejected)
      .addCase(getCategoryRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipeCategories = action.payload.recipes;
      })
      .addCase(getSearchResultByTitle.pending, handlePending)
      .addCase(getSearchResultByTitle.rejected, handleRejected)
      .addCase(getSearchResultByTitle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchByTitle = action.payload;
      })
      .addCase(getSearchResultByIngredient.pending, handlePending)
      .addCase(getSearchResultByIngredient.rejected, handleRejected)
      .addCase(getSearchResultByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchByIngredient = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
