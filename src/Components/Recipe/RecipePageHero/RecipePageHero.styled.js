import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { ReactComponent as ClockIcon } from "../../../assets/svg/clock/clock.svg";
import backgroundDesktop from "../../../assets/images/recipePage/flat-lay-assortment-vegetables-with-copy-space-DESKTOP.jpg";
import backgroundMobile from "../../../assets/images/recipePage/flat-lay-assortment-vegetables-with-copy-space-MOBILE.jpg";
import backgroundTablet from "../../../assets/images/recipePage/flat-lay-assortment-vegetables-with-copy-space-TABLET.jpg";

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;

  width: 100%;
  height: 455px;

  background-image: url(${backgroundMobile});

  @media screen and (min-width: 555px) {
    background-image: url(${backgroundTablet});
  }
  ${(p) => p.theme.sizes.tablet} {
    height: 495px;
    background-image: url(${backgroundTablet});
  }
  ${(p) => p.theme.sizes.desktop} {
    height: 493px;
    background-image: url(${backgroundDesktop});
    background-size: cover;
  }
`;

export const MainPageTitle = styled.h1`
  position: relative;
  z-index: 3;

  padding-top: 30px;
  color: ${(p) => p.theme.colors.accentColor};
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1;

  letter-spacing: ${(p) => p.theme.letterSpacings.base};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }

  ${(p) => p.theme.sizes.desktop} {
    padding-top: 0;
    font-size: ${(p) => p.theme.fontSizes.xl};

    ${(p) =>
      p.$isBig &&
      css`
        font-size: ${(p) => p.theme.fontSizes.l};
      `}
  }
`;

export const Text = styled.p`
  position: relative;
  z-index: 3;

  width: 100%;
  max-width: 656px;
  margin: 0 auto;
  margin-top: 18px;
  color: ${(p) => p.theme.colors.recipeDescriptionText};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.33;
  text-align: center;
  letter-spacing: ${(p) => p.theme.letterSpacings.base};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    margin-top: 24px;

    ${(p) =>
      p.$isBig &&
      css`
        font-size: ${(p) => p.theme.fontSizes.s};
      `}
  }
`;

export const Button = styled(motion.button)`
  position: relative;
  z-index: 3;

  min-width: 200px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding: 0 18px;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;

  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 1.5;
    padding: 0 44px;
  }
`;

export const Box = styled.div`
  position: relative;
  z-index: 3;

  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 60px;
  }
`;

export const ClockSvg = styled(ClockIcon)`
  width: 18px;
  height: 18px;
  ${(p) => p.theme.sizes.tablet} {
    width: 24px;
    height: 24px;
  }
`;
export const Time = styled.span`
  margin-left: 5px;
  color: ${(p) => p.theme.colors.recipeDescriptionText};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.43;
  letter-spacing: -0.24px;
`;
