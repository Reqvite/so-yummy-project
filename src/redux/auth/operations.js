import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//http://localhost:3000
//https://so-yummy-api-x9xv.onrender.com

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

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("api/users/logout");
    setToken();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (data, thunkAPI) => {
    try {
      const resp = await instance.patch("api/users/update", data);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const subscribe = createAsyncThunk(
  "auth/subscribe",
  async (email, thunkAPI) => {
    try {
      const resp = await instance.post("api/subscribe", email);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/google/login",
  async (token, thunkAPI) => {
    try {
      const resp = await instance.get(`api/users/${token}`);
      setToken(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
