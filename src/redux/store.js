import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/authSlice";
import { shoppingReducer } from "./shopping/shoppingSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    shopping: shoppingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
