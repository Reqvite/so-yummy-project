import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategoryRecipes } from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";

import Alert from "Components/ui/Alert";
import RecipesList from "Components/ui/RecipesList/RecipesList";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";
import CategoryPagination from "../Pagination/Pagination";

const SearchRecipesList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { recipeCategories, recipeCategoriesIsLoading, error } =
    useSelector(selectCategories);

  useEffect(() => {
    const page = 1;
    dispatch(getCategoryRecipes({ categoryName, page }));
  }, [dispatch, categoryName]);

  return (
    <div>
      {error && <Alert />}
      {recipeCategoriesIsLoading ? (
        <CategorySkeleton />
      ) : (
        <>
          {recipeCategories.length > 0 && (
            <>
              <RecipesList array={recipeCategories} />
              <CategoryPagination />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SearchRecipesList;
