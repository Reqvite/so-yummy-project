import { createSlice } from "@reduxjs/toolkit";
import {
  deleteIngredient,
  getShoppingIngredients,
  updateShoppinList,
} from "./operations";

const initialState = {
  list: [],
  isLoading: false,
  shoppingListUpateIsLoading: false,
  error: null,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getShoppingIngredients.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getShoppingIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload.ingredients;
      })
      .addCase(getShoppingIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateShoppinList.pending, (state, action) => {
        state.shoppingListUpateIsLoading = true;
      })
      .addCase(updateShoppinList.fulfilled, (state, action) => {
        state.shoppingListUpateIsLoading = false;
        state.list = action.payload.shoppingList;
      })
      .addCase(updateShoppinList.rejected, (state, action) => {
        state.shoppingListUpateIsLoading = false;
        state.error = action.payload.message;
      })
      .addCase(deleteIngredient.pending, (state, action) => {
        state.shoppingListUpateIsLoading = true;
      })
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.shoppingListUpateIsLoading = false;

        const recipeIndex = state.list.findIndex(
          (recipe) => recipe.recipeId === action.payload.data.recipeId
        );

        if (recipeIndex === -1) {
          return;
        }

        const ingredientIndex = state.list[recipeIndex].ingredients.findIndex(
          (ingredient) => ingredient.id === action.payload.data.ingredientId
        );

        if (ingredientIndex === -1) {
          return;
        }

        state.list[recipeIndex].ingredients.splice(ingredientIndex, 1);

        if (state.list[recipeIndex].ingredients.length === 0) {
          state.list.splice(recipeIndex, 1);
        }
      })
      .addCase(deleteIngredient.rejected, (state, action) => {
        state.shoppingListUpateIsLoading = false;
        state.error = action.payload.message;
      })
      .addDefaultCase((state, action) => {
        if (action.type === "auth/logout/fulfilled") {
          state.list = [];
        }
      }),
});

export const shoppingReducer = shoppingSlice.reducer;
