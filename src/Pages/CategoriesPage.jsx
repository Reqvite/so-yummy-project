import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategories, getCategoryRecipes } from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";
import { PageWrapper } from "Components/Categories/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import CategoriesList from "Components/Categories/CategoriesList/CategoriesList";
import SearchRecipesList from "Components/Categories/CategoryList/CategoryList";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { recipeCategories, recipeCategoriesIsLoading, error } =
    useSelector(selectCategories);

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
          isLoading={recipeCategoriesIsLoading}
          error={error}
        />
      </PageWrapper>
    </>
  );
};

export default CategoriesPage;
