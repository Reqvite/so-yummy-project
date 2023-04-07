import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 343px;
  height: 152px;
  padding: 14px;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.cardBackGround};

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  &:first-child {
    margin-top: 50px;
  }

  ${(p) => p.theme.sizes.tablet} {
    width: 704px;
    height: 288px;
    padding: 28px 24px;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    &:first-child {
      margin-top: 100px;
    }
  }

  ${(p) => p.theme.sizes.desktop} {
    width: 1240px;
    height: 404px;
    padding: 40px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;

export const ImgBox = styled.div`
  display: block;
  height: 100%;
  min-width: 152px;
  background: ${(p) => p.theme.colors.mainBackground};
  border-radius: 8px;
  overflow: hidden;

  @media ${(p) => p.theme.sizes.tablet} {
    display: block;
    min-width: 288px;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    min-width: 404px;
  }
`;

export const Img = styled.img`
  height: 124px;
  width: 124px;
  border-radius: 8px;

  ${(p) => p.theme.sizes.tablet} {
    height: 232px;
    width: 228px;
  }

  ${(p) => p.theme.sizes.desktop} {
    height: 324px;
    width: 318px;
  }
`;

export const Info = styled.div`
  ${(p) => p.theme.sizes.tablet} {
    width: 404px;
  }

  ${(p) => p.theme.sizes.desktop} {
    width: 788px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1;
  font-weight: 500;

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.m};
    font-weight: 500;
    line-height: 1;
  }

  ${(p) => p.theme.sizes.desktop} {
  }
`;

export const Description = styled.p`
  margin-top: 14px;
  line-height: 1.3;
  width: 173px;
  height: 50px;
  font-size: ${(p) => p.theme.fontSizes.xxxs};
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 28px;
    width: 298px;
    height: 73px;
    line-height: 1.28;
    font-size: ${(p) => p.theme.fontSizes.xs};
  }
  ${(p) => p.theme.sizes.desktop} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    line-height: 1.33;
    width: 679px;
    margin-bottom: 14px;
  }
`;

export const Time = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  display: flex;
  align-items: flex-end;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.42;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 28px;
  }

  ${(p) => p.theme.sizes.desktop} {
    margin-top: 67px;
  }
`;

export const MainButton = styled(motion(Link))`
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 87px;
  height: 27px;

  background-color: ${(p) => p.$bgColor};
  border-radius: 24px 44px;
  border: none;

  cursor: pointer;

  ${(p) => p.theme.sizes.tablet} {
    width: 138px;
    height: 45px;
    font-size: 16px;
    line-height: 1.5;
  }
`;
