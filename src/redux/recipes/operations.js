import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";

export const getRecipe = createAsyncThunk(
  "recipes/getRecipe",
  async (recipeId, thunkAPI) => {
    try {
      const resp = await instance.get(`api/recipes/recipe/${recipeId}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  "recipes/addFavoriteRecipe",
  async (id, thunkAPI) => {
    try {
      const resp = await instance.post(`api/favorite/${id}`);
      return resp.data.recipe;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getUserFavouritesRecipes = createAsyncThunk(
  "recipes/getUserFavouritesRecipes",
  async (page, thunkAPI) => {
    try {
      const resp = await instance.get(`api/favorite?page=${page}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteFavoriteRecipe = createAsyncThunk(
  "recipes/deleteFavoriteRecipe",
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`api/favorite/${id}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  "recipes/getPopularRecipes",
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/popular-recipes`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
