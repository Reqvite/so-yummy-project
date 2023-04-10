import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getCategoryRecipes,
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "./operations";

const handlePending = (state) => {
  state.recipeCategories = [];
  state.searchByTitle = [];
  state.searchByIngredient = [];
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
    searchByTitleTotalRes: 0,
    currentPageTitle: 1,
    searchByIngredient: [],
    searchByIngredientTotalRes: 0,
    currentPageIngredient: 1,
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
        state.searchByTitle = action.payload.results;
        state.searchByTitleTotalRes = action.payload.totalResults;
        state.currentPageTitle = action.payload.currentPage;
      })
      .addCase(getSearchResultByIngredient.pending, handlePending)
      .addCase(getSearchResultByIngredient.rejected, handleRejected)
      .addCase(getSearchResultByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchByIngredient = action.payload.recipes;
        state.searchByIngredientTotalRes = action.payload.totalResults;
        state.currentPageIngredient = action.payload.currentPage;
      })
      .addDefaultCase((state, action) => {
        if (action.type === "auth/logout/fulfilled") {
          state.items = [];
          state.recipeCategories = [];
          state.searchByTitle = [];
          state.searchByTitleTotalRes = 0;
          state.currentPageTitle = 1;
          state.searchByIngredient = [];
          state.searchByIngredientTotalRes = 0;
          state.currentPageIngredient = 1;
        }
      }),
});

export const categoriesReducer = categoriesSlice.reducer;
