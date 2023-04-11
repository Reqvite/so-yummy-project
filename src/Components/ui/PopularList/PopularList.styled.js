import { Link } from "react-router-dom";
import styled from "styled-components";

export const PopularRecipesWrap = styled.div`
  margin-top: 100px;
`;

export const BoxTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: var(--mainTextColor);
  margin-bottom: 32px;
`;

export const List = styled.ul`
  ${(p) => p.theme.sizes.tablet} {
    width: 343px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1239.98px) {
    display: flex;
    align-items: baseline;
    gap: 32px;
  }
  ${(p) => p.theme.sizes.desktop} {
    width: 319px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  } ;
`;

export const Item = styled.li`
  :not(:first-child) {
    margin-top: 24px;
  }
  position: relative;
  border-radius: 8px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    opacity: 0.17;
    border: 1px solid #707070;
  }

  @media screen and (min-width: 767px) and (max-width: 1240px) {
    :nth-last-child(-n + 2) {
      display: none;
    }
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  height: 98px;
  gap: 12px;
`;

export const ImgBox = styled.div`
  width: 104px;
  height: 85px;
  border-radius: 8px;
  overflow: hidden;
`;

export const TextBox = styled.div`
  width: 213px;
  padding-bottom: 20px;
  ${(p) => p.theme.sizes.tablet} {
    width: 209px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.titleText};
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.notFoundText};
`;
