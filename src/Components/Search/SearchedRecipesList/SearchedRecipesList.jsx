import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Alert from "Components/ui/Alert";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";

import RecipesList from "Components/ui/RecipesList/RecipesList";
import SearchPagination from "Components/Search/SearchPagination/SearchPagination";
import {
  DefaultImg,
  DefaultImgWrapper,
  EmptyText,
} from "./SearchedRecipesList.styled";
import defaultImg from "../../../assets/images/empty-img.png";

const SearchedRecipesList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState([]);
  const {
    searchByTitle,
    searchByIngredient,
    currentPageTitle,
    currentPageIngredient,
    isLoading,
    error,
  } = useSelector(selectCategories);

  const valueQuery = searchParams.get("query");
  const valueIngredient = searchParams.get("ingredient");

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const limit = isDesktop ? 12 : 6;

  useEffect(() => {
    if (result === []) {
      return;
    } else {
      if (valueQuery !== null && valueQuery !== undefined) {
        setResult(searchByTitle);
      }
      if (valueIngredient !== null && valueIngredient !== undefined) {
        setResult(searchByIngredient);
      }
    }
  }, [
    result,
    searchByIngredient,
    searchByTitle,
    valueIngredient,
    valueQuery,
    currentPageIngredient,
    currentPageTitle,
  ]);

  useEffect(() => {
    if (
      valueQuery === null &&
      valueIngredient !== undefined &&
      valueIngredient !== ""
    ) {
      const type = "ingredient";
      const value = searchParams.get("ingredient");
      const page = 1;

      dispatch(getSearchResultByIngredient({ type, value, page, limit }));
    }
    if (
      valueIngredient === null &&
      valueQuery !== undefined &&
      valueQuery !== ""
    ) {
      const type = "query";
      const value = searchParams.get("query");
      const page = 1;
      dispatch(getSearchResultByTitle({ type, value, page, limit }));
    }
  }, [
    dispatch,
    setSearchParams,
    limit,
    valueIngredient,
    valueQuery,
    searchParams,
    isDesktop,
  ]);

  return (
    <>
      {error && <Alert />}
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <>
          {result.length > 0 ? (
            <>
              <RecipesList array={result} />
              {!isDesktop && (
                <SearchPagination
                  query={valueQuery}
                  ingredient={valueIngredient}
                  limit={limit}
                />
              )}
            </>
          ) : (
            <DefaultImgWrapper>
              <DefaultImg src={defaultImg} alt="ingredients" />
              <EmptyText>Try looking for something else...</EmptyText>
            </DefaultImgWrapper>
          )}
        </>
      )}
    </>
  );
};

export default SearchedRecipesList;
