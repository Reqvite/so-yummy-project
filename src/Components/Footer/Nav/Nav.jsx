import { NavWrap, Link } from "./Nav.styled";

const Navigation = () => {
  function handleLinkClick() {
    const scrollToTop = () => {
      const position = window.pageYOffset;

      if (position > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, position - 30);
      }
    };
    scrollToTop();
  }

  return (
    <NavWrap>
      <Link to="/search?ingredient=" onClick={handleLinkClick}>
        Ingredients
      </Link>
      <Link to="/add" onClick={handleLinkClick}>
        Add recipes{" "}
      </Link>
      <Link to="/my" onClick={handleLinkClick}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={handleLinkClick}>
        Favorite
      </Link>
      <Link to="/shopping-list" onClick={handleLinkClick}>
        Shopping list
      </Link>
    </NavWrap>
  );
};

export default Navigation;
