import styled, { css } from "styled-components";
import { ReactComponent as TrashIcon } from "../../../assets/svg/trashIcon/trash-01.svg";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  height: 24px;
  width: 24px;
  ${(p) => p.theme.flexCentered};
  background-color: ${(p) => p.$bgColor};
  ${(p) => p.theme.sizes.tablet} {
    margin-bottom: 18px;
    height: 38px;
    width: 38px;
  }

  ${(p) => p.theme.sizes.desktop} {
    margin-bottom: 30px;
    height: 44px;
    width: 44px;
  }

  border: none;
  border-radius: 4px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #d84026;
  }
`;

export const TrashSvg = styled(TrashIcon)`
  width: 14px;
  height: 14px;
  ${(p) => p.theme.sizes.tablet} {
    width: 22px;
    height: 22px;
  }
  stroke: ${(p) => p.theme.colors.mainIconColor};

  ${(p) =>
    p.$isMyRecipePage &&
    css`
      stroke: ${(p) => p.theme.colors.secondaryIconColor};
    `}
`;
