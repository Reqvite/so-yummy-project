import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <h1>Welcome to the app</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <ul>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign in</NavLink>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
