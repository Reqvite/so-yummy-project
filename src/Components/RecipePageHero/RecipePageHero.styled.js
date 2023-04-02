import styled from "styled-components";

export const MainPageTitle = styled.h1`
  color: ${(p) => p.theme.colors.accentColor};
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1;

  letter-spacing: ${(p) => p.theme.letterSpacings.base};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}
  line-height: 1.33;
  text-align: center;
  letter-spacing: ${(p) => p.theme.letterSpacings.base}

  color: #22252a;
`;
