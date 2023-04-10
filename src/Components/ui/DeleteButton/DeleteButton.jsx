import { useLocation } from "react-router-dom";
import { Button, TrashSvg } from "./DeleteButton.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavoriteRecipe,
  deleteUserRecipe,
  getUserFavouritesPaginationRecipes,
  getUserRecipesPagination,
} from "redux/recipes/operations";
import {
  selectPagination,
  selectUserFavouritesRecipes,
} from "redux/recipes/selectors";

const DeleteButton = ({ bgColor, id }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { currentPage } = useSelector(selectPagination);
  const list = useSelector(selectUserFavouritesRecipes);

  const handleDelete = async () => {
    const page = list.length === 1 ? currentPage - 1 : currentPage;
    if (pathname.includes("favorite")) {
      await dispatch(deleteFavoriteRecipe(id));
      await dispatch(getUserFavouritesPaginationRecipes(page));
    }

    if (pathname.includes("my")) {
      await dispatch(deleteUserRecipe(id));
      await dispatch(getUserRecipesPagination(page));
    }
  };
  return (
    <Button $bgColor={bgColor} onClick={() => handleDelete()}>
      <TrashSvg $isMyRecipePage={pathname?.includes("my")} />
    </Button>
  );
};

export default DeleteButton;
