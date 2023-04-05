import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteRecipe,
  deleteFavoriteRecipe,
  getRecipe,
  getUserFavouritesRecipes,
} from "./operations";

const initialState = {
  userFavouritesRecipes: [],
  recipes: [],
  recipe: [],
  recipeIsLoading: false,
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getRecipe.pending, (state, action) => {
        state.recipeIsLoading = true;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.recipeIsLoading = false;
        state.error = null;
        state.recipe = action.payload;
      })
      .addCase(getRecipe.rejected, (state, action) => {
        state.recipeIsLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserFavouritesRecipes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserFavouritesRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userFavouritesRecipes = action.payload;
      })
      .addCase(getUserFavouritesRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavoriteRecipe.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addFavoriteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userFavouritesRecipes.push(action.payload.id);
      })
      .addCase(addFavoriteRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavoriteRecipe.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteFavoriteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.userFavouritesRecipes.findIndex(
          (id) => id === action.payload
        );
        state.userFavouritesRecipes.splice(idx, 1);
      })
      .addCase(deleteFavoriteRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addDefaultCase((state, action) => {
        if (action.type === "auth/logout/fulfilled") {
          state.userFavouritesRecipes = [];
          state.recipes = [];
          state.recipe = [];
        }
      }),
});

export const recipeReducer = recipeSlice.reducer;
