import { PageWrapper } from "Components/Categories/CategoriesList/CategoriesList.styled";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";
import CategoriesList from "Components/Categories/CategoriesList/CategoriesList";
import SearchRecipesList from "Components/Categories/CategoryList/CategoryList";

const CategoriesPage = () => {
  return (
    <>
      <PageWrapper>
        <Title>Categories</Title>
        <CategoriesList />
        <SearchRecipesList />
      </PageWrapper>
    </>
  );
};

export default CategoriesPage;
