import React from "react";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import MobMenuCloseBtn from "../MobileMenu/CloseButton/CloseButton";
import styled, { keyframes } from "styled-components";
import Logo from "../../ui/Logo/Logo";
import img from "../../../assets/images/MobileMenu/background.png";
import imgTab from "../../../assets/images/MobileMenu/backgroundTab.png";

import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ toggleModal, menu }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  let width = 44;
  let height = 44;

  if (isMobile) {
    width = 40;
    height = 40;
  }

  return (
    <Wrap>
      <div onClick={() => toggleModal()}>
        <LogoLink to="/main">
          <Logo width={width} height={height} menu={menu} />
        </LogoLink>
      </div>
      <CloseBtn toggleModal={toggleModal} />
      <HeaderNavigation toggleModal={toggleModal} />
    </Wrap>
  );
};
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrap = styled.div`
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

const LogoLink = styled(Link)`
  position: absolute;
  top: 18px;
  left: 16px;
  @media screen and (min-width: 768px) {
    top: 18px;
    left: 32px;
  }
`;
const CloseBtn = styled(MobMenuCloseBtn)`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
`;

export default MobileNavMenu;
