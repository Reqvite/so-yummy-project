import Container from "../../Components/ui/Container/ContainerStyled";
import LogoAndAbilities from "../Footer/LogoAndAbilities/LogoAndAbilities";
import Navigation from "../Footer/Nav/Nav";
import SubscribeForm from "../Footer/SubscribeForm/SubscribeForm";
import FollowUs from "../Footer/FollowUs/FollowUs";

import {
  FooterWrap,
  GreenLeafsTop,
  LogoNavSubWrap,
  FooterBottomWrap,
  BottomText,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrap>
      <GreenLeafsTop />

      <Container>
        <LogoNavSubWrap>
          <LogoAndAbilities />

          <Navigation />

          <SubscribeForm />

          <FollowUs />
        </LogoNavSubWrap>
      </Container>

      <FooterBottomWrap>
        <BottomText>© 2023 All Rights Reserved.</BottomText>

        <BottomText> Terms of Service</BottomText>
      </FooterBottomWrap>
    </FooterWrap>
  );
};

export default Footer;
