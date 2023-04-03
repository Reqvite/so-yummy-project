import styled from "styled-components";
import { ReactComponent as SvgLogo } from "../../../assets/svg/logo/logo.svg";
import { ReactComponent as LogoLight } from "../../../assets/svg/logo/logoLight.svg";
import { useLocation } from "react-router";
import { useMediaQuery } from "@mui/material";

const Logo = ({ width, height, menu, footer }) => {
  const path = useLocation().pathname;
  const isMobile = useMediaQuery("(max-width: 767px)");

  if (path === "/main" && isMobile && !menu) {
    return <LogoLight width={width} height={height} />;
  }
  if (footer) {
    return <LogoLight width={width} height={height} />;
  }
  return <MainLogo width={width} height={height} />;
};

const MainLogo = styled(SvgLogo)`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;
export default Logo;
