import styled from "styled-components";

export const Container = styled.div`
  ${(p) => p.theme.flexCentered};
  margin-top: 40px;

  ${(p) => p.theme.sizes.tablet} {
    margin-top: 50px;
  }
`;
