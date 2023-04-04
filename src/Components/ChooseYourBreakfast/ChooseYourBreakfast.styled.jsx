import styled from "styled-components";
import { Link } from "react-router-dom";
import bgLeafLeftMobile from "../../assets/images/mainPage/mainPageMobile/bgLeafLeftMobile.png";
import bgLeafRightMobile from "../../assets/images/mainPage/mainPageMobile/bgLeafRightMobile.png";
import bgMainPageMobile from "../../assets/images/mainPage/mainPageMobile/bgMainPageMobile.png";
import bgMobile from "../../assets/images/mainPage/mainPageMobile/bgMobile.png";

import bgLeafLeftTablet from "../../assets/images/mainPage/mainPageTablet/bgLeafLeftTablet.png";
import bgLeafRightTablet from "../../assets/images/mainPage/mainPageTablet/bgLeafRightTablet.png";
import bgMainPageTablet from "../../assets/images/mainPage/mainPageTablet/bgMainPageTablet.png";
import bgTablet from "../../assets/images/mainPage/mainPageTablet/bgTablet.png";
import bgDesktop from "../../assets/images/mainPage/mainPageDesktop/bgDesktop.png";
import bgLeafLeftDesktop from "../../assets/images/mainPage/mainPageDesktop/bgLeafLeftDesktop.png";
import bgLeafRightDesktop from "../../assets/images/mainPage/mainPageDesktop/bgLeafRightDesktop.png";
import bgMainPageDesktop from "../../assets/images/mainPage/mainPageDesktop/bgMainPageDesktop.png";

import { ReactComponent as ArrowMainPage } from "../../assets/svg/mainPage/arrowMainPage.svg";
import { ReactComponent as ArrowMain } from "../../assets/svg/mainPage/arrow.svg";

export const PositionWrapper = styled.div`
  position: relative;
  ${(div) => div.theme.sizes.tablet} {
    position: static;
  }
`;

export const Title = styled.h1`
  color: ${(h1) => h1.theme.colors.titleText};
  font-weight: ${(h1) => h1.theme.fontWeights.regular};
  font-size: 60px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;

  span {
    color: ${(span) => span.theme.colors.accentColor};
  }

  ${(h1) => h1.theme.sizes.tablet} {
    font-size: 72px;
    line-height: 1;
  }
  ${(h1) => h1.theme.sizes.desktop} {
    font-size: 100px;
    line-height: 1;
  }
`;

export const Text = styled.p`
  color: ${(h1) => h1.theme.colors.mainText};
  max-width: 248px;
  margin: 14px auto 0 auto;
  font-weight: 400;
  font-size: ${(h1) => h1.theme.fontSizes.xs};
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
  ${(div) => div.theme.sizes.tablet} {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  ${(div) => div.theme.sizes.desktop} {
    margin-right: 73px;
  }
`;

export const FlexContainer = styled.div`
  ${(div) => div.theme.sizes.tablet} {
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

  ${(div) => div.theme.sizes.tablet} {
    background-image: url(${bgLeafLeftTablet});
    top: 0;
    width: 67px;
    height: 323px;
  }

  ${(div) => div.theme.sizes.desktop} {
    height: 398px;
    width: 116px;
    background-image: url(${bgLeafLeftDesktop});
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

  ${(div) => div.theme.sizes.tablet} {
    background-image: url(${bgLeafRightTablet});
    width: 583px;
    height: 640px;
    top: -35px;
  }
  ${(div) => div.theme.sizes.desktop} {
    background-image: url(${bgLeafRightDesktop});
    width: 913px;
    height: 800px;
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

  ${(div) => div.theme.sizes.tablet} {
    background-image: url(${bgTablet});
    width: 332px;
    height: 640px;
    top: 0;
  }
  ${(div) => div.theme.sizes.desktop} {
    background-image: url(${bgDesktop});
    width: 725px;
    height: 689px;
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

  ${(div) => div.theme.sizes.tablet} {
    background-image: url(${bgMainPageTablet});
    max-width: 341px;
    height: 335px;
    align-items: center;
    justify-content: center;
    align-items: end;
    padding-bottom: 60px;
    margin: 0;
    position: relative;
  }
  ${(div) => div.theme.sizes.desktop} {
    background-image: url(${bgMainPageDesktop});
    width: 578px;
    height: 539px;
    justify-content: flex-end;
    max-width: none;
  }
`;

export const WrapperText = styled.div`
  border-radius: 10px;
  padding: 8px 8px 30px 8px;
  background-color: ${(div) => div.theme.colors.elementsBackground};
  width: 225px;
  height: 92px;

  ${(div) => div.theme.sizes.tablet} {
    width: 260px;
    height: 100px;
    padding: 12px 12px 34px 12px;
  }
  ${(div) => div.theme.sizes.desktop} {
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
  color: ${(span) => span.theme.colors.cardsText};
  span {
    color: ${(span) => span.theme.colors.accentColor};
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
  font-weight: ${(Link) => Link.theme.fontWeights.regular};
  font-size: ${(Link) => Link.theme.fontSizes.xxxs};
  color: ${(Link) => Link.theme.colors.cardsText};
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.2px;
`;

export const ArrowSvg = styled(ArrowMainPage)`
  margin-left: 7px;
`;

export const Arrow = styled(ArrowMain)`
  display: none;
  ${(ArrowMain) => ArrowMain.theme.sizes.tablet} {
    display: block;
    position: absolute;
    bottom: 5px;
    right: 75px;
    width: 146px;
    height: 56px;
    fill: none;
  }
  ${(ArrowMain) => ArrowMain.theme.sizes.desktop} {
    display: block;
    position: absolute;
    bottom: 0;
    fill: none;
    width: 146px;
    height: 56px;
  }
`;
