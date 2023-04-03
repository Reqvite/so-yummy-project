import styled from "styled-components";
import { MainButton } from "Components/AuthNav/AuthNav.styled";

export const FormContainer = styled.div`
  ${(p) => p.theme.flexCentered};
  margin-top: 50px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  width: 295px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 53px;
  padding: 16px 120px 16px 32px;

  color: "#3E4462";
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  background-color: #fafafa;
  ${(p) => p.theme.sizes.tablet} {
    height: 66px;
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
    height: 66px;
    left: 60%;
  }
`;
