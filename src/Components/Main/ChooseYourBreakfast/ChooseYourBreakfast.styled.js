import styled from "styled-components";
import { Link } from "react-router-dom";
import bgLeafLeftMobile from "../../../assets/images/mainPage/mainPageMobile/bgLeafLeftMobile.png";
import bgLeafLeftMobile2x from "../../../assets/images/mainPage/mainPageMobile/bgLeafLeftMobile2x.png";
import bgLeafRightMobile from "../../../assets/images/mainPage/mainPageMobile/bgLeafRightMobile2x.png";
import bgLeafRightMobile2x from "../../../assets/images/mainPage/mainPageMobile/bgLeafRightMobile2x.png";
import bgMainPageMobile from "../../../assets/images/mainPage/mainPageMobile/bgMainPageMobile.png";
import bgMainPageMobile2x from "../../../assets/images/mainPage/mainPageMobile/bgMainPageMobile2x.png";
import bgMobile from "../../../assets/images/mainPage/mainPageMobile/bgMobile.png";
import bgMobile2x from "../../../assets/images/mainPage/mainPageMobile/bgMobile2x.png";

import bgLeafLeftTablet from "../../../assets/images/mainPage/mainPageTablet/bgLeafLeftTablet.png";
import bgLeafLeftTablet2x from "../../../assets/images/mainPage/mainPageTablet/bgLeafLeftTablet2x.png";
import bgLeafRightTablet from "../../../assets/images/mainPage/mainPageTablet/bgLeafRightTablet.png";
import bgLeafRightTablet2x from "../../../assets/images/mainPage/mainPageTablet/bgLeafRightTablet2x.png";
import bgMainPageTablet from "../../../assets/images/mainPage/mainPageTablet/bgMainPageTablet.png";
import bgMainPageTablet2x from "../../../assets/images/mainPage/mainPageTablet/bgMainPageTablet2x.png";
import bgTablet from "../../../assets/images/mainPage/mainPageTablet/bgTablet.png";
import bgTablet2x from "../../../assets/images/mainPage/mainPageTablet/bgTablet2x.png";
import bgDesktop from "../../../assets/images/mainPage/mainPageDesktop/bgDesktop.png";
import bgDesktop2x from "../../../assets/images/mainPage/mainPageDesktop/bgDesktop2x.png";
import bgLeafLeftDesktop from "../../../assets/images/mainPage/mainPageDesktop/bgLeafLeftDesktop.png";
import bgLeafLeftDesktop2x from "../../../assets/images/mainPage/mainPageDesktop/bgLeafLeftDesktop2x.png";
import bgLeafRightDesktop from "../../../assets/images/mainPage/mainPageDesktop/bgLeafRightDesktop.png";
import bgLeafRightDesktop2x from "../../../assets/images/mainPage/mainPageDesktop/bgLeafRightDesktop2x.png";
import bgMainPageDesktop from "../../../assets/images/mainPage/mainPageDesktop/bgMainPageDesktop.png";
import bgMainPageDesktop2x from "../../../assets/images/mainPage/mainPageDesktop/bgMainPageDesktop2x.png";

import { ReactComponent as ArrowMainPage } from "../../../assets/svg/mainPage/arrowMainPage.svg";
import { ReactComponent as ArrowMain } from "../../../assets/svg/mainPage/arrow.svg";

export const Section = styled.section`
  ${(p) => p.theme.sizes.tablet} {
    padding-bottom: 150px;
  }
`;

export const PositionWrapper = styled.div`
  position: relative;
  ${(p) => p.theme.sizes.tablet} {
    position: static;
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.titleText};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: 60px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;

  span {
    color: ${(p) => p.theme.colors.accentColor};
  }

  ${(p) => p.theme.sizes.tablet} {
    font-size: 72px;
    line-height: 1;
  }
  ${(p) => p.theme.sizes.desktop} {
    font-size: 100px;
    line-height: 1;
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.mainText};
  max-width: 248px;
  margin: 14px auto 0 auto;
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.28;
  text-align: center;
  letter-spacing: -0.02em;

  ${(p) => p.theme.sizes.tablet} {
    font-size: 14px;
    line-height: 1.28;
    margin: 24px 0 0 0;
    max-width: 362px;
    text-align: inherit;
  }
  ${(p) => p.theme.sizes.desktop} {
    font-size: 18px;
    line-height: 1.33;
    max-width: 465px;
    margin: 14px 0 0 0;
  }
`;

export const Flex = styled.div`
  ${(p) => p.theme.sizes.tablet} {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  ${(p) => p.theme.sizes.desktop} {
    margin-right: 73px;
  }
`;

