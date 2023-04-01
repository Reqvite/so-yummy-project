import { createSlice } from "@reduxjs/toolkit";
import { deleteIngredient, getIngredients } from "./operations";

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
      .addCase(getIngredients.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload.ingredients;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoading = false;
        state.error = action.payload;
      })
      //   .addCase(addContact.pending, (state, action) => {
      //     state.isLoading = true;
      //   })
      //   .addCase(addContact.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.items.push(action.payload);
      //   })
      //   .addCase(addContact.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   })
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
