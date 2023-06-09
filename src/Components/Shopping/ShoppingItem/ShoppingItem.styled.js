import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as CloseSvg } from "../../../assets/svg/crossIcon/closeIcon.svg";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  :nth-of-type(2) {
    margin-top: 32px;
    ${(p) => p.theme.sizes.tablet} {
      margin-top: 51px;
    }
  }

  margin-top: 25px;
  border-bottom: ${(p) => p.theme.borders.shoppingListBorder};
  ${(p) => p.theme.sizes.tablet} {
    padding-bottom: 42px;
    margin-top: 45px;
  }
  :last-child {
    border-bottom: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;

  ${(p) => p.theme.sizes.tablet} {
    width: 81px;
    height: 81px;
  }
`;

export const Title = styled.h2`
  margin-left: 10px;

  font-size: 16px;
  line-height: 24px;

  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.2;
  font-weight: ${(p) => p.theme.fontWeights.medium};

  color: ${(p) => p.theme.colors.cardsText};

  ${(p) => p.theme.sizes.tablet} {
    margin-left: 16px;

    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;
export const ImgBox = styled.div`
  background-color: ${(p) => p.theme.colors.secondaryBackground};
  border-radius: 6px;
  width: 60px;
  height: 60px;
  ${(p) => p.theme.flexCentered}

  ${(p) => p.theme.sizes.tablet} {
    width: 93px;
    height: 97px;
  }
`;

export const Measure = styled.span`
  color: ${(p) => p.theme.colors.secondaryText};
  padding: 4px 10px;

  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 4px;

  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.2;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div`
  background-color: transparent;
  border: none;
  margin-left: 30px;
  margin-right: 20px;
  width: 25px;
  height: 25px;

  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    margin-left: 120px;
    margin-right: 55px;
  }

  ${(p) => p.theme.sizes.desktop} {
    margin-left: 190px;
  }
`;

export const CloseIcon = styled(motion(CloseSvg))`
  width: 25px;
  height: 25px;
  stroke: ${(p) => p.theme.colors.mainIconColor};
`;
