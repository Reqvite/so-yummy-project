import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteIngredient, getIngredients } from "redux/shopping/operations";
// import { selectIsLoading, selectList } from "redux/shopping/selectors";
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

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  // const list = useSelector(selectList);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getIngredients());
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
        {ingr?.map(({ _id, ttl, desc, thb, measure }) => (
          <ListItem key={_id}>
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
      </List>
    </Box>
  );
};

export default IngredientsShoppingList;