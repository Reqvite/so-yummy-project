import styled from "styled-components";

import { ReactComponent as ArrowIcon } from "../../../../assets/svg/ArrowIconList/ArrowIconList.svg";
import { ReactComponent as Close } from "../../../../assets/svg/CloseMenuIcon/closeMenuIcon.svg";

export const Wrap = styled.div``;

export const IngredientSelectionItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  :not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const IngredientWrap = styled.div`
  position: relative;
  width: 198px;
  height: 53px;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    margin-right: 32px;
  }
`;

export const Arrow = styled(ArrowIcon)`
  width: 20px;
  height: 20px;
`;

export const ArrowWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  height: 53px;
  width: 32px;

  @media screen and (min-width: 768px) {
    height: 59px;
    width: 38px;
  }
`;

export const SearchIngredientInput = styled.input`
  display: block;
  background-color: ${(p) => p.theme.colors.ingredientInputBg};
  outline: transparent;
  height: 53px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};
  width: 194px;
  border-radius: 6px;
  padding: 16px 32px 16px 16px;
  border: 1px solid transparent;

  ::placeholder {
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.colors.mainText};
    opacity: 0.5;
  }
  @media screen and (min-width: 768px) {
    height: 59px;
    width: 398px;
    font-size: 16px;
    padding: 16px 38px 16px 16px;

    ::placeholder {
      font-size: 16px;
    }
  }
  border: 1px solid rgba(250, 250, 250, 0.2);
`;

export const AllIngredientsSelectionList = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  z-index: 5;
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  max-height: 154px;
  padding: 8px 18px;
  pointer-events: all;
  cursor: pointer;
  color: ${(p) => p.theme.colors.notFoundTitle};
  background-color: ${(p) => p.theme.colors.addRecipeDropDownColor};

  @media screen and (min-width: 768px) {
    max-height: 172px;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 12px;
    height: 93px;
    background-color: #e7e5e5;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: transparent;
    border-radius: 12px;
  }
`;
export const AllIngredientsSelectionItem = styled.li`
  color: ${(p) => p.theme.colors.mainText};

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const AmountWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: baseline;
  width: 84px;
  height: 53px;
  border: 1px solid rgba(250, 250, 250, 0.2);
  border-radius: 18px;
  background: ${(p) => p.theme.colors.ingredientInputBg};
  @media screen and (min-width: 768px) {
    height: 59px;
    width: 97px;
  }
  @media screen and (min-width: 1440px) {
    width: 99px;
  }
`;

export const AmountInput = styled.input`
  display: block;
  background-color: ${(p) => p.theme.colors.ingredientInputBg};
  border: none;
  outline: transparent;
  color: ${(p) => p.theme.colors.mainText};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  max-width: 30px;
  height: 53px;
  justify-content: center;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 16px 2px 16px 2px;
  text-align: center;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    opacity: 0.5;
  }
  @media screen and (min-width: 768px) {
    height: 59px;
    max-width: 40px;
    font-size: 18px;
    padding: 16px 0px 16px 0px;

    ::placeholder {
      font-size: 18px;
    }
  }
`;

export const UnitsWrap = styled.div`
  flex-shrink: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  height: 53px;
  width: 51px;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.ingredientInputBg};

  @media screen and (min-width: 768px) {
    height: 59px;
    width: 55px;
  }
  @media screen and (min-width: 1440px) {
    width: 57px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 33px;
  border: none;
  background-color: inherit;
  stroke: rgba(51, 51, 51, 0.3);
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 157px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 60px;
  }
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  stroke: ${(p) => p.theme.colors.mainIconColor};
  width: 18px;
  height: 18px;
`;
export const ErrorMessage = styled.p`
  position: absolute;
  left: 0;
  bottom: -15px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.inputErrorColor};
`;
