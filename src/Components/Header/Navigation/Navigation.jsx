import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add recipes</NavLink>
        </li>

        <li>
          <NavLink to="/my">My recipes</NavLink>
        </li>

        <li>
          <NavLink to="/favorite">Favorites</NavLink>
        </li>

        <li>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </li>
        <li>
          <NavLink to="/search">search</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
