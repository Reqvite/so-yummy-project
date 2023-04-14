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
  selectUserRecipes,
} from "redux/recipes/selectors";
import { selectUserRecipesPagination } from "redux/recipes/selectors";

const DeleteButton = ({ bgColor, id }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { currentPage } = useSelector(selectPagination);
  const { currentPage: userCurrentPage } = useSelector(
    selectUserRecipesPagination
  );
  const list = useSelector(selectUserFavouritesRecipes);
  const myRecipePage = useSelector(selectUserRecipes);

  const handleDelete = async () => {
    if (pathname.includes("favorite")) {
      const page = list.length === 1 ? currentPage - 1 : currentPage;
      await dispatch(deleteFavoriteRecipe(id));
      await dispatch(getUserFavouritesPaginationRecipes(page));
    }

    if (pathname.includes("my")) {
      const page =
        myRecipePage.length === 1 ? userCurrentPage - 1 : userCurrentPage;
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
