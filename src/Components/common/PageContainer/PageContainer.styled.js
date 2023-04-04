import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
0%{transform: rotate(0deg)};
100%{
    transform: rotate(360deg);
}`;

export const MainContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding: 114px 16px 100px 16px;
  background-color: ${(p) => p.theme.colors.mainBackground};

  ${(p) => p.theme.sizes.tablet} {
    padding: 136px 32px 200px 32px;
  }
  ${(p) => p.theme.sizes.desktop} {
    padding: 164px 100px 100px 100px;
  }
  max-width: 1440px;
`;

export const RotateBlock = styled.div`
  position: absolute;
  width: ${(p) => p.width | 6}px;
  height: ${(p) => p.height || 6}px;
  top: ${(p) => p.top || 76}px;
  left: ${(p) => p.left || 50}px;

  border-radius: 3px;
  background: ${(p) => p.background || p.theme.colors.accentColor};

  animation: ${rotateAnimation} 1000ms infinite linear;
  ${(p) => p.theme.sizes.mobile} {
    width: ${(p) => p.width || 8}px;
    height: ${(p) => p.height || 8}px;
    top: ${(p) => p.top || 76}px;
    left: ${(p) => p.left || 120}px;
  }

  ${(p) => p.theme.sizes.tablet} {
    width: ${(p) => p.width || 14}px;
    height: ${(p) => p.height || 14}px;
    top: ${(p) => p.top || 85};
    left: ${(p) => p.left || 219}px;
  }

  ${(p) => p.theme.sizes.desktop} {
    top: ${(p) => p.top || 52};
    left: ${(p) => p.left || 328}px;
  } ;
`;
