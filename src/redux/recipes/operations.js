import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";

export const getRecipe = createAsyncThunk(
  "shopping/getRecipe",
  async (recipeId, thunkAPI) => {
    try {
      const resp = await instance.get(`api/recipes/recipe/${recipeId}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
