import styled from "styled-components";

export const Option = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding-top: 3px;
  width: 100%;
  height: 100%;
  justify-content: right;
  gap: 13px;
  font-size: 12px;
  line-height: 1;
  font-size: 14px;
`;

export const Title = styled.p`
  display: inline-flex;
  align-items: center;
  height: 19px;
`;

export const List = styled.ul`
  position: absolute;
  top: 27px;
  right: 0;
  z-index: 7;
  height: 144px;
  width: 123px;
  padding: 8px 14px;
  overflow-y: auto;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.notFoundTitle};
  background-color: ${(p) => p.theme.colors.addRecipeDropDownColor};

  @media screen and (min-width: 767px) {
    width: 132px;
    height: 162px;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 12px;
    height: 93px;
    background-color: #e7e5e5;
  }

  ::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: transparent;
    border-radius: 12px;
  }
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};

  :not(:last-child) {
    margin-bottom: 4px;
  }
  @media screen and (min-width: 767px) {
    font-size: 14px;
    line-height: 21px;
  }
`;
