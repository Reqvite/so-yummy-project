import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../ui/Container/ContainerStyled";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  const dispatch = useDispatch();
  const notDesktop = useMediaQuery("(max-width: 1439px)");

  console.log(notDesktop);

  return (
    <Container>
      <HeaderElement>
        <LogoWrap>
          <LogoLink to="/main">
            <HeaderLogo />
          </LogoLink>
        </LogoWrap>

        <Navigation />

        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </HeaderElement>
    </Container>
  );
};

const HeaderElement = styled.header`
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
  }
`;
const LogoWrap = styled.div`
  margin-right: 187px;
`;

const LogoLink = styled(NavLink)``;
export default Header;
