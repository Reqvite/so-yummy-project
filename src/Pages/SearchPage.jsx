import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";
import PageContainer from "Components/common/PageContainer/PageContainer";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

import SearchForm from "Components/ui/SearchForm/SearchForm";

const SearchPage = () => {
  return (
    <main>
      <PageWrapper>
        <ImageBackground />
        <PageContainer>
          <Title>Search</Title>

          <SearchForm />

          {/* <SearchRecipesList query="" /> */}
        </PageContainer>
      </PageWrapper>
    </main>
  );
};

export default SearchPage;
