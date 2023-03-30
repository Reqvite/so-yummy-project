import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "Components/routes/PrivateRoute";
import RestrictedRoute from "Components/routes/RestrictedRoute";
import SharedLayout from "Components/SharedLayout/SharedLayout";
import Loader from "Components/ui/Loader/Loader";
import MainPage from "Pages/MainPage";
import RegisterPage from "Pages/RegisterPage";
import SigninPage from "Pages/SigninPage";
import AuthNavPage from "Pages/AuthNavPage";

import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { GlobalStyle } from "Components/GlobalStyle/GlobalStyle";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
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
          path="/main"
          element={<PrivateRoute component={<SharedLayout />} redirectTo="/" />}
        >
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
