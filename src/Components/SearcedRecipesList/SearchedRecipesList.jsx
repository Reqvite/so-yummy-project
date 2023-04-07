import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";

import {
  RecipeImg,
  RecipeItem,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipesList,
} from "Components/CategoriesRecipesList/CategoriesRecipesList.styled";
import defaultImg from "../../assets/images/defaultDish.png";
import Alert from "Components/ui/Alert";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

const SearchedRecipesList = ({ param, paramValue }) => {
  console.log(param, paramValue);
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [value, setValue] = useState(paramValue ? paramValue : "");
  const [type, setType] = useState(param ? param : "query");
  let page = 1;

  const { searchByTitle, searchByIngredient, isLoading, error } =
    useSelector(selectCategories);

  useEffect(() => {
    if (result === []) {
      return;
    }
    if (value === "") {
      return;
    }
    console.log(param, paramValue);
    console.log(value);
    console.log(type);
    if (value !== "") {
      if (param === "query") {
        dispatch(getSearchResultByTitle({ type, value, page }));
        // setResult(searchByTitle.results);
        setType(param);
        setValue(paramValue);
      }
      if (param === "ingredient") {
        dispatch(getSearchResultByIngredient({ type, value, page }));
        // setResult(searchByIngredient.recipes);
        setType(param);
        setValue(paramValue);
      }
    }
  }, [dispatch, type, value, param, paramValue, page]);

  useEffect(() => {
    if (result === []) {
      return;
    }
    if (param === "query" && paramValue !== "") {
      setResult(searchByTitle.results);
      setType("query");
    }
    if (param === "ingredient" && paramValue !== "") {
      setResult(searchByIngredient.recipes);
      setType("ingredient");
    }
  }, [param, paramValue]);

  console.log(result);
  return (
    <div>
      {error && <Alert />}
      {isLoading && <CategorySkeleton />}
      {result.length > 0 ? (
        <RecipesList>
          {result.map(({ _id, title, area, thumb }) => (
            <RecipeItem key={_id}>
              <NavLink to={`/recipe/${_id}`}>
                <RecipeImg
                  src={thumb ? thumb : defaultImg}
                  alt={area}
                  loading="lazy"
                />
                <RecipeTitleWrapper>
                  <RecipeTitle>{title}</RecipeTitle>
                </RecipeTitleWrapper>
              </NavLink>
            </RecipeItem>
          ))}
        </RecipesList>
      ) : null}
    </div>
  );
};

export default SearchedRecipesList;
