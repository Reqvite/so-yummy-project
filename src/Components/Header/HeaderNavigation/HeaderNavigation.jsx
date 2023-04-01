import { NavLink } from "react-router-dom";
import { ReactComponent as SearchIconMob } from "../../../assets/svg/SearchHeader/searchIconMob.svg";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import React from "react";

const HeaderNavigation = ({ toggleModal }) => {
  const isMobile = useMediaQuery("(max-width: 1439px)");

  return (
    <Navigation>
      <Link
        to="/categories"
        onClick={() => {
          toggleModal();
        }}
      >
        Categories
      </Link>
      <Link
        to="/add"
        onClick={() => {
          toggleModal();
        }}
      >
        Add recipes
      </Link>
      <Link
        to="/my"
        onClick={() => {
          toggleModal();
        }}
      >
        My recipes
      </Link>
      <Link
        to="/favorite"
        onClick={() => {
          toggleModal();
        }}
      >
        Favorites
      </Link>
      <Link
        to="/shopping-list"
        onClick={() => {
          toggleModal();
        }}
      >
        Shopping list
      </Link>

      <Link
        to="/search"
        onClick={() => {
          toggleModal();
        }}
      >
        <IconWrap>
          <Icon />
        </IconWrap>
        {isMobile && <>Search</>}
      </Link>
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
const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  stroke: ${(p) => p.theme.colors.footerBackground};
  :hover {
    color: ${(p) => p.theme.colors.accentColor};
    stroke: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
  }
  &.active {
    color: ${(p) => p.theme.colors.accentColor};
    stroke: ${(p) => p.theme.colors.accentColor};
  }
`;

const Icon = styled(SearchIconMob)`
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const IconWrap = styled.div`
  display: inline-block;
  position: relative;
  top: 3px;
  left: -8px;
  @media screen and (min-width: 768px) {
    top: 4px;
    left: -8px;
  }

  @media screen and (min-width: 1440px) {
    top: 3px;
    left: 3px;
  }
`;

export default HeaderNavigation;
