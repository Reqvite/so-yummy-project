import {
  Box,
  ButtonWrapper,
  Img,
  List,
  ListHeaderText,
  ListItem,
  ListItemHeader,
  Measure,
  Title,
  Wrapper,
} from "./RecipeInngredientsList.styled";
import CustomCheckbox from "../CheckBox/CkeckBox";
import { useSelector } from "react-redux";
import { selectList } from "redux/shopping/selectors";

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const list = useSelector(selectList);
  const ingr = [
    {
      _id: "640c2dd963a319ea671e36e3",
      ttl: "Garlic",
      desc: "A bulbous plant related to onions, chives, and shallots, known for its pungent flavor and aroma. It is used in many cuisines around the world and is a staple ingredient in Mediterranean and Asian cooking.",
      t: "",
      thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/q4gnbvysfhkjv5husoxx.png",
      measure: "1 clove",
    },
    {
      _id: "640c2dd963a319ea671e372c",
      ttl: "Olive Oil",
      desc: "A type of oil made from pressing whole olives, commonly used in cooking and as a salad dressing.",
      t: "",
      thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/hzcfvlja7hmbp84z7f3q.png",
      measure: "1tbsp",
    },
  ];

  return (
    <Box>
      <List>
        <ListItemHeader>
          <ListHeaderText>Product</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Add to list</ListHeaderText>
          </div>
        </ListItemHeader>
        {ingr?.map(({ _id, ttl, desc, thb, measure }) => {
          const isChecked = list?.some((item) => item._id === _id);
          return (
            <ListItem key={_id}>
              <Wrapper>
                <Img alt={ttl} src={thb} width={48} height={48} />
                <Title>{ttl}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                  recipeId={recipeId}
                  ingredientId={_id}
                  isChecked={isChecked}
                />
              </ButtonWrapper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default RecipeInngredientsList;
