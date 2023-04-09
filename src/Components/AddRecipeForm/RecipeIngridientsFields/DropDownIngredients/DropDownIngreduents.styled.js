import styled from "styled-components";

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 4px;
  padding-left: 2px;
  padding-right: 10px;
`;

export const Title = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  ${(p) => p.theme.colors.mainText}
`;

export const List = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  z-index: 20;
  overflow-y: auto;
  border-radius: 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.notFoundTitle};
  background: ${(p) => p.theme.colors.elementsBackground};
  height: 112px;
  padding-top: 16px;
  padding-bottom: 12px;

  @media screen and (min-width: 767px) {
    height: 128px;
    padding: 12px 10px;
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

  /* не принимается стиль цвета фона скрола... нужно решить... */
  ::-webkit-scrollbar-track {
    background-color: ${(p) => p.theme.colors.elementsBackground};
    border-radius: 12px;
  }
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.opacityText};
  opacity: 0.5;
  /* width: 100%; */
  text-align: center;
  :not(:last-child) {
    margin-bottom: 4px;
  }
  @media screen and (min-width: 767px) {
    font-size: 14px;
    line-height: 21px;
  }
`;
