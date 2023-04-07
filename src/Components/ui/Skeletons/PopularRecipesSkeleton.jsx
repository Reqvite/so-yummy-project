import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as ProductSvg } from "../../../assets/svg/skeletonProductImage/skeletonImg.svg";
import { Item } from "../PopularList/PopularList.styled";

const PopularRecipesSkeleton = () => {
  return (
    <ul>
      <Item>
        <AnimatedSkeleton />
      </Item>
      <Item>
        <AnimatedSkeleton />
      </Item>
      <Item>
        <AnimatedSkeleton />
      </Item>
      <Item>
        <AnimatedSkeleton />
      </Item>
    </ul>
  );
};

export default PopularRecipesSkeleton;

const SkeletonSvg = styled(motion(ProductSvg))`
  width: 104px;
  height: 85px;
  border-radius: 8px;
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
