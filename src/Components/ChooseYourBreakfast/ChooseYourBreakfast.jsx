import {
  PositionWrapper,
  Title,
  Text,
  BgLeafLeft,
  BgLeafRightMobile,
  Background,
  WrapperBackground,
  WrapperText,
  NavLink,
  ArrowSvg,
  RecipeText,
  Flex,
  FlexContainer,
  Arrow,
} from "./ChooseYourBreakfast.styled.jsx";

const ChooseYourBreakfast = () => {
  return (
    <>
      <BgLeafLeft />
      <FlexContainer>
        <Flex>
          <Title>
            <span>So</span>Yummy
          </Title>
          <Text>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </Text>
        </Flex>
        <WrapperBackground>
          <WrapperText>
            <RecipeText>
              <span>Delicious and healthy</span> way to enjoy a variety of fresh
              ingredients in one satisfying meal
            </RecipeText>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <NavLink to={"/categories"}>
                See recipes
                <ArrowSvg />
              </NavLink>
            </div>
          </WrapperText>
          <Arrow />
        </WrapperBackground>
      </FlexContainer>
      <Background />
      <BgLeafRightMobile />
    </>
  );
};

export default ChooseYourBreakfast;
