import styled from "styled-components";

export const RecipesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  align-items: center;
  list-style: none;

  ${(p) => p.theme.sizes.desktop} {
    gap: 100px 13px;
  }
`;

export const RecipeItem = styled.li`
  position: relative;
  display: block;
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 323px;
  border-radius: 8px;

  ${(p) => p.theme.sizes.mobile} {
    width: 343px;
  }

  ${(p) => p.theme.sizes.tablet} {
    width: 336px;
  }

  ${(p) => p.theme.sizes.desktop} {
    width: 300px;
  }
`;

export const RecipeTitleWrapper = styled.div`
  position: absolute;
  width: 87%;
  bottom: 26px;
  left: 18px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.elementsBackground};
  ${(p) => p.theme.sizes.mobile} {
    width: 307px;
  }

  ${(p) => p.theme.sizes.tablet} {
    width: 300px;
  }

  ${(p) => p.theme.sizes.desktop} {
    width: 268px;
  }
`;

export const RecipeTitle = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.cardsText};
`;
