import * as React from "react";
import { ReactComponent as ProductSvg } from "../../../assets/svg/skeletonProductImage/skeletonImg.svg";
import styled from "styled-components";
import {
  ImgBox,
  ListItem,
} from "Components/IngredientsShoppingList/IngredientsShoppingList.styled";
import { motion } from "framer-motion";

const ShoppingListSkeleton = () => {
  return (
    <>
      <ListItem>
        <ImgBox>
          <AnimatedSkeleton />
        </ImgBox>
      </ListItem>
      <ListItem>
        <ImgBox>
          <AnimatedSkeleton />
        </ImgBox>
      </ListItem>
      <ListItem>
        <ImgBox>
          <AnimatedSkeleton />
        </ImgBox>
      </ListItem>
    </>
  );
};

const SkeletonSvg = styled(motion(ProductSvg))`
  width: 48px;
  height: 48px;

  ${(p) => p.theme.sizes.tablet} {
    width: 81px;
    height: 81px;
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

export default ShoppingListSkeleton;
