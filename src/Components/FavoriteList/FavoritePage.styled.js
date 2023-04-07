import styled from 'styled-components';

export const Page = styled.section`
  padding-top: 62px;
  padding-left: 16px;
  padding-right: 16px;
  width: 343px;
  margin: 0 auto;
  background: ${(p) => p.theme.colors.modes.white.background};

  @media ${(p) => p.theme.sizes.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    width: 704px;
  }

  @media ${(p) => p.theme.sizes.desktop} {
    padding-left: 100px;
    padding-right: 100px;
    min-width: 1240px;
  }
`;