import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../theme";


export const Btn = styled(NavLink)`
  background-color: ${(p) =>
    ({
      normal: theme.colors.footerBackground,
      dark: theme.colors.accentColor,
    }[p.variant])};

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 14px 6px;

  border: none;
  color: ${theme.colors.secondaryText};
  transition: all 250ms linear;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};

  font-size: 10px;
  line-height: 15px;

  @media ${theme.sizes.tablet} {
    padding: 32px 12px;
    font-size: 14px;
    line-height: 21px;
  }

  @media ${theme.sizes.desktop} {
    padding: 50px 42px;
    font-size: 16px;
    line-height: 24px;
  }


  :hover,
  :focus {
    background-color: ${(p) =>
      ({
        normal: theme.colors.accentColor,
        dark: theme.colors.footerBackground,
      }[p.variant])};


    @media ${theme.sizes.mobile} {
      font-size: 14px;
      line-height: 21px;
    }

    @media ${theme.sizes.tablet} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${theme.sizes.desktop} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;