import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) =>
    builder
      //   .addCase(fetchContacts.pending, (state, action) => {
      //     state.isLoading = true;
      //   })
      //   .addCase(fetchContacts.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     state.items = action.payload;
      //   })
      //   .addCase(fetchContacts.rejected, (state, action) => {
      //     state.isLoading = false;
      //     state.isLoading = false;
      //     state.error = action.payload;
      //   })
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
      .addCase(deleteIngredient.pending, (state, action) => {})
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactsReduser = contactsSlice.reducer;
