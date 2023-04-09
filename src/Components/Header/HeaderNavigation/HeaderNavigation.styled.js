import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as SearchIconMob } from "../../../assets/svg/SearchHeader/searchIconMob.svg";

export const Navigation = styled.nav`
  ${(p) =>
    p.$page &&
    css`
      color: ${(p) => p.theme.colors.recipeHeaderTextColor};
    `}

  ${(p) =>
    p.$isMobile &&
    css`
      color: ${(p) => p.theme.colors.mainText};
    `}

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
export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  stroke: ${(p) => p.theme.colors.footerBackground};
  :hover,
  :focus {
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

export const Icon = styled(SearchIconMob)`
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconWrap = styled.div`
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
