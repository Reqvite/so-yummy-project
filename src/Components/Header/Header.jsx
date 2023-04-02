import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Container from "../ui/Container/ContainerStyled";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import BurgerButton from "./MobileMenu/BurgerButton/BurgerButton";
import Modal from "../../Components/ui/Modal/Modal";
import MobileNavMenu from "../../Components/Header/MobileMenu/MobileMenu";
import UserLogo from "./UserLogo/UserLogo";

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

          {!isMobileTablet && <HeaderNavigation />}

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

const HeaderBlock = styled.header`
  position: absolute;
  width: 100%;
  z-index: 100;
`;
const HeaderElement = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding-top: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 19px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 18px;
    padding-right: 211px;
  }
`;
const LogoWrap = styled.div`
  margin-right: 187px;
`;

const LogoLink = styled(NavLink)``;

export default Header;
