import styled from "styled-components";

import { ReactComponent as ArrowIcon } from "../../../../assets/svg/ArrowIconList/ArrowIconList.svg";
import { ReactComponent as Close } from "../../../../assets/svg/CloseMenuIcon/closeMenuIcon.svg";

export const Wrap = styled.div``;

export const IngredientSelectionItem = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  :not(:last-child) {
    margin-bottom: 18px;
  }
@media screen and (min-width: 768px) {    
  :not(:last-child) 
    margin-bottom: 24px;
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
  background-color: #d9d9d9;
  border: none;
  outline: transparent;
  height: 53px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};
  width: 198px;
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
  color: rgba(0, 0, 0, 0.5);
  background: ${(p) => p.theme.colors.elementsBackground};

  @media screen and (min-width: 768px) {
    max-height: 172px;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(p) => p.theme.colors.elementsBackground};
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    height: 93px;
    border-radius: 12px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #e7e5e5;
  }
`;
export const AllIngredientsSelectionItem = styled.li`
  color: rgba(0, 0, 0, 0.5);

  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const AmountWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: baseline;
  min-width: 84px;
  height: 53px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #d9d9d9;
`;

export const AmountInput = styled.input`
  display: block;
  background-color: #d9d9d9;
  border: none;
  outline: transparent;
  height: 53px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  max-width: 40px;
  padding: 16px 2px 15px 2px;
  text-align: end;

  ::placeholder {
    letter-spacing: -0.02em;
    opacity: 0.5;
  }
  @media screen and (min-width: 768px) {
    height: 59px;
    max-width: 44px;
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
    }
  }
`;

export const UnitsWrap = styled.div`
  flex-shrink: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 53px;
  width: 84px;
  cursor: pointer;
  background-color: rgb(217, 217, 217);

  @media screen and (min-width: 768px) {
    height: 59px;
    width: 97px;
  }
  @media screen and (min-width: 1440px) {
    width: 99px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 33px;
  border: none;
  background-color: inherit;
  stroke: #333333;
  @media screen and (min-width: 768px) {
    margin-left: 157px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 60px;
  }
`;

export const CloseIcon = styled(Close)`
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
  color: #e74a3b;
`;
