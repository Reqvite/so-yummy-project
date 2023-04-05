import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getCategoryRecipes,
  getSearchResultByTitle,
} from "./operations";

const handlePending = (state) => {
  state.recipeCategories = [];
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
    isLoading: false,
    recipeCategoriesIsLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCategoryRecipes.pending, (state, action) => {
        state.recipeCategoriesIsLoading = true;
      })
      .addCase(getCategoryRecipes.rejected, (state, action) => {
        state.recipeCategoriesIsLoading = false;
      })
      .addCase(getCategoryRecipes.fulfilled, (state, action) => {
        state.recipeCategoriesIsLoading = false;
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
      .addDefaultCase((state, action) => {
        if (action.type === "auth/logout/fulfilled") {
          state.items = [];
          state.recipeCategories = [];
          state.searchByTitle = [];
        }
      }),
});

export const categoriesReducer = categoriesSlice.reducer;
