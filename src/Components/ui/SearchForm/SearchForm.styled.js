import styled from "styled-components";
import { MainButton } from "Components/AuthNav/AuthNav.styled";

export const FormContainer = styled.div`
  ${(p) => p.theme.flexCentered};
  margin-top: ${(p) => p.margTop || null};
`;

export const Form = styled.form`
  width: 100%;
  ${(p) => p.theme.sizes.mobile} {
    width: 295px;
  }
  ${(p) => p.theme.sizes.tablet} {
    width: 362px;
  }
  ${(p) => p.theme.sizes.desktop} {
    width: 510px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 53px;
  padding: 16px 120px 16px 32px;

  color: ${(p) => p.theme.colors.cardsText};
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  background-color: ${(p) => p.theme.colors.footerText};
  ${(p) => p.theme.sizes.tablet} {
    height: 64px;
  }

  &:focus {
    outline: 1px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const SearchBtn = styled(MainButton)`
  ${(p) => p.theme.flexCentered};
  height: 53px;
  position: absolute;
  left: 64%;

  ${(p) => p.theme.sizes.tablet} {
    height: 65px;
    left: 55%;
  }
`;
