import { Link } from "react-router-dom";
import img from "../../../assets/images/MobileMenu/background.png";
import imgTab from "../../../assets/images/MobileMenu/backgroundTab.png";
import styled, { keyframes } from "styled-components";
import MobMenuCloseBtn from "../MobileMenu/CloseButton/CloseButton";

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(p) => p.theme.colors.secondaryBackground};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom right;
  animation-name: ${slideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  z-index: 101;

  @media screen and (min-width: 768px) {
    background-image: url(${imgTab});
  }
`;

export const LogoLink = styled(Link)`
  position: absolute;
  top: 18px;
  left: 16px;
  @media screen and (min-width: 768px) {
    top: 18px;
    left: 32px;
  }
`;

export const ThemeBox = styled.div`
  position: absolute;
  bottom: 32px;
`;
export const CloseBtn = styled(MobMenuCloseBtn)`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
`;
