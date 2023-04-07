import styled from "styled-components";

export const BtnDel = styled.button`
  background-color: ${(p) =>
    ({
      black: p.theme.colors.secondaryBackground,
      white: p.theme.colors.accentColor,
    }[p.battonDel])};

  color: ${(p) =>
    ({
      black: p.theme.colors.footerBackground,
      white: p.theme.colors.elementsBackground,
    }[p.battonDel])};

  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  @media ${(p) => p.theme.sizes.tablet}  {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }

  @media ${(p) => p.theme.sizes.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }

  :hover,
  :focus {
    background-color: ${(p) =>
      ({
        black: p.theme.colors.accentColor,
        white: p.theme.colors.darkText,
      }[p.battonDel])};

    color: ${(p)  =>
      ({
        black: p.theme.colors.secondaryText,
        white: p.theme.colors.mainBackground,
      }[p.battonDel])};
  }
`;