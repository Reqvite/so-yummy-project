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
        const idx = state.list.findIndex(
          (ingredient) => ingredient._id === action.payload.ingredientId
        );
        state.list.splice(idx, 1);
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
