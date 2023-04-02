import {
  Box,
  Button,
  ClockSvg,
  ImgBox,
  MainPageTitle,
  Text,
  Time,
} from "./RecipePageHero.styled";

const RecipePageHero = ({ title, description, time }) => {
  return (
    <>
      <ImgBox />
      <MainPageTitle>{title}</MainPageTitle>
      <Text>{description}</Text>
      <Button>Add to favorite recipes</Button>
      <Box>
        <ClockSvg />
        <Time>{time} min</Time>
      </Box>
    </>
  );
};

export default RecipePageHero;
