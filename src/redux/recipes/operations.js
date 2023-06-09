import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";

export const getRecipe = createAsyncThunk(
  "recipes/getRecipe",
  async (recipeId, thunkAPI) => {
    try {
      const resp = await instance.get(`api/recipes/recipe/${recipeId}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
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
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getUserFavouritesRecipes = createAsyncThunk(
  "recipes/getUserFavouritesRecipes",
  async (page, thunkAPI) => {
    try {
      const resp = await instance.get(`api/favorite`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getUserFavouritesPaginationRecipes = createAsyncThunk(
  "recipes/getUserFavouritesPaginationRecipes",
  async (page, thunkAPI) => {
    try {
      const resp = await instance.get(`api/favorite/paginate?page=${page}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
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
      return thunkAPI.rejectWithValue(err.response.data.message);
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
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getUserRecipesPagination = createAsyncThunk(
  "recipes/getUserRecipesPagination",
  async (page, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/own-recipes/?page=${page}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  "own-recipes/add",
  async (data, thunkAPI) => {
    try {
      const resp = await instance.post("api/own-recipes/add", data);
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteUserRecipe = createAsyncThunk(
  "recipes/deleteUserRecipe",
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`api/own-recipes/${id}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
