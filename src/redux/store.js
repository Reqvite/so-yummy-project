import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/authSlice";
import { shoppingReducer } from "./shopping/shoppingSlice";
import { recipeReducer } from "./recipes/recipesSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { ingredientsReducer } from "./ingredients/ingredientsSlice";
import { recipesReducer } from "./mainRecipes/mainRecipesSlice";
import { themeReducer } from "./theme/themeSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const themePersistConfig = {
  key: "theme",
  storage,
};

const recipePaginationConfig = {
  key: "pagination",
  storage,
  whitelist: ["pagination"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  shopping: shoppingReducer,
  recipes: persistReducer(recipePaginationConfig, recipeReducer),
  categories: categoriesReducer,
  ingredients: ingredientsReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  mainRecipes: recipesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
