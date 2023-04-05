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
      <List>
        <ListItemHeader>
          <ListHeaderText>Product</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Remove</ListHeaderText>
          </div>
        </ListItemHeader>
        <>
          {isLoading ? (
            <ShoppingListSkeleton />
          ) : (
            list?.map(({ _id, ttl, desc, thb, measure }) => {
              if (!_id) {
                return null;
              }
              return (
                <ListItem key={_id}>
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
                        onClick={() => dispatch(deleteIngredient(_id))}
                      >
                        <CloseIcon
                          whileHover={{ stroke: theme.colors.accentColor }}
                        />
                      </Button>
                    )}
                  </ButtonWrapper>
                </ListItem>
              );
            })
          )}
        </>
        {!isLoading && list.length === 0 && (
          <EmptyErrorBox text="Your shopping list is empty." />
        )}
      </List>
    </Box>
  );
};

export default IngredientsShoppingList;
