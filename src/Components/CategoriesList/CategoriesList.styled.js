import styled from "styled-components";

export const StyledCategory = styled.button`
  display: inline-block;
  cursor: pointer;
  color: ${(p) => p.theme.colors.categoryText};
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1;
  padding: 10px 15px 30px 15px;
  transition: all 0.3s ease-in-out;
  border: none;
  border-bottom: 2px solid ${(p) => p.theme.colors.categoryText};
  outline: transparent;
  background-color: ${(p) => p.theme.colors.mainBackground};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
    border-bottom: 2px solid ${(p) => p.theme.colors.accentColor};
  }

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    padding: 10px 30px 30px 30px;
  }
`;

export const StyledCategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  height: 56px;
  margin-top: 50px;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
