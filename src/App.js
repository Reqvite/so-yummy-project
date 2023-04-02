import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "Components/routes/PrivateRoute";
import RestrictedRoute from "Components/routes/RestrictedRoute";
import SharedLayout from "Components/SharedLayout/SharedLayout";
import Loader from "Components/ui/Loader/Loader";
import { GlobalStyle } from "Components/GlobalStyle/GlobalStyle";
import MainPage from "Pages/MainPage";
import RegisterPage from "Pages/RegisterPage";
import SigninPage from "Pages/SigninPage";
import AuthNavPage from "Pages/AuthNavPage";
import AddRecipe from "Pages/AddRecipe";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import ShoppingListPage from "Pages/ShoppingListPage";
import CategoriesPage from "Pages/CategoriesPage";
import RecipePage from "Pages/RecipePage";
import NotFoundPage from "Pages/NotFoundPage";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          index
          element={
            <RestrictedRoute component={<AuthNavPage />} redirectTo="/main" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/main" />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute component={<SigninPage />} redirectTo="/main" />
          }
        />

        <Route
          path="/"
          element={<PrivateRoute component={<SharedLayout />} redirectTo="/" />}
        >
          <Route path="main" element={<MainPage />} />
          <Route path="add" element={<AddRecipe />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="recipe/:id" element={<RecipePage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
