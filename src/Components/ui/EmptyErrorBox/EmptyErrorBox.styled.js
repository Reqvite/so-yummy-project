import styled from "styled-components";

export const ImgError = styled.img`
  margin: 50px auto 0 auto;
  width: 100%;
  max-width: 400px;
`;

export const ErrorText = styled.p`
  margin-top: 20px;
  text-align: center;

  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.29;

  letter-spacing: ${(p) => p.theme.lineHeights.base};
  ${(p) => p.theme.sizes.tablet} {
    margin-top: 14px;
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
  color: ${(p) => p.theme.colors.mainText};

  opacity: 0.5;
`;
