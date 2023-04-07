import React from "react";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Logo from "../../ui/Logo/Logo";
import { useMediaQuery } from "@mui/material";
import ThemeButton from "Components/ui/ThemeButton/ThemeButton";
import { CloseBtn, LogoLink, ThemeBox, Wrap } from "./MobileMenu.styled";

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
      <ThemeBox>
        <ThemeButton />
      </ThemeBox>
    </Wrap>
  );
};

export default MobileNavMenu;
