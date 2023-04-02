import styled from "styled-components";
import { ReactComponent as ErrorSvg } from "../../../assets/svg/notFound/bro-mobile.svg";

export const Box = styled.div`
  ${(p) => p.theme.flexCentered};
  flex-direction: column;
`;

export const ErrorIcon = styled(ErrorSvg)`
  width: 259px;
  height: 170px;

  ${(p) => p.theme.sizes.tablet} {
    width: 498px;
    height: 327px;
  }
  ${(p) => p.theme.sizes.desktop} {
    width: 498px;
    height: 331px;
  }
`;

export const Title = styled.p`
  color: #000000;
  margin-top: 14px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.sm};
  line-height: 1.11;

  letter-spacing: ${(p) => p.theme.lineHeights.base};

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 32px;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const Text = styled.span`
  margin-top: 8px;
  text-align: center;

  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.29

    letter-spacing: ${(p) => p.theme.lineHeights.base};
  ${(p) => p.theme.sizes.tablet} {
    margin-top: 14px;
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
  color: #000000;

  opacity: 0.5;
`;
