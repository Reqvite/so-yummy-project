import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const HeaderNavigation = ({ toggleModal }) => {
  return (
    <Navigation>
      <NavLink to="/categories" toggleModal={toggleModal}>
        Categories
      </NavLink>
      <NavLink to="/add" toggleModal={toggleModal}>
        Add recipes
      </NavLink>
      <NavLink to="/my" toggleModal={toggleModal}>
        My recipes
      </NavLink>
      <NavLink to="/favorite" toggleModal={toggleModal}>
        Favorites
      </NavLink>
      <NavLink to="/shopping-list" toggleModal={toggleModal}>
        Shopping list
      </NavLink>

      <NavLink to="/search" toggleModal={toggleModal}>
        Search
      </NavLink>
    </Navigation>
  );
};
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 182px;
  gap: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 186px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    height: 44px;
    gap: 30px;
  }
`;

export default HeaderNavigation;
