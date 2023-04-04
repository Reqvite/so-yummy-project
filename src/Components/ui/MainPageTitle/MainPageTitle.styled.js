import styled from "styled-components";

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.titleText};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1;
  margin-bottom: ${(p) => p.margBottom || null};

  letter-spacing: ${(p) => p.theme.letterSpacings.base};

  ${(p) => p.theme.sizes.tablet} {
    font-size: 32px;
  }

  ${(p) => p.theme.sizes.desktop} {
    font-size: 44px;
  }
`;
