import styled from "styled-components";
import imgTop1 from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-mob.png";

const Footer = () => {
  return (
    <FooterWrap>
      <GreenLeafsTop></GreenLeafsTop>
      <FooterBottomWrap></FooterBottomWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  position: relative;
`;

const GreenLeafsTop = styled.div`
  position: absolute;
  top: -240px;
  left: 0;
  width: 320px;
  height: 240px;
  background-image: url(${imgTop1});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`;

const FooterBottomWrap = styled.div``;

export default Footer;
