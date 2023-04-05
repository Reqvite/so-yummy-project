import { useMediaQuery } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { Icon, IconWrap, Link, Navigation } from "./HeaderNavigation.styled";

const HeaderNavigation = ({ toggleModal }) => {
  const isMobile = useMediaQuery("(max-width: 1439px)");
  const { pathname } = useLocation();

  const HandleLinkClick = () => {
    if (isMobile) {
      return toggleModal();
    }
    return null;
  };
  return (
    <Navigation $page={pathname.includes("recipe")}>
      <Link to="/categories/beef" onClick={() => HandleLinkClick()}>
        Categories
      </Link>
      <Link to="/add" onClick={() => HandleLinkClick()}>
        Add recipes
      </Link>
      <Link to="/my" onClick={() => HandleLinkClick()}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={() => HandleLinkClick()}>
        Favorites
      </Link>
      <Link to="/shopping-list" onClick={() => HandleLinkClick()}>
        Shopping list
      </Link>

      <Link to="/search?query" onClick={() => HandleLinkClick()}>
        <IconWrap>
          <Icon />
        </IconWrap>
        {isMobile && <>Search</>}
      </Link>
    </Navigation>
  );
};

export default HeaderNavigation;
