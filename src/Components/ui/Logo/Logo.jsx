import styled from "styled-components";
import { ReactComponent as SvgLogo } from "../../../assets/svg/logo/logo.svg";

const Logo = ({ width, height }) => {
  return <MainLogo width={width} height={height} />;
};

export default Logo;

const MainLogo = styled(SvgLogo)`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;
