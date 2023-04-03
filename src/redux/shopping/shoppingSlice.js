import { createSlice } from "@reduxjs/toolkit";
import {
  deleteIngredient,
  getShoppingIngredients,
  updateShoppinList,
} from "./operations";

const initialState = {
  list: [],
  isLoading: false,
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
        state.isLoading = true;
      })
      .addCase(updateShoppinList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload.shoppingList;
      })
      .addCase(updateShoppinList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteIngredient.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.list.findIndex(
          (ingredient) => ingredient._id === action.payload.ingredientId
        );
        state.list.splice(idx, 1);
      })
      .addCase(deleteIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const shoppingReducer = shoppingSlice.reducer;
