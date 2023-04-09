import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "Components/ui/Alert";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

import defaultImg from "../../assets/images/empty-img.png";
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

const SearchedRecipesList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchByTitle, searchByIngredient, isLoading, error } =
    useSelector(selectCategories);
  // console.log(searchParams);
  const valueQuery = searchParams.get("query");
  const valueIngredient = searchParams.get("ingredient");

  // console.log(valueQuery);
  // console.log(valueIngredient);

  const [result, setResult] = useState([]);

  console.log();
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

  console.log(result);

  useEffect(() => {
    try {
      if (valueQuery === null && valueIngredient !== undefined) {
        const type = "ingredient";
        const value = searchParams.get("ingredient");
        const page = 1;
        console.log(type);
        console.log(value);
        console.log(page);

        dispatch(getSearchResultByIngredient({ type, value, page }));
      }
      if (valueIngredient === null && valueQuery !== undefined) {
        const type = "query";
        const value = searchParams.get("query");
        const page = 1;
        console.log(value);

        dispatch(getSearchResultByTitle({ type, value, page }));
      }
    } catch (err) {
      console.lod(err);
      toast.warning(err);
    }
  }, [searchParams]);

  return (
    <>
      {error && <Alert />}
      {isLoading ? (
        <CategorySkeleton />
      ) : (
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
      )}
    </>
  );
};

export default SearchedRecipesList;
