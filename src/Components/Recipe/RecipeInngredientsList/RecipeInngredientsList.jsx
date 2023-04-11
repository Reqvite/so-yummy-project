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
        {ingredients?.map(({ _id, ttl, thb, measure }) => {
          const recipe = list.find((recipe) => recipe.recipeId === recipeId);
          const isChecked = recipe?.ingredients?.some(
            (item) => item.id === _id
          );
          if (!_id) {
            return null;
          }
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
