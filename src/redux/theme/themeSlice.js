import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      if (action.type === "auth/logout/fulfilled") {
        state.theme = "light";
      }
    });
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
