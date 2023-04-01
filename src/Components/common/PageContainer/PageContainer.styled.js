import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
0%{transform: rotate(0deg)};
100%{
    transform: rotate(360deg);
}`;

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;

  padding: 114px 16px 100px 16px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  ${(p) => p.theme.sizes.mobile} {
    min-width: 375px;
  }

  ${(p) => p.theme.sizes.tablet} {
    min-width: 768px;
    padding: 136px 32px 200px 32px;
  }
  ${(p) => p.theme.sizes.desktop} {
    max-width: 1240px;
    padding: 100px 100px 200px 100px;
  }
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

export const ImageBackground = styled.img`
  position: absolute;
  max-width: 187px;
  height: 100px;
  bottom: 0px;
  left: 0px;
  ${(p) => p.theme.sizes.tablet} {
    max-width: 360px;
    height: 200px;
  }
  ${(p) => p.theme.sizes.desktop} {
    max-width: 500px;
    height: 250px;
  }
`;
