import styled, { keyframes } from "styled-components";
import { ReactComponent as EditIcon } from "../../../../assets/svg/userInfoModal/edit-01.svg";
import { ReactComponent as PlusIcon } from "../../../../assets/svg/userInfoModal/plus.svg";
import { ReactComponent as UserIcon } from "../../../../assets/svg/userInfoModal/user-01.svg";
import { Field } from "formik";

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

  background: #d9d9d9;

  ${(p) => p.theme.sizes.tablet} {
    width: 103px;
    height: 103px;
  }
`;

export const UserImg = styled.img``;

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

export const Input = styled(Field)`
  color: ${(p) => p.theme.colors.mainText};
  margin-top: 52px;
  width: 100%;
  max-width: 248px;
  height: 48px;
  padding: 16.5px 13.5px 16.5px 39.5px;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
  }

  background-color: transparent;
  border: 1px solid #23262a;
  border-radius: 6px;

  ::placeholder {
    color: #ffffff;
  }

  ${(p) => p.theme.sizes.tablet} {
    padding: 16.5px 13.5px 16.5px 51px;
    max-width: 400px;
  }
`;

export const FieldStyled = styled(Field)`
  opacity: 0;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  cursor: pointer;
`;
