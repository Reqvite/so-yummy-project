import { Form, Field } from "formik";
import styled from "styled-components";
import backgroundMobile from "../../assets/images/authFormPage/RectangleMobile.png";
import backgroundTablet from "../../assets/images/authFormPage/RectangleTablet.png";
import backgroundDesktop from "../../assets/images/authFormPage/RectangleDesktop.png";

export const Container = styled.div`
  padding: 0 20px;
  height: 100vh;
  width: 100vw;
  ${(p) => p.theme.flexCentered}
`;

export const BackgroundImg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% auto;
  object-fit: cover;
  height: 50vh;
  width: 100%;
  background-image: url(${backgroundMobile});
  ${(p) => p.theme.sizes.tablet} {
    height: 606px;
    background-image: url(${backgroundTablet});
  }
  ${(p) => p.theme.sizes.desktop} {
    height: 280px;
    background-image: url(${backgroundDesktop});
  }
`;

export const Box = styled.div`
  color: #fafafa;
  padding: 44px 50px;
  width: 500px;
  height: 484px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const Heading = styled.h1`
  margin-bottom: 32px;
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  :not(:last-of-type) {
    margin-bottom: 24px;
  }
  :last-of-type {
    margin-bottom: 50px;
  }
`;
