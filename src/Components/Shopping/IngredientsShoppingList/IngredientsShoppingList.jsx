import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingIngredients } from "redux/shopping/operations";
import { selectIsLoading, selectList } from "redux/shopping/selectors";
import {
  Box,
  List,
  ListHeaderText,
  ListItemHeader,
  RecipeTitle,
} from "./IngredientsShoppingList.styled";
import EmptyErrorBox from "Components/ui/EmptyErrorBox/EmptyErrorBox";
import ShoppingListSkeleton from "Components/ui/Skeletons/ShoppingListSkeleton";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getShoppingIngredients());
  }, [dispatch]);

  return (
    <Box>
      {isLoading ? (
        <ShoppingListSkeleton />
      ) : (
        list.map(({ recipeId, recipeTitle, ingredients }) => (
          <div key={recipeId}>
            <RecipeTitle>{recipeTitle}</RecipeTitle>
            <List>
              <ListItemHeader>
                <ListHeaderText>Product</ListHeaderText>
                <div>
                  <ListHeaderText>Number</ListHeaderText>
                  <ListHeaderText>Remove</ListHeaderText>
                </div>
              </ListItemHeader>
              <>
                {ingredients.map((ingredient) => {
                  return (
                    <ShoppingItem
                      key={ingredient.id}
                      {...ingredient}
                      recipeId={recipeId}
                    />
                  );
                })}
              </>
            </List>
          </div>
        ))
      )}
      {!isLoading && list.length === 0 && (
        <EmptyErrorBox text="This recipe has no ingredients." />
      )}
    </Box>
  );
};

export default IngredientsShoppingList;
