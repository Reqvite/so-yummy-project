import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Container from "../ui/Container/ContainerStyled";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import BurgerButton from "./MobileMenu/BurgerButton/BurgerButton";
import Modal from "../../Components/ui/Modal/Modal";
import MobileNavMenu from "../../Components/Header/MobileMenu/MobileMenu";
import UserLogo from "./UserLogo/UserLogo";
import {
  HeaderBlock,
  HeaderElement,
  LogoLink,
  LogoWrap,
} from "./Header.styled";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const isMobileTablet = useMediaQuery("(max-width: 1439px)");

  const toggleModal = () => {
    setMenu(!menu);
  };

  return (
    <HeaderBlock>
      <Container>
        <HeaderElement>
          <LogoWrap>
            <LogoLink to="/main">
              <HeaderLogo />
            </LogoLink>
          </LogoWrap>

          {!isMobileTablet && <HeaderNavigation toggleModal={toggleModal} />}

          <UserLogo />

          {isMobileTablet && <BurgerButton toggleModal={toggleModal} />}

          {isMobileTablet && menu && (
            <Modal toggleModal={toggleModal}>
              <MobileNavMenu toggleModal={toggleModal} menu={menu} />
            </Modal>
          )}
        </HeaderElement>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
