import ListWithPagination from "Components/ui/ListWithPagination/ListWithPagination";
import MainPageTitle from "Components/ui/MainPageTitle/MainPageTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "redux/auth/selectors";
import { getUserRecipesPagination } from "redux/recipes/operations";
import {
  selectUserRecipes,
  selectUserRecipesIsLoading,
  selectUserRecipesPagination,
} from "redux/recipes/selectors";
import styled from "styled-components";

const MyRecipePage = () => {
  const dispatch = useDispatch();
  const userList = useSelector(selectUserRecipes);
  const isLoading = useSelector(selectUserRecipesIsLoading);
  const isLoadingOperation = useSelector(selectIsLoading);
  const { currentPage, totalPages } = useSelector(selectUserRecipesPagination);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      dispatch(getUserRecipesPagination(currentPage));
      setIsReady(true);
    }
  }, [dispatch, currentPage, isReady]);

  return (
    <Box>
      <MainPageTitle title="My recipes" />
      <ListWithPagination
        list={userList}
        isLoading={isLoading}
        isLoadingOperation={isLoadingOperation}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Box>
  );
};

export default MyRecipePage;

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
