import styled from "styled-components";

export const StyledCategory = styled.button`
  display: inline-block;
  cursor: pointer;
  color: ${(p) => p.theme.colors.categoryText};
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1;
  padding: 10px 15px 30px 15px;
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.categoryText};
  outline: transparent;
  background-color: ${(p) => p.theme.colors.mainBackground};
  transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    padding: 10px 30px 30px 30px;
  }

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
    border-bottom: 2px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const StyledCategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin-top: 50px;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
