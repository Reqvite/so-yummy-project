import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIngredient,
  getShoppingIngredients,
} from "redux/shopping/operations";
import {
  selectIsLoading,
  selectList,
  selectShoppingListUpateIsLoading,
} from "redux/shopping/selectors";
import {
  Box,
  Button,
  ButtonWrapper,
  CloseIcon,
  Img,
  ImgBox,
  List,
  ListHeaderText,
  ListItem,
  ListItemHeader,
  Measure,
  RecipeTitle,
  Title,
  Wrapper,
} from "./IngredientsShoppingList.styled";
import EmptyErrorBox from "Components/ui/EmptyErrorBox/EmptyErrorBox";
import { useTheme } from "styled-components";
import ShoppingListSkeleton from "Components/ui/Skeletons/ShoppingListSkeleton";
import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";

const IngredientsShoppingList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const isLoading = useSelector(selectIsLoading);
  const updateShoppingListIsLoading = useSelector(
    selectShoppingListUpateIsLoading
  );

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
                {ingredients.map(({ id, measure, ttl, thb }) => {
                  return (
                    <ListItem key={id}>
                      <Wrapper>
                        <ImgBox>
                          <Img alt={ttl} src={thb} width={48} height={48} />
                        </ImgBox>
                        <Title>{ttl}</Title>
                      </Wrapper>
                      <ButtonWrapper>
                        <Measure>{measure}</Measure>
                        {updateShoppingListIsLoading ? (
                          <Button>
                            <ButtonLoader
                              width={25}
                              color={theme.colors.accentColor}
                            />
                          </Button>
                        ) : (
                          <Button
                            disabled={updateShoppingListIsLoading}
                            onClick={() =>
                              dispatch(deleteIngredient({ id, recipeId }))
                            }
                          >
                            <CloseIcon
                              whileHover={{ stroke: theme.colors.accentColor }}
                            />
                          </Button>
                        )}
                      </ButtonWrapper>
                    </ListItem>
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
