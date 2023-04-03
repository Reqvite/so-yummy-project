import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";

export const getCategoryRecipes = createAsyncThunk(
  "categoryRecipes/getCategoryRecipes",
  async (categoryName, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/recipes/${categoryName}`);
      // console.log(resp.data);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
