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
  color: ${(p) => p.theme.colors.secondaryTextColor};
  text-align: center;
  width: 540px;
  height: 121px;
`;

export const Heading = styled.h1`
  margin-bottom: 14px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 28px;
  line-height: 28px;
  /* or 100% */

  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;
