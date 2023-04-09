import styled from "styled-components";

export const DefaultImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DefaultImg = styled.img`
  width: 90%;
  height: 133px;
  margin-bottom: 24px;

  ${(p) => p.theme.sizes.mobile} {
    width: 208px;
  }

  ${(p) => p.theme.sizes.tablet} {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;

export const EmptyText = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1;
  letter-spacing: ${(p) => p.theme.letterSpacings.base};
  color: ${(p) => p.theme.colors.opacityText};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;
