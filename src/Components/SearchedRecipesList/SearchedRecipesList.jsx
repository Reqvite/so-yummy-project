import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "Components/ui/Alert";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

import {
  RecipeImg,
  RecipeItem,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipesList,
} from "Components/CategoryList/CategoryList.styled";

import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";
import {
  DefaultImg,
  DefaultImgWrapper,
  EmptyText,
} from "./SearchedRecipesList.styled";
import defaultImg from "../../assets/images/empty-img.png";

const SearchedRecipesList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchByTitle, searchByIngredient, isLoading, error } =
    useSelector(selectCategories);

  const valueQuery = searchParams.get("query");
  const valueIngredient = searchParams.get("ingredient");

  const [result, setResult] = useState([]);

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
    searchParams,
    result,
    searchByIngredient,
    searchByTitle,
    valueIngredient,
    valueQuery,
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

      dispatch(getSearchResultByIngredient({ type, value, page }));
    }
    if (
      valueIngredient === null &&
      valueQuery !== undefined &&
      valueQuery !== ""
    ) {
      const type = "query";
      const value = searchParams.get("query");
      const page = 1;

      dispatch(getSearchResultByTitle({ type, value, page }));
    }
  }, [dispatch, setSearchParams, valueIngredient, valueQuery, searchParams]);

  return (
    <>
      {error && <Alert />}
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <>
          {result.length > 0 ? (
            <RecipesList>
              {result.map(({ _id, title, area, thumb }) => (
                <RecipeItem key={_id}>
                  <Link to={`/recipe/${_id}`}>
                    <RecipeImg
                      src={thumb ? thumb : defaultImg}
                      alt={area}
                      loading="lazy"
                    />
                    <RecipeTitleWrapper>
                      <RecipeTitle>{title}</RecipeTitle>
                    </RecipeTitleWrapper>
                  </Link>
                </RecipeItem>
              ))}
            </RecipesList>
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
