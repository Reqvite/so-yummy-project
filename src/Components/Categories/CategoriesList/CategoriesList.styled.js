import styled from "styled-components";
import Box from "@mui/material/Box";
import { Tabs } from "@mui/material";

export const PageWrapper = styled.div`
  position: relative;
`;

export const StyledCategory = styled(Tabs)`
  cursor: pointer;
  color: ${(p) => p.theme.colors.categoryText};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1;
  border-bottom: 1px solid ${(p) => p.theme.colors.categoryText};
  background-color: ${(p) => p.theme.colors.mainBackground};

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
  }
`;

export const StyledCategoryList = styled(Box)`
  margin-top: 50px;
  margin-bottom: 50px;
`;
