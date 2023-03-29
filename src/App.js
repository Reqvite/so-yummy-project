import React from "react";
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

const App = () => {
  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        index
        element={
          <RestrictedRoute component={<AuthNavPage />} redirectTo="/home" />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute component={<RegisterPage />} redirectTo="/home" />
        }
      />
      <Route
        path="/signin"
        element={
          <RestrictedRoute component={<SigninPage />} redirectTo="/home" />
        }
      />
      <Route
        path="/home"
        element={<PrivateRoute component={<SharedLayout />} redirectTo="/" />}
      >
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
