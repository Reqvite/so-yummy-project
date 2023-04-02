import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredient, getIngredients } from "redux/shopping/operations";
import { selectList } from "redux/shopping/selectors";
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
import { Link } from "react-router-dom";
import { selectIsLoading } from "redux/auth/selectors";
import { nanoid } from "@reduxjs/toolkit";
import EmptyErrorBox from "Components/ui/EmptyErrorBox/EmptyErrorBox";

// const ingr = [
//   {
//     _id: "640c2dd963a319ea671e36e3",
//     ttl: "Garlic",
//     desc: "A bulbous plant related to onions, chives, and shallots, known for its pungent flavor and aroma. It is used in many cuisines around the world and is a staple ingredient in Mediterranean and Asian cooking.",
//     t: "",
//     thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564798/q4gnbvysfhkjv5husoxx.png",
//     measure: "1 clove",
//   },
//   {
//     _id: "640c2dd963a319ea671e372c",
//     ttl: "Olive Oil",
//     desc: "A type of oil made from pressing whole olives, commonly used in cooking and as a salad dressing.",
//     t: "",
//     thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/hzcfvlja7hmbp84z7f3q.png",
//     measure: "1tbsp",
//   },
// ];

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <Box>
      <Link to={`/recipe/640cd5ac2d9fecf12e8897f2`}>recipe</Link>
      <List>
        <ListItemHeader>
          <ListHeaderText>Product</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Remove</ListHeaderText>
          </div>
        </ListItemHeader>
        <>
          {list?.map(({ _id, ttl, desc, thb, measure }) => (
            <ListItem key={nanoid()}>
              <Wrapper>
                <ImgBox>
                  <Img alt={ttl} src={thb} width={48} height={48} />
                </ImgBox>
                <Title>{ttl}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <Button onClick={() => dispatch(deleteIngredient(_id))}>
                  <CloseIcon />
                </Button>
              </ButtonWrapper>
            </ListItem>
          ))}
        </>
        {!isLoading && list.length === 0 && (
          <EmptyErrorBox text="Your shopping list is empty." />
        )}
      </List>
    </Box>
  );
};

export default IngredientsShoppingList;
