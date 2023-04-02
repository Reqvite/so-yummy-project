import { MainPageTitle, Text } from "./RecipePageHero.styled";
import { Container } from "@mui/material";

const RecipePageHero = () => {
  return (
    <Container>
      <MainPageTitle>Title</MainPageTitle>
      <Text>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </Text>
    </Container>
  );
};

export default RecipePageHero;
