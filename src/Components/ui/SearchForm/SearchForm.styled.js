import styled from "styled-components";

export const SearchBar = styled.div`
  ${(p) => p.theme.flexCentered};
  flex-direction: column;
  margin-top: ${(p) => p.margTop || null};
`;

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
  outline: none;
  border: 1px solid #f0f0f0;
  background-color: ${(p) => p.theme.colors.mainBackground};
  ${(p) => p.theme.sizes.tablet} {
    height: 64px;
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    &::placeholder {
      opacity: 0;
    }
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
  border: 1px solid #f0f0f0;
  background-color: ${(p) => p.theme.colors.accentColor};

  ${(p) => p.theme.sizes.tablet} {
    width: 161px;
    height: 65px;
  }
  ${(p) => p.theme.sizes.desktop} {
    height: 65px;
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.footerBackground};
  }
`;
