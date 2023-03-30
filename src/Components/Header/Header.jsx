import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Header
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default Header;
