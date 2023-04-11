import { Form, Field } from "formik";
import styled, { css } from "styled-components";
import backgroundMobile from "../../assets/images/authFormPage/RectangleMobile.png";
import backgroundTablet from "../../assets/images/authFormPage/RectangleTablet.png";
import backgroundDesktop from "../../assets/images/authFormPage/RectangleDesktop.png";
import { ReactComponent as MailSvg } from "../../assets/svg/authFormOrder/email.svg";
import { ReactComponent as PasswordSvg } from "../../assets/svg/authFormOrder/password.svg";
import { ReactComponent as UserSvg } from "../../assets/svg/authFormOrder/name.svg";
import { ReactComponent as SecureSvg } from "../../assets/svg/authFormOrder/notSecure.svg";
import { ReactComponent as ErrorSvg } from "../../assets/svg/authFormOrder/error.svg";
import { ReactComponent as SuccessSvg } from "../../assets/svg/authFormOrder/success.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
  padding: 0 20px 150px 20px;
  ${(p) => p.theme.sizes.tablet} {
    padding: 0 20px 60px 20px;
  }
  height: 100vh;
  width: 100vw;
  ${(p) => p.theme.flexCentered}
  align-items: flex-end;
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
    height: 605px;
    background-image: url(${backgroundTablet});
  }
  ${(p) => p.theme.sizes.desktop} {
    height: 280px;
    background-image: url(${backgroundDesktop});
  }
`;

export const Box = styled.div`
  position: relative;
  margin-bottom: 18px;
  color: ${(p) => p.theme.colors.secondaryText};
  padding: 28px 32px;
  width: 335px;
  max-height: 350px;
  background-color: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  ${(p) => p.theme.sizes.tablet} {
    width: 500px;
    max-height: 481px;
    padding: 44px 50px;
  }
  ${(p) => p.theme.sizes.desktop} {
    margin-left: 532px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Heading = styled.h1`
  margin-bottom: 18px;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.16;
  letter-spacing: -0.02em;

  ${(p) => p.theme.sizes.tablet} {
    margin-bottom: 32px;
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  :not(:last-of-type) {
    margin-bottom: 12px;
    ${(p) => p.theme.sizes.tablet} {
      margin-bottom: 24px;
    }
  }

  :last-of-type {
    margin-bottom: 28px;

    ${(p) => p.theme.sizes.tablet} {
      margin-bottom: 50px;
    }
  }
`;

export const SuccesIcon = styled(SuccessSvg)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  ${(p) => p.theme.sizes.tablet} {
    top: 17.5px;
    right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const ErrorIcon = styled(ErrorSvg)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  ${(p) => p.theme.sizes.tablet} {
    top: 17.5px;
    right: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const SecureIcon = styled(SecureSvg)`
  width: 18px;
  height: 18px;
  top: 14px;
  right: 10px;
  position: absolute;
  ${(p) => p.theme.sizes.tablet} {
    top: 17.5px;
    right: 10px;
    width: 24px;
    height: 24px;
  }
`;
export const User = styled(UserSvg)`
  width: 18px;
  height: 18px;
  top: 14px;
  left: 15px;
  position: absolute;
  ${(p) => p.theme.sizes.tablet} {
    top: 17.5px;
    left: 11px;
    width: 24px;
    height: 24px;
  }
  stroke: ${(p) => p.theme.colors.secondaryIconColor};

  ${(p) =>
    p.$error &&
    css`
      stroke: ${(p) => p.theme.colors.inputErrorColor};
    `}
  ${(p) =>
    p.$success &&
    css`
      stroke: ${(p) => p.theme.colors.inputSuccessColor};
    `}
`;
export const Mail = styled(MailSvg)`
  width: 18px;
  height: 18px;
  top: 14px;
  left: 15px;
  position: absolute;
  ${(p) => p.theme.sizes.tablet} {
    top: 17.5px;
    left: 11px;
    width: 24px;
    height: 24px;
  }
  stroke: ${(p) => p.theme.colors.secondaryIconColor};

  ${(p) =>
    p.$error &&
    css`
      stroke: ${(p) => p.theme.colors.inputErrorColor};
    `}
  ${(p) =>
    p.$success &&
    css`
      stroke: ${(p) => p.theme.colors.inputSuccessColor};
    `}
`;
export const Password = styled(PasswordSvg)`
  width: 18px;
  height: 18px;
  top: 14px;
  left: 15px;
  position: absolute;
  ${(p) => p.theme.sizes.tablet} {
    top: 17.5px;
    left: 11px;
    width: 24px;
    height: 24px;
  }
  stroke: ${(p) => p.theme.colors.secondaryIconColor};
  ${(p) =>
    p.$error &&
    css`
      stroke: ${(p) => p.theme.colors.inputErrorColor};
    `}
  ${(p) =>
    p.$success &&
    css`
      stroke: ${(p) => p.theme.colors.inputSuccessColor};
    `}
    ${(p) =>
    p.$notSecure &&
    css`
      stroke: ${(p) => p.theme.colors.inputNotSecureColor};
    `}
`;

export const Input = styled(Field)`
  width: 100%;
  max-width: 400px;
  height: 45px;
  padding: 12px 0 12px 40px;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
  }

  color: ${(p) => p.theme.colors.secondaryText};
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 6px;

  ::placeholder {
    color: #ffffff;
  }

  ${(p) =>
    p.$error &&
    css`
      border-color: ${(p) => p.theme.colors.inputErrorColor};
    `}
  ${(p) =>
    p.$success &&
    css`
      border-color: ${(p) => p.theme.colors.inputSuccessColor};
    `}
    ${(p) =>
    p.$notSecure &&
    css`
      border-color: ${(p) => p.theme.colors.inputNotSecureColor};
    `}
`;

export const Button = styled(motion.button)`
  display: block;
  padding: 12px 100px;
  height: 45px;
  color: ${(p) => p.theme.colors.secondaryText};
  background: ${(p) => p.theme.colors.accentColor};

  border-radius: 6px;
  border: none;
  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
  }
`;

export const Link = styled(motion(NavLink))`
  position: absolute;
  left: 50%;
  bottom: -36px;
  transform: translate(-50%);
  color: ${(p) => p.theme.colors.secondaryText};
  text-decoration: underline;
`;

export const Error = styled.p`
  color: ${(p) => p.theme.colors.inputErrorColor};
  font-size: 10px;
  line-height: 2;
  ${(p) => p.theme.sizes.tablet} {
    font-size: 14px;
  }
`;

export const ErrorLast = styled.p`
  color: ${(p) => p.theme.colors.inputErrorColor};
  font-size: 10px;
  line-height: 2;

  ${(p) => p.theme.sizes.tablet} {
    font-size: 14px;
  }
  :last-of-type {
    margin-bottom: 15px;

    ${(p) => p.theme.sizes.tablet} {
      margin-bottom: 25px;
    }
  }

  ${(p) =>
    p.$notSecure &&
    css`
      color: ${(p) => p.theme.colors.inputNotSecureColor};
    `}
`;
