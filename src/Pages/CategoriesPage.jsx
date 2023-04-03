import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getCategories, getCategoryRecipes } from "redux/categories/operations";
import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import PageContainer from "Components/common/PageContainer/PageContainer";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";
import CategoriesList from "Components/CategoriesList/CategoriesList";
import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    console.log(categoryName);
    dispatch(getCategories());
    dispatch(getCategoryRecipes(categoryName));
  }, [dispatch, categoryName]);

  return (
    <main>
      <PageWrapper>
        <ImageBackground />
        <PageContainer>
          <Title>Categories</Title>
          <CategoriesList />
          <SearchRecipesList />
        </PageContainer>
      </PageWrapper>
    </main>
  );
};

export default CategoriesPage;
