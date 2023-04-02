import styled from "styled-components";

export const StyledCategory = styled.button`
  display: inline-block;
  cursor: pointer;
  color: ${(p) => p.theme.colors.categoryText};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  padding: 10px 20px;
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
`;

export const StyledCategoryList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin-top: 100px;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
