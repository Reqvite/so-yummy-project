import { useSelector } from "react-redux";

import {
  selectUser,
  selectIsLoggedIn,
  selectRefreshing,
  selectStatus,
} from "redux/auth/selectors.js";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    status,
  };
};
