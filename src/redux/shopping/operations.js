import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/operations";

export const getIngredients = createAsyncThunk(
  "shopping/getIngredients",
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get(
        "http://localhost:3000/api/shopping-list"
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteIngredient = createAsyncThunk(
  "shopping/deleteIngredient",
  async (ingredientId, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/shopping-list/${ingredientId}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
