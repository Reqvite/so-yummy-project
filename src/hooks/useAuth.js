import { useSelector } from "react-redux";

import {
  selectUser,
  selectIsLoggedIn,
  selectRefreshing,
} from "redux/auth/selectors.js";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
