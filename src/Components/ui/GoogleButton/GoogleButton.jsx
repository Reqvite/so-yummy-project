import { NavLink } from "react-router-dom";
import { GoogleSvg } from "./GoogleButton.styled";

const GoogleButton = () => {
  return (
    <NavLink to="https://so-yummy-api-x9xv.onrender.com/api/users/auth/google">
      <GoogleSvg />
    </NavLink>
  );
};

export default GoogleButton;
