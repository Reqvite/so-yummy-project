import styled, { css, keyframes } from "styled-components";
import { ReactComponent as UserEdit } from "../../../../assets/svg/UserEditIcon/userEditIcon.svg";
import { ReactComponent as UserButtonArrow } from "../../../../assets/svg/UserButtonArrow/userButtonArrow.svg";
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
  background-color: ${(p) => p.theme.colors.mainBackground};
  position: absolute;
  top: 72px;
  right: 60px;
  width: 161px;
  height: 134px;
  padding: 18px;
  animation-name: ${slideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    top: 78px;
    right: 250px;
  }
  @media screen and (min-width: 1440px) {
    top: 78px;
    right: 350px;
  }

  border-radius: 8px;

  ${(p) =>
    p.$isDark &&
    css`
      border: 2px solid #8baa36;
    `};
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
  height: 23px;
  padding: 0;
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.mainText};
  line-height: 1.6;
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }

  transition: color 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const ButtonLogout = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  border: 0;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 18px 44px;
  color: ${(p) => p.theme.colors.secondaryText};
  display: inline-flex;
  justify-content: center;
  line-height: inherit;
  height: 43px;
  width: 100%;
  margin-top: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  cursor: pointer;

  &:hover {
    color: #23262a;
  }

  transition: color 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
export const Text = styled.p``;

export const EditIcon = styled(UserEdit)`
  stroke: ${(p) => p.theme.colors.mainIconColor};

  ${Button}:hover & {
    stroke: ${(p) => p.theme.colors.accentColor};
  }

  transition: stroke 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
export const ArrowIcon = styled(UserButtonArrow)`
  margin-left: 6px;
  stroke: #fafafa;
  ${ButtonLogout}:hover & {
    stroke: #23262a;
  }
  transition: stroke 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
