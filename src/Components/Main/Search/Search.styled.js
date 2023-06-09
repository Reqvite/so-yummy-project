import { motion } from "framer-motion";
import styled from "styled-components";

export const FormWrapper = styled.div`
  padding-bottom: 147px;
`;
export const Form = styled.form`
  position: relative;
  width: 100%;
  margin: 24px auto 0px auto;
  max-width: 295px;
  ${(p) => p.theme.sizes.tablet} {
    min-width: 362px;
    margin: 32px 0 0 0;
  }
  ${(p) => p.theme.sizes.desktop} {
    min-width: 510px;
    margin: 50px 0 0 0;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 17px 122px 17px 32px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.5;
  outline: none;
  color: ${(p) => p.theme.colors.categoryText};
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  background-color: ${(p) => p.theme.colors.mainBackground};
  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
    font-size: 16px;
    line-height: 1.5;
    padding: 18px 135px 18px 38px;
  }
  ${(p) => p.theme.sizes.desktop} {
    height: 70px;
    padding: 23px 266px 23px 48px;
  }
`;

export const SearchBtn = styled(motion.button)`
  position: absolute;
  right: -2px;
  bottom: 0;
  width: 113px;
  height: 52px;
  color: ${(p) => p.theme.colors.secondaryText};
  border-radius: 24px 44px;
  border: inherit;
  background-color: ${(p) => p.theme.colors.mainPageButton};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.5;
  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    height: 59px;
    width: 161px;
    font-size: 16px;
    line-height: 1.5;
  }
  ${(p) => p.theme.sizes.desktop} {
    height: 70px;
  }

  :hover,
  :focus {
    background-color: ${(p) => p.theme.colors.mainSearchBtnHover};
  }
`;
