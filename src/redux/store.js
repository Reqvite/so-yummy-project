import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/authSlice";
import { shoppingReducer } from "./shopping/shoppingSlice";
import { recipeReducer } from "./recipes/recipesSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { ingredientsReducer } from "./ingredients/ingredientsSlice";
import { categoryRecipesReducer } from "./recipes/categoryRecipes/categoryRecipesSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    shopping: shoppingReducer,
    recipes: recipeReducer,
    categories: categoriesReducer,
    categoryRecipes: categoryRecipesReducer,
    ingredients: ingredientsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
