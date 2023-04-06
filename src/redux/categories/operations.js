import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/api/recipes/category-list");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategoryRecipes = createAsyncThunk(
  "categories/getCategoriesRecipes",
  async (categoryName, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/recipes/${categoryName}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getSearchResultByTitle = createAsyncThunk(
  "search/getSearchQuery",
  async ({ type, value, page }, thunkAPI) => {
    try {
      const resp = await instance.get(
        `/api/recipes/search?${type}=${value}&page=${page}`
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
