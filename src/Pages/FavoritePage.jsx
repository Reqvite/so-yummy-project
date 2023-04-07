import ListWithPagination from "Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavouritesRecipes } from "redux/recipes/operations";
import { selectUserFavouritesRecipes } from "redux/recipes/selectors";
import styled from "styled-components";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const userFavoriteList = useSelector(selectUserFavouritesRecipes);

  useEffect(() => {
    dispatch(getUserFavouritesRecipes());
  }, [dispatch]);

  return (
    <Box>
      <MainPageTitle title="Favorites" />
      <ListWithPagination list={userFavoriteList} />
    </Box>
  );
};

export default FavoritePage;

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 343px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;
