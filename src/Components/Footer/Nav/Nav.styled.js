import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrap = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    gap: 24px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 242px;
    align-items: flex-start;
  }
`;
export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  line-height: 1;

  :hover {
    color: ${(p) => p.theme.colors.footerHoverColor};
  }
`;
