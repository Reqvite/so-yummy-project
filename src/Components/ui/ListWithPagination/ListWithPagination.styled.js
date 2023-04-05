import styled from "styled-components";

export const ListItem = styled.li`
display: flex;
  width: 100%;
  max-width: 1240px
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
    padding: 28px 24px;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    &:first-child {
      margin-top: 100px;
    }
  }

  ${(p) => p.theme.sizes.desktop} {
    padding: 40px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }
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

export const TopBox = styled.div`
  margin-left: 14px;
  ${(p) => p.theme.sizes.tablet} {
    margin-left: 24px;
  }

  ${(p) => p.theme.sizes.desktop} {
    margin-left: 40px;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin: 0;
  vertical-align: top;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const TrashBox = styled.div`
  /* @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    height: 38px;
    width: 38px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    height: 44px;
    width: 44px;
  } */
`;

export const DishDescriptionFirst = styled.p`
  margin: 0;
  text-align: left;
  line-height: 1.3;
  width: 173px;
  height: 57px;
  font-size: 8px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 298px;
    height: 73px;
    margin-bottom: 58px;
    overflow: hidden;
    line-height: 1.28;
    font-size: 14px;
    color: var(--secondaryTextColorForText);
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    display: block;
    width: 679px;
    margin-bottom: 14px;
  }
`;

// export const DishDescription = styled.p`
//   margin: 0;
//   text-align: left;
//   line-height: 1.3;

//   &:first-of-type {
//     width: 173px;
//     height: 57px;
//     font-size: 8px;
//     line-height: 1.25;
//   }

//   &:last-of-type {
//     display: none;

//     @media screen and (min-width: 768px) {
//       display: block;
//       font-size: 14px;
//       line-height: 1.28;
//       overflow: hidden;
//       width: 298px;
//       height: 73px;
//       margin-bottom: 58px;
//       color: var(--secondaryTextColorForText);
//     }

//     @media screen and (min-width: 1440px) {
//       display: block;
//       font-size: 18px;
//       line-height: 1.33;
//       display: block;
//       width: 679px;
//       margin-bottom: 14px;
//     }
//   }
// `;

export const BottomBox = styled.div``;

export const TextTime = styled.p`
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

export const DishButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 45px;
    display: block;
    line-height: 1.5;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 160px;
    height: 54px;
    display: block;
    font-size: 16px;
  }
`;
