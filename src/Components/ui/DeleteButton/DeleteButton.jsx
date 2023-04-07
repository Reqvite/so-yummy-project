import { useLocation } from "react-router-dom";
import { Button, TrashSvg } from "./DeleteButton.styled";
import { useDispatch } from "react-redux";
import {
  deleteFavoriteRecipe,
  getUserFavouritesPaginationRecipes,
} from "redux/recipes/operations";

const DeleteButton = ({ bgColor, id }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <Button
      $bgColor={bgColor}
      onClick={() => {
        dispatch(deleteFavoriteRecipe(id));
        dispatch(getUserFavouritesPaginationRecipes());
      }}
    >
      <TrashSvg $isMyRecipePage={pathname?.includes("my")} />
    </Button>
  );
};

export default DeleteButton;
