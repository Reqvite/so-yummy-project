import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";
import PageContainer from "Components/common/PageContainer/PageContainer";
import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";
import Title from "Components/ui/MainPageTitle/MainPageTitle";

const SearchPage = () => {
  return (
    <main>
      <PageWrapper>
        <ImageBackground />
        <PageContainer>
          <Title>Search</Title>
          <SearchRecipesList />
        </PageContainer>
      </PageWrapper>
    </main>
  );
};

export default SearchPage;
