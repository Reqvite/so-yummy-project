import styled from 'styled-components';

export const List = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 40px;

  @media ${(p) => p.theme.sizes.tablet} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media ${(p) => p.theme.sizes.desktop} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;
export const ListText = styled.h3`
  font-size: 20px;

  @media ${(p) => p.theme.sizes.tablet} {
    font-size: 24px;
  }
`

export const ButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.footerText};
  font-size: 14px;
  text-align: center;

  :hover,
  :focus {
    background: #22252a;
    color: ${(p) => p.theme.colors.footerText};
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
`;

export const LoaderBox = styled.div`
  position: absolute;
  margin:20 auto;
  width: 36px;
  height: 36px;
  left: 150px;
  top: -65px;

  @media ${(p) => p.theme.sizes.tablet} {
    width: 50px;
    height: 50px;
    left: 200px;
    top: -70px;
  }

  @media ${(p) => p.theme.sizes.desktop} {
    width: 80px;
    height: 80px;
    left: 280px;
    top: -75px;
  }
`;