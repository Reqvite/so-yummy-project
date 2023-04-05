import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  gap: 10px;
  width: 61px;
  height: 28px;
  background-color: ${(p) => p.theme.colors.themeButtonBg};
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  margin-left: 50px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Span = styled(motion.span)`
  position: absolute;
  width: 21px;
  height: 21px;
  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: 50%;
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25)); ;
`;
