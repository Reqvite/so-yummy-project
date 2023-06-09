import { ReactComponent as ProductSvg } from "../../../assets/svg/skeletonProductImage/skeletonImg.svg";

import styled from "styled-components";

import { motion } from "framer-motion";
import {
  CategoriesWrapper,
  RecipeItem,
  RecipesList,
} from "Components/Main/PreviewCategories/PreviewCategories.styled";

const PreviewCategoriesSkeleton = () => {
  return (
    <CategoriesWrapper>
      <RecipesList>
        <RecipeItem>
          <AnimatedSkeleton />
        </RecipeItem>
        <RecipeItem>
          <AnimatedSkeleton />
        </RecipeItem>
        <RecipeItem>
          <AnimatedSkeleton />
        </RecipeItem>
        <RecipeItem>
          <AnimatedSkeleton />
        </RecipeItem>
      </RecipesList>
    </CategoriesWrapper>
  );
};

const SkeletonSvg = styled(motion(ProductSvg))`
  height: 323px;
  border-radius: 8px;

  ${(p) => p.theme.sizes.mobile} {
    width: 343px;
  }

  ${(p) => p.theme.sizes.tablet} {
    width: 336px;
  }

  ${(p) => p.theme.sizes.desktop} {
    width: 300px;
  }
`;

const AnimatedSkeleton = () => (
  <SkeletonSvg
    initial={{ opacity: 0, pathLength: 0 }}
    animate={{ opacity: 1, pathLength: 1 }}
    transition={{
      duration: 0.7,
      ease: "easeInOut",
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);
export default PreviewCategoriesSkeleton;
