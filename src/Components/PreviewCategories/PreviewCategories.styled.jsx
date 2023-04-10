import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RecipesList = styled.ul`
  max-width: 343px;
  margin: 0 auto;
  ${(p) => p.theme.sizes.tablet} {
    max-width: unset;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
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

export const RecipeTitle = styled.p`
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.cardsText};
`;

export const CategoriesWrapper = styled.div`
  max-width: 343px;
  margin: 0 auto;
  ${(p) => p.theme.sizes.tablet} {
    max-width: 704px;
    display: flex;
    flex-wrap: wrap;
  }
  ${(p) => p.theme.sizes.desktop} {
    max-width: 1240px;
  }
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  ${(p) => p.theme.sizes.tablet} {
    margin-right: auto;
    font-size: ${(p) => p.theme.fontSizes.xl};
    line-height: 1;
    margin-bottom: 40px;
  }
  ${(p) => p.theme.sizes.desktop} {
    font-size: ${(p) => p.theme.fontSizes.xl};
    line-height: 1;
    margin-bottom: 50px;
  }
`;

export const WrapperLink = styled.div`
  text-align: right;
  margin-top: 24px;
  margin-bottom: 32px;
  ${(p) => p.theme.sizes.tablet} {
    margin-left: auto;
    margin-top: 40px;
  }
  ${(p) => p.theme.sizes.desktop} {
    margin-top: 50px;
    margin-bottom: 14px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 24px 10px 24px;
  background-color: #8aa936;
  color: #fafafa;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  border-radius: 5px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.28;
`;

export const Nav = styled(NavLink)`
  display: block;
  text-align: center;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.5;
  color: ${(p) => p.theme.colors.darkText};
  background-color: transparent;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  padding: 14px 32px 14px 32px;
  width: 195px;
  margin: 8px auto 0 auto;
  ${(p) => p.theme.sizes.tablet} {
    margin: 0 auto 0 auto;
    padding: 20px 52px 20px 52px;
    width: 239px;
  }

  :hover {
    color: ${(p) => p.theme.colors.otherCategoriesButton};
    background-color: ${(p) => p.theme.colors.otherCategoriesHover};
  }
`;
