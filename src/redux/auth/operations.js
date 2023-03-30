import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//localhost:3000

export const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const resp = await instance.post("api/users/signup", credentials);
      setToken(resp.data.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const resp = await instance.post("api/users/login", credentials);
      setToken(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setToken(token);
    try {
      const resp = await instance.get("api/users/current");
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "api/users/logout",
  async (_, thunkAPI) => {
    try {
      await instance.post("api/users/logout");
      setToken();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
