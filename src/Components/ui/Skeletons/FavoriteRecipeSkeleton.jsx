import { motion } from "framer-motion";
import { ReactComponent as ProductSvg } from "../../../assets/svg/skeletonProductImage/skeletonImg.svg";
import styled from "styled-components";
import { CardItem } from "../RecipeItem/RecipeItem.styled";

const FavoriteRecipeSkeleton = () => {
  return (
    <ul>
      <CardItem>
        <AnimatedSkeleton />
      </CardItem>
      <CardItem>
        <AnimatedSkeleton />
      </CardItem>
      <CardItem>
        <AnimatedSkeleton />
      </CardItem>
    </ul>
  );
};

export default FavoriteRecipeSkeleton;

const SkeletonSvg = styled(motion(ProductSvg))`
  height: 124px;
  width: 124px;

  ${(p) => p.theme.sizes.tablet} {
    height: 232px;
    width: 228px;
  }

  ${(p) => p.theme.sizes.desktop} {
    height: 324px;
    width: 318px;
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
