import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { ReactComponent as SvgOrderWhite } from "../../assets/svg/authFormOrder/Order-food-pana-white.svg";
import { ReactComponent as SvgOrderBlack } from "../../assets/svg/authFormOrder/Order-food-pana-black.svg";
const AuthSvg = () => {
  const matches = useMediaQuery("(min-width: 768px) and (max-width: 1240px)");

  return matches ? <FormSvgBlack /> : <FormSvgWhite />;
};

export default AuthSvg;

const FormSvgWhite = styled(SvgOrderWhite)`
  position: absolute;
  z-index: -1;
  width: 285px;
  height: 250px;

  left: 50%;
  transform: translate(-50%, -50%);

  ${(p) => p.theme.sizes.desktop} {
    width: 532px;
    height: 468px;
    left: -300px;
    bottom: -200px;
  }
  @media (max-width: 767px) {
    top: -94px;
  }
`;

const FormSvgBlack = styled(SvgOrderBlack)`
  position: absolute;
  z-index: -1;
  width: 285px;
  height: 250px;
  top: -94px;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(p) => p.theme.sizes.tablet} {
    width: 50vw;
    height: 34vh;
    top: -130px;
  }
`;
