import styled from "styled-components";
import { ReactComponent as Minus } from "../../../assets/svg/MinusIcon/minus.svg";
import { ReactComponent as Plus } from "../../../assets/svg/PlusIcon/plus.svg";

export const Wrap = styled.div`
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;
export const ControlWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.cardsText};
`;
export const ControlButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border: ${(p) => p.theme.borders.addRecipeBorder};
  border-radius: 18px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 32px;
  }
`;

export const DecreaseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 7px 10px 7px 14px;
`;
export const MinusIcon = styled(Minus)`
  stroke: ${(p) => p.theme.colors.addRecipeMinusIcon};
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const IncreaseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 7px 10px 7px 14px;
`;

export const PlusIcon = styled(Plus)`
  stroke: rgba(51, 51, 51, 0.3);
  stroke-opacity: 1;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const AmountIngredientrs = styled.div`
  min-width: 16px;
  padding: 6px 3px;
  text-align: center;
  color: ${(p) => p.theme.colors.mainText};

  @media screen and (min-width: 768px) {
    min-width: 20px;
    padding: 4px 3px;
    text-align: center;
  }
`;

export const ErrorWrap = styled.div`
  position: relative;
`;

export const AddRecipeText = styled.p`
  color: ${(p) => p.theme.colors.mainText};
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 140%;
  left: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.inputErrorColor};
`;

export const IngredientsList = styled.ul``;
