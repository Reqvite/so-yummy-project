import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavWrap>
      <Link to="/search">Ingredients</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorite</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;

  :hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export default Navigation;
