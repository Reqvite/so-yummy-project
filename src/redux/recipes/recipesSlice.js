import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteRecipe,
  deleteFavoriteRecipe,
  getPopularRecipes,
  getRecipe,
  getUserFavouritesPaginationRecipes,
  getUserFavouritesRecipes,
} from "./operations";

const initialState = {
  userFavouritesRecipes: [],
  popularRecipes: [],
  recipe: [],
  recipeIsLoading: false,
  isLoading: false,
  userFavoritesIsLoading: false,
  popularIsLoading: false,
  error: null,
  pagination: {},
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
        state.userFavoritesIsLoading = true;
      })
      .addCase(getUserFavouritesRecipes.fulfilled, (state, action) => {
        state.userFavoritesIsLoading = false;
        state.error = null;
        state.userFavouritesRecipes = action.payload.favorites;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
        };
      })
      .addCase(getUserFavouritesPaginationRecipes.rejected, (state, action) => {
        state.userFavoritesIsLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserFavouritesPaginationRecipes.pending, (state, action) => {
        state.userFavoritesIsLoading = true;
      })
      .addCase(
        getUserFavouritesPaginationRecipes.fulfilled,
        (state, action) => {
          state.userFavoritesIsLoading = false;
          state.error = null;
          state.userFavouritesRecipes = action.payload.favorites;
          state.pagination = {
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
          };
        }
      )
      .addCase(getUserFavouritesRecipes.rejected, (state, action) => {
        state.userFavoritesIsLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavoriteRecipe.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addFavoriteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userFavouritesRecipes.push(action.payload);
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
          ({ _id }) => _id === action.payload.id
        );
        state.userFavouritesRecipes.splice(idx, 1);
      })
      .addCase(deleteFavoriteRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPopularRecipes.pending, (state, action) => {
        state.popularIsLoading = true;
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.popularIsLoading = false;
        state.popularRecipes = action.payload;
      })
      .addCase(getPopularRecipes.rejected, (state, action) => {
        state.popularIsLoading = false;
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
