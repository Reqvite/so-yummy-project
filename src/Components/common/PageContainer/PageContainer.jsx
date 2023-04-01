import { MainContainer, RotateBlock } from "./PageContainer.styled";

import { useMediaQuery } from "@mui/material";

const PageContainer = ({ children }) => {
  const adaptive = {
    width: 6,
    height: 6,
    top: 142,
    left: 150,
  };

  const phone = {
    width: 6,
    height: 6,
    top: 142,
    left: 247,
  };

  const tablet = {
    width: 12,
    height: 12,
    top: 155,
    left: 437,
  };

  const desktop = {
    width: 12,
    height: 12,
    top: 135,
    left: 807,
  };

  const adaptiveTwo = {
    top: 109,
    left: 250,
  };

  const phoneTwo = {
    top: 109,
    left: 349,
  };
  const tabletTwo = {
    top: 98,
    left: 726,
  };
  const desktopTwo = {
    top: 65,
    left: 1250,
  };
  const matchesAdaptive = useMediaQuery("(max-width: 374.8px)");
  const matchesMobile = useMediaQuery(
    "(min-width: 374.9px) and (max-width: 767.98px)"
  );
  const matchesTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1439.8px)"
  );
  const matchesDesktop = useMediaQuery("(min-width: 1439.9px)");

  const props = matchesAdaptive
    ? adaptive
    : matchesMobile
    ? phone
    : matchesTablet
    ? tablet
    : matchesDesktop && desktop;
  const propsTwo = matchesAdaptive
    ? adaptiveTwo
    : matchesMobile
    ? phoneTwo
    : matchesTablet
    ? tabletTwo
    : matchesDesktop && desktopTwo;

  return (
    <MainContainer>
      <RotateBlock />
      <RotateBlock
        {...props}
        background={(p) => p.theme.colors.footerBackground}
      />
      <RotateBlock {...propsTwo} />
      {children}
    </MainContainer>
  );
};

export default PageContainer;
