import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirecTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirecTo} /> : Component;
};

export default PrivateRoute;
