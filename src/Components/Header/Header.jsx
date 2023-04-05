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
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/themeSlice";
import { selectTheme } from "redux/theme/selectors";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const isMobileTablet = useMediaQuery("(max-width: 1439px)");

  const toggleModal = () => {
    setMenu(!menu);
  };

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleTheme = () => {
    const value = theme === "light" ? "dark" : "light";
    dispatch(toggleTheme(value));
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
      <button onClick={handleTheme}>theme</button>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const HeaderElement = styled.div`
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
  @media screen and (min-width: 1440px) {
    margin-right: 187px;
  }
`;

const LogoLink = styled(NavLink)``;

export default Header;
