import ListWithPagination from "Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavouritesRecipes } from "redux/recipes/operations";
import { selectUserFavouritesRecipes } from "redux/recipes/selectors";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const userFavoriteList = useSelector(selectUserFavouritesRecipes);

  useEffect(() => {
    dispatch(getUserFavouritesRecipes());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title="Favorites" />
      <ListWithPagination list={userFavoriteList} />
    </>
  );
};

export default FavoritePage;
