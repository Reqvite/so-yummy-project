import styled from 'styled-components';

export const CardItem = styled.li`
  list-style-type: none;
  display: flex;
  width: auto;
  height: 152px;
  background: ${(p) => p.theme.colors.elementsBackground};
  border-radius: 8px;
  margin-bottom: 18px;
  padding: 14px;

  :last-child {
    margin-bottom: 0;
  }

  @media ${(p) => p.theme.sizes.tablet} {
    height: 288px;
    margin-bottom: 40px;
    padding: 28px;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    height: 404px;
    margin-bottom: 50px;
    padding: 40px;
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

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Info = styled.div`
  position: relative;
  width: 100%;

  padding-left: 14px;

  @media ${(p) => p.theme.sizes.tablet} {
    padding-left: 24px;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    padding-left: 54px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.cardsText};
  padding-right: 24px;
  margin-bottom: 14px;

  @media ${(p) => p.theme.sizes.tablet} {
    font-size: 24px;
    line-height: 24px;
    padding-right: 38px;
    margin-bottom: 28px;
  }

  @media ${(p) => p.theme.sizes.desktop} {
    padding-right: 44px;
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.mainText};

  @media ${(p) => p.theme.sizes.tablet} {
    font-size: 14px;
    line-height: 129%;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    font-size: 18px;
    line-height: 133%;
  }
`;

export const Time = styled.div`
  position: absolute;
  left: 14px;
  bottom: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.24px;
  color: ${(p) => p.theme.colors.cardsText};

  @media ${(p) => p.theme.sizes.tablet} {
    left: 24px;
    font-size: 14px;
    line-height: 143%;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    left: 54px;
  }
`;
export const ButtonDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  :hover,
  :focus {
    scale: 1.1;
  }

  @media ${(p) => p.theme.sizes.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }
`
export const ButtonRecipe = styled.button`
  position: absolute;
  bottom: -8px;
  right: 0;

  @media ${(p) => p.theme.sizes.tablet} {
    bottom: -20px;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    bottom: -30px;
  }
`;