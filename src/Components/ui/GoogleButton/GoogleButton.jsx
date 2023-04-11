import { NavLink } from "react-router-dom";
import { GoogleSvg } from "./GoogleButton.styled";

const GoogleButton = () => {
  return (
    <NavLink to="http://localhost:3000/api/users/auth/google">
      <GoogleSvg />
    </NavLink>
  );
};

export default GoogleButton;
