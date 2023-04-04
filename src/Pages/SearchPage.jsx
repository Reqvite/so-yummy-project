import { PageWrapper } from "Components/CategoriesList/CategoriesList.styled";
import SelectSearch from "Components/SelectSearch/SelectSearch";
import ImageBackground from "Components/common/ImageBackground/ImageBackground";
import { Title } from "Components/ui/MainPageTitle/MainPageTitle.styled";

// import SearchRecipesList from "Components/SearchRecipesList/SearchRecipesList";

import SearchForm from "Components/ui/SearchForm/SearchForm";

const SearchPage = () => {
  return (
    <>
      <PageWrapper>
        <ImageBackground />
        <Title margBottom="50px">Search</Title>
        <SearchForm />
        <SelectSearch />

        {/* <SearchRecipesList query="" /> */}
      </PageWrapper>
    </>
  );
};

export default SearchPage;
