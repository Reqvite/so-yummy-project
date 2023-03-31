import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink>Categories</NavLink>
      </li>
      <li>
        <NavLink>Add recipes</NavLink>
      </li>

      <li>
        <NavLink>My recipes</NavLink>
      </li>

      <li>
        <NavLink>Favorites</NavLink>
      </li>

      <li>
        <NavLink>Shopping list</NavLink>
      </li>
      <li>
        <NavLink>search</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
