import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseMenuIcon } from "../../../../assets/svg/CloseMenuIcon/closeMenuIcon.svg";

const CloseButton = ({ toggleModal }) => {
  return (
    <Button
      onClick={() => {
        toggleModal();
      }}
    >
      <CloseMenuIcon />
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default CloseButton;
