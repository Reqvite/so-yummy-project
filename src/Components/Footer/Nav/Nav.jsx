import { NavWrap, Link } from "./Nav.styled";

const Navigation = () => {
  return (
    <NavWrap>
      <Link to="/search?ingredient=">Ingredients</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorite</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </NavWrap>
  );
};

export default Navigation;
