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
import { useDispatch, useSelector } from "react-redux";
import { selectList } from "redux/shopping/selectors";
import { selectIngredients } from "redux/ingredients/selectors";
import { useEffect, useState } from "react";
import { getShoppingIngredients } from "redux/shopping/operations";

const RecipeInngredientsList = ({ ingredients, recipeId }) => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const listOfIngredients = useSelector(selectIngredients);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const updatedRecipeList = ingredients?.map(({ id, measure }) => {
      const ingredient = listOfIngredients?.find((ingr) => ingr._id === id);
      return { ...ingredient, measure };
    });
    dispatch(getShoppingIngredients());
    setRecipeList(updatedRecipeList);
  }, [ingredients, listOfIngredients, dispatch]);

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
        {recipeList?.map(({ _id, ttl, desc, thb, measure }) => {
          const isChecked = list?.some((item) => item._id === _id);
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
