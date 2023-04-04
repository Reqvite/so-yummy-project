import React from "react";
import styled, { useTheme } from "styled-components";
import { ReactComponent as CloseMenuIcon } from "../../../../assets/svg/CloseMenuIcon/closeMenuIcon.svg";
import { motion } from "framer-motion";

const CloseButton = ({ toggleModal }) => {
  const theme = useTheme();
  return (
    <Button
      whileHover={{ stroke: theme.colors.accentColor }}
      onClick={() => {
        toggleModal();
      }}
    >
      <CloseMenuIcon />
    </Button>
  );
};

const Button = styled(motion.button)`
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  stroke: ${(p) => p.theme.colors.mainIconColor};
`;

export default CloseButton;
