import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const HeaderElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 18px;
  }
`;

export const LogoWrap = styled.div`
  @media screen and (min-width: 1440px) {
    margin-right: 187px;
  }
`;

export const LogoLink = styled(NavLink)``;
