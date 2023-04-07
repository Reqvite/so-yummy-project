import styled from "styled-components";

export const Box = styled.div`
  margin-top: 144px;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 80px;
  }
`;

export const List = styled.ul``;

export const ListItemHeader = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 10px;
  width: 100%;
  height: 38px;
  max-width: 1240px;

  background-color: ${(p) => p.theme.colors.accentColor};
  border-radius: 8px;

  ${(p) => p.theme.sizes.tablet} {
    padding: 20px 20px;
  }

  ${(p) => p.theme.sizes.desktop} {
    padding: 17px 40px;
  }
`;

export const ListHeaderText = styled.span`
  color: ${(p) => p.theme.colors.secondaryText};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.5;
  :last-child {
    margin-left: 24px;

    ${(p) => p.theme.sizes.tablet} {
      margin-left: 78px;
    }

    ${(p) => p.theme.sizes.desktop} {
      margin-left: 142px;
    }
  }
  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
  }

  letter-spacing: 0.03em;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14.5px 29px 14px 14px;

  background: ${(p) => p.theme.colors.secondaryBackground};
  border-radius: 8px;
  :nth-of-type(2) {
    margin-top: 24px;
    ${(p) => p.theme.sizes.tablet} {
      margin-top: 32px;
    }
  }

  margin-top: 16px;

  ${(p) => p.theme.sizes.tablet} {
    padding: 33px 58px 33px 40px;
    margin-top: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 57px;
  height: 57px;

  ${(p) => p.theme.sizes.tablet} {
    width: 112px;
    height: 112px;
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

export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 46px;

  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    margin-left: 110px;
  }
`;
