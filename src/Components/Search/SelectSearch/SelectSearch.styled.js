import styled from "styled-components";

export const FormContainer = styled.div`
  ${(p) => p.theme.flexCentered};
  margin-top: 24px;
  margin-bottom: 40px;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 28px;
  }

  ${(p) => p.theme.sizes.desktop} {
    margin-bottom: 90px;
  }
`;

export const TextStyled = styled.span`
  font-weight: 500;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.titleText};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xs};
    line-height: 1.28;
  }

  ${(p) => p.theme.sizes.desktop} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    line-height: 1.33;
  }
`;
