import * as React from "react";
import { ReactComponent as ProductSvg } from "../../../assets/svg/skeletonProductImage/skeletonImg.svg";
import { ListItem } from "Components/Recipe/RecipeInngredientsList/RecipeInngredientsList.styled";
import styled from "styled-components";
import { motion } from "framer-motion";

const RecipeSkeleton = () => {
  return (
    <>
      <ListItem>
        <AnimatedSkeleton />
      </ListItem>
      <ListItem>
        <AnimatedSkeleton />
      </ListItem>
      <ListItem>
        <AnimatedSkeleton />
      </ListItem>
    </>
  );
};

const SkeletonSvg = styled(motion(ProductSvg))`
  width: 57px;
  height: 57px;

  ${(p) => p.theme.sizes.tablet} {
    width: 112px;
    height: 112px;
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
export default RecipeSkeleton;
