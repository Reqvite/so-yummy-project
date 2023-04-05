import styled from "styled-components";

import imgTop1x from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-mob.png";
import imgTop2x from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-mob@2x.png";
import imgTopTab1x from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-tab.png";
import imgTopTab2x from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-tab@2x.png";
import imgTopDesktop1x from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-desc.png";
import imgTopDesktop2x from "../../assets/images/Footer/BackgroundImageTop/leafs-footer-desc@2x.png";

import imgBottom1x from "../../assets/images/Footer/BackgroundImageBottom/mob1x.png";
import imgBottom2x from "../../assets/images/Footer/BackgroundImageBottom/mob2x.png";
import imgBottomTab1x from "../../assets/images/Footer/BackgroundImageBottom/tab1x.png";
import imgBottomTab2x from "../../assets/images/Footer/BackgroundImageBottom/tab2x.png";
import imgBottomDesktop1x from "../../assets/images/Footer/BackgroundImageBottom/desktop1x.png";
import imgBottomDesktop2x from "../../assets/images/Footer/BackgroundImageBottom/desktop2x.png";

export const FooterWrap = styled.footer`
  position: relative;
  background-color: ${(p) => p.theme.colors.footerBackground};
  color: ${(p) => p.theme.colors.footerText};
`;

export const LogoNavSubWrap = styled.div`
  padding-top: 28px;
  padding-bottom: 19px;

  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const GreenLeafsTop = styled.div`
  position: absolute;
  top: -200px;
  left: 0;
  width: 256px;
  height: 392px;
  background-image: url(${imgTop1x});
  background-repeat: no-repeat;
  background-size: contain;
  /* z-index: -1; */
  /* filter: blur(4.5px); */

  @media screen and (min-resolution: 192dpi) {
    background-image: url(${imgTop2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${imgTopTab1x});
    width: 423px;
    height: 646px;
    top: -374px;

    @media screen and (min-resolution: 192dpi) {
      background-image: url(${imgTopTab2x});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${imgTopDesktop1x});
    width: 558px;
    height: 852px;
    top: -438px;

    @media screen and (min-resolution: 192dpi) {
      background-image: url(${imgTopDesktop2x});
    }
  }
`;

export const FooterBottomWrap = styled.div`
  display: flex;
  gap: 14px;
  position: relative;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 28px 73px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  background-image: url(${imgBottom1x});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 160px 172px;

  @media screen and (min-resolution: 192dpi) {
    background-image: url(${imgBottom2x});
  }

  @media screen and (min-width: 768px) {
    height: 78px;
    background-size: 290px 313px;
    background-image: url(${imgBottomTab1x});

    @media screen and (min-resolution: 192dpi) {
      background-image: url(${imgBottomTab2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgBottomDesktop1x});
    height: 114px;
    background-size: 438px 474px;
    @media screen and (min-resolution: 192dpi) {
      background-image: url(${imgBottomDesktop2x});
    }
  }
`;

export const BottomText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.darkText};

  :first-child {
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
