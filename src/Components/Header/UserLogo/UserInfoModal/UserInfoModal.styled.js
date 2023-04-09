import styled, { css, keyframes } from "styled-components";
import { ReactComponent as EditIcon } from "../../../../assets/svg/userInfoModal/edit-01.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/svg/userInfoModal/plus.svg";
import { ReactComponent as UserIcon } from "../../../../assets/svg/userInfoModal/user-01.svg";
import { ReactComponent as UserIconBlack } from "../../../../assets/svg/userInfoModal/user-black.svg";
import { Field } from "formik";
import { motion } from "framer-motion";

export const slideDown = keyframes`
  0% {
   opacity: 0;
  }
  100% {
     opacity: 1;
  }
`;

export const Wrap = styled.div`
  width: 330px;
  height: 327px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  animation-name: ${slideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 402px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 425px;
    border-radius: 30px;
  }

  border: 2px solid #d9d9d9;
  ${(p) =>
    p.$isDark &&
    css`
      border: 2px solid #8baa36;
    `};
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgBox = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;

  ${(p) => p.theme.sizes.tablet} {
    width: 103px;
    height: 103px;
  }
`;

export const UserImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserSvg = styled(UserIcon)`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(p) => p.theme.sizes.tablet} {
    width: 47px;
    height: 47px;
  }
`;

export const PlusSvg = styled(PlusIcon)`
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: 0;
  right: 0;

  ${(p) => p.theme.sizes.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const FieldStyled = styled(Field)`
  opacity: 0;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  cursor: pointer;
`;

export const InputLabel = styled.label`
  position: relative;
`;

export const UserSvgBlack = styled(UserIconBlack)`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 15px;
  left: 15.5px;

  ${(p) => p.theme.sizes.tablet} {
    bottom: 18px;
    width: 22px;
    height: 22px;
  }
  stroke: ${(p) => p.theme.colors.mainIconColor};
`;

export const EditSvg = styled(EditIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 15px;
  right: 15.5px;

  ${(p) => p.theme.sizes.tablet} {
    bottom: 18px;
    width: 22px;
    height: 22px;
  }
  stroke: ${(p) => p.theme.colors.mainIconColor};
`;

export const Input = styled(Field)`
  color: ${(p) => p.theme.colors.mainText};
  margin-top: 52px;

  width: 248px;
  height: 48px;
  padding: 16.5px 36.5px 16.5px 39.5px;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
  }

  background-color: transparent;
  border: 2px solid #c4c4c4;
  border-radius: 6px;

  ::placeholder {
    color: #ffffff;
  }

  ${(p) => p.theme.sizes.tablet} {
    padding: 16.5px 36.5px 16.5px 51px;
    width: 400px;
  }
  outline: none;
`;

export const Button = styled(motion.button)`
  margin-top: 24px;
  display: block;

  width: 248px;
  height: 45px;
  color: ${(p) => p.theme.colors.secondaryText};
  background: ${(p) => p.theme.colors.accentColor};

  border-radius: 6px;
  border: none;
  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
    margin-top: 32px;
    width: 400px;
  }
`;

export const Error = styled.p`
  font-size: 10px;
  line-height: 2;
  ${(p) => p.theme.sizes.tablet} {
    font-size: 14px;
  }
`;
