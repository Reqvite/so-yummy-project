import { ReactComponent as MobMenuBtn } from "../../../../assets/svg/BurgerMenu/burgerMenu.svg";
import styled from "styled-components";
import React from "react";

const BurgerButton = ({ toggleModal }) => {
  return (
    <Button
      onClick={() => {
        toggleModal();
      }}
    >
      <Icon />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const Icon = styled(MobMenuBtn)`
  width: 28px;
  height: 28px;
  @media screen and (min-width: 768px) {
    .svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export default BurgerButton;
