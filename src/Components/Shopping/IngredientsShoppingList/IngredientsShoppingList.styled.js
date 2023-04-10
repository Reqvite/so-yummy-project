import styled from "styled-components";

export const Box = styled.div`
  margin-top: 50px;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 72px;
  }
`;

export const List = styled.ul``;

export const RecipeTitle = styled.h2`
  :not(:first-of-type) {
  }

  margin-bottom: 10px;
`;

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
