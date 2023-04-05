import styled, { keyframes } from "styled-components";
import { ReactComponent as UserEdit } from "../../../../assets/svg/UserEditIcon/userEditIcon.svg";
import { ReactComponent as UserButtonArrow } from "../../../../assets/svg/UserButtonArrow/userButtonArrow.svg";

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
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 8px;
  padding: 18px;
  animation-name: ${slideDown};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @media screen and (min-width: 768px) {
    top: 78px;
    right: 250px;
    border: 0px;
  }
  @media screen and (min-width: 1440px) {
    top: 78px;
    right: 350px;
  }
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
`;

export const ButtonLogout = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 18px 44px;
  color: ${(p) => p.theme.colors.secondaryText};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: inherit;
  height: 43px;
  width: 100%;
  margin-top: 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;
export const Text = styled.p``;

export const EditIcon = styled(UserEdit)`
  stroke: ${(p) => p.theme.colors.mainIconColor};
`;
export const ArrowIcon = styled(UserButtonArrow)`
  margin-left: 6px;
`;
