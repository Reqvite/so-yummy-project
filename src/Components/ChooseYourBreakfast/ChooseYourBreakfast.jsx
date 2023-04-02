import Container from "../ui/Container/ContainerStyled";
import {
  WrapperBreakfast,
  Title,
  // AccentTitle,
  Text,
  BgLeafLeft,
  Background,
  WrapperBackground,
  WrapperText,
  NavLink,
  ArrowSvg,
  RecipeText,
} from "./ChooseYourBreakfast.styled.jsx";

const ChooseYourBreakfast = () => {
  return (
    <div style={{ position: "relative" }}>
      <Container>
        <WrapperBreakfast>
          <BgLeafLeft />
          <Title>
            <span>So</span>Yummy
          </Title>
          <Text>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </Text>
          <WrapperBackground>
            <WrapperText>
              <RecipeText>
                <span>Delicious and healthy</span> way to enjoy a variety of
                fresh ingredients in one satisfying meal
              </RecipeText>
              <NavLink to={"/categories"}>
                See recipes
                <ArrowSvg />
              </NavLink>
            </WrapperText>
          </WrapperBackground>
          <Background />
        </WrapperBreakfast>
      </Container>
    </div>
  );
};

export default ChooseYourBreakfast;
