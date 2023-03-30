import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/images/authNavBackground.jpg";

export const Container = styled.div`
  padding: 0 35px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  ${(p) => p.theme.flexCentered}
`;

export const Box = styled.div`
  color: ${(p) => p.theme.colors.secondaryText};
  text-align: center;
  width: 540px;
  height: 121px;
`;

export const Heading = styled.h1`
  margin-bottom: 14px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1;
  /* or 100% */

  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
`;

export const Text = styled.p`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  :first-child {
    margin-right: 18px;
  }
`;

export const Button = styled(Link)`
  background-color: transparent;
  padding: 22px 44px;
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);

  :hover {
    background-color: ${(p) => p.theme.colors.accentColor};
    border-color: transparent;
  }
`;
