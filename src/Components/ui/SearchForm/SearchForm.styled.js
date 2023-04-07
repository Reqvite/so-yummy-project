import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 100%;
  ${(p) => p.theme.sizes.mobile} {
    max-width: 295px;
  }
  ${(p) => p.theme.sizes.tablet} {
    min-width: 362px;
  }
  ${(p) => p.theme.sizes.desktop} {
    min-width: 510px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 53px;
  padding: 16px 120px 16px 32px;

  color: ${(p) => p.theme.colors.cardsText};
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  outline: none;
  background-color: ${(p) => p.theme.colors.footerText};
  ${(p) => p.theme.sizes.tablet} {
    height: 65px;
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  ${(p) => p.theme.flexCentered};
  width: 113px;
  height: 53px;
  color: ${(p) => p.theme.colors.footerText};
  border-radius: 24px 44px;
  border: 1px solid transparent;
  background-color: ${(p) => p.theme.colors.accentColor};

  ${(p) => p.theme.sizes.tablet} {
    width: 161px;
    height: 65px;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.footerBackground};
  }
`;
