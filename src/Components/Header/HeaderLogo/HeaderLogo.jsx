import Logo from "Components/ui/Logo/Logo";
import { useMediaQuery } from "@mui/material";

const HeaderLogo = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  let width = 44;
  let height = 44;

  if (isMobile) {
    width = 40;
    height = 40;
  }

  return <Logo width={width} height={height} />;
};

export default HeaderLogo;
