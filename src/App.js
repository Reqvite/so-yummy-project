import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { refreshUser } from "redux/auth/operations";
import RegisterPage from "Pages/RegisterPage";
import SigninPage from "Pages/SigninPage";
import AuthNavPage from "Pages/AuthNavPage";
import MainPage from "Pages/MainPage";
import { GlobalStyle } from "Components/GlobalStyle/GlobalStyle";
import PrivateRoute from "Components/routes/PrivateRoute";
import RestrictedRoute from "Components/routes/RestrictedRoute";
import SharedLayout from "Components/SharedLayout/SharedLayout";
import Loader from "Components/ui/Loader/Loader";
import Alert from "Components/ui/Alert";
import { darkTheme, lightTheme } from "./theme/theme";
import { selectTheme } from "redux/theme/selectors";
import { useAuth } from "hooks";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoading } = useAuth();

  const themeSelector = useSelector(selectTheme);

  const theme = themeSelector === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const AddRecipe = lazy(() => import("Pages/AddRecipe"));
  const CategoriesPage = lazy(() => import("Pages/CategoriesPage"));
  const ShoppingListPage = lazy(() => import("Pages/ShoppingListPage"));
  const RecipePage = lazy(() => import("Pages/RecipePage"));
  const SearchPage = lazy(() => import("Pages/SearchPage"));
  const MyRecipePage = lazy(() => import("Pages/MyRecipePage"));
  const FavoritePage = lazy(() => import("Pages/FavoritePage"));
  const NotFoundPage = lazy(() => import("Pages/NotFoundPage"));

  return isRefreshing || isLoading ? (
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
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="recipe/:id" element={<RecipePage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="my" element={<MyRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Alert theme={theme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
