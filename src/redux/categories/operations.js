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
  async ({ categoryName, page }, thunkAPI) => {
    try {
      const resp = await instance.get(
        `/api/recipes/${categoryName}?page=${page}`
      );
      console.log(resp.data);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getSearchResultByTitle = createAsyncThunk(
  "search/getSearchQuery",
  async ({ type, value, page, limit }, thunkAPI) => {
    try {
      const offset = 0;
      const resp = await instance.get(
        `/api/recipes/search?${type}=${value}&page=${page}&limit=${limit}&offset=${offset}`
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getSearchResultByIngredient = createAsyncThunk(
  "search/getSearchByIngredient",
  async ({ type, value, page, limit }, thunkAPI) => {
    try {
      const offset = 0;
      const resp = await instance.get(
        `/api/recipes/search/ingredient?${type}=${value}&page=${page}&limit=${limit}&offset=${offset}`
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
