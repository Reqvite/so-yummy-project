import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 100%;
  margin: 24px auto 147px auto;
  max-width: 295px;
  ${(form) => form.theme.sizes.tablet} {
    min-width: 362px;
    margin: 32px 0 0 0;
  }
  ${(form) => form.theme.sizes.desktop} {
    min-width: 510px;
    margin: 50px 0 0 0;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 17px 122px 17px 32px;
  font-weight: ${(input) => input.theme.fontWeights.regular};
  font-size: ${(input) => input.theme.fontSizes.xxs};
  line-height: 1.5;
  outline: none;
  color: ${(input) => input.theme.colors.categoryText};
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  background-color: ${(input) => input.theme.colors.footerText};
  ${(input) => input.theme.sizes.tablet} {
    height: 59px;
    font-size: 16px;
    line-height: 1.5;
    padding: 18px 135px 18px 38px;
  }
  ${(input) => input.theme.sizes.desktop} {
    height: 70px;
    padding: 23px 266px 23px 48px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 113px;
  height: 52px;
  color: ${(button) => button.theme.colors.secondaryText};
  border-radius: 24px 44px;
  border: inherit;
  background-color: ${(button) => button.theme.colors.darkText};
  font-weight: ${(button) => button.theme.fontWeights.regular};
  font-size: ${(button) => button.theme.fontSizes.xs};
  line-height: 1.5;

  ${(button) => button.theme.sizes.tablet} {
    height: 59px;
    width: 161px;
    font-size: 16px;
    line-height: 1.5;
  }
  ${(button) => button.theme.sizes.desktop} {
    height: 70px;
  }
`;