import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../../assets/svg/ckeckIcon/checkbox.svg";

export const Box = styled.div`
  display: flex;
  justifycontent: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-left: 28px;
  cursor: pointer;

  border: 2px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  ${(p) => p.theme.sizes.tablet} {
    width: 35px;
    height: 35px;
    margin-left: 78px;
  }

  ${(p) => p.theme.sizes.desktop} {
    width: 35px;
    height: 35px;
    margin-left: 151px;
  }
`;

export const SvgCheck = styled(CheckIcon)`
  width: 8.7px;
  height: 8.7px;
  margin: 0 auto;

  ${(p) => p.theme.sizes.tablet} {
    width: 17px;
    height: 17px;
  }
`;