export const FlexContainer = styled.div`
  ${(p) => p.theme.sizes.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BgLeafLeft = styled.div`
  background-image: url(${bgLeafLeftMobile});
  background-repeat: no-repeat;
  background-size: contain;
  width: 170px;
  height: 184px;
  position: absolute;
  left: 0;
  top: 30px;
  z-index: -1;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgLeafLeftMobile2x});
  }

  ${(p) => p.theme.sizes.tablet} {
    background-image: url(${bgLeafLeftTablet});
    top: 0;
    width: 67px;
    height: 323px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgLeafLeftTablet2x});
    }
  }

  ${(p) => p.theme.sizes.desktop} {
    height: 398px;
    width: 116px;
    background-image: url(${bgLeafLeftDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgLeafLeftDesktop2x});
    }
  }
`;

export const BgLeafRightMobile = styled.div`
  background-image: url(${bgLeafRightMobile});
  background-repeat: no-repeat;
  background-size: contain;
  width: 375px;
  height: 814px;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgLeafRightMobile2x});
  }

  ${(p) => p.theme.sizes.tablet} {
    background-image: url(${bgLeafRightTablet});
    width: 583px;
    height: 640px;
    top: -35px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgLeafRightTablet2x});
    }
  }
  ${(p) => p.theme.sizes.desktop} {
    background-image: url(${bgLeafRightDesktop});
    width: 913px;
    height: 800px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgLeafRightDesktop2x});
    }
  }
`;

export const Background = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: contain;
  width: 270px;
  height: 800px;
  position: absolute;
  z-index: -1;
  top: 130px;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }

  ${(p) => p.theme.sizes.tablet} {
    background-image: url(${bgTablet});
    width: 332px;
    height: 640px;
    top: 0;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTablet2x});
    }
  }
  ${(p) => p.theme.sizes.desktop} {
    background-image: url(${bgDesktop});nav
    width: 725px;
    height: 689px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgDesktop2x});
    }
  }
`;

export const WrapperBackground = styled.div`
  background-image: url(${bgMainPageMobile});
  background-repeat: no-repeat;
  height: 296px;
  width: 320px;
  margin: 0 auto;
  background-size: contain;
  margin-top: 44px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMainPageMobile2x});
  }

  ${(p) => p.theme.sizes.tablet} {
    background-image: url(${bgMainPageTablet});
    max-width: 341px;
    height: 335px;
    align-items: center;
    justify-content: center;
    align-items: end;
    padding-bottom: 60px;
    margin: 0;
    position: relative;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgMainPageTablet2x});
    }
  }
  ${(p) => p.theme.sizes.desktop} {
    background-image: url(${bgMainPageDesktop});
    width: 578px;
    height: 539px;
    justify-content: flex-end;
    max-width: none;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgMainPageDesktop2x});
    }
  }
`;

export const WrapperText = styled.div`
  border-radius: 10px;
  padding: 8px 8px 30px 8px;
  background-color: ${(p) => p.theme.colors.elementsBackground};
  width: 225px;
  height: 92px;

  ${(p) => p.theme.sizes.tablet} {
    width: 260px;
    height: 100px;
    padding: 12px 12px 34px 12px;
  }
  ${(p) => p.theme.sizes.desktop} {
    width: 298px;
    height: 114px;
    padding: 16px 16px 38px 16px;
  }
`;

export const RecipeText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.cardsText};
  span {
    color: ${(p) => p.theme.colors.accentColor};
  }

  ${(p) => p.theme.sizes.tablet} {
    font-size: 14px;
    line-height: 1.28;
  }
  ${(p) => p.theme.sizes.desktop} {
    font-size: 14px;
    line-height: 1.33;
  }
`;

export const NavLink = styled(Link)`
  margin-top: 7px;
  display: flex;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  color: ${(p) => p.theme.colors.cardsText};
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.2px;

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const ArrowSvg = styled(ArrowMainPage)`
  margin-left: 7px;
  stroke: ${(p) => p.theme.colors.mainIconColor};
`;

export const Arrow = styled(ArrowMain)`
  display: none;
  ${(p) => p.theme.sizes.tablet} {
    display: block;
    position: absolute;
    bottom: 5px;
    right: 75px;
    width: 146px;
    height: 56px;
    fill: none;
  }
  ${(p) => p.theme.sizes.desktop} {
    display: block;
    position: absolute;
    bottom: 0;
    fill: none;
    width: 146px;
    height: 56px;
  }
`;
