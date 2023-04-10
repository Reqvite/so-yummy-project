import { useDispatch, useSelector } from "react-redux";
import { deleteIngredient } from "redux/shopping/operations";
import { selectShoppingListUpateIsLoading } from "redux/shopping/selectors";
import { useTheme } from "styled-components";
import {
  Button,
  ButtonWrapper,
  CloseIcon,
  Img,
  ImgBox,
  ListItem,
  Measure,
  Title,
  Wrapper,
} from "./ShoppingItem.styled";
import ButtonLoader from "Components/ui/ButtonLoader/ButtonLoader";

const ShoppingItem = ({ id, ttl, thb, measure, recipeId }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const updateShoppingListIsLoading = useSelector(
    selectShoppingListUpateIsLoading
  );
  return (
    <ListItem>
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
            <ButtonLoader width={25} color={theme.colors.accentColor} />
          </Button>
        ) : (
          <Button
            disabled={updateShoppingListIsLoading}
            onClick={() => dispatch(deleteIngredient({ id, recipeId }))}
          >
            <CloseIcon whileHover={{ stroke: theme.colors.accentColor }} />
          </Button>
        )}
      </ButtonWrapper>
    </ListItem>
  );
};

export default ShoppingItem;
