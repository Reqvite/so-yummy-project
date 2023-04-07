import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategories, getCategoryRecipes } from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import CategoriesList from "Components/CategoriesList/CategoriesList";
import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { recipeCategories, isLoading, error } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCategoryRecipes(categoryName));
  }, [dispatch, categoryName]);

  return (
    <>
      <PageWrapper>
        <Title>Categories</Title>
        <CategoriesList />
        <SearchRecipesList
          array={recipeCategories}
          isLoading={isLoading}
          error={error}
        />
      </PageWrapper>
    </>
  );
};

export default CategoriesPage;
